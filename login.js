const benutzer = [
    { name: "Leila", passwort: "4321" },
    { name: "Bella", passwort: "abcd" },
    { name: "Rahma", passwort: "1234" }
];

function anmelden() {

    const name = document.getElementById("benutzername").value;
    const passwort = document.getElementById("passwort").value;

    const gefunden = benutzer.find(
        benutzer =>
            benutzer.name === name &&
            benutzer.passwort === passwort
    );

    if (gefunden) {
        window.location.href = "start.html";
    } else {
        document.getElementById("loginFehler").textContent =
            "Benutzername oder Passwort falsch";
    }
}