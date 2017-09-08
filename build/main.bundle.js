"use strict";

var searchBeer = function searchBeer(name, before) {
    return new Promise(function (resolve) {
        return fetch("https://api.punkapi.com/v2/beers?beer_name=" + name + "&brewed_before=" + before);
    });
};
$("#searchButton").click(function () {
    alert("เข้า");
    searchBeer("punk", "10-2011").then(function (response) {
        console.log(response.json());
    }) .catch(e => console.error('Something went wrong', e));
});
