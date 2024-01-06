let formCallingButton = document.getElementById("send-message");

let bodyWeb = document.querySelector("body");

let formWrapper = document.getElementById("form-wrapper");

let closeButton = document.getElementById("close-button");

formCallingButton.addEventListener("click", () => {
  formWrapper.style.display = "flex";

  bodyWeb.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  formWrapper.style.display = "none";

  bodyWeb.style.overflow = "unset";
});
