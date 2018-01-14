import { Input, Component, OnInit, Inject } from '@angular/core';
import { ExpressionParserService } from '../../service/expression-parser.service';
import { InputService } from '../../service/input.service';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() configuration: any;
  constructor( @Inject(InputService) protected inputService, @Inject(ExpressionParserService) protected expressionParserService) { }

  ngOnInit() {
    if (!this.configuration) {
      return;
    }
    if (this.configuration.isExpressionEnabled) {
      this.configuration = this.expressionParserService.transfromExpression(this.configuration);
    }
    this.configuration.value = this.configuration.value || this.configuration.defaultValue;
    this.handleInitialization();
  }
  handleInitialization() {

    this.inputService.announceInput(
      this.configuration.organismSource,
      'textbox',
      this.configuration.fieldName,
      this.configuration.value,
      'onLoad'
    );
  }
  handleSelection($event) {

    this.inputService.announceInput(
      this.configuration.organismSource,
      'textbox',
      this.configuration.fieldName,
      $event.srcElement.value,
      'onChange'
    );
  }
}
