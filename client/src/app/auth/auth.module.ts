import {FormsModule, NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {authComponents} from './index';
import {AuthService} from './auth.service';
import {CommonModule} from '@angular/common';
import { NavigationUserComponent } from '../navigation-user/navigation-user.component';


@NgModule({
  declarations: [...authComponents],
  imports: [
    FormsModule,
    CommonModule // Triabva da go ima vav vseki podmodul
  ],
  providers: [AuthService]
})
export class AuthModule {
}
