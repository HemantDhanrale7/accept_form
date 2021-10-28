function validation() {
  var phone_number = document.getElementById("number").value;
  var numberpattern = /^[789][0-9]{9}$/;
  if (numberpattern.test(phone_number)) {
    document.getElementById("signal_1").style.visibility = "visible";
    document.getElementById("signal_2").style.visibility = "hidden";
    document.getElementById("number").style.backgroundColor = "yellow";
  } else {
    document.getElementById("signal_1").style.visibility = "hidden";
    document.getElementById("signal_2").style.visibility = "visible";
    document.getElementById("number").style.backgroundColor = "red";
  }
}

function GoNext() {
  var x = document.forms["myForm"]["phone"].value;

  if (x == "") {
    alert("above data must be filled out");
  } else {
    window.location.href = "page2.html";
    return false;
  }
}
