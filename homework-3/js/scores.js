
let scores = [
    "95",
    "72",
    "88",
    "45",
    "60",
    "79",
    "82",
    "91",
    "50",
    "38",
]

for (let i = 0; i < scores.length; i++)
{
    console.log(scores[i]);
}

scores.forEach(function(score) {
    console.log(score);

});

let scoreList = document.getElementById("scoreList");

scores.forEach(function(score) {
    let listItem = document.createElement("li");
    listItem.textContent = score; 
  
  
    scoreList.appendChild(listItem);
});
const numbers = [
    95,72,88,45,60,79,82,91,50,38
];
const sum = numbers.reduce((acc, num) => acc+num, 0);
const average = sum / numbers.length;
document.getElementById("tests").textContent = ` ${average}`;