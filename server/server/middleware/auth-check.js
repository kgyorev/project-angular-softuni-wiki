const jwt = require('jsonwebtoken')
//const usersData = require('../data/users')
const User = require('mongoose').model('User');
const Role = require('mongoose').model('Role');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end()
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1]

    // decode the token using a secret key-phrase
    return jwt.verify(token, 's0m3 r4nd0m str1ng', (err, decoded) => {
        // the 401 code is for unauthorized status
        if (err) {
            return res.status(401).json({
                success: false,
                isAuth:false,
                isUserAuthorized: false,
                user: ''
            }).end()
        }

        const userId = decoded.sub;

        User.findOne({_id: userId}).then(user => {

            // const user = usersData.findById(userId)
            if (!user) {
                return res.status(401).end()
            }

            req.user = user;

            return next()
        })
    })
}
