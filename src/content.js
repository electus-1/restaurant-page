export default function contentComp(body) {
  const content = document.createElement("div");
  content.id = "content";
  content.style.height = `${
    window.screen.availHeight - Number(header.style.height)
  }px`;
  content.style.width = `${window.screen.availWidth}px`;
  body.appendChild(content);
}
