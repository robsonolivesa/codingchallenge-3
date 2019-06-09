import { Component, OnInit } from '@angular/core';

import { DepoimentosService } from './depoimentos.service';

import { Profile } from 'src/app/shared/profile/profile';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.css']
})
export class DepoimentosComponent implements OnInit {

  title: String = "Meus Amigos";
  listaAmigos: Profile;

  constructor(private service: DepoimentosService) { }

  ngOnInit() {
    this.getPeoples()
  }

  onQuickSearch(nameFilter) {
    nameFilter ? this.listaPeoplesName(nameFilter) : this.resetFilters();
  }

  onDeleteDisclaimers(){
    this.getPeoples();
  }

  getPeoples() {
    //this.service.listaPeoplesName().subscribe(data => this.listaAmigos = data.people);
  }

  listaPeoplesName(nameFilter) {
    //this.service.listaPeoplesName(nameFilter).subscribe( data => this.listaAmigos = data.people );
  }

  resetFilters() {
    this.getPeoples();
  }

}