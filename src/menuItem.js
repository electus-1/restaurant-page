export default function menuItemComp(
  menuItemTitle,
  menuItemImage,
  menuItemDesc
) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const title = document.createElement("h3");
  title.classList.add("menu-item-title");
  title.textContent = menuItemTitle;
  menuItem.appendChild(title);

  const img = document.createElement("img");
  img.width = "100px";
  img.height = "100px";
  img.src = menuItemImage;
  img.classList.add("menu-item-img");
  menuItem.appendChild(img);

  const desc = document.createElement("p");
  desc.classList.add("menu-item-text");
  desc.textContent = menuItemDesc;
  menuItem.appendChild(desc);

  return menuItem;
}
