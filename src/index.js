import menu from "./menu.js";
import home from "./home";
import contact from "./contact";
import headerComp from "./header.js";
import contentComp from "./content.js";
import bgImage from "./img/cat-sweet-shop.png";
import "./style.css";

const navIdentifiers = {
  "home-nav-item": home,
  "menu-nav-item": menu,
  "contact-nav-item": contact,
};

const body = document.querySelector("body");
const header = headerComp(body);
const content = contentComp(body, header, bgImage);
content.appendChild(home());

const navItems = document.querySelectorAll(".header-nav-item");
navItems.forEach((navItem) =>
  navItem.addEventListener("click", (e) => {
    // remove .selected class from other nav items (there can only be one!)
    const selected = document.querySelector(".selected");
    if (selected != null) {
      if (selected === navItem) {
        return;
      }
      selected.classList.remove("selected");
    }
    navItem.classList.add("selected");
    Object.keys(navIdentifiers).forEach((identifier) => {
      if (navItem.id === identifier) {
        content.lastChild.remove();
        content.appendChild(navIdentifiers[identifier]());
      }
    });
  })
);
