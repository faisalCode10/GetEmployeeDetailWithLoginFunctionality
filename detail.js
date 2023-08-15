document.addEventListener("DOMContentLoaded", () => {
  const userDetailsDiv = document.getElementById("userDetails");
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  fetch(`https://dummyjson.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
      const detailsHTML = `<div style="border: 1px solid #ccc; padding: 20px; background-color: #f5f5f5; border:1px solid black; " class="main-div>
      <h1 style="font-size: 24px; margin-bottom: 10px;border:1px solid black;">UserID: ${user.id}</h1>
      <h1 style="font-size: 20px; margin-bottom: 10px;border:1px solid black;">First Name: ${user.firstName}</h1>
      <h2 style="font-size: 16px; color: #333;border:1px solid black;">Username: ${user.username}</h2>
      <h3 style="font-size: 14px; color: #555;border:1px solid black;">Email: ${user.email}</h3>
      <h3 style="font-size: 14px; color: #555;border:1px solid black;">Phone: ${user.phone}</h3>
  </div>
`;

      userDetailsDiv.innerHTML = detailsHTML;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
