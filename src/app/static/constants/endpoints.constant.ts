import {environment} from "@environments/environment";

const URL_API = environment.api_url;

export class EndpointsConstant {

  public static USUARIO = {
    LOGIN: URL_API + '/entrar',
    CADASTRO: URL_API + '/cadastrar'
  }

}
