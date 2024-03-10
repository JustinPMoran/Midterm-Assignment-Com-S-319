fetch("./data.json")
    .then(response => response.json())
    .then(myData => loadData(myData));

function loadData(myData){
    var mainContainer = document.getElementById("benefit");

    for(let i = 0; i < myData.products.length; i++) {
        let varDesc = myData.products[i].desc;
        let varImage = myData.products[i].image;

        let division = document.createElement("div");
        let dDesc = document.createElement("div");
        division.innerHTML = `
        <div class="mx-auto card mb-4 rounded-3 shadow-sm" style="width:300px; text-align: center;">
            <div class=" card-header py-3">
                <h4 class="my-0 fw-normal">${varDesc}</h4>
            </div>
            <div class=" card-body rounded-3" style="background-color: #0071ce;">
                <img src=${varImage} alt="" class="img-fluid" style="height: 50px">
            </div>
        </div>
        `;

        mainContainer.appendChild(division);
    }
}
