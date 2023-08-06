export enum Nivel {
  "Informativa",
  "Urgente",
  "Bloqueante"
}

// Establecemos el contrato, la firma del contrato
// los puntos a implementar quien la implemente
export interface ITarea {
  titulo: string
  descripcion?: string
  completada: boolean
  urgencia?: Nivel

  resumen: () => string
}