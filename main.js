let button = document.getElementById("btn");
let errorBtn = document.getElementById("error");
let input = document.querySelector("input");
let validMsg = document.getElementById("wrong-email");
console.log();
button.addEventListener("click", (e) => {
  e.preventDefault();
  validEmail(input);
});

function validEmail(inputText) {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailFormat)) {
    // console.log("True Valed Email");
    Swal.fire("Good job!", "An email has been sent", "success");
    input.value = "";
    errorBtn.style.display = "none";
    validMsg.style.display = "none";
    input.classList.remove("wrong");

    return true;
  } else {
    errorBtn.style.display = "block";
    validMsg.style.display = "block";
    input.classList.add("wrong");
    // console.log("false Not Valied Email");
    return false;
  }
}
