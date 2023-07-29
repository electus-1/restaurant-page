export default function home() {
  const homeContent = document.createElement("div");
  homeContent.id = "home";

  const title = document.createElement("h2");
  title.classList.add("subtitle");
  title.textContent = "🍬🐾 Welcome to Meowlicious Sweet Shop! 🐾🍬";
  homeContent.appendChild(title);

  const presentationText = document.createElement("p");
  presentationText.classList.add("text");
  presentationText.textContent =
    "Step into a world of whimsy and sugary delights, where adorable feline charm meets handcrafted confections. Indulge in mouthwatering cupcakes, heavenly macarons, and more, all while our resident cats fill the air with purrs. Create magical memories with friends and family in our Meowlicious Sweet Shop, where sweetness meets feline bliss.";
  homeContent.appendChild(presentationText);

  const establishmentDateAndLocation = document.createElement("p");
  establishmentDateAndLocation.classList.add("text");
  establishmentDateAndLocation.textContent =
    "Since 2017, find sugary bliss in Antalya at Meowlicious Sweet Shop!";
  homeContent.appendChild(establishmentDateAndLocation);

  return homeContent;
}
