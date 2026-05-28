import { Component, signal } from '@angular/core';
import { PartyBuilderLayout } from "./layout/party-builder-layout/party-builder-layout";

@Component({
  selector: 'app-root',
  imports: [PartyBuilderLayout],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('fantastic-scuffles-party-builder');
}
