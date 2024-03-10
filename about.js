document.addEventListener("DOMContentLoaded", function () {

  fetch("./data.json")
    .then(response => response.json())
    .then(myPhotos => loadPhotos(myPhotos))
    .catch(error => console.error('Error fetching data:', error));

  function loadPhotos(myPhotos) {
    var mainContainer = document.getElementById("photoCard");


    for (let i = 0; i < myPhotos.photos.length; i++) {

      let varPhoto = myPhotos.photos[i].image;
      let varBio = myPhotos.photos[i].bio;
      let varName = myPhotos.photos[i].name;
      let varContact = myPhotos.photos[i].contact;
      let division = document.createElement("div");

      division.innerHTML = `
        <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src = ${varPhoto} alt="..." style="width: 500px; height: 500px;"></img>
            <!-- <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"> -->
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${varName}</h1>
            <p class="lead">${varBio}</p>
            <p class="lead">${varContact}</p>
      
          </div>
        </div>
      </div>

<div class="b-example-divider"></div>
      
        `;
      mainContainer.appendChild(division);
    }

  }

});