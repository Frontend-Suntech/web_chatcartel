import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  industries = [];

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {

    this.industries = [
      {
        'icon'        : 'icon_store',
        'title'       : 'Retail',
        'isSelected'  : false
      },
      {
        'icon'        : 'icon_restaurant',
        'title'       : 'Restaurant',
        'isSelected'  : true
      },
      {
        'icon'        : 'icon_travel',
        'title'       : 'Travel',
        'isSelected'  : false
      },
      {
        'icon'        : 'icon_b2b',
        'title'       : 'B2B',
        'isSelected'  : false
      },
      {
        'icon'        : 'icon_financial',
        'title'       : 'Financial services',
        'isSelected'  : false
      },
      {
        'icon'        : 'icon_telecom',
        'title'       : 'Telecom',
        'isSelected'  : false
      },
      {
        'icon'        : 'icon_insurance',
        'title'       : 'Insurance',
        'isSelected'  : false
      },
      {
        'icon'        : 'icon_automotive',
        'title'       : 'Automotive',
        'isSelected'  : false
      }
    ];

    console.log(this._document.body.childNodes);
    this._renderer2.removeClass(this._document.body.childNodes[11], 'd-none');
    this._renderer2.addClass(this._document.body.childNodes[11], 'mx-auto');
    this._renderer2.removeClass(this._document.body.childNodes[11], 'd-none');
    this._renderer2.addClass(this._document.body.childNodes[14], 'd-none');
    this._renderer2.addClass(this._document.getElementsByTagName('app-footer').item(0), 'd-none');
  }

}
