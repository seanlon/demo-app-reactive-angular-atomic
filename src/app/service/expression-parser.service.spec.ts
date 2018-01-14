import { TestBed, inject } from '@angular/core/testing';

import { ExpressionParserService } from './expression-parser.service';

describe('ExpressionParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpressionParserService]
    });
  });

  it('should be created', inject([ExpressionParserService], (service: ExpressionParserService) => {
    expect(service).toBeTruthy();
  }));
});
