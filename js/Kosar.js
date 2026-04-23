export class Kosar {
    #lista = []; 
    #szuloElem;

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.#lista = []; 
    }
    hozzaad(termek) {
        this.#lista.push(termek);
        console.log("Kosárban van:", this.#lista);
    }
    megjelenit() {
        this.#szuloElem.innerHTML = "<h2>Kosár tartalma</h2>";
        this.#lista.forEach(termek => {
            this.#szuloElem.innerHTML += `<p>${termek.nev} - ${termek.ar} Ft</p>`;
        });
        this.#szuloElem.innerHTML += `<h3>Összesen: ${this.getOsszeg()} Ft</h3>`;
    }

    getOsszeg() {
        return this.#lista.reduce((total, t) => total + t.ar, 0);
    }
}