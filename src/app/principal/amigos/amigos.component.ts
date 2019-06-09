import { Component, OnInit } from '@angular/core';

import { AmigosService } from './amigos.service';

import { Profile } from 'src/app/shared/profile/profile';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  title: String = "Meus Amigos";
  listAmigos: Profile;

  constructor(private service: AmigosService) { }

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

    this.service.listaPeoples().subscribe((data) => {

      data.people.forEach((element) => {

          element['photo'] = environment.APIIMG+'photo/'+element.photo;

        })

        this.listAmigos = data.people
      
      });
  }

  listaPeoplesName(nameFilter) {
    this.service.listaPeoplesName(nameFilter).subscribe( data => this.listAmigos = data.people );
  }

  resetFilters() {
    this.getPeoples();
  }

}