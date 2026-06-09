document.getElementById("lastModified").innerHTML = document.lastModified;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];



const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");

    // value uses the id
    option.value = product.id;

    // text shown to user uses the name
    option.textContent = product.name;

    productSelect.appendChild(option);
});

// // review.js

// let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// reviewCount++;

// localStorage.setItem("reviewCount", reviewCount);

