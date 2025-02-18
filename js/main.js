let tbody = document.getElementById('tableBody');

if (localStorage.getItem('tableBody') != null) {
  tbody.innerHTML = localStorage.getItem('tableBody');
}

function addRow() {
  let time = document.getElementById('choreTime').value;
  let chore = document.getElementById('choreName').value;
  let image = document.getElementById('choreImg').value;

  document.getElementById('tableBody').innerHTML +=
    '<tr><td>' +
    time +
    '</td><td>' +
    chore +
    '</td><td><img src="' +
    image +
    '" class="todoImg"></td></tr>';

  time = '';
  chore = '';
  image = '';
  localStorage.setItem('tableBody', tbody.innerHTML);
}

function clearAll() {
  let table = document.getElementById('tableBody');
  table.innerHTML = '';
  localStorage.clear();
  location.reload();
}
