import {Channel} from './channel';

export class Product {
  id: number;
  tipo: string;
  nome: string;
  descricao: string;
  exibir: number;
  ordem: number;
  adesao: number;
  taxaInstalacao: number;
  canais: number;
  listaCanais: Array<Channel>;
  preco: number;
  precoDe: number;
}