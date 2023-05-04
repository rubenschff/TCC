import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputEstadoEnum } from '@static/enumerators/components/input-estados.enum';
import { InputTextTipoEnum } from '@static/enumerators/components/input-text-tipo.enum';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EditarDTO } from '@static/models/usuario/editar.dto';
import { UsuarioService } from 'app/services/http/usuario.service';

@Component({
  selector: 'ac-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  readonly URL_SATURNO = './assets/saturno.png';
  readonly URL_JUPITER = './assets/jupiter.png'
  readonly URL_MARTE = './assets/marte.png'
  readonly URL_PLUTAO = './assets/plutão.png'

  inputEstadoEnum = InputEstadoEnum;
  inputTextTipoEnum = InputTextTipoEnum;



  name!: string;
  nick!: string;
  password!: string;
  dateOfBirth!: Date;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit() {
    this.usuarioService.get().subscribe({
      next: data => {
        console.log(data);
        this.name = data.name;
        this.nick = data.nickName;
        this.dateOfBirth = data.dateOfBirth;
      },
      error: error => {
        console.log(error)
      }
    });


    this.form = this.fb.group({
      name: [this.name, Validators.compose([Validators.required])],
      dateOfBirth: [this.dateOfBirth, Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      oldPassword: ['', Validators.compose([Validators.required])],
    });
  }

  alterar() {
    let values: EditarDTO = this.form.value;

    this.usuarioService.update(values).subscribe({
      next: data => {
        this.message.success(`Alteração realizada com sucesso!`);
      },
      error: error => {
        console.log(error.message);
      }
    })

  }

}
