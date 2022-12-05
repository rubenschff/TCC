import { UsuarioDTO } from '@static/models/usuario/usuario.dto';

export class UsuarioMock {
  static usuarios = new Array<UsuarioDTO>({
    id: 1,
    nome: 'Gabriel Rosenbach',
    dataNascimento: '2000-11-17',
    senha: '123456',
    token: 5264
  });

  static tokens = new Array<number>(5341, 7869, 5073, 6450, 1073);

  static add(nome: string, dataNascimento: string, senha: string, id?: number) {
    let usuario: UsuarioDTO;

    if (id) {

      usuario = UsuarioMock.find(id)!!;

      usuario.nome = nome;
      usuario.dataNascimento = dataNascimento;
      usuario.dataNascimento = senha;
    } else {
      usuario = { nome, dataNascimento, senha }
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
    let retorno = this.usuarios.find(x => x.token! === token && x.senha === senha);

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
