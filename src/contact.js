export default function contact() {
  const contactContent = document.createElement("div");
  contactContent.id = "contact";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "☎️242-123-756";
  phoneNumber.classList.add("contact-text");
  contactContent.appendChild(phoneNumber);

  const address = document.createElement("p");
  address.textContent = "📃Pınarbaşı, Atatürk Blv. 07070 Antalya";
  address.classList.add("contact-text");
  contactContent.appendChild(address);

  return contactContent;
}
