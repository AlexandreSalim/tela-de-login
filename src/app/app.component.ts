import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentIndex = 0; // Índice do slide atual

  icone: any[] = [
    { nome: 'menu', texto: 'Menu' },
    { nome: 'close', texto: 'Close' },
    { nome: 'settings', texto: 'Settings' },
  ];

  timeoutId: any; // Para armazenar o ID do timeout

  constructor() {}

  ngOnInit() {
    this.addClassWithTimeout();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId); // Corrigido para clearInterval
    }
  }

  addClassWithTimeout() {
    this.timeoutId = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  // Navegação para o próximo slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.icone.length;
  }

  // Navegação para o slide anterior
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.icone.length) % this.icone.length;
  }
}
