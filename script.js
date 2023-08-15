// Check if the user is already login if Not it will be re directed to the login.html page
document.addEventListener("DOMContentLoaded", () => {
  const isAuthenticated = localStorage.getItem("authenticated");
  if (!isAuthenticated) {
    window.location.href = "login.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dataTable = document.getElementById("dataTable");
  const tbody = dataTable.querySelector("tbody");

  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.users)
      data.users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.firstName}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td><a href="details.html?id=${user.id}">Get Detail</a></td>
                `;
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
   
});

function getDetails(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((res) => res.json())
    .then(console.log);
  window.location.href = 'details.html'
}







