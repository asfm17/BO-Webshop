let allProducts = document.getElementsByClassName("product");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i =0; i < filters.length; i++){
    filters[i].checked = true;
}

//accessoires filter
let accesoiresFilter = document.getElementById("checkbox-accessoires");
console.log("accesoiresFilter typeof: " + typeof(accesoiresFilter));
accesoiresFilter.onchange = function(){
    console.log('change');
    if(accesoiresFilter.checked === true){
        for(let i =0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "accesoires"){
        }       allProducts[i].style.display = "block";
    }
}
}

//celestron filter
let celestronFilter = document.getElementById("checkbox-celestron");
console.log("celestronFilter typeof: " + typeof(celestronFilter));
celestronFilter.onchange = function(){
    console.log('change');
    if(celestronFilter.checked === true){
        for(let i =0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "celestron"){
        }       allProducts[i].style.display = "block";
    }
}
}

//meade filter
let meadeFilter = document.getElementById("checkbox-meade");
console.log("meadeFilter typeof: " + typeof(meadeFilter));
meadeFilter.onchange = function(){
    console.log('change');
    if(meadeFilter.checked === true){
        for(let i =0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "meade"){
        }       allProducts[i].style.display = "block";
    }
}
}

//orion filter
let orionFilter = document.getElementById("checkbox-orion");
console.log("orionFilter typeof: " + typeof(orionFilter));
orionFilter.onchange = function(){
    console.log('change');
    if(orionFilter.checked === true){
        for(let i =0; i < allProducts.length; i++){
            if(allProducts[i].dataset.category === "orion"){
        }       allProducts[i].style.display = "block";
    }
}
}