

let instruments = [
    "Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Saxophone",
    "Flute",
]

for (let i = 0; i < instruments.length; i++)
{
    console.log(instruments[i]);
}

instruments.forEach(function(instrument) {
    console.log(instrument);

});

let instrumentList = document.getElementById("lessonlist");

instruments.forEach(function(instrument) {
    let listItem = document.createElement("li");
    listItem.textContent = instrument; 
  
  
    instrumentList.appendChild(listItem);
});
