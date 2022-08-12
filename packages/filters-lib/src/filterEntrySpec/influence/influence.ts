export type InfluenceType = 
    |"Shaper" 
    |"Elder" 
    |"Crusader"
    |"Hunter" 
    |"Redeemer" 
    |"Warlord" 
    |"None";

export function isInfluenceType(value: string):value is InfluenceType {
    if(
        value === "Shaper" ||
        value === "Elder" ||
        value === "Crusader"||
        value === "Hunter" ||
        value === "Redeemer" ||
        value === "Warlord" ||
        value === "None"
    ) {
        return true;
    }
    return false;
}