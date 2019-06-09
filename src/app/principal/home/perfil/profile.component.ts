import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { ProfileService } from './profile.service';
import { TokenService } from 'src/app/auth/login/token.service';
import { ThfNotificationService } from '@totvs/thf-ui';
import { Profile } from 'src/app/shared/profile/profile';
import { ThfCheckboxGroupOption, ThfUploadFileRestrictions, ThfUploadLiterals } from '@totvs/thf-ui/components/thf-field';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nameBkp: String = "";
  name: String = "";
  isEdit: boolean = false;
  photo: string = "";
  src: string;
  restrictions: ThfUploadFileRestrictions;
  allowedExtensions: string = ".jpg,.png"

  constructor(private service: ProfileService,
    public tokenService: TokenService,
    private thfNotification: ThfNotificationService) {
  }

  ngOnInit() {
    this.service.get().subscribe((data) => {
    this.name = data.name
    this.src = environment.APIIMG+'photo/'+data.photo
    this.photo = data.photo
    });
  }

  onEnableEdit() {
    this.nameBkp = this.name;
    this.isEdit = true;
  }

  onSubmit() {

    if (this.name === "") {
      this.thfNotification.error("O campo nome deve ser informado.");
    } else {

      const item = {
        name: this.name,
        photo: this.photo
      }

      this.service.put(item).subscribe(() => {
        this.thfNotification.success("Registro atualizado com sucesso")
        this.isEdit = false;

        this.src = environment.APIIMG+'photo/'+this.photo

      },
        err => this.thfNotification.error("Falha ao atualizar registro. (" + err.message + ")")
      );

    }
  }

  onCancelEdit() {
    this.name = this.nameBkp;
    this.isEdit = false;
  }

  resumeUploadSuccess() {
    console.log("sucesso no upload da foto.")

    var oId = JSON.parse(event.target['response'])
    this.photo = oId.id;
  }

  onChangeExtension() {
    
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions: [this.allowedExtensions.split(',')] });
  }
}