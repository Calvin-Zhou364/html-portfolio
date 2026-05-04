function toggleMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
  if (element.classList.contains("light-mode")) {
        console.log("Light mode on!");
    } else {
        console.log("Dark mode on!");
    }
}