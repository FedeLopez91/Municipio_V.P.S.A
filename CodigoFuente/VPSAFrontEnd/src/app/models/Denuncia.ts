import {ITipoDenuncia} from './TipoDenuncia';
export interface IDenuncia {
    id: number;
    fecha: string;
    calle: string;
    numero: number;
    entreCalles1: string;
    entreCalles2: string;
    descripcion: string;
    tipoDenunciaId: number;
    tipoDenuncia: ITipoDenuncia;
    estadoDenunciaId?: any;
    estadoDenuncia?: any;
    legajo: string;
    ipDenunciante: string;
  }
