export default function two_crystal_balls(breaks: boolean[]): number {
    const jumps = Math.floor(Math.sqrt(breaks.length));
    let jumpsIdx = jumps;

    //* Check if jumpsIdx is break position
    for (; jumpsIdx < breaks.length; jumpsIdx += jumps) {
        if (breaks[jumpsIdx] === true) {
            break;
        }
    }

    jumpsIdx -= jumps;
    //* walk from 0 - first breaks idx to jumpsIdx
    //* search 1st break position
    for (let j = 0; j <= jumps && jumpsIdx < breaks.length; j++, jumpsIdx++) {
        if (breaks[jumpsIdx] === true) {
            return jumpsIdx;
        }
    }

    return -1;
}
