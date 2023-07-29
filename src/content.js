export default function contentComp(body, header, img) {
  const content = document.createElement("div");
  content.id = "content";
  content.style.height = `${window.innerHeight - header.offsetHeight}px`;
  content.style.width = `${window.innerWidth}px`;

  const bgImage = document.createElement("img");
  bgImage.width = "100px";
  bgImage.height = "100px";
  bgImage.src = img;
  bgImage.id = "bg-image";
  content.appendChild(bgImage);

  body.appendChild(content);
  return content;
}
