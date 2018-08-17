const User = require('mongoose').model('User');
const Role = require('mongoose').model('Role');
const jwt = require('jsonwebtoken');
const encryption = require('./../utilities/encryption');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },

    registerPost: (req, res) => {
        let registerArgs = req.body;

        User.findOne({email: registerArgs.email}).then(user => {
            let errorMsg = '';
            if (user) {
                errorMsg = 'User with the same username exists!';
            }

            if (errorMsg) {
                registerArgs.error = errorMsg;
                res.render('user/register', registerArgs)
            } else {
                let salt = encryption.generateSalt();
                let passwordHash = encryption.hashPassword(registerArgs.password, salt);

                let userObject = {
                    email: registerArgs.email,
                    passwordHash: passwordHash,
                    fullName: registerArgs.fullName,
                    salt: salt
                };

                let roles = [];
                Role.findOne({name: 'User'}).then(role => {
                    roles.push(role.id);

                    userObject.roles = roles;
                    User.create(userObject).then(user => {
                        role.users.push(user);
                        role.save(err => {
                            if (err) {
                                registerArgs.error = err.message;
                                res.render('user/register', registerArgs);
                            }
                            else {
                                req.logIn(user, (err) => {
                                    if (err) {
                                        registerArgs.error = err.message;
                                        res.render('user/register', registerArgs);
                                        return;
                                    }
                                    return res.status(200).json({
                                        success: true
                                        // isAuth:true,
                                        // isUserAuthorized: isAdmin,
                                        // user: req.user.email
                                    })
                                   // res.redirect('/');
                                })
                            }
                        });
                    });
                });
            }
        })
    },

    loginGet: (req, res) => {
        res.render('user/login');
    },
    userDetailsGet: (req, res) => {
        if (!req.user) {
            res.status(200).json({
                success: false,
                isAuth:false,
                isUserAuthorized: false,
                user: ''
            })
        }
        req.user.isInRole('Admin').then(isAdmin => {
            return res.status(200).json({
                success: true,
                isAuth:true,
                isUserAuthorized: isAdmin,
                user: req.user.email
            })
        });
    },
    loginPost: (req, res) => {
        let loginArgs = req.body;
        User.findOne({email: loginArgs.email}).then(user => {
            if (!user || !user.authenticate(loginArgs.password)) {
                let errorMsg = 'Either username or password is invalid!';
                loginArgs.error = errorMsg;
              //  res.render('user/login', loginArgs);
                return res.status(401).json({
                    success: false,
                    message: errorMsg
                })
            }

            req.logIn(user, (err) => {
                if (err) {
                    res.render('/user/login', {error: err.message});
                    const error = new Error('Incorrect email or password')
                    error.name = 'IncorrectCredentialsError'
                    return done(error)
                }

                let returnUrl = '/';
                if (req.session.returnUrl) {
                    returnUrl = req.session.returnUrl;
                    delete req.session.returnUrl;
                }
                const payload = {
                    sub: user._id
                }

                // create a token string
                const token = jwt.sign(payload, 's0m3 r4nd0m str1ng')
                // const data = {
                //     email: user.email
                // }

                // return done(null, token, data)
                req.user.isInRole('Admin').then(isAdmin => {
                    // let isUserAuthorized = isAdmin || req.user.isAuthor(article);
                    return res.status(200).json({
                        success: true,
                        message: 'You have successfully logged in!',
                        token: token,
                        isAuth:true,
                        isUserAuthorized: isAdmin,
                        user: user.email
                    })
                });

                // res.redirect(returnUrl);
            })
        })
    },

    logout: (req, res) => {
        req.logOut();
        res.redirect('/');
    }
};


// const jwt = require('jsonwebtoken')
// const usersData = require('../data/users')
// const PassportLocalStrategy = require('passport-local').Strategy
//
// module.exports = new PassportLocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     session: false,
//     passReqToCallback: true
// }, (req, email, password, done) => {
//     const user = {
//         email: email.trim(),
//         password: password.trim()
//     }
//
//     let savedUser = usersData.findByEmail(email)
//
//     if (!savedUser) {
//         const error = new Error('Incorrect email or password')
//         error.name = 'IncorrectCredentialsError'
//
//         return done(error)
//     }
//
//     const isMatch = savedUser.password === user.password
//
//     if (!isMatch) {
//         const error = new Error('Incorrect email or password')
//         error.name = 'IncorrectCredentialsError'
//
//         return done(error)
//     }
//
//     const payload = {
//         sub: savedUser.id
//     }
//
//     // create a token string
//     const token = jwt.sign(payload, 's0m3 r4nd0m str1ng')
//     const data = {
//         name: savedUser.name
//     }
//
//     return done(null, token, data)
// })
