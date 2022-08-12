import { 
    EntryState, 
    FilterEntry, 
    Sockets, 
    RarityType, 
    VisualEffect, 
    isVisualEffectColor, 
    MinimapIcon, 
    isMiniMapIconColor, 
    isMiniMapIconShape, 
    AlertSound, 
    FilterColor, 
    ClassGroup, 
    isClassType, 
    GemQualityType, 
    isGemQualityType, 
    InfluenceType, 
    isInfluenceType, 
    ComparedValue, 
    isOperator, 
    isValidateSocketType, 
    isRarity 
} from "../../filterEntrySpec";

export function parseFilterBlock(state: EntryState, block: Array<string>) {
    const parseLineRegex = /^(?<field>.+?)\s+(?<value>.*)$/;

    let entry: FilterEntry = {...state};

    block.forEach(line=>{
        const parsedLine = line.match(parseLineRegex);

        if(parsedLine?.groups && "field" in parsedLine?.groups) {

            const fieldName = parsedLine.groups["field"];
            switch(fieldName) {

                /* boolean */
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
                case "BlightedMap":
                case "DisableDropSound":
                case "EnableDropSound": {
                    entry[fieldName] = stringToBoolean(
                        parsedLine.groups["value"]);
                    break;
                }

                /* number */
                case "SetFontSize": {
                    entry[fieldName] = Number(parsedLine.groups["value"]);
                    break;
                }

                /* quoted string */
                case "CustomAlertSound": {
                    entry[fieldName] = parsedLine.groups["value"];
                    break;
                }

                /* ComparedValue<number> */
                case "AreaLevel":
                case "ItemLevel":
                case "DropLevel":
                case "Quality":
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
                    entry[fieldName] = entry[fieldName] || [];
                    const comparison = parseComparisons<number>(
                        strToNum, 
                        parsedLine.groups["value"]);
                    entry[fieldName]?.push(comparison);
                    break;
                }

                case "SocketGroup": 
                case "Sockets": {
                    entry[fieldName] = entry[fieldName] || [];
                    const comparison = parseComparisons<Sockets>(
                        strToSockets, 
                        parsedLine.groups["value"]);
                    entry[fieldName]?.push(comparison);
                    break;
                }

                case "Rarity": {
                    entry[fieldName] = entry[fieldName] || [];
                    const comparison = parseComparisons<RarityType>(
                        strToRarity, 
                        parsedLine.groups["value"]);
                    entry[fieldName]?.push(comparison);
                    break;
                }
                
                case "Class": {
                    entry[fieldName] = entry[fieldName] || [];
                    entry[fieldName]?.push(
                        ...parseClasses(parsedLine.groups["value"]));                    
                    break; 
                }

                case "BaseType": {
                    entry[fieldName] = entry[fieldName] || [];
                    entry[fieldName]?.push(
                        ...parseBases(parsedLine.groups["value"]));                    
                    break; 
                }

                case "HasExplicitMod": { 
                    entry[fieldName] = entry[fieldName] || [];
                    entry[fieldName]?.push(
                        ...parseMods(parsedLine.groups["value"]));                    
                    break; 
                }

                case "HasEnchantment": { 
                    entry[fieldName] = entry[fieldName] || [];
                    entry[fieldName]?.push(
                        ...parseEnchantments(parsedLine.groups["value"]));                    
                    break; 
                }

                case "EnchantmentPassiveNode": { 
                    entry[fieldName] = entry[fieldName] || [];
                    entry[fieldName]?.push(
                        ...parseEnchantmentPassives(parsedLine.groups["value"]));                    
                    break; 
                }

                case "GemQualityType": {
                    entry[fieldName] = entry[fieldName] || [];
                    entry[fieldName]?.push(
                        ...parseGemQualityTypes(parsedLine.groups["value"]));                    
                    break; 
                }

                case "HasInfluence": {
                    entry[fieldName] = entry[fieldName] || [];
                    entry[fieldName]?.push(
                        ...parseInfluenceTypes(parsedLine.groups["value"]));                    
                    break; 
                }

                case "SetBorderColor": 
                case "SetTextColor": 
                case "SetBackgroundColor": { 
                    entry[fieldName] = parseFilterColor(
                        parsedLine.groups["value"]);
                    break; 
                }


                case "PlayAlertSound": 
                case "PlayAlertSoundPositional": { 
                    entry[fieldName] = parseAlertSound(
                        parsedLine.groups["value"]);
                    break; 
                }


                case "MinimapIcon": {
                    entry[fieldName] = parseMinimapIcon(
                        parsedLine.groups["value"]);
                    break; 
                }

                case "PlayEffect": { 
                    entry[fieldName] = parsePlayEffect(
                        parsedLine.groups["value"]);
                    break; 
                }

                default: {
                    break;
                } 
            }
        }
    });

    return entry;
}

