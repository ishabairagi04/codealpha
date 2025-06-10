function calculateAge() {
const dobInput = document.getElementById("dob").value;
const result = document.getElementById("result");

if (!dobInput) {
result.innerHTML = "⚠️ Please enter a valid date of birth.";
return;
}

const dob = new Date(dobInput);
const today = new Date();

let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();

if (days < 0) { months--; days +=new Date(today.getFullYear(), today.getMonth(), 0).getDate(); } if (months < 0) {
  years--; months +=12; } result.innerHTML=`🎉 You are <strong>${years}</strong> year(s), <strong>${months}</strong>
  month(s), and <strong>${days}</strong> day(s) old.`;
  }