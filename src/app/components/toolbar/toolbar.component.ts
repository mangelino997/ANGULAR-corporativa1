import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent implements OnInit {
  private menu:Array<any> = [];
  constructor( private _scrollToService: ScrollToService ) { }

  public triggerScrollTo(m) {
    
    const config: ScrollToConfigOptions = {
      target: m
    };
 
    this._scrollToService.scrollTo(config);
  }

  ngOnInit() {
    this.menu = ['Inicio', 'Sobre Nosotros', 'Servicios', 'Contacto'];
  }
}
