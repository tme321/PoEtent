import { ComparedValues, FilterEntry, OrderedEntryKeys } from "../filterEntrySpec";


const writeComparisons = <T>(valueWriter: (value: T)=>string) => (comparisons: ComparedValues<T>) => {
    let compareLines: Array<string> = [];
    comparisons.forEach(comparison=>{
        compareLines.push(`${comparison.operator}${comparison.values.map(valueWriter)}`);
    });
    return compareLines;
}

function quotedValueWriter(value: string) {
    return `"${value}"`;
}

function rawValueWriter(value: string | number) {
    return `${value}`;
}

function writeStrArray(array: Array<string>) {
    let line = "";
    array.forEach(str=>{
        line += `"${str}" `;
    });
    return line;
}

function capitalize(s: string)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

function writeBoolean(bool: boolean) {
    return `${capitalize(bool.toString())}`;
}

function writeFilterColor({r,g,b,a}: {r:number, g:number, b:number, a:number}) {
    return `${r} ${g} ${b} ${a}`;
}

function writeAlertSound({ id, volume }: { id: number, volume: number }) {
    return `${id} ${volume}`;
}

function writeMinimapIcon({ size, color, shape }:{
    size: number, 
    color: string,
    shape: string
}) {
    return `${size} ${color} ${shape}`;
}

function writeVisualEffect({ color, temp }: { color: string, temp?: boolean }) {
    return temp? `${color} Temp\n`: `${color}`; 
}

const writeRawValueComp = writeComparisons(rawValueWriter);
const writeQuotedValueComp = writeComparisons(quotedValueWriter);

export function writeEntry(entry: FilterEntry) {
    let entryBlock = `${entry.state}\n`;
    OrderedEntryKeys.forEach(key=>{

        switch(key) {

            case "AnyEnchantment": 
            case "AlternateQuality":
            case "Replica": 
            case "Identified": 
            case "Corrupted": 
            case "Mirrored": 
            case "ElderItem": 
            case "ShaperItem": 
            case "FracturedItem": 
            case "SynthesisedItem": 
            case "ElderMap": 
            case "ShapedMap":
            case "BlightedMap": {
                if(key in entry) {
                    const value = entry[key];
                    if(value !== undefined) {
                        entryBlock += `\t${key} ${writeBoolean(value)}`;    
                    }
                }
                break; 
            }

            case "Class": 
            case "BaseType":
            case "HasExplicitMod":
            case "HasEnchantment":
            case "EnchantmentPassiveNode":
            case "GemQualityType":
            case "HasInfluence": { 
                if(key in entry) {
                    const strArray = entry[key];
                    if(strArray !== undefined) {
                        entryBlock += `\t${key} ${writeStrArray(strArray)}\n`;
                    }
                }
                break;
            }

            case "AreaLevel":
            case "ItemLevel":
            case "DropLevel":
            case "Quality":
            case "Rarity":
            case "LinkedSockets":
            case "Height":
            case "Width":
            case "EnchantmentPassiveNum":
            case "StackSize":
            case "GemLevel":
            case "CorruptedMods":
            case "HasSearingExarchImplicit":
            case "HasEaterOfWorldsImplicit":
            case "MapTier": {
                if(key in entry) {
                    const comparisons = entry[key];
                    if(comparisons !== undefined) {
                        const compStrings = writeRawValueComp(comparisons);
                        compStrings.forEach(str=>{
                            entryBlock += `\t${key} ${str}\n`;
                        });
                    }
                }
                break;
            }

            case "SocketGroup":
            case "Sockets": {
                if(key in entry) {
                    const comparisons = entry[key];
                    if(comparisons !== undefined) {
                        const compStrings = writeQuotedValueComp(comparisons);
                        compStrings.forEach(str=>{
                            entryBlock += `\t${key} ${str}\n`;
                        });
                    }
                }
                break;
            }
    
            case "SetBorderColor":
            case "SetTextColor":
            case "SetBackgroundColor": {
                if(key in entry) {
                    const color = entry[key];
                    if(color !== undefined) {
                        entryBlock += `\t${key} ${writeFilterColor(color)}\n`;
                    }
                }
                break;
            }

            case "SetFontSize":
            case "CustomAlertSound": {
                if(key in entry) {
                    entryBlock += `\t${key} ${entry[key]}\n`;
                }
                break;
            }

            case "PlayAlertSound":
            case "PlayAlertSoundPositional": {
                if(key in entry) {
                    const alertSound = entry[key];
                    if(alertSound !== undefined) {
                        entryBlock += `\t${key} ${writeAlertSound(alertSound)}\n`;
                    }
                }
                break;
            }

            case "DisableDropSound":
            case "EnableDropSound": {
                if(key in entry) {
                    const sound = entry[key];
                    if(sound !== undefined && sound) {
                        entryBlock += `\t${key}\n`;
                    }
                }
                break;
            }

            case "MinimapIcon": {
                if(key in entry) {
                    const icon = entry[key];
                    if(icon !== undefined) {
                        entryBlock += writeMinimapIcon(icon);
                    }
                }
                break;
            }
            
            case "PlayEffect": {
                if(key in entry) {
                    const effect = entry[key];
                    if(effect !== undefined) {
                        entryBlock += `\t${key} ${writeVisualEffect(effect)}\n`;
                    }
                }
                break;
            }

            default: {
                break;
            }
        }
    });
    return entryBlock;
}
