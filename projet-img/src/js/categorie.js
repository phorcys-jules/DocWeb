let lCat = [];
export class Categorie {
    constructor(name) {
      this.name = name;
      if (! lCat.includes(name)) {
          lCat.push(name);
      }
    }
    toHTML() {
      let li = document.createElement("li");
      li.setAttribute("class", "sub");
      li.innerHTML= `${this.name}`;
      return li;
  }
}