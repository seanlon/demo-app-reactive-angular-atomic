import { Component } from '@angular/core';
import {
  NgModule, Inject,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ApiService } from './service/api.service';
import { ComponentBundle, ApiComponentFormat, ComponentFormat, ComponentConfigurationFormat } from './class/bundle-definition';

import { ILoader } from './interface/ILoader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./material.component.scss',  './app.component.scss']
})
export class AppComponent {
  title = 'app';
  /** Describe the property of instance of the loader of azure service*/
  apiLoader: ILoader;
  constructor( @Inject(ApiService) protected apiService) {

    this.apiLoader = this.apiService.loader;
  }
  ngOnInit() {}
}
