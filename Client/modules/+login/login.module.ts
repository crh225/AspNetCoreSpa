import { NgModule }       from '@angular/core';

import { SharedModule }            from '../shared/shared.module';
import { SocialLoginComponent } from './sociallogin';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { routing }            from './login.routes';


@NgModule({
    imports: [routing, SharedModule],
    declarations: [LoginComponent, SocialLoginComponent],
    providers: [LoginService]
})
export class LoginModule { }
