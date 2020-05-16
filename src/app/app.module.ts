import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserLoginComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
