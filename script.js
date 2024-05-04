document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodArray = [];
  const checkboxes = document.querySelectorAll('input[name="food"]:checked');
  checkboxes.forEach(function (checkbox) {
    foodArray.push(checkbox.value);
  });
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;

  if (foodArray.length < 2) {
    document.getElementById("food").innerText =
      " NOTE : Please select atleast 2 food items";
    return;
  } else {
    document.getElementById("food").innerText =
      "(Select atleast 2 of the below)";
  }

  var table = document
    .getElementById("details")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var cells = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
    newRow.insertCell(4),
    newRow.insertCell(5),
    newRow.insertCell(6),
    newRow.insertCell(7),
  ];
  cells[0].innerHTML = firstName;
  cells[1].innerHTML = lastName;
  cells[2].innerHTML = address;
  cells[3].innerHTML = pincode;
  cells[4].innerHTML = gender;
  cells[5].innerHTML = foodArray.join(", ");
  cells[6].innerHTML = state;
  cells[7].innerHTML = city;
});
