import { Opaque } from "../../util/opaque";


export type Sockets = Opaque<string, "Sockets">

/**
 * Typeguard to check the validity of a 
 * Valid socket types are "R"|"G"|"B"|"W"|"D"|"A"
 * @param sockets The string to validate
 * @returns 
 */
export function isValidateSocketType(sockets: string): sockets is Sockets {
    const validSockets = /^[RGBWDA]*$/;
    if(sockets.toUpperCase().match(validSockets)) {
        return true;
    }
    return false;    
}