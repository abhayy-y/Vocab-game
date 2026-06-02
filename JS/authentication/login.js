const password = document.querySelector("#password");
const img = document.querySelector("img");
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const passwordRegex = /^.{8,}$/;
const username = document.querySelector("#username");
const LoginBtn = document.querySelector("#LoginBtn");
const error = document.querySelector("#Error");
// change the images of togglepassword later
// password toggler
img.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.type === "password") {
    password.type = "text";
    img.src = "./assets/icons/eye-open.png";
  } else {
    password.type = "password";
    img.src = "./assets/icons/hidden.png";
  }
});

// Error message for username and password
LoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!usernameRegex.test(username.value)) {
    error.innerText =
      "Username: 3-20 characters, letters, numbers, and _ only.";
  }
   else if (!passwordRegex.test(password.value)) {
    error.innerText = "Password must be at least 8 characters long.";
  }
  password.value = ""
  username.value= ""
});
