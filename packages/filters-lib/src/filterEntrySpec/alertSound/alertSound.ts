export type AlertSound = { id: number, volume: number };

export function isAlertSound(value: any): value is AlertSound {
    if("id" in value && "volume" in value ) {
        return true;
    }
    return false;
}