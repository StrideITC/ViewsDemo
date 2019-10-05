import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomMaterialModule } from './material.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user/user.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:UserRegisterComponent},
  {path:'user',component:UserComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
