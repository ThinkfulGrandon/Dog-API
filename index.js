
function randomDogs() {
    $('.js-random-dogs').submit(event => {
        event.preventDefault();
        const num = $('#dog-amount').val();
        getImages(num);
    })
};


function getImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => renderPictures(responseJson)
      
    );
};

function renderPictures(responseJson) {
    console.log(responseJson);

    for (i = 0; i < responseJson.message.length; i++) {
        console.log(i);
 
        $('.group').append(`
        <img src="${responseJson.message[i]}" class="item">
        `);
    }
}




function dogBreeds() {
    $('.js-dog-breeds').submit(event => {
        event.preventDefault();
        const name = $('#dog-breed').val();
        getBreedImages(name);
    })
};

function getBreedImages(name) {
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then(response => response.json())
    .then(responseJson => renderOnePicture(responseJson)
    );
}

function renderOnePicture(responseJson) {
    console.log(responseJson);

    $('.group').append(`
        <img src="${responseJson.message}" class="item">
    `);
}



$(function callBack() {
    randomDogs();
    dogBreeds();
});