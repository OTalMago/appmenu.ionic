import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,  // Mantido sem alteração!
})
export class LoginPage implements OnInit {

  login: string = '';   // Variável para o login
  senha: string = '';   // Variável para a senha

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
