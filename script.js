var element = [
  "hydogen",
  "helium",
  "lithium",
  "beryllium",
  "boron",
  "carbon",
  "nitrogen",
  "oxygen",
  "fluorine",
  "neon",
  "sodium",
  "magnesium",
  "aluminium",
  "silicon",
  "phosphorus",
  "sulphur",
  "chlorine",
  "argon",
  "potassium",
  "calcium",
  "scandium",
  "titanium",
  "vanadium",
  "chromium",
  "manganese",
  "iron",
];
var atomicNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

var randomNumber;
function randomNumbers() {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  return randomNumber;
}
var random = randomNumbers();
var value;
var innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);

// FOR SUBMIT BUTTON CLICK
$("#submit").on("click", function () {
  value = document.getElementById("type-name").value.toLowerCase();

  if (value == element[randomNumber]) {
    alert("Correct😊👌");
    innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
    document.getElementById("type-name").value = "";
  } else {
    alert("Wrong 😱. Now train for another 1000 Years");
  }
});

// FOR AGAIN BUTTON CLICK
$("#again").on("click", function () {
  innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
});

// FOR KEYBOARD PRESS ENTER
$(document).keyup(function (e) {
  if (e.which === 13) {
    value = document.getElementById("type-name").value.toLowerCase();

    if (value == element[randomNumber]) {
      alert("Correct 😊👌");
      innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
      document.getElementById("type-name").value = "";
    } else {
      alert("Wrong 😱. Now train for another 1000 Years");
    }
  }
});
