import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    console.log(this._document.body.childNodes);
    this._renderer2.addClass(this._document.getElementsByTagName('app-footer').item(0), 'd-none');
    this._renderer2.addClass(this._document.body.childNodes[14], 'px-4');
    this._renderer2.addClass(this._document.body.childNodes[14], 'mx-auto');
    this._renderer2.removeClass(this._document.body.childNodes[14], 'd-none');
    this._renderer2.addClass(this._document.body.childNodes[11], 'd-none');
  }

}
