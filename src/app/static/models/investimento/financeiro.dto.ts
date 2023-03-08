export interface FinanceiroDTO {
  id?: number;
  codigoUsuario: number;
  valorArrecadado: number;
  valorAcumulado: number;
  valorDisponivel: number;
  dataManutencao?: string;
}
