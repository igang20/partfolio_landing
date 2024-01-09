let formCallingButton = document.getElementById("send-message");

let bodyWeb = document.querySelector("body");

let formWrapper = document.getElementById("form-wrapper");

let closeButton = document.getElementById("close-button");

let callBackForm = document.getElementById("call-back-form");

let submitFormButton = document.getElementById("submit-form");

let form = document.getElementById("call-back-form");

const formObject = {
  email: form.elements.email.value,
  name: form.elements.name.value,
  text: form.elements.message.value,
};

formCallingButton.addEventListener("click", () => {
  formWrapper.style.display = "flex";

  bodyWeb.style.overflow = "hidden";
});

function closeForm() {
  formWrapper.style.display = "none";

  bodyWeb.style.overflow = "unset";
}

closeButton.addEventListener("click", closeForm);

submitFormButton.addEventListener("click", (event) => {
  event.preventDefault();
  let formObject = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    text: form.elements.message.value,
  };
  let emailAsArray = form.elements.email.value.split("");

  if (
    emailAsArray.includes("@") &&
    emailAsArray.includes(".") &&
    emailAsArray.indexOf("@") < emailAsArray.indexOf(".")
  ) {
    fetch("http://ip.jsontest.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
    form.reset();
    alert("status OK");
  } else {
    alert("invalid Email");
    form.reset();
  }

  closeForm();
});
