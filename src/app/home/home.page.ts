import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false, 
})
export class HomePage {
  
  usuario: string = 'Mago'; 

  item = [
    { nome: 'Menu'},
    { nome: 'Cliente'},
    { nome: 'Usuarios'},
    { nome: 'Categorias'},
    { nome: 'Pedidos'},
    { nome: 'Cargos'},
  ];

  item2 = [
    { nome: 'Login', url: '/login'},
    { nome: 'Produtos', url: '/produtos'},
    { nome: 'Cliente', url: '/cliente'}
  ];

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  async apresentarToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  irParaPagina(url: string) {
    this.router.navigate([url]); 
  }
}
