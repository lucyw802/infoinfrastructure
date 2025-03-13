const productRef = document.querySelector("#product");

const productItems = [
    {
        image:
        "img src = 'images/i210-midterm-product1.web'",
        name: "My First Fire",
    },
    {
        image:
        "img src = 'images/i210-midterm-product2.webp'",
        name: "Nap Sack",
    },
    {
        image:
        "img src = 'images/i210-midterm-product3.webp'",
        name: "Hot Tub Wildlife Feeder",
    },
    {
        image:
        "img src = 'images/i210-midterm-product4.webp'",
        name: "Toilet Meadow",
    },
    {
        image:
        "img src = 'images/i210-midterm-product5.webp'",
        name: "Pudding Pouch",
    },
    {
        image:
        "img src = 'images/i210-midterm-product6.webp'",
        name: "Handy Hand",
    },
];

productRef.innerHTML = "";

for (let index = 0; index < productItems.length; index++){
    const item = productItems [index];

    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + item.name + "</p>";
    newArticle.innerHTML += newP;

    productRef.appendChild(newArticle);
}