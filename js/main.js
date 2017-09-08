const searchBeer = (name,before) =>{

    var url = `https://api.punkapi.com/v2/beers?beer_name=${name}&brewed_before=${before}`;

    if(before.trim()== ""){
        url=  url.replace("&brewed_before=","");
    }if(name.trim()==""){
        url=  url.replace("beer_name=","");
    }


    return    fetch(url)
}
$("#searchButton").click(function () {
    searchBeer($("#beername").val(), $("#bbefore").val()).then(value =>value.json()).then(
       beers => {
           $("#result").empty();
           beers.forEach((val,index)=>{
               var s = "";
               s+=`<div class="col-lg-4">`;
               s+=`<div class="card">`;
               s+=`<center><div class="image-beer"><img class="card-img-top" src="${val.image_url}" alt="Card image cap" style="width: auto"></div></center>`;
               s+=`<div class="card-body">`;
               s+=`<h4 class="card-title">${val.name}</h4>`;
               s+=`<p class="card-text">${val.description}</p>`;
               s+=`<p class="card-text"><small class="text-muted">First Brewed : ${val.first_brewed}</small></p>`;
               s+=`</div>`;
               s+=`</div>`;
               s+=`</div>`;
               $("#result").append(s);
           })
       }
    )});

