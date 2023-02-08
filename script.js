var element = [
  "hydrogen",
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
  1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

var randomNumber;
function randomNumbers() {
  randomNumber = Math.floor(Math.random() * atomicNumber.length );
  return randomNumber;
}

var value;
var innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
console.log(element[randomNumber]);

// FOR SUBMIT BUTTON CLICK
$("#submit").on("click", function () {
  value = document.getElementById("type-name").value.toLowerCase();

  if (value == element[randomNumber]) {
    alert("Correct😊👌");
    element.splice(randomNumber, 1);
    atomicNumber.splice(randomNumber, 1);

    if  (atomicNumber.length == 0 ) {
      element = [
        "hydrogen",
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
      atomicNumber = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26,
      ];
    }

    innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
    document.getElementById("type-name").value = "";

    // random = Math.floor(Math.random() * atomicNumber.length + 1);
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
      atomicNumber.splice(randomNumber, 1);
      element.splice(randomNumber, 1);

      if  (atomicNumber.length == 0 ) {
        element = [
          "hydrogen",
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
        atomicNumber = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
          22, 23, 24, 25, 26,
        ];
      }

      innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
      document.getElementById("type-name").value = "";
    } else {
      alert("Wrong 😱. Now train for another 1000 Years");
    }
  }
});


