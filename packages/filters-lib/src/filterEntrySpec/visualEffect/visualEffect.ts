export type VisualEffectColor = 
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

export type VisualEffect = { color: VisualEffectColor, temp?: boolean };

export function isVisualEffectColor(color: string): color is VisualEffectColor {
    if(
        color === "Red" ||
        color === "Green" ||
        color === "Blue" ||
        color === "Brown" ||
        color === "White" ||
        color === "Yellow" ||
        color === "Cyan" ||
        color === "Grey" ||
        color === "Orange" ||
        color === "Pink" ||
        color === "Purple"
    ) {
        return true;
    }
    return false;
}
