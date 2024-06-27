let allProducts = document.getElementsByClassName("product");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0, 0);

setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for (let i = 0; i < filters.length; i++) {
    filters[i].checked = false;
}

//accessoires filter
let accessoiresFilter = document.getElementById("checkbox-accessoires");
console.log(accessoiresFilter);
accessoiresFilter.onchange = function () {
    console.log('change');
    if (accessoiresFilter.checked === true) {
        for (let i = 0; i < allProducts.length; i++) {
            console.log(allProducts[i].dataset.category);
            if (allProducts[i].dataset.category === "accessoires") {
                allProducts[i].style.display = "block";
            }
            else {
                allProducts[i].style.display = "none";
            }
        }
    }
    else {
        for (let i = 0; i < allProducts.length; i++) {
            allProducts[i].style.display = "block";
        }
    }
}

//celestron filter
let celestronFilter = document.getElementById("checkbox-celestron");
console.log(celestronFilter);
celestronFilter.onchange = function () {
    console.log('change celestron');
    if (celestronFilter.checked === true) {
        for (let i = 0; i < allProducts.length; i++) {
            if (allProducts[i].dataset.category === "celestron") {
                allProducts[i].style.display = "block";
            }
            else {
                allProducts[i].style.display = "none";
            }
        }
    }
    else {
        for (let i = 0; i < allProducts.length; i++) {
            allProducts[i].style.display = "block";
        }
    }
}

//meade filter
let meadeFilter = document.getElementById("checkbox-meade");
console.log(meadeFilter);
meadeFilter.onchange = function () {
    console.log('change');
    if (meadeFilter.checked === true) {
        for (let i = 0; i < allProducts.length; i++) {
            console.log(allProducts[i].dataset.category);
            if (allProducts[i].dataset.category === "meade") {
                allProducts[i].style.display = "block";
            }
            else {
                allProducts[i].style.display = "none";
            }
        }
    }
    else {
        for (let i = 0; i < allProducts.length; i++) {
            allProducts[i].style.display = "block";
        }
    }
}

//orion filter
let orionFilter = document.getElementById("checkbox-orion");
console.log(orionFilter);
orionFilter.onchange = function () {
    console.log('change');
    if (orionFilter.checked === true) {
        for (let i = 0; i < allProducts.length; i++) {
            console.log(allProducts[i].dataset.category);
            if (allProducts[i].dataset.category === "orion") {
                allProducts[i].style.display = "block";
            }
            else {
                allProducts[i].style.display = "none";
            }
        }
    }
    else {
        for (let i = 0; i < allProducts.length; i++) {
            allProducts[i].style.display = "block";
        }
    }
}

function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
