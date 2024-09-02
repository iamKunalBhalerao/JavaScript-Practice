var rect = document.querySelector("#center");

rect.addEventListener("mousemove", (details) => {
  var cursorLocation = rect.getBoundingClientRect();
  console.log(details.clientX - cursorLocation.left);
});
