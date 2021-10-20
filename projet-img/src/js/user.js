let lUser = [];
export class User {
    constructor(name) {
      this.name = name;
      if (! lUser.includes(name)) {
          lUser.push(name);
      }
    }
    toHTML() {
      let li = document.createElement("li");
      li.setAttribute("class", "sub");
      li.innerHTML= `${this.name}`;
      return li;
  }
}