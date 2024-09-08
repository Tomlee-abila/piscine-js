import { styles } from "./pimp-my-style.data.js";
let counter = 0;
export function pimp() {
  let element = document.getElementsByTagName("button")[0];
  if (!element.classList.contains("unpimp")) {
    element.classList.add(styles[counter]);
    counter++;

  } else {
    counter--;
    element.classList.remove(styles[counter]);

    if (counter === 0) {
        element.classList.toggle("unpimp");
    }
  }
  if (counter === styles.length) {
    element.classList.toggle("unpimp");
  }
}
