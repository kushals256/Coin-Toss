document.getElementById("toss-button").addEventListener("click", function () {
    const resultElement = document.getElementById("result");
    const coinElement = document.getElementById("coin");

    //flip coin anime

    resultElement.textContent = "Flipping...";
    resultElement.style.color = "#00ff85";
    coinElement.classList.add("flip");
  
    // logic 
    setTimeout(() => {
      const isHeads = Math.random() > 0.5;
      coinElement.classList.remove("flip");
  
      // result
      if (isHeads) {
        coinElement.style.transform = "rotateY(0)";
        resultElement.textContent = "It's Heads!";
        resultElement.style.color = "#00ff85";
      } else {
        coinElement.style.transform = "rotateY(180deg)";
        resultElement.textContent = "It's Tails!";
        resultElement.style.color = "#ff4d4d";
      }
    }, 2000);
  });
  
