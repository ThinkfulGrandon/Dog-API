



function getImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson =>
        console.log(responseJson));
        
}



function waitForSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const num = $('#dog-amount').val();
        getImages(num);
    })
};




$(function callBack() {
    waitForSubmit();
});