export type GemQualityType = 
    | "Superior"
    | "Divergent"
    | "Anomalous"
    | "Phantasmal";

export function isGemQualityType(value: string): value is GemQualityType {
    if(
        value === "Superior" ||
        value === "Divergent" ||
        value === "Anomalous" ||
        value === "Phantasmal"
    ) {
        return true;
    }
    return false;
}