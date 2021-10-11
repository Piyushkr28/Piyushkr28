//form var
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');
var form5 = document.getElementById('form5');
var form6 = document.getElementById('form6');
//form1 input var
var username = document.getElementById('username');
var password = document.getElementById('password');
var cnfpassword = document.getElementById('cnfpassword');
var username_regex = /[A-za-z0-9]+/;
var password_regex = /^[_#][A-Za-z0-9]+/;
//form2 var
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

//form3
var email = document.getElementById("email");
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var email_regex = /[a-zA-Z0-9]+\.[a-z]*@(learner\.manipal\.edu)$/;

//form4
var facebook = document.getElementById("facebook");
var twitter = document.getElementById("twitter");
var gmail = document.getElementById("gmail");
var tweet_regex = /^@\w+/;
var gmail_regex = /^[a-zA-z]+(\.)?(_$)?[a-zA-Z0-9]+(@gmail.com)/;

//form5
var pgmarks = document.getElementById('pgmarks');
var ugmarks = document.getElementById('ugmarks');
var dob = document.getElementById("dob").required;
function form_validate() {
	if (username.value == '') {
		username.style.borderColor = 'red';
		console.log(username.value);
		alert("Please enter Username");
		return false;
	}
	else if (password.value.length <= 6) {
		alert("Please enter password atleast 8 char or more");
		console.log(password.value);
		password.style.borderColor = 'red';
		return false;
	}
	else if (password_regex.test(password.value.trim()) == false) {
		alert("Password is not following Pattern");
		console.log(password.value);
		return false;
	}
	else if (cnfpassword.value.length <= 0) {
		alert("Password is not matching");
		console.log(cnfpassword.value);
		return false;
	}
	else if (password.value != cnfpassword.value) {
		password.style.borderColor = 'red';
		cnfpassword.style.borderColor = 'red';
		alert("Password is not matching");
		return false;
	}
	return true;
}

function form_validate2() {
	var fname_regex = /^[A-Z][a-z]+/;
	if (fname.value.length <= 3) {
		fname.style.borderColor = 'red';
		alert("Please enter first name and it should be greater then 3");
		return false;
	}
	else if (fname_regex.test(fname.value.trim()) == false) {
		alert("First name is not following the pattern");
		fname.style.borderColor = 'red';
		return false;
	}
	else if (lname.value == "") {
		lname.style.borderColor = 'red';
		alert("Please enter last name");
		return false;
	}
	else if (dob.value == "") {
		alert("Please enter date of birth");
		dob.style.borderColor = 'red';
		return false;
	}
	return true;

}
function form_validate3() {
	if (email.value == "") {
		email.style.borderColor = 'red';
		alert("email didn't enter");
		return false;
	}
	else if (email_regex.test(email.value.trim()) == false) {
		email.style.borderColor = 'red';
		alert("Email is not following the pattern");
		return false;
	}
	else if (phone.value == "") {
		phone.style.borderColor = 'red';
		alert("Please enter Phone number");
		return false;
	}
	else if (address.value == "") {
		address.style.borderColor = 'red';
		alert("Please enter Address");
		return false;
	}
	return true;
}
function form_validate4() {
	if (facebook.value.length <= 0) {
		facebook.style.borderColor = 'red';
		alert("Please enter Facebook ID");
		return false;
	}
	if (twitter.value.length <= 0) {
		twitter.style.borderColor = 'red';
		alert("Please enter Twitter ID");
		return false;
	}
	if (tweet_regex.test(twitter.value) == false) {
		twitter.style.borderColor = 'red';
		alert("Twitter is not following the pattern");
		return false;
	}
	if (gmail.value.length <= 0) {
		gmail.style.borderColor = 'red';
		alert("Please enter Gmail ID");
		return false;
	}
	if (gmail_regex.test(gmail.value) == false) {
		gmail.style.borderColor = 'red';
		alert("Gmail is not following the pattern");
		return false;
	}
	return true;
}
function form_validate5() {
	if (pgmarks.value.length <= 0) {
		branch.style.borderColor = 'red';
		alert("Fill your PG marks in CGPA");
		return false;
	}
	if (ugmarks.value.length <= 0) {
		college.style.borderColor = 'red';
		alert("Fill your UG marks in CGPA");
		return false;
	}
	return true;
}
function display() {
	if (form_validate() == true) {
		console.log("Account setup done");
		document.getElementById('form1').style.display = "none";
		document.getElementById('form2').style.display = "block";
	}
}
function display2() {
	if (form_validate2() == true) {
		console.log("Personal detail done");
		document.getElementById('form2').style.display = "none";
		document.getElementById('form3').style.display = "block";
	}
}
function display3() {
	if (form_validate3() == true) {
		console.log("Contact detail done");
		document.getElementById('form3').style.display = "none";
		document.getElementById('form4').style.display = "block";
	}
}
function display4() {
	if (form_validate4() == true) {
		console.log("Social profile detail done");
		document.getElementById('form4').style.display = "none";
		document.getElementById('form5').style.display = "block";
	}
}
function display5() {
	if (form_validate5() == true) {
		console.log("Acadmic detail done");
		document.getElementById('form5').style.display = "none";
		document.getElementById('form6').style.display = "block";
		alert("Congrates you have Succesfully Submitted (:");
	}
}

function displayDetail(){
	document.getElementById('p-view').style.display = "block";
	var username = document.getElementById("username").value;
	var fname = document.getElementById("fname").value;

	// var password = document.getElementById("password").value;
    // var cnfpassword = document.getElementById("cnfpassword").value;

	var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var twitter = document.getElementById("twitter").value;
    var facebook = document.getElementById("facebook").value;
    var gmail = document.getElementById("gmail").value;
    var ugmarks = document.getElementById("ugmarks").value;
    var pgmarks = document.getElementById("pgmarks").value;

    var project1 = document.getElementById("project1").value;
    var project2 = document.getElementById("project2").value;
    var project3 = document.getElementById("project3").value;

	document.getElementById("d-username").innerHTML = username;
    document.getElementById("d-fname").innerHTML = fname;
    document.getElementById("d-lname").innerHTML = lname;
    document.getElementById("d-dob").innerHTML = dob;
    document.getElementById("d-gender").innerHTML = gender;
    document.getElementById("d-phone").innerHTML = phone;
    document.getElementById("d-address").innerHTML = address;
    document.getElementById("d-twitter").innerHTML = twitter;
    document.getElementById("d-facebook").innerHTML = facebook;
    document.getElementById("d-google").innerHTML = gmail;
    document.getElementById("d-ugmarks").innerHTML = ugmarks;
    document.getElementById("d-pgmarks").innerHTML = pgmarks;

    document.getElementById("d-project3").innerHTML = project3;
    document.getElementById("d-project2").innerHTML = project2;
    document.getElementById("d-project1").innerHTML = project1;

}

