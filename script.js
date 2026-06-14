// Richtige Antwort erkennen
// Punkte zählen
// Namen wechseln

const alleElemente = [
  { name: "Asynchronmotor", bild: "Asynchronmotor.jpeg" },
  { name: "Blindniet", bild: "Blindniet.jpg" },
  { name: "Bohrer", bild: "Bohrer.jpg" },
  { name: "Drehmomentschluessel", bild: "Drehmomentschluessel.jpg" },
  { name: "Drehstarre Ausgleichskupplung", bild: "Drehstarre Ausgleichskupplung.jpeg" },
  { name: "Faecherscheibe", bild: "Faecherscheibe.jpg" },
  { name: "Flachdichtung", bild: "Flachdichtung.jpg" }
];

let aktuelleFrage = 0;

const fragen = [
  "Asynchronmotor",
  "Blindniet",
  "Bohrer"
];

const frageName = document.getElementById("frageName");
const bilderBereich = document.getElementById("bilderBereich");

frageName.textContent = fragen[aktuelleFrage];

for (let i = 0; i < alleElemente.length; i++) {
  const bild = document.createElement("img");

  bild.src = alleElemente[i].bild;
  bild.classList.add("test-image");

  bild.onclick = function() {
    if (alleElemente[i].name === fragen[aktuelleFrage]) {
      alert("Richtig!");

      aktuelleFrage++;

      if (aktuelleFrage < fragen.length) {
        frageName.textContent = fragen[aktuelleFrage];
      } else {
        alert("Test beendet");
      }

    } else {
      alert("Falsch!");
    }
  };

  bilderBereich.appendChild(bild);
}