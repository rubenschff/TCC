export interface UsuarioDTO {
  id?: number;
  name: string;
  nickName: string;
  password: string;
  dateOfBirth: Date;
  accessToken: string;
  token?: number;
}
