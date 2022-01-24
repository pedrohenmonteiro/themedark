function initSwitcher() {
  const switcher = document.querySelector(".switcher");
  const body = document.querySelector("body");

  function activeAnimation() {

  }

  function handleClick() {
    body.classList.toggle("active");
    const isActive = body.classList.contains("active")
    if (isActive) {
      body.style.animation = "bg 0.3s forwards"
      switcher.style.animation = "slidein 0.3s forwards"
    } else {
      body.style.animation = "bg2 0.3s forwards"
      switcher.style.animation = "slideout 0.3s forwards"
    }

  }

  switcher.addEventListener("click", handleClick);
}

initSwitcher();
