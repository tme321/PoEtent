import { EntryState, Filter, isEntryState } from "../filterEntrySpec";
import { parseFilterBlock } from "./parsers/parsers";

export function readFilter(filterText: string): Filter {
    const lines = filterText.split(/\r\n|\r|\n/);
    const filterBlockStart = /^(?<state>Show|Hide|Continue)(\s|#|$)/;
    const indentedLine = /^(\s+)/;

    const filter: Filter = []; 
    //let blocksRead = 0;

    let state: EntryState | undefined;
    let currentBlock: Array<string> = [];

    lines.forEach((line,num)=>{
        const tl = line.trim();

        if(!tl.startsWith("#")) {
            const blockStart = tl.match(filterBlockStart);
            if(blockStart?.groups && "state" in blockStart.groups) {

                const nextState = { state: blockStart.groups["state"]};

                /* flush each previous block as a new one is started */
                if(isEntryState(nextState)) {
                    state = nextState;

                    if(currentBlock.length > 0) {
                        filter.push(parseFilterBlock(state, currentBlock));
                        //blocksRead++;
                        currentBlock = [];
                        state = undefined;
                    }
                }
            }
            else {
                const blockLine = line.match(indentedLine);
                if(!!blockLine) {
                    currentBlock.push(tl);
                }
            }
        }

        /* flush last block */
        if(num === lines.length -1) {
            if(state !== undefined && currentBlock.length > 0) {
                filter.push(parseFilterBlock(state, currentBlock));
                //blocksRead++;
                currentBlock = [];
                state = undefined;
            }
        }
    });

    return filter;
}

