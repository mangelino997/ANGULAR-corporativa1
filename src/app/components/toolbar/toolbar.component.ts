import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  private menu:Array<any> = [];
  constructor(private _scrollToService: ScrollToService, private router:Router) { }
  public triggerScrollTo(m) {
    if(this.router.url === '/seleccionpersonal') {
      // this.router.navigate(['home']);
      location.href='home';
    } else {
      const config: ScrollToConfigOptions = {
        target: m
      };
      this._scrollToService.scrollTo(config);
    }
  }
  ngOnInit() {
    this.menu = ['Inicio', 'Sobre Nosotros', 'Servicios', 'Contacto'];
  }
}
