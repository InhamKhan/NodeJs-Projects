function validateAddmision() {
  console.log("Addmisions form Are ready..");

  let FullName = document.getElementById("name").value;
  let Age = document.getElementById("age").value;
  let Grade = document.getElementById("grade").value;
  let ParentsName = document.getElementById("parents").value;
  let Email = document.getElementById("email").value;
  let Nationality = document.getElementById("national").value;
  let PlaceofBirth = document.getElementById("place").value;
  let DateofBirth = document.getElementById("dateBirth").value;
  let Religion = document.getElementById("religion").value;

  console.log("name =" + FullName);
  console.log("age =" + Age);
  console.log("grade =" + Grade);
  console.log("parents =" + ParentsName);
  console.log("email =" + Email);
  console.log("national =" + Nationality);
  console.log("place =" + PlaceofBirth);
  console.log("dateBirth =" + DateofBirth);
  console.log("religion =" + Religion);

  document.getElementById("nameError").innerHTML = "";
  document.getElementById("ageError").innerHTML = "";
  document.getElementById("gradeError").innerHTML = "";
  document.getElementById("parentsError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("nationalityError").innerHTML = "";
  document.getElementById("placeError").innerHTML = "";
  document.getElementById("datreBirthError").innerHTML = "";
  document.getElementById("religionError").innerHTML = "";

  if (FullName == "") {
    console.log("full name is empty");
    document.getElementById("nameError").innerHTML = "Please fill Full name";
    document.getElementById("name").focus();
    valid = false;
    return valid;
  }
  if (Age == "") {
    console.log("age is empty");
    document.getElementById("ageError").innerHTML = "Please fill age";
    document.getElementById("age").focus();
    valid = false;
    return valid;
  }
  if (Grade == "") {
    console.log("grade is empty");
    document.getElementById("gradeError").innerHTML = "Select grade";
    document.getElementById("grade").focus();
    valid = false;
    return valid;
  }
  if (ParentsName == "") {
    console.log("Parents name is empty");
    document.getElementById("parentsError").innerHTML = "Parents Name please";
    document.getElementById("parents").focus();
    valid = false;
    return valid;
  }
  if (Email == "") {
    console.log("Email is empty");
    document.getElementById("emailError").innerHTML = "email please..";
    document.getElementById("email").focus();
    valid = false;
    return valid;
  }
  if (Nationality == "") {
    console.log("Nationality is Empty");
    document.getElementById("nationalityError").innerHTML =
      "nationality please";
    document.getElementById("national").focus();
    valid = false;
    return valid;
  }
  if (PlaceofBirth == "") {
    console.log("Place of Birth is empty");
    document.getElementById("placeError").innerHTML =
      "Please enter Place of Birth";
    document.getElementById("place").focus();
    valid = false;
    return valid;
  }
  if (DateofBirth == "") {
    console.log("Date of Birth is empty");
    document.getElementById("datreBirthError").innerHTML =
      "Date of Birth please";
    document.getElementById("dateBirth").focus();
    valid = false;
    return valid;
  }
  if (Religion == "") {
    console.log("religiion is empty");
    document.getElementById("religionError").innerHTML =
      "Religion is compulsary";
    document.getElementById("religion").focus();
    valid = false;
    return valid;
  }

  console.log(" End validateAddmision....");
}
