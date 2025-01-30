import { OptionalId } from "mongodb";

export type CiudadModel = OptionalId<{
    nombre: string,
    pais: string,
    poblacion:string,
}>