import { ITarea, Nivel } from "./interfaces/Itarea";

export class Programar implements ITarea {
  titulo: string;
  descripcion?: string | undefined;
  completada: boolean;
  urgencia?: Nivel | undefined;

  constructor( titulo:string, descripcion: string, completada: boolean, urgencia?: Nivel) {
    this.titulo = titulo
    this.descripcion = descripcion
    this.completada = completada
    this.urgencia = urgencia
  }

  resumen = (): string => {
    return `Tarea de programación: ${this.titulo} - completada: ${this.completada} `
  }
}