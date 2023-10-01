/************************************
 * Backend code - submitHandler.jsw *
 ************************************/

import wixCaptchaBackend from 'wix-captcha-backend';
import wixData from 'wix-data';

// Authorize token and insert data
export function processSubmission(submitRequestData) {
  return wixCaptchaBackend.authorize(submitRequestData.token)
    .then(() => {
      return wixData.insert("MyCollection", submitRequestData.data)
        .then(() => ({ "type": "success" }))
        .catch((error) => ({ "type": "insertion error", "message": "Error: collection insertion failed: " + error }));
    })
    .catch((error) => ({ "type": "authorization error", "message": "Error: CAPTCHA authorization failed: " + error }));
}

/********************
 * Client-side code *
 ********************/

import { processSubmission } from 'backend/submitHandler';

$w.onReady(function () {
  // When user clicks submit button
  $w("#submitDataButton").onClick(() => {
    let submitRequestData = {
      token: $w("#myCaptcha").token,
      data: $w("#myInput").value,
    }
    processSubmission(submitRequestData) // Call backend function
      .then((response) => {
        // Display a different message depending on response from backend function
        switch (response.type) {
          case "success":
            $w("#messageText").text = "Data successfully submitted";
            break;
          case "authorization error":
            $w("#messageText").text = "CAPTCHA authorization failed. Redo the CAPTCHA challenge.";
            break;
          case "insertion error":
            $w("#messageText").text = "Database error. Redo the CAPTCHA challenge.";
            break;
        }
        $w("#myCaptcha").reset();
        $w("#submitDataButton").disable();
        $w("#messageText").show();
      });
  });

  // Error handler
  $w("#myCaptcha").onError(() => {
    $w("#messageText").text = "The reCAPTCHA element lost connection with the CAPTCHA provider. Try again later.";
    $w("#messageText").show()
      .then(() => {
        $w("#messageText").hide("fade", { "delay": 10000 });
      });
  })

  // Verification handler
  $w("#myCaptcha").onVerified(() => {
    $w("#submitDataButton").enable();
    $w("#messageText").hide();
  })

  // Timeout handler
  $w("#myCaptcha").onTimeout(() => {
    $w("#submitDataButton").disable();
    $w("#messageText").text = "The CAPTCHA has timed out. Please redo the CAPTCHA challenge.";
    $w("#messageText").show();
  });
});
