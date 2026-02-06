// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

//It logs "Fail" followed by "Recoverd" when promise is rejected the .catch() block is executed which logs the error message "Fail".
//Then it returns "Recovered" which is passed to the next .then() block that logs it.