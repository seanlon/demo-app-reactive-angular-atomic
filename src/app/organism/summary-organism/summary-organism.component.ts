import { Component, Inject, OnInit } from '@angular/core';
import { UserValueService } from '../../service/user-value.service';
import { ApiService } from '../../service/api.service';
import { OrganismSelectionFormat, ApiComponentFormat } from '../../class/bundle-definition';

@Component({
  selector: 'app-summary-organism',
  templateUrl: './summary-organism.component.html',
  styleUrls: ['./summary-organism.component.scss']
})
export class SummaryOrganismComponent implements OnInit {

  ORGANSIM_NAME_REFERENCE = 'summary-organism';
  ORGANSIM_NAME_REFERENCE_VERSION = 'version-organism';
  ORGANSIM_NAME_REFERENCE_CREDENTIAL = 'credential-organism';
  userSelectedData: OrganismSelectionFormat[] = [];
  userSelectedDataVersion: OrganismSelectionFormat = new OrganismSelectionFormat();
  userSelectedDataCredential: OrganismSelectionFormat = new OrganismSelectionFormat();
  constructor( @Inject(ApiService) protected apiService, @Inject(UserValueService) protected userValueService
  ) { }

  ngOnInit() {
    this.userSelectedData = this.userValueService.getOrganismSelections();
    this.userSelectedDataVersion = this.userSelectedData.find((item: OrganismSelectionFormat) => item.organismName === this.ORGANSIM_NAME_REFERENCE_VERSION) || new OrganismSelectionFormat();
    this.userSelectedDataCredential = this.userSelectedData.find((item: OrganismSelectionFormat) => item.organismName === this.ORGANSIM_NAME_REFERENCE_CREDENTIAL) || new OrganismSelectionFormat();
  }
  doDeployment() {
    this.apiService.getData(`/settings`)
      .subscribe((settingInfo) => {
        if (!settingInfo.isMaintenanceMode) {
          // build data
          this.buildData();
        }
      }, error => { console.log('Error in getting apiurl', error); });


  }


  buildData() {
    // build arm template and cloud data forms fill in

    // submit doDeployment

    alert('Your deployment has begun in background progress');
    location.href = '/';
  }
}