function parsePlayEffect(value: string): VisualEffect {
    const effect: VisualEffect = { color: "Red" };
    const effectTokens = value.trim().split(/\s+/);

    effect.color = isVisualEffectColor(effectTokens[0])? effectTokens[0]: "Red"; 
    
    if(effectTokens[1] && effectTokens[1] === "Temp") {
        effect.temp = true;
    }

    return effect;
}

function parseMinimapIcon(value: string): MinimapIcon {
    const icon: MinimapIcon = {
        size: 0,
        color: "Red",
        shape: "Circle"
    };

    const iconRegex = /(?<size>\d+)\s+(?<shape>\S+)\s+(?<color>\S+)/;
    const iconMatch = value.match(iconRegex);

    if(iconMatch) {
        const color = iconMatch.groups?.["color"] || "";
        const shape = iconMatch.groups?.["shape"] || "";
        icon.size = Number(iconMatch.groups?.["size"]);
        icon.color = isMiniMapIconColor(color)? color: "Red";
        icon.shape = isMiniMapIconShape(shape)? shape: "Circle";
    }

    return icon;
}


function parseAlertSound(value: string): AlertSound {
    const alertSound: AlertSound = { id: 0, volume: 0 };
    const alertRegex = /(?<id>\d+)\s+(?<volume>\d+)/;
    const alertMatch = value.match(alertRegex);

    if(alertMatch) {
        alertSound.id = Number(alertMatch.groups?.["id"]);
        alertSound.volume = Number(alertMatch.groups?.["volume"]);
    }

    return alertSound;
}

function parseFilterColor(value: string): FilterColor {
    const rgbaRegex = /(?<r>\d+)\s+(?<g>\d+)\s+(?<b>\d+)\s+(?<a>\d+)/;
    const rgbaMatch = value.match(rgbaRegex);
    const filterColor: FilterColor = { r: 0, g: 0, b: 0, a: 0 };

    if(rgbaMatch) {
        filterColor.r = Number(rgbaMatch.groups?.["r"]);
        filterColor.g = Number(rgbaMatch.groups?.["g"]);
        filterColor.b = Number(rgbaMatch.groups?.["b"]);
        filterColor.a = Number(rgbaMatch.groups?.["a"]);
    }

    return filterColor;
}

function parseClasses(value: string): ClassGroup {
    const classes = value.trim().split(/"\s+"/);
    const group: ClassGroup = [];
    for(let c of classes) {
        c = c.replace(/"/,'');
        if(isClassType(c)) {
            group.push(c);
        }
    }
    return group;
}

function parseGemQualityTypes(value: string): Array<GemQualityType> {
    const classes = value.trim().split(/"\s+"/);
    const group: Array<GemQualityType> = [];
    for(let c of classes) {
        c = c.replace(/"/,'');
        if(isGemQualityType(c)) {
            group.push(c);
        }
    }
    return group;
}

function parseInfluenceTypes(value: string): Array<InfluenceType> {
    const classes = value.trim().split(/"\s+"/);
    const group: Array<InfluenceType> = [];
    for(let c of classes) {
        c = c.replace(/"/,'');
        if(isInfluenceType(c)) {
            group.push(c);
        }
    }
    return group;
}

function parseStrings(value: string): Array<string> {
    const group: Array<string> = 
        value.trim().split(/"\s+"/).map(base=>base.replace(/"/,''));
    return group;
}

const parseBases = parseStrings;
const parseMods = parseStrings;
const parseEnchantments = parseStrings;
const parseEnchantmentPassives = parseStrings;

function stringToBoolean(str: string) {
    if(str.toLowerCase() === "false") {
        return false;
    }
    else if(str.toLowerCase() === "true") {
        return true;
    }
    return true;
}

function parseComparisons<T>(toValType: (value: string)=>T, str: string): ComparedValue<T> {

    const tokens = str.trim().split(/\s+/);

    const operator = !!tokens[0].match(/(!|=|==|<=|>=|<|>)/)? tokens[0] : '';
    
    const values = operator===''? [...tokens] : tokens.slice(1);

    const comparison: ComparedValue<T> = {
        operator: isOperator(operator)? operator: '',
        values: values.map(toValType)
    }

    return comparison;
}

function strToNum(str: string): number { return Number(str) };

function strToSockets(str: string): Sockets {
    const sockets = str.replace(/"(\S+)"/,'$1');

    if(isValidateSocketType(sockets)) {
        return sockets;
    }
    return `` as Sockets;
}

function strToRarity(str: string): RarityType {
    const rarity = str.replace(/"(\S+)"/,'$1');

    if(isRarity(rarity)) {
        return rarity;
    }

    return `Normal`;
}
