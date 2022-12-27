var element = [
    "Hydogen",
    "Helium",
    "Lithium",
    "Beryllium",
    "Boron",
    "Carbon",
    "Nitrogen",
    "Oxygen",
    "Fluorine",
    "Neon",
    "Sodium",
    "Magnesium",
    "Aluminium",
    "Silicon",
    "Phosphorus",
    "Sulphur",
    "Chlorine",
    "Argon",
    "Potassium",
    "Calcium",
    "Scandium",
    "Titanium",
    "Vanadium",
    "Chromium",
    "Manganese",
    "Iron",
  ];
  var atomicmass = [
    1,4,7,9,10,12,14,16,19,20,23,24,27,28,31,32,35.5,40,39,40,45,48,51,52,55,56
  ]
  var atomicNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26,
  ];
  
  var randomNumber;
  function randomNumbers() {
    randomNumber = Math.floor(Math.random() * 26 + 1);
    return randomNumber;
  }
  var random = randomNumbers();
  var value;
  var innerNumber = $("#NameOfElement").text(element[randomNumbers()]);
  
  // FOR SUBMIT BUTTON CLICK
  $("#submit").on("click", function () {
    value = document.getElementById("type-name").value;
  
    if (value == atomicmass[randomNumber]) {
      alert("Correct😊👌");
      innerNumber = $("#NameOfElement").text(element[randomNumbers()]);
      document.getElementById("type-name").value = "";
    } else {
      alert("Wrong 😱. Now train for another 1000 Years");
    }
  });
  
  // FOR AGAIN BUTTON CLICK
  $("#again").on("click", function () {
    innerNumber = $("#NameOfElement").text(element[randomNumbers()]);
  });
  
  // FOR KEYBOARD PRESS ENTER
  $(document).keyup(function (e) {
    if (e.which === 13) {
      value = document.getElementById("type-name").value;
  
      if (value == atomicmass[randomNumber]) {
        alert("Correct 😊👌 ");
        innerNumber = $("#NameOfElement").text(element[randomNumbers()]);
        document.getElementById("type-name").value = "";
      } else {
        alert("Wrong 😱. Now train for another 1000 Years");
      }
    }
  });
  