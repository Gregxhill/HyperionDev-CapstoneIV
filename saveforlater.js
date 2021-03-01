$(function(){

    // saves the items from local storage and appends them as new HTML elements 
    let btnShow = document.getElementById("showSaved");
    btnShow.addEventListener("click", function(){

        // saves all saved items from the photography page
        let headingPhotoPage = localStorage.getItem("headingTextPhoto");
        let articlePhotoPage = localStorage.getItem("paragraphTextPhoto");
        let imagePhotoPage = JSON.parse(localStorage.getItem("Image1"));

        // saves all saved items from the videography page
        let headingVideoPage = localStorage.getItem("headingTextVideo");
        let articleVideoPage = localStorage.getItem("paragraphTextVideo");
        let imageVideoPage = JSON.parse(localStorage.getItem("Image2"));

        let container = document.getElementById("container")

        // if the items exist in local storage, new HTML elements are created and added to the page
        if(headingPhotoPage != null){
            let headingPhoto = document.createElement('h1');
            let paragraphPhoto = document.createElement('p');
            headingPhoto.innerHTML = headingPhotoPage;
            paragraphPhoto.innerHTML = articlePhotoPage;
            container.appendChild(headingPhoto);
            container.appendChild(paragraphPhoto);
        };

        if(imagePhotoPage != null){
            let Image1 = document.createElement('img');
            Image1.src = imagePhotoPage;
            container.appendChild(Image1);
        };

        if(headingVideoPage != null){
            let headingVideo = document.createElement('h1');
            let paragraphVideo = document.createElement('p');
            headingVideo.innerHTML = headingVideoPage;
            paragraphVideo.innerHTML = articleVideoPage;
            container.appendChild(headingVideo);
            container.appendChild(paragraphVideo);
        }
        if(imageVideoPage != null){
            let Image2 = document.createElement('img');
            Image2.src = imageVideoPage;
            container.appendChild(Image2);
        };

        
        
    });

    // animates the images to fade out
    $("#hideImages").click(function(){

        $("img").fadeOut();
    });

    // fades in the images 
    $("#showImages").click(function(){

        $("img").fadeIn();
    });

});

