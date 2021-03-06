import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-integrations-page',
  templateUrl: './integrations-page.component.html',
  styleUrls: ['./integrations-page.component.scss']
})
export class IntegrationsPageComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    console.log(this._document.body.childNodes);
    this._renderer2.addClass(this._document.body.childNodes[11], 'd-none');
    this._renderer2.addClass(this._document.body.childNodes[14], 'd-none');
    this._renderer2.removeClass(this._document.getElementsByTagName('app-footer').item(0), 'd-none');
  }

}
