let form = document.getElementById("form");
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

let api =
  "https://validemail.io/v1/validate?api_key=6MC9mm3yPMBVnWoJKT13RcEViI21Ago7&email=";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  axios.get(api + form.inp.value).then((res) => {
    let data = res.data;
    if (data.is_valid) {
      document.getElementById("img").src = "images/i (3).webp";
    } else {
      document.getElementById("img").src = "images/i.webp";
    }
    document.getElementById("valid").innerHTML = data.is_valid;
    document.getElementById("message").innerHTML = data.message;
    document.getElementById("domain").innerHTML = data.domain;
    document.getElementById("email").innerHTML = data.email;
    if (data.has_valid_format) {
      document.getElementById("format").innerHTML = "Yes";
    } else {
      document.getElementById("format").innerHTML = "No";
    }

    if (data.is_disposable) {
      document.getElementById("disposable").innerHTML = "Yes";
    } else {
      document.getElementById("disposable").innerHTML = "No";
    }

    if (data.account != null) {
      document.getElementById("account").innerHTML = data.account;
    } else {
      document.getElementById("account").innerHTML = "Unknown";
    }

    if (data.is_free_provider) {
      document.getElementById("provider").innerHTML = "Yes";
    } else {
      document.getElementById("provider").innerHTML = "No";
    }
  });
});

// myModal.addEventListener("shown.bs.modal", () => {
//   axios.get(api + form.inp.value).then((res) => {
//     let data = res.data;
//     if (data.is_valid) {
//       document.getElementById("img").src = "images/i (3).webp";
//     } else {
//       document.getElementById("img").src = "images/i.webp";
//     }
//     document.getElementById("valid").innerHTML = data.is_valid;
//     document.getElementById("message").innerHTML = data.message;
//     document.getElementById("domain").innerHTML = data.domain;
//     document.getElementById("email").innerHTML = data.email;
//     if (data.has_valid_format) {
//       document.getElementById("format").innerHTML = "Yes";
//     } else {
//       document.getElementById("format").innerHTML = "No";
//     }

//     if (data.is_disposable) {
//       document.getElementById("disposable").innerHTML = "Yes";
//     } else {
//       document.getElementById("disposable").innerHTML = "No";
//     }

//     if (data.account != null) {
//       document.getElementById("account").innerHTML = data.account;
//     } else {
//       document.getElementById("account").innerHTML = "Unknown";
//     }

//     if (data.is_free_provider) {
//       document.getElementById("provider").innerHTML = "Yes";
//     } else {
//       document.getElementById("provider").innerHTML = "No";
//     }
//   });
//   myInput.focus();
// });
