import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegularExpressionComponent } from './regular-expression/regular-expression.component';
import { GroupMoverComponent } from './regular-expression/group-mover/group-mover.component';
import { GroupsViewerComponent } from './regular-expression/group-mover/groups-viewer/groups-viewer.component';
import { InputPatternsComponent } from './regular-expression/group-mover/input-patterns/input-patterns.component';
import { InputResultPatternComponent } from './regular-expression/group-mover/input-result-pattern/input-result-pattern.component';
import { ResultViewerComponent } from './regular-expression/group-mover/result-viewer/result-viewer.component';
import { CustominputComponent } from './custom-components/custominput/custominput.component';
import { RegularExpressionModule } from './regular-expression/regular-expression.module';
import { TextsComponent } from './texts/texts.component';
import { JsTextComponent } from './texts/js-text/js-text.component';
import { JsTestService } from './texts/js-text/js-test.service';

@NgModule({
  declarations: [
    AppComponent,
    RegularExpressionComponent,
    GroupMoverComponent,
    GroupsViewerComponent,
    InputPatternsComponent,
    InputResultPatternComponent,
    ResultViewerComponent,
    CustominputComponent,
    TextsComponent,
    JsTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegularExpressionModule
  ],
  providers: [
    JsTestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
