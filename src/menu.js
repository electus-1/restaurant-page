import menuItemComp from "./menuItem";
import donut from "./img/donut.png";
import eclair from "./img/eclair.png";
import macaron from "./img/macaron.png";
import muffin from "./img/muffin.png";
import profiterole from "./img/profiterole.png";
import waffle from "./img/waffle.png";

const menuItems = [
  {
    title: "🍬🐾 Delicate Macarons 🐾🍬",
    desc: "A blissful bite of sweetness! 😻🍬",
    img: "macaron",
  },
  {
    title: "🧁🐾 Tempting Muffins 🐾🧁",
    desc: "Delicious bites of happiness! 😋🍬",
    img: "muffin",
  },
  {
    title: "🍩🐾 Divine Donuts 🐾🍩",
    desc: "Indulge in heavenly circles of delight! 😍🍬",
    img: "donut",
  },
  {
    title: "🫐🐾 Exquisite Eclairs 🐾🫐",
    desc: "Creamy dreams in every bite! 😇🍬",
    img: "eclair",
  },
  {
    title: "🧇🐾 Wonderful Waffles 🐾🧇",
    desc: "A crispy and fluffy treat to savor! 😍🍬",
    img: "waffle",
  },
  {
    title: "🥐🐾 Perfect Profiteroles 🐾🥐",
    desc: "A delightful pastry delight! 😋🍬",
    img: "profiterole",
  },
];

const images = {
  donut: donut,
  eclair: eclair,
  macaron: macaron,
  muffin: muffin,
  profiterole: profiterole,
  waffle: waffle,
};

export default function menu() {
  const menuContent = document.createElement("div");
  menuContent.id = "menu";
  menuItems.forEach((menuItem) => {
    menuContent.appendChild(
      menuItemComp(menuItem.title, images[menuItem.img], menuItem.desc)
    );
  });

  return menuContent;
}
