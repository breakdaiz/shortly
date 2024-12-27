const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

const amount = 2000;

const form = document.getElementById("paymayaForm");
const errMsg = document.getElementById("err-msg");

form.addEventListener("submit", formSubmit);

// // Validate a URL
// function validURL(str) {
//   var pattern = new RegExp(
//     "^(https?:\\/\\/)?" + // protocol
//       "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
//       "((\\d{1,3}\\.){3}\\d{1,3}))" +
//       "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
//       "(\\?[;&a-z\\d%_.~+=-]*)?" +
//       "(\\#[-a-z\\d_]*)?$",
//     "i"
//   );
//   return !!pattern.test(str);
// }

function formSubmit(e) {
  e.preventDefault();

  if (firstName.value === "") {
    errMsg.innerHTML = "First name is required";
    input.classList.add("border-red");
  }
  if (lastName.value === "") {
    errMsg.innerHTML = "Last name is required!";
    input.classList.add("border-red");
  }

  if (email.value === "") {
    errMsg.innerHTML = "Email is required!";
    input.classList.add("border-red");
  } else {
    checkout();
  }
}

async function checkout() {
  const id = "28d463cd-ce53-48aa-ba12-b51a66d7a36f";
  const URL = "https://payments.maya.ph/invoice/payment";

  try {
    const result = await fetch(`${URL}?id=${id}&amount=${amount}`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)));
  } catch (error) {
    console.error(error);
  }
}
