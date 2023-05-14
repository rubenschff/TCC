import {environment} from "@environments/environment";

const URL_API = environment.api_url + '/';

export class EndpointsConstant {

  public static USUARIO = {
    LOGIN: URL_API + 'entrar',
    CADASTRO: URL_API + 'cadastrar',
    USUARIO: URL_API + 'usuario'
  }

  public static PERGUNTA = {
    PERGUNTAS: URL_API + 'perguntas'
  }

  public static INVESTIMENTO = {
    INVESTIMENTO: URL_API + 'investimento',
    FINANCEIRO:  URL_API + 'financeiro'
  }

}
