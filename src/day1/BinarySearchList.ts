export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const midVal = haystack[mid];

        if (midVal === needle) {
            return true;
        } else if (midVal > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    } while (lo < hi);

    return false;
}
