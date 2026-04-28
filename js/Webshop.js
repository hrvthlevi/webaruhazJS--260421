import { TERMEK_LISTA } from "./adatok.js";
import { Termekek } from "./Termekek.js";
import { Kosar } from "./Kosar.js";
import { AdminTermekek } from "./AdminTermekek.js"; 

export class Webshop {
  #termekek;
  #kosar;

  constructor() {
    this.szuloElem = document.querySelector("#main-content");
    this.#kosar = new Kosar(this.szuloElem);
    this.init();
  }

  init() {
    this.#termekek = new Termekek(TERMEK_LISTA, this.szuloElem);
    this.esemenyFigyeles();

    window.addEventListener("kosarba", (event) => {
      const termekId = event.detail;
      console.log("Termék hozzáadva a kosárhoz, ID:", termekId);
      const kivalasztott = TERMEK_LISTA.find((t) => t.id === termekId);
      this.#kosar.hozzaad(kivalasztott);
    });
  }

  esemenyFigyeles() {
    const gombok = document.querySelectorAll("nav button");
    gombok.forEach((gomb) => {
      gomb.addEventListener("click", () => {
        const tipus = gomb.getAttribute("data-view");
        this.nezetValtas(tipus);
      });
    });
  }

  nezetValtas(tipus) {
    this.szuloElem.innerHTML = "";
    if (tipus === "shop") {
      this.#termekek.megjelenit();
    } else if (tipus === "kosar") {
      this.#kosar.megjelenit();
    } else if (tipus === "admin") {
      new AdminTermekek(TERMEK_LISTA, this.szuloElem);
    }
  }
}