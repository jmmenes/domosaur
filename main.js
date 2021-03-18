// 1. Change the span with the class `mess-with-me` to have a font size of 40px.
const fontSize = document.querySelector("span.mess-with-me");

fontSize.style.fontSize = "40px";

// 2. Change the paragraph with the class `mess-with-me` to have a background color of green.
const green = document.querySelector("p.mess-with-me");
green.style.backgroundColor = "green";

// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area
// below it moves up to take the space. If you're not sure of how to do this,
// look up the CSS rule for that!

// img {
// 	display: none;
// }

const hide = document.querySelector("img#hide-me");
hide.style.display = "none";

// 4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

const dino = document.querySelector("img#triceratops");
dino.style.width = "324px";

// ### Event Listener Challenges

// 1. Add an event listener to the span with the class `mess-with-me` so that when it is clicked,
// the font color changes to orange.

// const heading = document.querySelector("h1");

function makeOrange() {
  fontSize.style.color = "orange";
}

fontSize.addEventListener("click", makeOrange);

// 2. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

function addRedBorder() {
  dino.style.border = "1px solid red";
}
dino.addEventListener("click", addRedBorder);

// 3. Add an event listener to the feathered dinosaur, so that when they are clicked, they
// become 50% transparent.

const feathered = document.querySelector("#feathers");
function transparent() {
  feathered.style.opacity = 0.5;
}
feathered.addEventListener("click", transparent);

// 4. Add an event listener to the "Switch Background Color" button so that when it is clicked,
// we switch the background color of the row of dinosaurs to a color of your choice.

const toggleButton = document.querySelector("#toggle");
const dinosaurRow = document.querySelector("#row");
let toggled = false;

function changeBackgroundColor() {
  if (toggled === false) {
    dinosaurRow.style.backgroundColor = "blue";
    toggled = true;
  } else {
    dinosaurRow.style.backgroundColor = "white";
    toggled = false;
  }
}

toggleButton.addEventListener("click", changeBackgroundColor);

// 5. Add an event listener to the dinosaur with the id `biggify` that, when HOVERED, grows the image
// to 200 pixels wide. Note that this is a different event, and you'll likely need to do some
// research on what different string you'll need to pass. It's not gonna be `click`!

const bigger = document.querySelector("#biggify");

function hoverBigger() {
  bigger.style.width = "200px";
}
bigger.addEventListener("mouseover", hoverBigger);

const smaller = function () {
  bigger.style.width = "162px";
};
bigger.addEventListener("mouseout", smaller);

// ### Stretch Goals

// 1. Make it so that when you click the "Switch Background Color" button, you switch it back and forth
// from white to whatever color you chose. This doesn't require another event listener, but, rather, a
// rewrite of the function you made into your event listener. **Hint:** when you haven't explicitly
// set the background color **through JavaScript** yet, its value will always be an empty string,
// no matter what you've set it to in other sources (like the browser's default white background,
// or through your own CSS file).

// 2. Add a new event listener so that when the `biggify` dinosaur is no longer hovered, they change
// back to their original size.  **Hint:** same as the above one, but for its width! **Hint 2:**
// You'll have to use a different kind of event than you did before, but... it's a related event with
// a similar name.
