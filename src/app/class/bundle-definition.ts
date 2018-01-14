import { TextboxComponent } from '../component/textbox/textbox.component';
import { DropdownComponent } from '../component/dropdown/dropdown.component';
import { Component } from '@angular/core';

/* ComponentBundle */
export class ComponentBundle {
    public static list = [
        <ComponentFormat>{
            name: 'textbox',
            componentInstance: TextboxComponent
        },
        <ComponentFormat>{
            name: 'dropdown',
            componentInstance: DropdownComponent
        }
    ];
    public static getDynamicFormInputDefinitionFilterByName(name) {
        return this.list.find((item) => item.name === name);
    }
    public static getDynamicFormInputDefinition() {
        return this.list;
    }
}


/* ApiComponentFormat */
export class ApiComponentFormat {
    type: string;
    category?: string;
    label?: string;
    fieldName: string;
    isExpressionEnabled: boolean;
    defaultValue: string;

    value?: string;
    dependents?: string[]; // fieldname
    dependsOn?: string; // fieldname
    validatorsRegex?: string;
}
export class OrganismSelectionFormat {
    organismName: string;
    fields?: ApiComponentFormat[]; // fieldname
}


/* ComponentFormat */
export class ComponentFormat {
    name: string;
    componentInstance: Component; // angular component
    configuration?: any; // etc reactive validation and field setting handled by component level
}


/* ComponentFormat */
export class ComponentConfigurationFormat {

}
