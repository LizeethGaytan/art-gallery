// Generate random artwork id
const artworkID = Math.floor(Math.random() * 100000);

//HTML Elements, that will display data, stored in variables
const imgElement = document.querySelector('img');
const imgTitleElement = document.getElementById('artwork-name');
const btnElement = document.getElementById('random-btn');

// Fetch API
fetch(`https://api.artic.edu/api/v1/artworks/${artworkID}`)
    .then(function (response) { return response.json(); })
    .then(data => {
        const artInfo = data;
        console.log(artInfo);

        // Assign Values to Elements
        imgTitleElement.textContent = `${artInfo.data.title}`;
        imgElement.src = `https://www.artic.edu/iiif/2/${artInfo.data.image_id}/full/843,/0/default.jpg`;

        // TODO: addEventListener, refresh page, to btn using the window.location.reload() method
        // btnElement.addEventListener('click', function () {
        //     window.location.reload();
        // });
    })
    .catch(error => console.error('Error: ', error))

btnElement.addEventListener('click', function () {
    window.location.reload();
});
