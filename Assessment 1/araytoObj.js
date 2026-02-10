const input = [
    { id: 3, tags: ["a", "b"] },
    { id: 1, tags: ["b", "c"] },
    { id: 2, tags: ["a", "c", "d"] },
    { id: 2, tags: ["d", "e"] }
];

const output = input.reduce((acc, res) => {
    for (let x = 0; x < res.tags.length; x++) {

        if (acc[res.tags[x]]) {
            if (!acc[res.tags[x]].includes(res.id)) {
                //console.log(res.tags[x].includes(res.id));
                acc[res.tags[x]].push(res.id);
            }

        } else {
            const b = [];
            b.push(res.id);
            acc[res.tags[x]] = b;
        }

    }
    return acc;
}, {});
console.log(output);