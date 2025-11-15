"use strict";
//get card container

const cardContainer = document.querySelector(".card-container");
//get the form
const form = document.querySelector("form");

//get the input
const emailInput = form.querySelector("input");

//get the submit button
const submit = document.querySelector('button[type="submit"]');

//get success-container - shows success when proper email is submitted

const success_container = document.querySelector(".success-container");

const dismiss_button = success_container.querySelector("button");

const success_span = success_container.querySelector("span");
console.log(success_span);

let userEmail;

function validateEmail(email) {
  //will return true if email is valid
  const regExEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regExEmail.test(String(email).toLowerCase());
}

//this works
submit.addEventListener("click", (e) => {
  e.defaultPrevented;
  console.log("---------------ITS ALIVE!");

  if (validateEmail(emailInput.value)) {
    userEmail = emailInput.value;
    success_span.textContent = userEmail;
    form.classList.remove("error");
    cardContainer.classList.add("no-display");
    cardContainer.classList.add("hidden");
    success_container.classList.remove("no-display");
  } else {
    form.classList.add("error");
  }
});

//this works
dismiss_button.addEventListener("click", (e) => {
  e.defaultPrevented;
  //button works
  console.log("Dismiss!!!!!! BEGONE!");

  //remove success container
  success_container.classList.add("no-display");
  //add card container
  cardContainer.classList.remove("no-display");
  cardContainer.classList.remove("hidden");
});

//window onload check if window is greater than or less than 375px!
