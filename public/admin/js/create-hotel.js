let createhForm = document.querySelector('.createh-hotel-form');
let createhTitle = document.querySelector('#createh-title');
let createhCountry = document.querySelector('#createh-country');
let createhImageUrl = document.querySelector('#createh-image-url');
let createhText = document.querySelector('#createh-text');
let createhImageFile = document.querySelector('#createh-image-file');

createForm.addEventListener('submit', function(e){
    e.preventDefault();
    let text = createhText.value;
    let data = new FormData(); //by writing this, we create an object of the type form data.
    data.append('title', createhTitle.value);
    data.append('country', createhCountry.value);
    data.append('imageUrl', createhImageUrl.value);
    data.append('text', text);
    data.append('description', text.substring(0, text.indexOf('.')+1));
    data.append('imageFile', createhImageFile.files[0]); //now the file which we choose will be sent to the server

    fetch('http://localhost:3000/hotels' , {
        method: 'POST',
      /* headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ //we send the data to the server in json farmat
            title: createTitle.value,
            country: createCountry.value,
            imageUrl: createImageUrl.value,
            text: text,
            description: text.substring(0, text.indexOf('.')+1)
            //to add dot we added +1! The first sentence we took for description.
        })*/
        body: data
    }).then((res) => res.text())
    //.then((data) => console.log(data));
    .then((data) => window.history.go());
})

//Image
function disableInput(input1, input2){
    if(input1.value) {
        input2.disabled = true;
    }else{
        input2.disabled = false;
    }
}


createhImageUrl.addEventListener('change', function(){
    disableInput(this, createhImageFile)
});
createhImageFile.addEventListener('change', function(){
    disableInput(this, createhImageUrl)
});