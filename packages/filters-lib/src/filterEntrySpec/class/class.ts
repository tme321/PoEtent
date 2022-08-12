export type ClassGroup = Array<ClassType>;

export type ClassType = 
    | "Gloves" 
    | "Incursion Items" 
    | "Mana Flasks" 
    | "One Hand Axes" 
    | "Quest Items" 
    | "Delve Stackable Socketable Currency" 
    | "Microtransactions" 
    | "Claws" 
    | "Body Armours" 
    | "Blueprints" 
    | "Contracts" 
    | "Atlas Upgrade Items" 
    | "Heist Cloaks" 
    | "Rings" 
    | "Maps" 
    | "Misc Map Items" 
    | "Thrusting One Hand Swords" 
    | "Staves" 
    | "Metamorph Samples" 
    | "Divination Cards" 
    | "Quivers" 
    | "One Hand Swords" 
    | "Map Fragments" 
    | "Life Flasks" 
    | "Bows" 
    | "Two Hand Swords" 
    | "Amulets" 
    | "Two Hand Maces" 
    | "Two Hand Axes" 
    | "Sceptres" 
    | "Stackable Currency" 
    | "Sentinel" 
    | "Incubators" 
    | "Expedition Logbooks" 
    | "Pieces" 
    | "Trinkets" 
    | "Jewels" 
    | "Hybrid Flasks" 
    | "One Hand Maces" 
    | "Heist Brooches" 
    | "Active Skill Gems" 
    | "Heist Tools" 
    | "Daggers" 
    | "Abyss Jewels" 
    | "Heist Gear" 
    | "Boots" 
    | "Rune Daggers" 
    | "Heist Targets" 
    | "Pantheon Souls" 
    | "Leaguestones" 
    | "Labyrinth Trinkets" 
    | "Support Skill Gems" 
    | "Labyrinth Items" 
    | "Hideout Doodads" 
    | "Fishing Rods" 
    | "Utility Flasks" 
    | "Shields" 
    | "Helmets" 
    | "Warstaves" 
    | "Belts" 
    | "Wands";

export function isClassType(value: string): value is ClassType {
    if(
        value === "Gloves" ||
        value === "Incursion Items" ||
        value === "Mana Flasks" ||
        value === "One Hand Axes" ||
        value === "Quest Items" ||
        value === "Delve Stackable Socketable Currency" ||
        value === "Microtransactions" ||
        value === "Claws" ||
        value === "Body Armours" ||
        value === "Blueprints" ||
        value === "Contracts" ||
        value === "Atlas Upgrade Items" ||
        value === "Heist Cloaks" ||
        value === "Rings" ||
        value === "Maps" ||
        value === "Misc Map Items" ||
        value === "Thrusting One Hand Swords" ||
        value === "Staves" ||
        value === "Metamorph Samples" ||
        value === "Divination Cards" ||
        value === "Quivers" ||
        value === "One Hand Swords" ||
        value === "Map Fragments" ||
        value === "Life Flasks" ||
        value === "Bows" ||
        value === "Two Hand Swords" ||
        value === "Amulets" ||
        value === "Two Hand Maces" ||
        value === "Two Hand Axes" ||
        value === "Sceptres" ||
        value === "Stackable Currency" ||
        value === "Sentinel" ||
        value === "Incubators" ||
        value === "Expedition Logbooks" ||
        value === "Pieces" ||
        value === "Trinkets" ||
        value === "Jewels" ||
        value === "Hybrid Flasks" ||
        value === "One Hand Maces" ||
        value === "Heist Brooches" ||
        value === "Active Skill Gems" ||
        value === "Heist Tools" ||
        value === "Daggers" ||
        value === "Abyss Jewels" ||
        value === "Heist Gear" ||
        value === "Boots" ||
        value === "Rune Daggers" ||
        value === "Heist Targets" ||
        value === "Pantheon Souls" ||
        value === "Leaguestones" ||
        value === "Labyrinth Trinkets" ||
        value === "Support Skill Gems" ||
        value === "Labyrinth Items" ||
        value === "Hideout Doodads" ||
        value === "Fishing Rods" ||
        value === "Utility Flasks" ||
        value === "Shields" ||
        value === "Helmets" ||
        value === "Warstaves" ||
        value === "Belts" ||
        value === "Wands"
    ) {
        return true;
    }
    return false;
}