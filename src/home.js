export function homeContent() {
  const content = document.querySelector("#content");

  const left = homeText();
  const right = homeImg();

  content.append(left, right);
  return content;
}

function homeText() {
  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent = "lorem";
  p2.textContent = "second Lorem";

  leftSide.append(p1, p2);
  return leftSide;
}

function homeImg() {
  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  return rightSide;
}
