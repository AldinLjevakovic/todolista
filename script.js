const dodaj = document.querySelector(".dodaj"); // Dugme
const glavni = document.querySelector(".zadaca"); // glavni div
const brisi = document.querySelector(".brisi"); // dugme za brisanje
let vrijednost = document.querySelector(".stavi").value; // input za dodavanje
let noviDiv = document.createElement("div"); // novi div
let noviInput = document.createElement("input"); // novi input
let noviLabel = document.createElement("label"); // novi label
let counter = 0;

// Dodavanje elemenata
dodaj.addEventListener("click", function () {
  if (counter < 10) {
    vrijednost = document.querySelector(".stavi").value;

    if (vrijednost === "") {
      alert("Unesi vrijednost");
      return;
    }

    if (vrijednost.length > 50) {
      alert("Text cannot be more than 25 characters!");
      return;
    }

    noviDiv = document.createElement("div");
    noviInput = document.createElement("input");
    noviLabel = document.createElement("label");

    noviInput.style.marginRight = "5px";
    noviLabel.style.fontSize = "25px";

    noviInput.type = "checkbox";
    noviLabel.textContent = vrijednost;
    noviDiv.appendChild(noviInput);
    noviDiv.appendChild(noviLabel);
    glavni.appendChild(noviDiv);

    document.querySelector(".stavi").value = "";
    counter++;
  }
});

// Brisanje elemenata
brisi.addEventListener("click", function () {
  console.log("stisno");
  let check = document.querySelectorAll(
    ".zadaca input[type='checkbox']:checked"
  );

  check.forEach((element) => {
    console.log("Checkbox Found");
    let glDiv = element.parentNode;
    glDiv.parentNode.removeChild(glDiv);
  });
});
