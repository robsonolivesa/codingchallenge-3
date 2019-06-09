import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfModalAction} from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { NgForm } from '@angular/forms';
import { DepoimentosService } from 'src/app/principal/depoimentos/depoimentos.service';
import { ThfListViewAction, ThfListViewLiterals } from '@totvs/thf-ui/components/thf-list-view';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.component.html',
  styleUrls: ['./amigo.component.css']
})


export class AmigoComponent implements OnInit {

  @Input('nome-amigo') nomeAmigo: string;
  @Input('id-amigo') id: string;
  @Input('foto-amigo') imagem: string;

  titleDetailsModal: string;
  nomeAmigoModal: string;
  itensLista: any[] = Array();

  textoDepoimento: string;

  //constructor(private thfNotification: ThfNotificationService) { }
  constructor(private service: DepoimentosService, private thfNotification: ThfNotificationService) { }

  @ViewChild('detailsModal') detailsModalElement: ThfModalComponent;
  @ViewChild('optionsForm') form: NgForm;
  @ViewChild('listDepoimentos') listDepoimentos: ThfListViewAction;

  close: ThfModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  confirm: ThfModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Publicar'
  };

  ngOnInit(){
    
  }

  visualizarAmigo(){
    console.log("id do amigo: "+this.id);
    this.openModal(this.id, this.nomeAmigo);
  }

  getPeopleDepoimentoById() {
    //this.itensLista = ;
    this.service.getPeopleDepoimentoById(this.nomeAmigo);

  }

  openModal(id, nomeAmigo) {
    
    this.titleDetailsModal = 'Detalhes';
    this.itensLista = Array()
    this.textoDepoimento = ""

    //this.service.getPeopleDepoimentoById(this.id).subscribe(data => this.itensLista = data.testimonials);
    this.service.getPeopleDepoimentoById(this.id).subscribe((data) => {

      data.testimonials.forEach((element) => {

        this.service.getPeopleById(element.authorId).subscribe((user) => {
          
          element['nome'] = user.name;
          element['foto'] = environment.APIIMG+'photo/'+user.photo;

          console.log(user.photo)

          this.itensLista.push(element);

        })
      });
    });

    this.service.getPeopleById(id).subscribe((user) => {
          
      this.nomeAmigoModal = user.name;
      this.imagem = environment.APIIMG+'photo/'+user.photo;

    })
    
    this.detailsModalElement.open();
    
  } 

  closeModal() {
    this.detailsModalElement.close();
  }


  private proccessOrder() {

    if (this.textoDepoimento == "") {
      this.thfNotification.error("O depoimento não pode ser vazio.");
    } else {

      const item = {
        text: this.textoDepoimento
      }

      this.service.post(item, this.id).subscribe(() => {
        this.thfNotification.success("Registro atualizado com sucesso")
        this.closeModal()
      },
        err => this.thfNotification.error("Falha ao atualizar registro. (" + err.message + ")")
      );
    }
  }

}
