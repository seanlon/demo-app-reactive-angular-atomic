import { Input, Component, OnInit, Inject } from '@angular/core';
import { ExpressionParserService } from '../../service/expression-parser.service';
import { InputService } from '../../service/input.service';

export class OptGroupFormat {
  label: string;
  list: any[];
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() configuration: any;
  optGroups: OptGroupFormat[] = [];
  constructor( @Inject(ExpressionParserService) protected expressionParserService, @Inject(InputService) protected inputService) { }

  ngOnInit() {
    if (!this.configuration) {
      return;
    }
    this.configuration.value = this.configuration.value || this.configuration.defaultValue;

    this.transformListIntoGroup();
  }
  handleSelection($event) {
    this.inputService.announceInput(
      this.configuration.organismSource,
      'dropdown',
      this.configuration.fieldName,
      $event.srcElement.value,
      'onChange'
    );
  }
  // For optgroup
  transformListIntoGroup() {
    this.configuration.valueList.map((item) => {
      const foundGroupIndex: number = this.optGroups.findIndex((optGroup) => optGroup.label === item.group);
      if (foundGroupIndex > -1) {
        this.optGroups[foundGroupIndex].list.push(item);
      } else {
        const optGroup = new OptGroupFormat();
        optGroup.label = item.group;
        optGroup.list = [];
        optGroup.list.push(item);
        this.optGroups.push(optGroup);
      }
    });
  }
}
