
// animates the drop down list and changes the color of the text
$('#childList').css("color", "white");
$('#parentList > li').hover(function(){
    $(this).find('#childList').show(400);
 }, function(){
    $(this).find('#childList').hide(400);
});

// looks for a value in session storage to tell if the user has already liked an article, if so the html is changed
function pageLoaded(){

    if(sessionStorage.getItem("liked") != null){
        let container = document.getElementById("likeButtonContainer");
        let spanElement = document.createElement('span');
        spanElement.innerHTML = "You Liked this Article";
        container.appendChild(spanElement);
    };

    
};

// saves the heading and paragraph elements to local storage when the user 'saves' the article
let btnSaveArticle = document.getElementById("btn-Photo");
btnSaveArticle.addEventListener("click", function(){

    let headingText = document.querySelector('h1').innerHTML;
    let paragraphText = document.querySelector('p').innerHTML;

    localStorage.setItem("headingTextPhoto", headingText);
    localStorage.setItem("paragraphTextPhoto", paragraphText);

    itemsCount(); // calls a function to alert the user of the number of items he/she has saved
});

// saves the URL of the image to local storage when the user 'saves' it
let btnSaveImage = document.getElementById("btnSaveImage");
btnSaveImage.addEventListener("click", function(){

    let imageElement = document.getElementById("bigImage").src; 
   localStorage.setItem("Image1", JSON.stringify(imageElement));
    
    itemsCount(); // calls a function to alert the user of the number of items he/she has saved
});

// returns the number of items in local storage as an alert
function itemsCount(){

    let number = localStorage.length
    alert(number + " items saved");
};

// tells the user he/she liked an article and saves a value to session storage
function like(){

    let container = document.getElementById("likeButtonContainer");
    let spanElement = document.createElement('span');
    spanElement.innerHTML = "You Liked this Article";

    container.appendChild(spanElement);
    sessionStorage.setItem("liked", "liked");
};

// adds the users input/comment to the page and resets the form
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(){

    let userComment = document.querySelector('textarea').value;
    let commentsContainer = document.getElementById("comments");
    let comment = document.createElement('p');
    comment.innerHTML = userComment;
    

    commentsContainer.appendChild(comment);
    let myForm = document.getElementById('myForm');
    myForm.reset();
});

