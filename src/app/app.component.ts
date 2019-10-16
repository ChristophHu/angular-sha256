import { Component } from '@angular/core'
import { AES } from 'crypto-ts'

@Component({
  selector: 'app-root',
  template: `
    <input type="text" #input (input)="data">
    <hr>
    Hash: {{ hash }}  
  `,
  styles: []
})

export class AppComponent {
  hash: string

  constructor() {
    this.hash = AES.encrypt('message', 'test').toString();
  }
}
