import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: false,
})
export class ProdutosPage {

  constructor(private toastController: ToastController) { }

 async comprar() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Compra Realizada!';
  alert.message = 'Sua compra foi concluída com sucesso!';
  alert.buttons = ['OK'];

  alert.cssClass = 'alert-custom';  // Classe CSS personalizada

  document.body.appendChild(alert);
  await alert.present();
}
}