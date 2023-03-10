export interface UsuarioDTO {
  id?: number;
  name: string;
  nickName: string;
  password: string;
  dateOfBirth: Date;
  token?: number;
}
