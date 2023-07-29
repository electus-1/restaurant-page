export default function headerComp(body) {
  const header = document.createElement("div");
  header.id = "header";
  header.style.width = `${window.screen.availWidth}px`;
  body.appendChild(header);

  const restaurantName = document.createElement("h1");
  restaurantName.id = "title";
  restaurantName.textContent = "Meowlicious Sweet Shop";
  header.appendChild(restaurantName);

  const headerNav = document.createElement("nav");
  headerNav.id = "header-nav";
  header.appendChild(headerNav);

  const homeNavigation = document.createElement("button");
  homeNavigation.classList.add("header-nav-item");
  homeNavigation.id = "home-nav-item";
  homeNavigation.innerHTML = "Home";
  headerNav.appendChild(homeNavigation);

  const menuNavigation = document.createElement("button");
  menuNavigation.classList.add("header-nav-item");
  menuNavigation.id = "menu-nav-item";
  menuNavigation.innerHTML = "Menu";
  headerNav.appendChild(menuNavigation);

  const contactNavigation = document.createElement("button");
  contactNavigation.classList.add("header-nav-item");
  contactNavigation.id = "contact-nav-item";
  contactNavigation.innerHTML = "Contact";
  headerNav.appendChild(contactNavigation);

  return header;
}
