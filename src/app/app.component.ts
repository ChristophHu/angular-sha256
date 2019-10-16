import { Component } from '@angular/core'
import { AES } from 'crypto-ts'
import { Sha256 } from './sha256'

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
    var test = Sha256.hash('test', 'string')
    console.log(test)
  }
}
