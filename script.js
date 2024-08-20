let form = document.getElementById("form");
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

let api =
  "https://validemail.io/v1/validate?api_key=6MC9mm3yPMBVnWoJKT13RcEViI21Ago7&email=";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // axios.get("http://apilayer.net/api/check?access_key=6675b26854e6c9b26b122891a7e81f9d&email=bekzod.dasturchi.2010@gmail.com&smtp=1&format=1").then((res) => {
  // axios.get(api + form.inp.value).then((res) => {
  //   let data = res.data;
  //   if (data.is_valid) {
  //     document.getElementById("img").src = "images/i (3).webp";
  //   } else {
  //     document.getElementById("img").src = "images/i.webp";
  //   }
  //   document.getElementById("valid").innerHTML = data.is_valid;
  //   document.getElementById("message").innerHTML = data.message;
  //   document.getElementById("domain").innerHTML = data.domain;
  //   document.getElementById("email").innerHTML = data.email;
  //   if (data.has_valid_format) {
  //     document.getElementById("format").innerHTML = "Yes";
  //   } else {
  //     document.getElementById("format").innerHTML = "No";
  //   }

  //   if (data.is_disposable) {
  //     document.getElementById("disposable").innerHTML = "Yes";
  //   } else {
  //     document.getElementById("disposable").innerHTML = "No";
  //   }

  //   if (data.account != null) {
  //     document.getElementById("account").innerHTML = data.account;
  //   } else {
  //     document.getElementById("account").innerHTML = "Unknown";
  //   }

  //   if (data.is_free_provider) {
  //     document.getElementById("provider").innerHTML = "Yes";
  //   } else {
  //     document.getElementById("provider").innerHTML = "No";
  //   }
  // });

  function httpGetAsync(url) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        console.log(xmlHttp.response);
      let data = xmlHttp.response;
      if (data.quality_score>0) {
        document.getElementById("img").src = "images/i (3).webp";
      } else {
        document.getElementById("img").src = "images/i.webp";
      }
      document.getElementById("valid").innerHTML = data.deliverability == "DELIVERABLE"?"Valid":"Invalid";
      // document.getElementById("message").innerHTML = data.message;
  
      if(data.deliverability == "DELIVERABLE"){
        let domain = data.email.split("@")[1];
        console.log(domain);
        
        document.getElementById("domain").innerHTML = domain;
      }else{
        let domain = data.autocorrect.split("@")[1];
        console.log(domain);
        
        document.getElementById("domain").innerHTML = domain;
      }
      document.getElementById("email").innerHTML = data.email;
      if (data.is_valid_format.value) {
        document.getElementById("format").innerHTML = "Yes";
      } else {
        document.getElementById("format").innerHTML = "No";
      }
  
      if (data.is_disposable_email.value) {
        document.getElementById("disposable").innerHTML = "Yes";
      } else {
        document.getElementById("disposable").innerHTML = "No";
      }
  
      if (data.deliverability=="DELIVERABLE") {
        document.getElementById("account").innerHTML = data.email.split("@")[0];
      } else {
        document.getElementById("account").innerHTML = "Unknown";
      }
  
      if (data.is_free_email.value) {
        document.getElementById("provider").innerHTML = "Yes";
      } else {
        document.getElementById("provider").innerHTML = "No";
      }
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.responseType = 'json';
    xmlHttp.send();

    xmlHttp.onload = function () {
      if (xmlHttp.status != 200) {
        // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xmlHttp.status}: ${xmlHttp.statusText}`); // Например, 404: Not Found
      } else {
        // если всё прошло гладко, выводим результат
        // alert(`Готово, получили ${xmlHttp.response} байт`); // response -- это ответ сервера



      }
    };
  }

  const url =
    "https://emailvalidation.abstractapi.com/v1/?api_key=0e9a4328fb254e3bb6ef18e408319cee&email=" +
    form.inp.value;

  httpGetAsync(url);
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

// var emailAddress = "foo@bar.com"
// var apiKey = ???

// $.ajax("https://app.mailvalidation.io/a/{team_slug}/validate/api/validate/",
//     {
//      crossDomain: true,
//      type: "POST",
//      headers: {
//          Authorization: "Api-Key " + apiKey
//      },
//      body: {
//         'email': emailAddress
//      }
//     })
//     .then(function responseHandler(data) {
//         if (data.is_valid === 'true') {
//             console.log("the email is valid and the mail box is active")
//         } else {
//             console.log("the email is incorrect or unable to be tested.")
//         }
//     });
