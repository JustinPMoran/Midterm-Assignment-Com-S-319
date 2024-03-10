fetch("./data.json")
    .then(response => response.json())
    .then(myData => loadData(myData));

function loadData(myData){
    var mainContainer = document.getElementById("serve");
    var mainContainer2 = document.getElementById("desc");
    

    for(let i =0; i<myData.services.length; i++){

    let varPrice = myData.services[i].price;
    let varMember = myData.services[i].membership;
    let varDes = myData.services[i].description;
    let varBack = myData.services[0].background;
    let varImage = myData.services[i].image;

    let division = document.createElement("div");
    let divDesc = document.createElement("div");
        
        division.innerHTML = `
        <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">${varMember}</h4>
        </div>
        <div class="card-body">
        
          <h1 class="card-title pricing-card-title">$${varPrice}<small class="text-body-secondary fw-light">/mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li></li>
          </ul>
          <form method = "get" action = "#descriptions">
          <button type="submit" class="w-100 btn btn-lg btn-primary">Get Started</button>
          </form>
        </div>
      </div>
      <style>
      .card-body{
        background-image: url(${varBack});
      }
      
        `;
        mainContainer.appendChild(division);

        divDesc.innerHTML = `

            
        <div id = "descriptions" class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">${varMember} Membership</h1>
        <div class="col-lg-6 mx-auto"> 
          <p class="lead mb-4">${varDes}</p>

        </div>
        <div class="overflow-hidden" style="max-height: 40vh;">
          <div class="container px-5">
            <img src=${varImage} ></img>
          </div>
        </div>
      </div>
    
          
            `;
            mainContainer2.appendChild(divDesc);
    }
}