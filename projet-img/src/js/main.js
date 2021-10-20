import {Article} from "./article.js";
import { Categorie } from "./categorie.js";
import {User} from "./user.js";
let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui earum dicta reiciendis magni culpa doloremque perferendis quod molestiae harum nemo libero eum corporis consequatur, accusantium ut optio assumenda ullam totam.";
let u = [new User("Lissa Doniro"),new User("Michael Kordvani"), new User("jmtalarn")]
let c = [new Categorie("Guest Post"), new Categorie("web Developpement"), new Categorie("App Developpement"),
    new Categorie("Blogging"), new Categorie("Design resources")];

let articles = [];

articles.push(new Article("../../img-site/activate-google-amp.png",
    "How to activate Google's AMP and what they are",
    u[0].name,
    "invalid Date",
    text+text,
    c[0].name+','+c[1].name));
articles.push(new Article("../../img-site/be-delivery-driver.jpg",
    "Though Time Finding A Job ? Consider Being A Delivery Drive", 
    u[1].name,
    "invalid Date",
    text+text,
    c[0].name+','+c[1].name));
articles.push(new Article("../../img-site/drake-no-js-drake-yes-ts.png",
    "3 most have tools for javascript app Developpment Programmer Who Do not love javascript", 
    u[1].name,
    "02/12/2017 à 21:45:53",
    text,
    c[0].name+','+c[1].name));
articles.push(new Article("../../img-site/reactjs-passdata.jpg",
    "React quick overview and nested components", 
    u[2].name,
    "Invalid Date",
    text+text,
   c[1].name));
articles.push(new Article("../../img-site/build-publish-ionic-app.png",
    "Build and publish a Ionic App", 
    u[2].name,
    "16/10/2017 à 05:45:53",
    text,
    c[1].name));
articles.push(new Article("../../img-site/splash.jpg",
    "Build and publish a Ionic App - Generate icon and splash images", 
    u[2].name,
    "07/10/2017 à 02:32:34",
    text,
    c[2].name+","+c[1].name));
articles.push(new Article("../../img-site/wordpress-jekyll.png",
    "Migrate a blog from Wordpress to Jekyll", 
    u[2].name,
    "22/09/2017 à 23:38:28",
    text+text,
    c[1].name+','+c[3].name));
articles.push(new Article("../../img-site/live_update.jpg",
    "..... Firebase backend with AngularJS", 
    u[2].name,
    "18/08/2017 à 14:28:28",
    text+text,
    c[3].name+','+c[2].name));
articles.push(new Article("../../img-site/Cordova_Alaska_aerial_view.jpg",
    "... cordova", 
    u[2].name,
    "11/08/2017 à 18:49:17",
    text+text,
    c[3].name+','+c[2].name));
articles.push(new Article("../../img-site/stuttgart-1598427_1920.jpg",
    "... development", 
    u[2].name,
    "04/08/2017 à 18:35:45",
    text+text,
    c[2].name));



let lArticle = document.getElementsByClassName("lArticle")[0];
articles.forEach(a => {
    lArticle.appendChild(a.toHTML()); 
});
let categorie = document.getElementsByClassName("Categories")[0];
c.forEach(a => {
    categorie.appendChild(a.toHTML()); 
});
let author = document.getElementsByClassName("Authors")[0];
u.forEach(a => {
    author.appendChild(a.toHTML()); 
});
