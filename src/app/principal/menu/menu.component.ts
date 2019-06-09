import { Component, OnInit } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

   menus: Array<ThfMenuItem> = [
    { label: 'Meu Perfil', link: '/home' , icon: 'thf-icon-user', shortLabel: 'Perfil'},
    { label: 'Meus Amigos', link: '/amigos', icon: 'thf-icon thf-icon-users', shortLabel: 'Amigos' },
    { label: 'Sair',  icon: "thf-icon thf-icon-exit", shortLabel: 'Sair', action: this.sair}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    //this.criamenu()
  }
  
  sair(){
    if(confirm("Deseja realmente sair da aplicação?")){
      window.localStorage.clear();
      this.router.navigate(['/'] );
    }
  }

}
