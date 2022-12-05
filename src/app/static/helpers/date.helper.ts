import dateFormat from "dateformat";

export class DateHelper {
    static get dateTime() {
        return new Date().toLocaleString('pt-BR');
    }

    static getDateYYYYMMDDFormat(data: Date): string {
        return data ? dateFormat(data, 'yyyy-mm-dd') : '';
    }

    static formatDateTime(data: Date): string {
        return data ? dateFormat(data, 'yyyy-mm-dd HH:MM:ss') : '';
    }
    /**
     * Caso a string possua apenas a data.
     * @param date String da data
     * @returns Objeto data correto.
     */
    static parseStringToDate(date: string): Date {
        return new Date(`${date}`);
    }

    static addHoraMinuto(date: Date, horaMinuto?: string): Date {
        let hora = '00';
        let min = '00';
        if (!!horaMinuto) {
            hora = horaMinuto.substring(0, 2);
            min = horaMinuto.substring(3, 5);
        }
        date.setHours(parseInt(hora, 10));
        date.setMinutes(parseInt(min, 10));
        date.setSeconds(0);

        return date;
    }

    static isDataFutura(date: Date): Boolean {
        if (date instanceof Date) {
            return date.getTime() >= new Date().setHours(0, 0, 0, 0);
        }

        return false;
    }

    static isDataPassada(date: Date): Boolean {
        if (date instanceof Date) {
            return date.getTime() < new Date().setHours(0, 0, 0, 0);
        }

        return false;
    }

    static proximoDia(): Date {
        const data = new Date();
        data.setDate(data.getDate() + 1);

        return data;
    }
}
