export class KosarElem {
    #termekAdat;
    #db;
    #szuloElem;

    constructor(adat, szuloElem) {
        this.#termekAdat = adat;
        this.#db = 1;
        this.#szuloElem = szuloElem;
    }

    getTermekId() {
        return this.#termekAdat.id;
    }

    getAr() {
        return this.#termekAdat.ar * this.#db;
    }

    novel() {
        this.#db++;
    }

    csokken() {
        if (this.#db > 1) {
            this.#db--;
        }
    }

    megjelenit() {
        const html = `
            <div class="kosar-elem" style="border-bottom: 1px solid #eee; padding: 10px; display: flex; justify-content: space-between; align-items: center;">
                <span><strong>${this.#termekAdat.nev}</strong></span>
                <div>
                    <button class="csokken">-</button>
                    <span class="db">${this.#db} db</span>
                    <button class="novel">+</button>
                </div>
                <span>${this.getAr()} Ft</span>
                <button class="torol" style="color: red;">X</button>
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }
}