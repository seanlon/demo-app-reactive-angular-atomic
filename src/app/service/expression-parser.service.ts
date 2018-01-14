import { Injectable } from '@angular/core';
import * as safeEval from 'notevil';

/** ExpressionParserService - Evaluate all predefined expressions */
@Injectable()
export class ExpressionParserService {

  /** Describe the property for safeeval utility  */

  private predefinedFunctionScope = {};
  constructor() {
    this.loadPreDefinedFunctions();
  }
  loadPreDefinedFunctions() {


    this.predefinedFunctionScope['concat'] = (arg1, ...theArgs) => {
      return arg1 + '' + (theArgs.concat('').join(''));
    };

    this.predefinedFunctionScope['truncate'] = (stringValue, maxLength) => {
      stringValue = stringValue ? stringValue + '' : '';
      if (stringValue.length > maxLength) {
        return stringValue.substring(0, maxLength);
      } else {
        return stringValue;
      }
    };

    this.predefinedFunctionScope['decodeURI'] = (stringValue) => decodeURIComponent(stringValue) || '';

    this.predefinedFunctionScope['encodeURI'] = (stringValue) => encodeURIComponent(stringValue) || '';

    this.predefinedFunctionScope['getDefaultAdmin'] = () => 'sa-admin';



  }
  transfromExpression(itemObject) {
    this.loadPreDefinedFunctions();
    const newItem = {};
    Object.keys(itemObject).map((key, index) => {
      // only if has bracket []
      const currentValue = `${itemObject[key]}`;
      newItem[key] = itemObject[key];
      if (!currentValue.startsWith('[') || !currentValue.endsWith(']')) {
        return newItem;
      }
      try {
        newItem[key] = `${safeEval(itemObject[key], this.predefinedFunctionScope)}`;
      } catch (e) {
        console.warn('error parsing ', e);
      }
    });
    return newItem;


  }

}
