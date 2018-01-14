import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicLoaderService } from './service/dynamic-loader.service';
import { ExpressionParserService } from './service/expression-parser.service';
import { ApiService } from './service/api.service';
import { InputService } from './service/input.service';
import { UserValueService } from './service/user-value.service';
import { SensitiveData } from './pipe/sensitive.pipe';

import { TextboxComponent } from './component/textbox/textbox.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { VersionOrganismComponent } from './organism/version-organism/version-organism.component';
import { CredentialOrganismComponent } from './organism/credential-organism/credential-organism.component';
import { SummaryOrganismComponent } from './organism/summary-organism/summary-organism.component';
import { FormOrganismComponent } from './organism/form-organism/form-organism.component';
import { HeaderOrganismComponent } from './organism/header-organism/header-organism.component';
import { LoaderOrganismComponent } from './organism/loader-organism/loader-organism.component';



@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    DropdownComponent, LoaderOrganismComponent, HeaderOrganismComponent, FormOrganismComponent,
    VersionOrganismComponent,
    CredentialOrganismComponent,
    SummaryOrganismComponent, SensitiveData

  ],
  entryComponents: [
    TextboxComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule, AppRoutingModule
  ],
  providers: [DynamicLoaderService, InputService, UserValueService, ExpressionParserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
