import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VersionOrganismComponent } from './organism/version-organism/version-organism.component';
import { SummaryOrganismComponent } from './organism/summary-organism/summary-organism.component';
import { CredentialOrganismComponent } from './organism/credential-organism/credential-organism.component';


const routes: Routes = [
    { path: '', redirectTo: '/version', pathMatch: 'full' },
    { path: 'version', component: VersionOrganismComponent },
    { path: 'credential', component: CredentialOrganismComponent },
    { path: 'summary', component: SummaryOrganismComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
