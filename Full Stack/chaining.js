let promiss = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise started 1 stage");
        setTimeout(() => {
            console.log("Promise started 2 stage");
            setTimeout(() => {
                try {
                    console.log("Promise started 3 stage");
                    console.lg("Promise started 3 stage");
                    resolve("Promise resolved successfully!");
                } catch (error) {
                    reject("Got ERROR");
                }
            }, 1000);
        }, 2000);
    }, 1000);
})

promiss
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Promise completed");
    });