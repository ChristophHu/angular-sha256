import { Component } from '@angular/core'
import { Sha256 } from './sha256'

@Component({
  selector: 'app-root',
  template: `
    <input type="text" #input>
    <button (click)="toHash(input.value)">Hash generieren</button>
    <hr>
    Hash: {{ hash }}
  `,
  styles: []
})

export class AppComponent {
  //hash: string = 'test'
  hash: string

  constructor() {}

  toHash(message: string) {
    this.hash = Sha256.hash(message)
  }
}
