import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output: string = '';

  add(number: string) {
    this.output += number;
  }
  addOperation(operation: string) {
    if (operation == '<-') {
      this.output = this.output.slice(0, -1);
    } else if (!(this.output == "" || this.output.endsWith('/') || this.output.endsWith('*') || this.output.endsWith('-') || this.output.endsWith('+'))) {
      this.output += operation;
    }
  }
  specialEvent(operation: string) {
    switch (operation) {
      case 'INV': this.output += '*-1'; break;
      case 'GRAD': ; break;
      case '%': break;
      case 'sin': break;
      case 'cos': break;
      case 'tan': break;
      case 'ln': break;
      case 'log': break;
      case 'W': this.output += '^(1/2)'; break;
      case 'pi': this.output += '3.1416'; break;
      case 'e': break;
      case '^': break;
      case '(': this.output += '('; break;
      case ')': if (this.findOpenBrackets()) { this.output += ')' }; break;
      case '!': break;
    }
  }
  calc() {
    this.output = math.eval(this.output);
  }
  findOpenBrackets() {

  }
}
