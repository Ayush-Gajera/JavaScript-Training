const input = [1, 2, 3, 4, 5, 6, 7, 8];
function chunkarray(arr, size) {
    return arr.reduce((acc, ar, index) => {
        if (index % size == 0) {
            acc.push(arr.slice(index, index + size));
        }
        return acc;
    }, []);
}

const output = chunkarray(input, 3);
console.log(output);
