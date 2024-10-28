function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById("firstNameError").innerText = "";
  document.getElementById("lastNameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("termsError").innerText = "";

  // Validate First Name
  const firstName = document.getElementById("firstName").value;
  if (!/^[a-zA-Z]+$/.test(firstName)) {
    document.getElementById("firstNameError").innerText = "Please enter a valid first name (letters only).";
    isValid = false;
  }

  // Validate Last Name
  const lastName = document.getElementById("lastName").value;
  if (!/^[a-zA-Z]+$/.test(lastName)) {
    document.getElementById("lastNameError").innerText = "Please enter a valid last name (letters only).";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").innerText = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate Phone Number
  const phone = document.getElementById("phone").value;
  if (!/^\d{10,15}$/.test(phone)) {
    document.getElementById("phoneError").innerText = "Please enter a valid phone number with 10-15 digits.";
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").innerText = "Password must be at least 8 characters long, with one uppercase, one lowercase, one number, and one special character.";
    isValid = false;
  }

  // Validate Terms & Conditions
  const terms = document.getElementById("terms").checked;
  if (!terms) {
    document.getElementById("termsError").innerText = "You must agree to the Terms & Conditions.";
    isValid = false;
  }

  // Form submission
  if (isValid) {
    document.getElementById("registrationForm").submit(); // Submits the form
  }
}