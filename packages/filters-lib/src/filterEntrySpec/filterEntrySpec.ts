import { ComparedValues } from './comparison/comparison';
import { FilterColor } from './filterColor/filterColor';
import { AlertSound } from './alertSound/alertSound';
import { BaseGroup } from './base/base';
import { ClassGroup } from './class/class';
import { GemQualityType } from './gemQuality/gemQuality';
import { InfluenceType } from './influence/influence';
import { MinimapIcon } from './miniMapIcon/miniMapIcon';
import { RarityType } from './rarity/rarity';
import { Sockets } from './sockets/sockets';
import { VisualEffect } from './visualEffect/visualEffect';

export type EntryFullSpec = {
    AreaLevel: ComparedValues<number>,
    ItemLevel: ComparedValues<number>,
    DropLevel: ComparedValues<number>,
    Quality: ComparedValues<number>,
    Rarity:  ComparedValues<RarityType>,
    Class: ClassGroup,
    BaseType: BaseGroup,
    LinkedSockets: ComparedValues<number>,
    SocketGroup: ComparedValues<Sockets>,
    Sockets: ComparedValues<Sockets>,
    Height:  ComparedValues<number>,
    Width:  ComparedValues<number>,
    HasExplicitMod: Array<string>,
    AnyEnchantment: boolean,
    HasEnchantment: Array<string>,
    EnchantmentPassiveNode: Array<string>,
    EnchantmentPassiveNum: ComparedValues<number>,
    StackSize: ComparedValues<number>,
    GemLevel: ComparedValues<number>,
    GemQualityType: Array<GemQualityType>,
    AlternateQuality: boolean,
    Replica: boolean,
    Identified: boolean,
    Corrupted: boolean,
    CorruptedMods: ComparedValues<number>,
    Mirrored: boolean,
    ElderItem: boolean,
    ShaperItem: boolean,
    HasInfluence: Array<InfluenceType>,
    HasSearingExarchImplicit: ComparedValues<number>,
    HasEaterOfWorldsImplicit: ComparedValues<number>,
    FracturedItem: boolean,
    SynthesisedItem: boolean,
    ElderMap: boolean,
    ShapedMap: boolean,
    BlightedMap: boolean,
    MapTier: ComparedValues<number>,
    SetBorderColor: FilterColor,
    SetTextColor: FilterColor,
    SetBackgroundColor: FilterColor,
    SetFontSize: number,
    PlayAlertSound: AlertSound,
    PlayAlertSoundPositional: AlertSound,
    DisableDropSound: boolean,
    EnableDropSound: boolean,
    CustomAlertSound: string,
    MinimapIcon: MinimapIcon
    PlayEffect: VisualEffect,
}

export type EntryState = { state: "Show" | "Hide" | "Continue" };

export function isEntryState(isState: { state: string }): isState is EntryState {
    if(
        isState.state === "Show" || 
        isState.state === "Hide" || 
        isState.state === "Continue") {
        return true;    
    }
    return false;
}

// Partial<EntryFullSpec> does not work with exactOptionalPropertyTypes
// see: https://github.com/microsoft/TypeScript/issues/46969
export type FilterEntry = Partial<EntryFullSpec> & Required<EntryState>;


/**
 * Guarantee the order of keys of an EntrySpec for consistent
 * printing purposes.
 */
export const OrderedEntryKeys: Array<keyof EntryFullSpec> = [
    "AreaLevel",
    "ItemLevel",
    "DropLevel",
    "Quality",
    "Rarity",
    "Class",
    "BaseType",
    "LinkedSockets",
    "SocketGroup",
    "Sockets",
    "Height",
    "Width",
    "HasExplicitMod",
    "AnyEnchantment",
    "HasEnchantment",
    "EnchantmentPassiveNode",
    "EnchantmentPassiveNum",
    "StackSize",
    "GemLevel",
    "GemQualityType",
    "AlternateQuality",
    "Replica",
    "Identified",
    "Corrupted",
    "CorruptedMods",
    "Mirrored",
    "ElderItem",
    "ShaperItem",
    "HasInfluence",
    "HasSearingExarchImplicit",
    "HasEaterOfWorldsImplicit",
    "FracturedItem",
    "SynthesisedItem",
    "ElderMap",
    "ShapedMap",
    "BlightedMap",
    "MapTier",
    "SetBorderColor",
    "SetTextColor",
    "SetBackgroundColor",
    "SetFontSize",
    "PlayAlertSound",
    "PlayAlertSoundPositional",
    "DisableDropSound",
    "EnableDropSound",
    "CustomAlertSound",
    "MinimapIcon",
    "PlayEffect"
];

