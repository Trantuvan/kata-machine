export default function bubble_sort(arr: number[]): void {
    // let arrLength: number = arr.length;
    // let temp: number;
    // do {
    //     for (let i = 0; i < arrLength; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             temp = arr[i];
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = temp;
    //         }
    //     }
    //     //* single iteration always leaves the largest value at the end
    //     //* next iteration arrLength - 1
    //     arrLength -= 1;
    // } while (arrLength > 0);
    //* Prime version

    //* outer loop just like dowhile until reaches arrLength to complete
    for (let i = 0; i < arr.length; i++) {
        //* inner loop take this index j to get arrValue
        //* compare a[j] to a[j+1] - arrLength - 1 exclude last index
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
