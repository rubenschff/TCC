import { UsuarioDTO } from '@static/models/usuario/usuario.dto';
import {DateHelper} from "@static/helpers/date.helper";

export class UsuarioMock {
  static usuarios = new Array<UsuarioDTO>({
    id: 1,
    name: 'Gabriel Rosenbach',
    nickName: 'teste123',
    dateOfBirth: DateHelper.parseStringToDate('2022-02-02'),
    password: '123456',
    token: 5264
  });

  static tokens = new Array<number>(5341, 7869, 5073, 6450, 1073);

  static add(name: string, dateOfBirth: Date,nickName: string, password: string, id?: number) {
    let usuario: UsuarioDTO;

    if (id) {

      usuario = UsuarioMock.find(id)!!;

      usuario.name = name;
      usuario.nickName = nickName;
      usuario.dateOfBirth = dateOfBirth;
      usuario.password = password;
    } else {
      usuario = { name, dateOfBirth, password, nickName }
    }

    return this.persist(usuario);
  }

  static find(id: number, validar = true): UsuarioDTO | undefined {
    let retorno = this.usuarios.find(x => x.id == id);

    if (validar && !retorno) {
      throw Error("Usuário não Encontrado!");
    }

    return retorno;
  }

  static login(token: number, senha: string, validar = true): UsuarioDTO | undefined {
    let retorno = this.usuarios.find(x => x.token! === token && x.password === senha);

    if (validar && !retorno) {
      throw Error("Usuário não Encontrado!");
    }

    return retorno;
  }

  private static persist(usuario: UsuarioDTO): UsuarioDTO {

    usuario.id = usuario.id ?? this.usuarios.length + 1;
    usuario.token = usuario.token ?? this.tokens.shift();

    this.usuarios.push(usuario);

    return usuario;
  }
}
