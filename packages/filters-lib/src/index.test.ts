import { writeEntry } from "./writer";
import { readFilter } from "./reader";
import { FilterEntry, Sockets } from "./filterEntrySpec";

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

const entry = writeEntry(quickEntrySpec);
console.log(entry);

const filter = readFilter(entry);
console.log(`Filter Blocks Returned: ${filter.length}`);

//import axios from "axios";

//console.log(`entries: ${JSON.stringify(filter)}`);


/*
const filterFile = process.argv[2];

const fs = require("fs");

const buffer = fs.readFileSync(filterFile);

const fileContent = buffer.toString();

const filter = readFilter(fileContent);
console.log(`Filter Blocks Returned: ${filter.length}`);
console.log(`Fiter:\n${JSON.stringify(filter)}`);


const URL = "https://www.poewiki.net/w/api.php?";

const PARAMS = {
    "action": "cargoquery",
    "tables": "items",
    "fields": "items.name",
    "where": "rarity=\"Unique\"",
    //"group_by": "items.name",
    //"order_by": "\"cargo__items\".\"name\"",
    "limit": "10",
    "format": "json"
    
}
const builtParams = new URLSearchParams(PARAMS);

console.log(`Getting url ${URL+builtParams}`);

axios.get(URL+builtParams).then(resp=>{
    console.log(resp.data.cargoquery);
})

*/
