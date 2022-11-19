import { Md5 } from 'ts-md5';

/**
 * Helper responsavel por encriptar a senha
 */
export class UtilHelper {
    static chave: string = 'Fin#app!tcc2023';

    public static senhaEncript(senha: string) {
        return Md5.hashStr(`${String(UtilHelper.chave)}${String(senha)}`).toString();
    }
}
