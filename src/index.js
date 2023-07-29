import menu from "./menu.js";
import home from "./home";
import contact from "./contact";
import headerComp from "./header.js";
import contentComp from "./content.js";
import "./style.css";

const body = document.querySelector("body");
const header = headerComp(body);
const content = contentComp(body);

const navItems = document.querySelectorAll(".header-nav-item");
navItems.forEach((navItem) =>
  navItem.addEventListener("click", (e) => {
    // remove .selected class from other nav items (there can only be one!)
    const selected = document.querySelector(".selected");
    if (selected != null) {
      selected.classList.remove("selected");
    }
    navItem.classList.add("selected");
  })
);
