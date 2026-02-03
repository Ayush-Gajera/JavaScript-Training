// Q12. Explicit Binding (Call/Apply)

// const agent = {
//     id: 101
// };

// function showId() {
//     console.log(this.id);
// }

// showId.call(agent);
// showId.apply(null);

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);
//It logs 101 because in call method we are explicitly setting the this context to agent object with id 101.
//In apply method we are setting this context to null so it refers to global object which does not have id property hence it logs undefined.