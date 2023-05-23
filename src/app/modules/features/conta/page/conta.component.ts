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
        this.name = data.name;
        this.nick = data.nickName;
        this.dateOfBirth = data.dateOfBirth;
      },
      error: error => {
        console.log(error.message)
      }
    });


    this.form = this.fb.group({
      name: [this.name, Validators.compose([Validators.required, Validators.minLength(4)])],
      dateOfBirth: [this.dateOfBirth, Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
      oldPassword: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  alterar() {
    let values: EditarDTO = this.form.value;

    if (values.password == ''){
      delete values.password
    }
    if (values.oldPassword == ''){
      delete values.oldPassword
    }

    this.usuarioService.update(values).subscribe({
      next: data => {
        this.message.success(`Alteração realizada com sucesso!`);
      },
      error: error => {if (error.status == 400){
        this.message.error("Preencha os campos corretamente!")
      }else if(error.status == 401){
        this.message.error(`Informe a <strong>Nova senha</strong> e a <strong>Senha antiga</strong> para trocar de senha`);
      }else {
        this.message.error(error.message)
      }
      }
    })

    this.ngOnInit()
  }

}
