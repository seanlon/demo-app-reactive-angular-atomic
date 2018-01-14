import { Injectable } from '@angular/core';
import { OrganismSelectionFormat, ApiComponentFormat } from '../class/bundle-definition';

/** UserValueService - Cache all user selection values */

@Injectable()
export class UserValueService {

  organismSelections: OrganismSelectionFormat[] = [];
  constructor() { }

  setOrganismSelections(organismName: string, fieldList: ApiComponentFormat[]) {
    const foundSelectionIndex = this.organismSelections.findIndex((organismSelection: OrganismSelectionFormat) => {
      return organismSelection.organismName === organismName;
    });
    if (foundSelectionIndex > -1) {
      this.organismSelections[foundSelectionIndex].fields = fieldList;
    } else {
      const organismSelection = new OrganismSelectionFormat();
      organismSelection.fields = fieldList;
      organismSelection.organismName = organismName;
      this.organismSelections.push(organismSelection);
    }
  }
  getOrganismSelections(organismName: string) {
    if (organismName) {
      return this.organismSelections.find((organismSelection: OrganismSelectionFormat) => {
        return organismSelection.organismName === organismName;
      });
    }
    return this.organismSelections;
  }

}
