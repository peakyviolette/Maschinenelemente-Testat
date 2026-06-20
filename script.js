// Alle Maschinenelemente
const alleElemente = [
  { name: "Asynchronmotor", bild: "Asynchronmotor.jpeg" },
  { name: "Blindniet", bild: "Blindniet.jpg" },
  { name: "Bohrer", bild: "Bohrer.jpg" },
  { name: "Drehmomentschluessel", bild: "Drehmomentschluessel.jpg" },
  { name: "Drehstarre Ausgleichskupplung", bild: "Drehstarre Ausgleichskupplung.jpeg" },
  { name: "Faecherscheibe", bild: "Faecherscheibe.jpg" },
  { name: "Flachdichtung", bild: "Flachdichtung.jpg" },
  { name: "Fraeser", bild: "Fraeser.jpg" },
  { name: "Gewindestift", bild: "Gewindestift.jpg" },
  { name: "Gleitfuerung", bild: "Gleitfuerung.jpeg" },
  { name: "Gleitlager", bild: "Gleitlager.jpeg" },
  { name: "Helicoil", bild: "Helicoil.jpg" },
  { name: "Holzschraube mit Pozidriv-Antrieb", bild: "Holzschraube mit Pozidriv-Antrieb.jpg" },
  { name: "Hydraulik Blasenspeicher", bild: "Hydraulik Blasenspeicher.jpg" },
  { name: "Hydraulik Filter", bild: "Hydraulik Filter.jpg" },
  { name: "Hydraulikzylinder", bild: "Hydraulikzylinder.jpeg" },
  { name: "Hydraulikwegeventil", bild: "Hydraulikwegeventil.jpeg" },
  { name: "Kegelrollenlager", bild: "Kegelrollenlager.jpeg" },
  { name: "Klemmzylinder", bild: "Klemmzylinder.jpg" },
  { name: "Kugelgewindetrieb", bild: "Kugelgewindetrieb.jpeg" },
  { name: "Kugellager axial", bild: "Kugellager axial.jpeg" },
  { name: "Kugellager radial", bild: "Kugellageer radial.jpeg" },
  { name: "Nietmutter", bild: "Nietmutter.jpg" },
  { name: "Nutmutter", bild: "Nutmutter.jpg" },
  { name: "Passschraube mit Außensechskantantrieb", bild: "Passschraube mit Außensechskantantrieb.jpg" },
  { name: "Pneumatik-Wegeventil", bild: "Pneumatik-Wegeventil.jpeg" },
  { name: "Pneumatikzylinder", bild: "Pneumatikzlinder.jpeg" },
  { name: "Schneckengetriebe", bild: "Schneckengetriebe.jpeg" },
  { name: "Schweissmutter", bild: "Schweissmutter.jpg" },
  { name: "Sechskantmutter", bild: "Sechskantmutter.jpg" },
  { name: "Selbstsichernde Sechskantmutter", bild: "Selbstsichernde Sechskantmutter.jpg" },
  { name: "Sicherungsblech fuer Nuttmutter", bild: "Sicherungsblech fuer Nuttmutter.jpg" },
  { name: "Spannungswellengetriebe", bild: "Spannungswellengetriebe.jpeg" },
  { name: "Splint", bild: "Splint.jpg" },
  { name: "Sprengring", bild: "Sprengring.jpg" },
  { name: "Stehbolzen", bild: "Stehbolzen.jpg" },
  { name: "Tonnenfoermige Zugprobe (Schraubfeder)", bild: "Tonnenfoermige Zugprobe (Schraubfeder).jpg" },
  { name: "Unterlegscheibe", bild: "Unterlegscheibe.jpg" },
  { name: "Welle-Naben-Verbindung Backenklemmring", bild: "Welle-Naben-Verbindung Backenklemmring.jpeg" },
  { name: "Welle-Naben-Verbindung Keilwelle und Keilnabe", bild: "Welle-Naben-Verbindung Keilwelle und Keilnabe.jpeg" },
  { name: "Werkzeug-Maulschluessel (Aussensechskant)", bild: "Werkzeug-Maulschluessel (Aussensechskant).jpg" },
  { name: "Zugprobe", bild: "Zugprobe.jpg" },
  { name: "Zylinderrollenlager", bild: "zylinderrollenlager.jpeg" },
  { name: "Zylinderstift", bild: "Zylinderstift.jpg" }
];

// Variablen
let aktuelleFrage = 0;
let punkte = 0;

// 7 zufällige Bilder aus allen Elementen auswählen
const testElemente = [...alleElemente]
  .sort(() => Math.random() - 0.5)
  .slice(0, 7);

// Von diesen 7 Bildern 4 zufällige Fragen auswählen
const fragen = [...testElemente]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4)
  .map(element => element.name);

// HTML-Elemente holen
const frageName = document.getElementById("frageName");
const bilderBereich = document.getElementById("bilderBereich");

// Erste Frage anzeigen
frageName.textContent = fragen[aktuelleFrage];

// Nur die 7 ausgewählten Bilder anzeigen
for (let i = 0; i < testElemente.length; i++) {
  const bild = document.createElement("img");

  bild.src = testElemente[i].bild;
  bild.classList.add("test-image");

  bild.onclick = function() {
    if (testElemente[i].name === fragen[aktuelleFrage]) {
      punkte++;
      bild.style.display = "none";
    }

    aktuelleFrage++;

    if (aktuelleFrage < fragen.length) {
      frageName.textContent = fragen[aktuelleFrage];
    } else {
      localStorage.setItem("punkte", punkte);
      localStorage.setItem("gesamt", fragen.length);
      window.location.href = "ergebnis.html";
    }
  };

  bilderBereich.appendChild(bild);
}
