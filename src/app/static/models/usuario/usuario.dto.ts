export interface UsuarioDTO {
  id?: number;
  nome: string;
  nickName: string;
  senha: string;
  dataNascimento: Date;
  token?: number;
}
