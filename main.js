let tbody = document.querySelector("tbody");
let td = document.querySelectorAll("td");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) =>
    data.map((e) => {
      tbody.innerHTML += `<tr class="bodytr"> 
                       <td class="column1"> ${e.name} </td>
                       <td class="column2"> ${e.id} </td>
                       <td class="column3"> ${e.email} </td>
                       <td class="column4"> ${e.username} </td>
                       <td class="column5"> ${e.phone} </td>
                       <td class="column6"> ${e.address.city} </td>
                       </tr> `;
    })
  );
