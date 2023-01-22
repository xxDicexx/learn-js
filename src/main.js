var body = document.getElementById("body"),
  button = document.getElementById("button");

function generator() {
  const hex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let val = hex[Math.floor(Math.random() * (14 - 0 + 1)) + 0];
    color += val;
  }

  body.style.background = `${color}`;
}
