/**
 * Interface Client
 */
 export interface IClient {
    clientId: IClientId,
    firstName: string,
    secondName: string,
    firstLastName: string,
    secondLastName: string,
    phone: string,
    address: string,
    city: string    
}

/**
 * Interface ClientId
 */
export interface IClientId{
    typeDni: string,
    dni: number
}

/**
 * Interfaz UpdateProductDTO:
 * Extiende de CreateProductDTO; con las propiedades opcionales
 */
 export interface UpdateClientDTO extends Partial<IClient>{ }