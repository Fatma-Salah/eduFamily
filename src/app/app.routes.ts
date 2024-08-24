import { Routes } from '@angular/router';
import { HomeComponent } from './view/pages/home/home.component';
import { SignInComponent } from './view/core/Auth/signIn/sign-in.component';
import { SignUpComponent } from './view/core/Auth/signUp/sign-up.component';
import { MainLayoutComponent } from './view/layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
       {path:'',component:HomeComponent},
    {path:'login',component:SignInComponent},
    {path:'register',component:SignUpComponent}, 
    ]},
];
