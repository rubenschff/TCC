import {environment} from "@environments/environment";
import { url } from 'inspector';

const URL_API = environment.api_url + '/';

export class EndpointsConstant {

  public static USUARIO = {
    LOGIN: URL_API + 'entrar',
    CADASTRO: URL_API + 'cadastrar',
    USUARIO: URL_API + 'usuario'
  }

  public static PERGUNTA = {
    PERGUNTAS: URL_API + 'perguntas',
    PROXIMA_PERGUNTA: URL_API + 'proxima_pergunta',
    RESPOSTA: URL_API + 'resposta'
  }

  public static INVESTIMENTO = {
    INVESTIMENTO: URL_API + 'investimento',
    FINANCEIRO:  URL_API + 'financeiro',
    TRANSACAO: URL_API + 'transacao',
    TOTALIZADOR: URL_API + 'totalizador'
  }

}
