fetch("./data.json")
    .then(response => response.json())
    .then(myData => loadData(myData));

function loadData(myData){
    var mainContainer = document.getElementById("posts");

    

    for(let i =0; i<myData.services.length; i++){

    let varText = myData.news[i].text;
    let varTitle = myData.news[i].title;
    let varImage = myData.news[i].image;


    let division = document.createElement("div");
  
        
        division.innerHTML = `
        <style>
        #imgClass img {
            max-width: 100%;
            max-height: 100%;
        }
        </style>
        <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">${varTitle} <span class="text-body-secondary"></span></h2>
          <p class="lead">${varText}</p>
        </div>
        <div class="col-md-5 order-md-1">
        <div id="imgClass">
          <img src ="${varImage}" id ="hi"></img>
          </div>
        </div>
      </div>
  
      <hr class="featurette-divider">

        `;
        mainContainer.appendChild(division);

        
    }
}