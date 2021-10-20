export class Article {
    constructor(img, title, author, date, text, categorie) {
      this.img = img;
      this.title = title;
      this.author = author;
      this.date = date;
      this.text = text;
      this.categorie=categorie;
    }
    toHTML() {
        let article = document.createElement("article");
        if (this.text.length >= 255) {
            article.setAttribute("class", "taille2");
        }
        article.innerHTML= `
            <div class="banniere" style="background-image: url('${this.img}')">
                <p class="categorie">${this.categorie}</p>
            </div>
            <h3 class="titre"> ${this.title}</h3>
            <ul>
                <li class="author">${this.author}</li>
                <li class="date">${this.date}</li>
            </ul>
            <p>${this.text}</p>`
        return article
    }
  }