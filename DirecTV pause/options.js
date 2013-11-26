// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("address");
  var address = select.value;
  localStorage["address"] = address;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite = localStorage["address"];
  if (!favorite) {
    return;
  }
  var select = document.getElementById("address");
  select.value = favorite;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);