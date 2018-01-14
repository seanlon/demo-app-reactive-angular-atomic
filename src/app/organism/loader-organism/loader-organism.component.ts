import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-organism',
  templateUrl: './loader-organism.component.html',
  styleUrls: ['./loader-organism.component.scss']
})
export class LoaderOrganismComponent implements OnInit {
  @Input() isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
