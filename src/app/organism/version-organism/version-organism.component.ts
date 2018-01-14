import { Component } from '@angular/core';
import {
  NgModule, Inject,
  OnInit, OnDestroy,
} from '@angular/core';
import { ApiService } from '../../service/api.service';



@Component({
  selector: 'app-version-organism',
  templateUrl: './version-organism.component.html',
  styleUrls: ['./version-organism.component.scss']
})
export class VersionOrganismComponent implements OnInit, OnDestroy {

  isReadyLoaded: boolean;
  ORGANSIM_NAME_REFERENCE = 'version-organism';
  servicePathUrl = '/organism-version';

  constructor( @Inject(ApiService) protected apiService) {
  }
  ngOnInit() {
    this.performServiceInitialization();
  }
  ngOnDestroy() { }

  // Determine base path url
  performServiceInitialization() {
    this.apiService.setBaseUrlPath('./assets/data/api-config.json?t=' + Date.now());
    this.apiService.getData('')
      .subscribe((data) => {
        this.apiService.setBaseUrlPath(data['storageApiUrl']);
        this.isReadyLoaded = true;
      }, error => { console.log('Error in getting apiurl', error); });

  }

}
