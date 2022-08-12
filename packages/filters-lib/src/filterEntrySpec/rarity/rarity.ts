export type RarityType = 
    | "Normal" 
    | "Magic"
    | "Rare"
    | "Unique";

export function isRarity(str: string): str is RarityType {
    if(
        str === "Normal" ||
        str === "Magic" ||
        str === "Rare" ||
        str === "Unique") {
        return true;
    }
    return false;
}