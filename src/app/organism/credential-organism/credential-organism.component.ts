import { Component } from '@angular/core';
import {
  NgModule,
  OnInit
} from '@angular/core';



import { DynamicLoaderService } from '../../service/dynamic-loader.service';
import { ComponentBundle, ApiComponentFormat, ComponentFormat, ComponentConfigurationFormat } from '../../class/bundle-definition';

@Component({
  selector: 'app-credential-organism',
  templateUrl: './credential-organism.component.html',
  styleUrls: ['./credential-organism.component.scss']
})
export class CredentialOrganismComponent implements OnInit {

  ORGANSIM_NAME_REFERENCE = 'credential-organism';
  servicePathUrl = '/organism-credential';

  constructor() { }
  ngOnInit() { }
}

