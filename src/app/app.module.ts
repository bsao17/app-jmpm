import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import {Globalservices} from './service/globalservices';
import { AuthComponent } from './signup/auth.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './service/auth.service';
import { WebAgencyComponent } from './web-agency/web-agency.component';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import { environment} from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {SigninComponent} from './signin/signin.component';
import {InputModule, ButtonModule, CoreModule, UploadModule, AccordionModule} from 'truly-ui';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RightColumnComponent } from './right-column/right-column.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { SharedModule} from './modules/shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: AuthComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'page1', component: BodyComponent},
  {path: 'page1/article/:id', component: ArticlePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    HeaderComponent,
    WebAgencyComponent,
    SigninComponent,
    RightColumnComponent,
    ArticlePageComponent,
    ContactComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgBootstrapDarkmodeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CoreModule.forRoot({theme: 'default'}),
    InputModule,
    ButtonModule,
    UploadModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    Globalservices,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
