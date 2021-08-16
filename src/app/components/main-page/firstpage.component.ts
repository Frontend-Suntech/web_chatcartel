import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  users = [];
  channels = [];
  information = [];
  cards = [];

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {

    this.users = [
      {
        'name'    : 'Andrew',
        'type'    : 'VIP client',
        'channel' : 'WhatsApp'
      },
      {
        'name'    : 'María',
        'type'    : 'New client',
        'channel' : 'Messenger'
      },
      {
        'name'    : 'James',
        'type'    : 'Recurring client',
        'channel' : 'Instagram'
      },
      {
        'name'    : 'Mike',
        'type'    : 'New client',
        'channel' : 'WhatsApp'
      }
    ];

    this.channels = [
      'assets/images/whatsapp_icon.svg',
      'assets/images/messenger_icon.png',
      'assets/images/telegram_icon.svg',
      'assets/images/instagram_icon.png',
      'assets/images/twitter_icon.svg',
      'assets/images/visa.svg',
      'assets/images/mastercard.svg',
      'assets/images/american.svg'
    ];

    this.information = [
      {
        'icon'  : 'assets/images/money.svg',
        'title' : 'Increase Sales',
        'text'  : 'Boost your online sales by integrating Messaging Apps.'
      },
      {
        'icon'  : 'assets/images/leads.svg',
        'title' : 'Get Better Leads',
        'text'  : 'Understand your customer´s needs at the very beginning.'
      },
      {
        'icon'  : 'assets/images/csat.svg',
        'title' : 'Improve Customer Satisfaction (CSAT)',
        'text'  : 'Deploy Chatbots in key parts of the conversation.'
      },
      {
        'icon'  : 'assets/images/data_company.svg',
        'title' : 'Get Better Data',
        'text'  : 'Measure what matters most to your company.'
      }
    ];

    this.cards = [
      {
        'icon_sm' : 'assets/images/automatic_small.svg',
        'icon'    : 'assets/images/automatic.png',
        'title'   : 'Automatic Chat Response',
        'text'    : 'Create your own Chatbots to automate key parts of the conversation.',
        'options' : ['Inteligent Welcome Menu', 'Automatize FAQ´s', 'Automatize FAQ´s', 'Out of office BOT']
      },
      {
        'icon_sm' : 'assets/images/chats_small.svg',
        'icon'    : 'assets/images/chats.png',
        'title'   : 'Chat Center',
        'text'    : 'Control inbound and outbound communication between agents an customers through the multi-agent platform.',
        'options' : ['Share images & files', 'Post Notes', 'Transfer Conversacions', 'Send Quick Responses']
      },
      {
        'icon_sm' : 'assets/images/actions_small.svg',
        'icon'    : 'assets/images/actions.png',
        'title'   : 'Actions',
        'text'    : 'Understand the purpose of the conversation with your customers.',
        'options' : ['Manage Client Orders', 'Send Quotes', 'General Inquires', 'Handle Complaints']
      },
      {
        'icon_sm' : 'assets/images/product_small.svg',
        'icon'    : 'assets/images/product.png',
        'title'   : 'Product & Client Solutions',
        'text'    : 'Get the tools of a CRM and ERP in one place.',
        'options' : ['Upload your Products', 'Integrate your Inventory', 'Handle VIP Clients', 'Manage New Leads']
      },
      {
        'icon_sm' : 'assets/images/c_commerce_small.svg',
        'icon'    : 'assets/images/c_commerce.png',
        'title'   : 'Sales & Payments',
        'text'    : 'Monitor new sales and payments in your messaging apps.',
        'options' : ['Send Payment Links', 'Sell by a Virtual Catalog', 'Integrate you Payment Gateway']
      },
      {
        'icon_sm' : 'assets/images/data_small.svg',
        'icon'    : 'assets/images/data.png',
        'title'   : 'Data',
        'text'    : 'Receive valuable Data from your product sales, CSAT, and agent’s performance through KPI’s.',
        'options' : ['Monitor you Agent´s Performance', 'Customer Satisfaction', 'Personalize your own Reports']
      }
    ];

    console.log(this._document.body.childNodes);
    this._renderer2.addClass(this._document.body.childNodes[11], 'd-none');
    this._renderer2.addClass(this._document.body.childNodes[14], 'd-none');
    this._renderer2.removeClass(this._document.getElementsByTagName('app-footer').item(0), 'd-none');
  }

}
