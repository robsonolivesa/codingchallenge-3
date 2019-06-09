import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfModalAction} from '@totvs/thf-ui/components/thf-modal';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.css']
})


export class DepoimentoComponent implements OnInit {


  titleDetailsModal: string;
  nomeAmigoModal: string;

  ngOnInit(){
    
  }

}
