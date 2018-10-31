import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import {Swiper} from 'swiper/dist/js/swiper.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('ubicacionAnimation', [
      state('left', style({
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('current', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('left <=> current', [
        animate('1s')
      ])
    ])
  ]
})
export class ContactComponent implements OnInit, AfterViewInit {

  public form: FormGroup;
  private anchorsSwiper: any;
  state: string = 'left';

  constructor() {}

  ngAfterViewInit() {
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  }

  ngOnInit() {
    this.form= new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', Validators.required),
      observacion: new FormControl()
    });
  }

  animateMe() {
    this.state = (this.state === 'left' ? 'current' : 'left');
  }

  public mostrar(){
    alert(this.form.get('name').value);
  }

}

//prueba
