//promiss age check only 1 parameter is callback function

// This function checks if the provided age is 18 or older.

var age = 18;
function checkAgePromise(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("You are an adult.");
        } else {
            reject("You are not an adult.");
        }
    });
}

checkAgePromise(age)
    .then(message => {
        console.log(message); 
    })
    .catch(error => {
        console.error(error); 
    });



