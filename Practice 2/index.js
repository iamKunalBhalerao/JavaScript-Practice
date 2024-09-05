window.addEventListener("mousemove", (details) => {
  var rect = document.querySelector("#rect");

  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );
  console.log(details);

  gsap.to("#rect", {
    left: xval + "px",
    ease: Power3,
  });
});
