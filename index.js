const quotes = [
  "Believe in yourself.",
  "Never give up.",
  "Success takes time.",
  "Keep learning every day.",
  "Small steps lead to big results.",
  "Your future depends on what you do today.",
  "Mistakes are part of learning.",
  "Dream big and work hard.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[randomIndex];
}
