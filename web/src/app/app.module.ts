import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegularExpressionModule } from './regular-expression/regular-expression.module';

import { DesignCleanComponent } from './texts/design-clean/design-clean.component';
import { CodesComponent } from './codes/codes.component';
import { MinimizerComponent } from './codes/minimizer/minimizer.component';
import { CodesModule } from './codes/codes.module';
import { HomeComponent } from './home/home.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AngularSplitModule } from 'angular-split';
import { HeaderComponent } from 'src/header/header.component';
import { GroupMoverService } from './regular-expression/group-mover/group-mover.service';
import { TextsModule } from './texts/texts.module';
import { UserIconComponent } from 'src/layout/user-icon/user-icon.component';
import { UserPanelComponent } from '../header/user-panel/user-panel.component';
import { GraphQLModule } from './providers/apollo/graphql.module';
import { LoginComponent } from './pages/login/login.component';
import { KitModule } from 'src/layout/kit.module';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CryptoModule } from './crypto/crypto.module';


@NgModule({
  declarations: [
    AppComponent,
    DesignCleanComponent,
    CodesComponent,
    MinimizerComponent,
    HomeComponent,
    HeaderComponent,
    UserIconComponent,
    UserPanelComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CodesModule,
    HttpClientModule,
    AngularSplitModule.forRoot(),
    CodemirrorModule,
    CryptoModule,

    RegularExpressionModule,
    TextsModule,
    GraphQLModule,

    KitModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
  ],
  providers: [
    GroupMoverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
