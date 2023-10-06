import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';

register();

@Component({
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.css'],
})
export class WelcomePage {
  @ViewChild('swiper')
  swiperRef!: ElementRef;
  swiper?: Swiper;
  swiperModules = [IonicSlides];

  constructor(private router: Router) {
    this.swiperReady();
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext(500);
  }

  goPrev() {
    this.swiper?.slidePrev();
  }

  onSubscriptions() {
    localStorage.setItem('firtsAccess', 'false');
    //chamar o service de inscrições
    this.router.navigate(['./step']);
  }
}
