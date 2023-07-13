function table() {
  
  var numInput = document.getElementById("num").value;

  
  if (numInput === "" || isNaN(numInput)) {
    alert("Please enter a valid number.");
    return;
  }

  numInput = parseInt(numInput);


  var tableContainer = document.getElementById("table");

  
  tableContainer.innerHTML = "";


  var table = document.createElement("table");

  
  for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.textContent = numInput + " x " + i + " =";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.textContent = numInput * i;
    row.appendChild(cell);

    table.appendChild(row);
  }

  
  tableContainer.appendChild(table);
}


