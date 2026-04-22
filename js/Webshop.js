import { TERMEK_LISTA } from "./adatok.js";
import { Termekek } from "./Termekek.js";

export class Webshop {
    #termekek;
    #kosar;

    constructor() {
        this.szuloElem = document.querySelector("#main-content");
        this.init();
    }

    init() {
        this.#termekek = new Termekek(TERMEK_LISTA, this.szuloElem);
        this.esemenyFigyeles();
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
      this.#termekek = new Termekek(TERMEK_LISTA, this.szuloElem);
    } else if (tipus === "kosar") {
      this.szuloElem.innerHTML = "<h2>A kosár tartalma hamarosan...</h2>";
    } else if (tipus === "admin") {
      this.szuloElem.innerHTML = "<h2>Admin felület hamarosan...</h2>";
    }
  }
}
