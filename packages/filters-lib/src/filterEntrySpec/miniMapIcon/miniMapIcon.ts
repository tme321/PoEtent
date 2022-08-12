export type MiniMapIconColor = 
    | "Red" 
    | "Green" 
    | "Blue" 
    | "Brown" 
    | "White" 
    | "Yellow" 
    | "Cyan" 
    | "Grey" 
    | "Orange" 
    | "Pink" 
    | "Purple";

export type MiniMapIconShape = 
    | "Circle" 
    | "Diamond" 
    | "Hexagon"
    | "Square" 
    | "Star" 
    | "Triangle" 
    | "Cross" 
    | "Moon" 
    | "Raindrop" 
    | "Kite" 
    | "Pentagon" 
    | "UpsideDownHouse";

export type MinimapIcon = {
    size: number, 
    color: MiniMapIconColor,
    shape: MiniMapIconShape
}

export function isMiniMapIconColor(value: string): value is MiniMapIconColor {
    if(
        value === "Red" ||
        value === "Green" ||
        value === "Blue" ||
        value === "Brown" ||
        value === "White" ||
        value === "Yellow" ||
        value === "Cyan" ||
        value === "Grey" ||
        value === "Orange" ||
        value === "Pink" ||
        value === "Purple"
    ){
        return true
    }
    return false;
}

export function isMiniMapIconShape(value: string): value is MiniMapIconShape {
    if(
        value === "Circle" ||
        value === "Diamond" ||
        value === "Hexagon" ||
        value === "Square" ||
        value === "Star" ||
        value === "Triangle" ||
        value === "Cross" ||
        value === "Moon" ||
        value === "Raindrop" ||
        value === "Kite" ||
        value === "Pentagon" ||
        value === "UpsideDownHouse"
    ){
        return true
    }
    return false;
}