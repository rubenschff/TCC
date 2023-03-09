export class StorageHelper {
  private static readonly CODIGO_USUARIO = 'codigoUsuario';

  static get codigoUsuario(): number {
    const value = window.localStorage.getItem(StorageHelper.CODIGO_USUARIO);
    return parseInt(value!, 10)!;
  }

  static setCodigoUsuario(codigoUsuario: number) {
    window.localStorage.setItem(StorageHelper.CODIGO_USUARIO, codigoUsuario.toString());
  }

}
