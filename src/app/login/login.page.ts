import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,  
})
export class LoginPage implements OnInit {

usuario: string = 'Mago';
  login: string = '';   
  senha: string = ''; 
    

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async entrar() {
    if (this.login === 'Mago' && this.senha === '123456') {
      const alert = await this.alertController.create({
        header: 'Login realizado!',
        message: 'Bem-vindo, Mago adm (admmago@gmail.com)',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Erro!',
        message: 'Usuário ou senha inválidos!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
