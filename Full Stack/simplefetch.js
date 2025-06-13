fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        console.log("Name:", user.name.first, user.name.last);
    }).catch(error => console.error('Error:', error));

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log("Random Dog Image URL:", data.message);
    }).catch(error => console.error('Error:', error));

    