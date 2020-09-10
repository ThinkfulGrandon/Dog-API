

function checkValue() {
    $('.js-random-dogs').submit('#dog-amount', event => {
        event.preventDefault();
        const amount = $('#dog-amount').val();
        console.log(amount);
        if (amount > 50 || amount < 1) {
            alert("Please select between 1 and 50 pictures.");
        } else if (amount < 51) {
            getImages(amount);
            clearPrevious()
        }
    });
}


function clearPrevious() {
    $('.group').replaceWith('<div class="group"><div>');
}

function getImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => renderPictures(responseJson))
    .catch(error => alert("Sorry, someone let the dogs out! Couldn't retrieve pictures at this time."));
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
        clearPrevious();
        const name = $('#dog-breed').val();
        getBreedImages(name);
    })
};

function getBreedImages(name) {
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then(response => response.json())
    .then(responseJson => renderOnePicture(responseJson))
    .catch(error => alert("Sorry, someone let the dogs out! Couldn't retrieve pictures at this time."));
}

function renderOnePicture(responseJson) {
    console.log(responseJson);

    $('.group').append(`
        <img src="${responseJson.message}" class="item">
    `);
}



$(function callBack() {
    checkValue();
    dogBreeds();
});