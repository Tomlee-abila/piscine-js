export function compose() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const body = document.querySelector("body");
  
    const handleKeyDown = (event) => {
      const key = event.key;
  
      if (letters.includes(key)) {
        const div = document.createElement("div");
        div.textContent = key;
        div.className = "note";
  
        const colorValue = (255 / 26) * (key.charCodeAt(0) - 97);
        div.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  
        body.appendChild(div);
      } else if (key === "Backspace") {
        const divs = document.querySelectorAll("div");
        if (divs.length > 0) {
          body.removeChild(divs[divs.length - 1]);
        }
      } else if (key === "Escape") {
        body.innerHTML = "";
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  }
  