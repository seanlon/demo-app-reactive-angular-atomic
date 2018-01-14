import { Component } from '@angular/core';
import {
  NgModule, Inject,
  OnInit, OnDestroy,
  ViewChild, Input,
  ViewContainerRef
} from '@angular/core';
import { ApiService } from '../../service/api.service';
import { InputService } from '../../service/input.service';
import { UserValueService } from '../../service/user-value.service';


import { DynamicLoaderService } from '../../service/dynamic-loader.service';
import { ComponentBundle, ApiComponentFormat, ComponentFormat, ComponentConfigurationFormat } from '../../class/bundle-definition';

@Component({
  selector: 'app-form-organism',
  templateUrl: './form-organism.component.html',
  styleUrls: ['./form-organism.component.scss']
})
export class FormOrganismComponent implements OnInit, OnDestroy {
  @Input()
  organismNameReference;
  @Input()
  servicePathUrl;
  @ViewChild('dynamic', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;
  fieldsFromHost: ApiComponentFormat[];
  subscription: any;
  constructor( @Inject(UserValueService) protected userValueService, @Inject(InputService) protected inputService, @Inject(DynamicLoaderService) protected dynamicLoaderService, @Inject(ApiService) protected apiService) {

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription = this.subscription.unsubscribe();
    }
    this.saveField();
  }
  ngOnInit() {
    this.fetchFieldsFromService();
    this.performSubscriptionInitialization();
  }

  saveField() {
    this.userValueService.setOrganismSelections(this.organismNameReference, this.fieldsFromHost);
  }
  performSubscriptionInitialization() {

    if (this.inputService.inputAnnounced$) {
      this.subscription = this.inputService.inputAnnounced$.subscribe((inputChangeEvent) => {
        this.handleFieldChange(inputChangeEvent);
      });
    }
  }
  handleFieldChange(inputChangeEvent) {
    if (this.organismNameReference === inputChangeEvent.organismSource) {

      const indexOfUpdatedField = this.fieldsFromHost.findIndex((item) => item.fieldName === inputChangeEvent.fieldName);
      if (indexOfUpdatedField > -1) {
        this.fieldsFromHost[indexOfUpdatedField].value = inputChangeEvent.inputValue;
      }
      this.saveField();
    }
  }
  fetchFieldsFromService() {
    const cache = this.userValueService.getOrganismSelections(this.organismNameReference);

    if (cache && cache.fields) {
      this.fieldsFromHost = cache.fields;
      this.renderFieldsFromData(this.fieldsFromHost);
      return;
    }

    this.apiService.getData(this.servicePathUrl)
      .subscribe((fieldsFromHost: ApiComponentFormat[]) => {
        this.fieldsFromHost = fieldsFromHost;
        this.renderFieldsFromData(fieldsFromHost);
      }, error => { console.log('Error in getting apiurl', error); });

  }
  renderFieldsFromData(fieldsFromHost: ApiComponentFormat[]) {
    this.dynamicLoaderService.setRootViewContainerRef(this.viewContainerRef);
    this.dynamicLoaderService.setOrganismSource(this.organismNameReference);
    this.dynamicLoaderService.renderDynamicComponents(fieldsFromHost);

  }

}
