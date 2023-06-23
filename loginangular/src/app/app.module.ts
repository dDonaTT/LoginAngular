import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomePageComponent, LayoutComponent, ProductsPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,MatTableModule,
    MatButtonModule,MatIconModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
