import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegularExpressionComponent } from './regular-expression/regular-expression.component';
import { GroupMoverComponent } from './regular-expression/group-mover/group-mover.component';
import { GroupsViewerComponent } from './regular-expression/group-mover/groups-viewer/groups-viewer.component';
import { InputPatternsComponent } from './regular-expression/group-mover/input-patterns/input-patterns.component';
import { InputResultPatternComponent } from './regular-expression/group-mover/input-result-pattern/input-result-pattern.component';
import { ResultViewerComponent } from './regular-expression/group-mover/result-viewer/result-viewer.component';
import { RegularExpressionModule } from './regular-expression/regular-expression.module';
import { TextsComponent } from './texts/texts.component';
import { JsTextComponent } from './texts/js-text/js-text.component';
import { JsTestService } from './texts/js-text/js-test.service';
import { TextsRoutingModule } from './texts/texts-routing.module';
import { DesignCleanComponent } from './texts/design-clean/design-clean.component';
import { CodesComponent } from './codes/codes.component';
import { MinimizerComponent } from './codes/minimizer/minimizer.component';
import { CodesModule } from './codes/codes.module';
import { HomeComponent } from './home/home.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AngularSplitModule } from 'angular-split';
import { KitComboboxComponent } from 'src/layout/kit-combobox/kit-combobox.component';
import { HeaderComponent } from 'src/header/header.component';
import { WorkControlerComponent } from './regular-expression/group-mover/work-controler/work-controler.component';
import { GroupMoverService } from './regular-expression/group-mover/group-mover.service';


@NgModule({
  declarations: [
    AppComponent,
    RegularExpressionComponent,
    GroupMoverComponent,
    GroupsViewerComponent,
    InputPatternsComponent,
    InputResultPatternComponent,
    ResultViewerComponent,
    TextsComponent,
    JsTextComponent,
    DesignCleanComponent,
    CodesComponent,
    MinimizerComponent,
    HomeComponent,
    KitComboboxComponent,
    HeaderComponent,
    WorkControlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegularExpressionModule,
    TextsRoutingModule,
    CodesModule,
    HttpClientModule,
    CodemirrorModule,
    AngularSplitModule.forRoot(),
  ],
  providers: [
    GroupMoverService,
    JsTestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
