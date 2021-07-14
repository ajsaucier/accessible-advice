// Assign elements to variables
const form = document.getElementsByTagName("form")[0];
const name = document.getElementById("name");
const nameError = document.getElementById("name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const question = document.getElementById("question");
const questionError = document.getElementById("questionError");

form.addEventListener("submit", function (event) {

  checkName(event);
  checkEmail(event);
  checkQuestion(event);

// Set focus to first field with an error
  if (name.value === "") {
    name.focus();
  } else if (email.value === "") {
    email.focus();
  } else if (question.value === "") {
      question.focus();
  }
});

function checkName(event) {
  if (name.value === "") {
    nameError.removeAttribute("hidden");
    name.setAttribute("aria-invalid", "true");
    name.setAttribute("aria-describedby", "name-error");
    event.preventDefault();
  } else {
    nameError.setAttribute("hidden", "true");
    name.setAttribute("aria-invalid", "false");
    name.removeAttribute("aria-describedby");
  }
}

function checkEmail(event) {
  if (email.value === "") {
    emailError.removeAttribute("hidden");
    email.setAttribute("aria-invalid", "true");
    email.setAttribute("aria-describedby", "email-error email-info");
    event.preventDefault();
  } else {
    emailError.setAttribute("hidden", "true");
    email.setAttribute("aria-invalid", "false");
    email.removeAttribute("aria-describedby");
  }
}

function checkQuestion(event) {
    if (question.value === "") {
      questionError.removeAttribute("hidden");
      question.setAttribute("aria-invalid", "true");
      question.setAttribute("aria-describedby", "question-error");
      question.preventDefault();
    } else {
      questionError.setAttribute("hidden", "true");
      question.setAttribute("aria-invalid", "false");
      question.removeAttribute("aria-describedby");
    }
  }