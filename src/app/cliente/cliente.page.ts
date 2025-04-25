import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: false,  // Mantido sem alterações!
})
export class ClientePage implements OnInit {

  clientes = [  // Corrigido para 'clientes' (minúsculo e plural)
    { nome: 'Paracelso', email: 'paracelso@gmail.com', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Paracelsus.jpg/1200px-Paracelsus.jpg' },
    { nome: 'Gandalf', email: 'gandalf@outlook.com', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6kGnJeWOo2Ieps2sjEGwZKZV5IFxWcOLF_g&s' },
    { nome: 'Merlin', email: 'merlin@hotmail.com', foto: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Lju5lUYF8kbrZ0KgubI-G4g6nEDMOgKhf0ltwmn8WJtS70O3s6gKQwaCt1pzCf5xt8GyK-xAXX0CCKZ6itasuT2tZ1VaSwuwl5FptMNyA7ZSJ3KSJeAZj4VeAz4sMhfjyQpXJwMXd2Y/s1600/merlin-series-4-episode-3-3.jpg' },
    { nome: 'Aleister Crowley', email: 'crowley@gmail.com', foto: 'https://preview.redd.it/vau4j4pho4oc1.jpeg?auto=webp&s=0e3ba42da90d40da599aeaba1020c27f9ff32d55' },
    { nome: 'Grigori Rasputin', email: 'rasputin@gmail.com', foto: 'https://cdn.prod.website-files.com/60ff690cd7b0537edb99a29a/674e2269adf257d2cae2e0bb_Rasputin.webp' },
    { nome: 'Éliphas Lévi', email: 'eliphas@outlook.com', foto: 'https://www.edneiprocopio.com.br/wp-content/uploads/2024/11/eliphas-levi-02.jpg' },
    { nome: 'Simon Magus', email: 'magus@gmail.com', foto: 'https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/b/a/base_26068152.webp' },
    { nome: 'John Dee', email: 'John@empresa.com', foto: 'https://mortesubita.net/wp-content/uploads/2020/08/John-Dee.jpg' },
    { nome: 'Nicolas Flamel', email: 'flamel@hotmail.com', foto: 'https://alkhemylab.com/wp-content/uploads/2020/06/alquimista-nicolas-flamel-alkhemylab-blog.jpg' },
    { nome: 'Gerard Eucausse', email: 'gerard@gmail.com', foto: 'https://www.meisterdrucke.pt/kunstwerke/1260px/Unknown_Artist_-_portrait_of_Gerard_Encausse_known_as_Papus_occultist_co-founder_of_the_Martinist_-_%28MeisterDrucke-949279%29.jpg' }
  ];

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  detalhes(cliente: any) {
    this.alertController.create({
      header: 'Detalhes',
      message: `Nome: ${cliente.nome}<br>Email: ${cliente.email}`,
      buttons: ['OK']
    }).then(alert => alert.present());
  }

  excluir(cliente: any) {
    this.clientes = this.clientes.filter(c => c !== cliente);
  }
}
