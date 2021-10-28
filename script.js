function generate() {
  let num = "1234567890";
  let OTP = "";

  for (let i = 0; i < 4; i++) {
    OTP += num[Math.floor(Math.random() * 10)]; //random method 0 to 1
  }
  document.getElementById("otp").innerHTML = OTP;
}

function verify() {
  alert("Right OTP");
}
