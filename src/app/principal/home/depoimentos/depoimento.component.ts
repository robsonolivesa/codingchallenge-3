import { ThfButtonGroupItem } from '@totvs/thf-ui';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ThfListViewAction, ThfListViewLiterals } from '@totvs/thf-ui/components/thf-list-view';
import { DepoimentosService } from 'src/app/principal/depoimentos/depoimentos.service';
import { ProfileService } from 'src/app/principal/home/perfil/profile.service';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.css']
})

export class DepoimentoComponent implements OnInit {

  @ViewChild('listAprovados') listAprovados: ThfListViewAction;

  buttons: Array<ThfButtonGroupItem> = [
    { label: 'Aprovados', icon: 'thf-icon thf-icon-ok', action: this.aprovados },
    { label: 'Pendentes', icon: 'thf-icon thf-icon-clock', action: this.pendentes } ];

    constructor(private service: DepoimentosService, private ProfileService: ProfileService,private thfNotification: ThfNotificationService) { }

    itensLista: any[] = Array();
    id: string;
    status: string;
    
  ngOnInit() {

    this.ProfileService.get().subscribe((data) => {
      this.id = data._id;
      console.log("id do usuario: "+data._id)

      this.aprovados()

    });
  }

  aprovados(){

    this.itensLista = Array()

    this.service.getPeopleDepoimentoByIdStatus(this.id, '2').subscribe((data) => {

      data.testimonials.forEach((element) => {

        this.service.getPeopleById(element.authorId).subscribe((user) => {
          
          element['nome'] = user.name;
          element['dono'] = this.id;
          element['foto'] = environment.APIIMG+'photo/'+user.photo;

          console.log(user.photo)

          this.itensLista.push(element);

        })
      });
    });
  }

  pendentes(){

    this.itensLista = Array()

    this.service.getPeopleDepoimentoByIdStatus(this.id, '1').subscribe((data) => {

      data.testimonials.forEach((element) => {

        this.service.getPeopleById(element.authorId).subscribe((user) => {
          
          element['nome'] = user.name;
          element['dono'] = this.id;
          element['foto'] = environment.APIIMG+'photo/'+user.photo;

          console.log(user.photo)

          this.itensLista.push(element);

        })
      });
    });

  }

  aprovar(id, peopleId){
    
    console.log(id)

    const item = {
      status: 2
    }
    
    if (confirm("Deseja realmente aprovar este depoimento?")){

      this.service.put(item , peopleId, id).subscribe(() => {

        this.aprovados()
        this.thfNotification.success("Registro atualizado com sucesso.")

      });
    }
  
  }

  excluir(id, peopleId){
    
    console.log(id)

    const item = {
      status: 2
    }
    
    if (confirm("Deseja realmente excluir / reprovar este depoimento?")){

      this.service.excluirDepoimento(peopleId, id).subscribe(() => {

        this.aprovados()

        this.thfNotification.success("Registro reprovado / excluido com sucesso.")
  
      });

    }


  
  }
}
