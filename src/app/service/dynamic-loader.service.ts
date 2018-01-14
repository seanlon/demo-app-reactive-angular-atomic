import { ComponentBundle, ApiComponentFormat, ComponentFormat, ComponentConfigurationFormat } from '../class/bundle-definition';

import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';

/** DynamicLoaderService - Manage all component rendering*/
@Injectable()
export class DynamicLoaderService {
  rootViewContainer;
  dynamicComponentList: ComponentFormat[];
  organismSource: string; // the originrganismSource(organismSource){

  constructor( @Inject(ComponentFactoryResolver) protected factoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  setOrganismSource(organismSource) {
    this.organismSource = organismSource;
  }
  setDynamicComponents(dynamicComponentList) {
    this.dynamicComponentList = dynamicComponentList;
  }
  renderDynamicComponents(fieldList: ApiComponentFormat[]) {

    // @todo - reset placeholder


    // convert to ComponentFormat array
    this.dynamicComponentList = fieldList.map((item) => {
      const componentFormat = new ComponentFormat();
      componentFormat.name = item.fieldName;
      const foundMatchedDefinition = ComponentBundle.getDynamicFormInputDefinitionFilterByName(item.type);

      componentFormat.componentInstance = foundMatchedDefinition.componentInstance;
      componentFormat.configuration = item;
      componentFormat.configuration.organismSource = this.organismSource;
      this.addDynamicComponent(componentFormat.componentInstance, componentFormat.configuration);

      return componentFormat;
    });



  }
  resetDynamicComponentPlaceholder() {
    this.rootViewContainer.remove();
  }

  addDynamicComponent(componentInstanceRef, configuration) {
    const factory = this.factoryResolver
      .resolveComponentFactory(componentInstanceRef);
    const component = factory
      .create(this.rootViewContainer.parentInjector);

    component.instance.configuration = configuration;
    this.rootViewContainer.insert(component.hostView);
  }
}
