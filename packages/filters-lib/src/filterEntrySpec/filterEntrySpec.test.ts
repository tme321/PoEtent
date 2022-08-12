import { FilterEntry } from "./filterEntrySpec";
import { Sockets } from "./sockets/sockets";

/**
 * A nonsense Entry with all fields set
 * for testing.
 */
export const testFullEntrySpec: FilterEntry = {
    state: "Show",
    AreaLevel: [{ operator: "=", values: [1] }],
    ItemLevel: [{ operator: "=", values: [2] }],
    DropLevel: [{ operator: "=", values: [3] }],
    Quality: [{ operator: "=", values: [20] }],
    Rarity:  [{ operator: "=", values: ["Rare"] }],
    Class: ["Gloves"],
    BaseType: ["Stone Axe"],
    LinkedSockets: [{ operator: "=", values: [2] }],
    SocketGroup: [{ operator: "=", values: ["RGB" as Sockets] }],
    Sockets: [{ operator: "=", values: ["RR" as Sockets] }],
    Height:  [{ operator: "=", values: [4] }],
    Width:  [{ operator: "=", values: [2] }],
    HasExplicitMod: ["Athlete's"],
    AnyEnchantment: false,
    HasEnchantment: ["EnchantmentOfBladesOnHit1"],
    EnchantmentPassiveNode: [],
    EnchantmentPassiveNum: [{ operator: "=", values: [0] }],
    StackSize: [{ operator: "=", values: [1] }],
    GemLevel: [{ operator: "=", values: [20] }],
    GemQualityType: ["Anomalous", "Divergent"],
    AlternateQuality: false,
    Replica: false,
    Identified: true,
    Corrupted: false,
    CorruptedMods: [{ operator: "=", values: [0] }],
    Mirrored: false,
    ElderItem: false,
    ShaperItem: false,
    HasInfluence: ["None"],
    HasSearingExarchImplicit: [{ operator: "=", values: [0] }],
    HasEaterOfWorldsImplicit: [{ operator: "=", values: [0] }],
    FracturedItem: false,
    SynthesisedItem: false,
    ElderMap: false,
    ShapedMap: false,
    BlightedMap: false,
    MapTier: [{ operator: "=", values: [80] }],
    SetBorderColor: { r: 255, g: 0, b: 0, a: 255 },
    SetTextColor: { r: 255, g: 0, b: 0, a: 255 },
    SetBackgroundColor: { r: 255, g: 0, b: 0, a: 255 },
    SetFontSize: 37,
    PlayAlertSound: { id: 0, volume: 100 },
    PlayAlertSoundPositional: { id: 0, volume: 100 },
    DisableDropSound: false,
    EnableDropSound: false,
    CustomAlertSound: "",
    MinimapIcon: {
        size: 0, 
        color: "Red",
        shape: "Star"
    },
    PlayEffect: { color: "Red" },
}


export const quickEntrySpec: FilterEntry = {
    state: "Show",
    AreaLevel: [{ operator: "<=", values: [12] },{ operator: ">", values: [2] }],
    Quality: [{ operator: "=", values: [20] }],
    Rarity:  [{ operator: "=", values: ["Rare"] }],
    Class: ["Two Hand Axes"],
    BaseType: ["Stone Axe"],
    LinkedSockets: [{ operator: "=", values: [2] }],
    SocketGroup: [{ operator: "=", values: ["RGB" as Sockets] }],
    SetBorderColor: { r: 255, g: 0, b: 0, a: 255 },
    SetTextColor: { r: 255, g: 0, b: 0, a: 255 },
    SetBackgroundColor: { r: 255, g: 0, b: 0, a: 255 },
    SetFontSize: 37,
    PlayAlertSound: { id: 0, volume: 100 },
    PlayAlertSoundPositional: { id: 0, volume: 100 },
    MinimapIcon: {
        size: 0, 
        color: "Red",
        shape: "Star"
    },
    PlayEffect: { color: "Red" },
}
