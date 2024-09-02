var rect = document.querySelector("#center");

rect.addEventListener("mousemove", (details) => {
  var rectLocation = rect.getBoundingClientRect();
  var insideRectVal = details.clientX - rectLocation.left;

  if (insideRectVal < rectLocation.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    var bluecolor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0, ${bluecolor}, 0)`,
      ease: Power4,
    });
  }
});
