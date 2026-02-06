// Q14. The "Callback" Context Trap

// const player = {
//     score: 50,
//     updateScore() {
//         setTimeout(function() {
//             console.log(this.score);
//         }, 100);
//     }
// };
// player.updateScore();
const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};
player.updateScore();
// Output is undefined because inside the callback function of setTimeout 'this' does not refer to the player object but to the global context.
// To fix this we can use an arrow function which does not have its own 'this' and takes 'this' from it's lexical context.