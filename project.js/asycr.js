async function AddtoScreen(event) {
    event.preventDefault();
    let price = event.target.amount.value;
    let productname = event.target.productname.value;
    const obj = {
      price: price,
      productname: productname
    };
  
    try {
      const response = await axios.post(
        "https://crudcrud.com/api/b138ffbb5c574f46a59da2e9cab29c2f/ProductData",
        obj
      );
      showUserOnScreen(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  
  let total = 0;
  
  window.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await axios.get(
        "https://crudcrud.com/api/b138ffbb5c574f46a59da2e9cab29c2f/ProductData"
      );
      console.log(response);
      total = 0;
      for (var i = 0; i < response.data.length; i++) {
        await showUserOnScreen(response.data[i]);
        total = total + parseFloat(response.data[i].price);
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  async function showUserOnScreen(user) {
    document.getElementById("amount").value = user.price;
    document.getElementById("productname").value = user.productname;
  
    const parentNode = document.getElementById("users");
  
    const childHTML = `<li class= "li" id=${user._id}>  ${user.productname} - ${user.price} 
                   <button onclick=deleteUser('${user._id}')> Delete Product </button>
                   </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  
    total = 0; // reset total to 0 before adding prices of all products
    const productElements = document.querySelectorAll("#users li");
    for (let i = 0; i < productElements.length; i++) {
      const productPrice = parseFloat(
        productElements[i].innerText.split(" - ")[1]
      );
      total += productPrice;
    }
    document.getElementById(
      "totalprice"
    ).innerHTML = `Total Worth of Products: ${total}`;
    console.log(total);
  }
  
  async function deleteUser(userId) {
    try {
      await axios.delete(
        `https://crudcrud.com/api/b138ffbb5c574f46a59da2e9cab29c2f/ProductData/${userId}`
      );
      removeUserFromScreen(userId);
    } catch (err) {
      console.log(err);
    }
  }
  
  function removeUserFromScreen(userId) {
    const parentNode = document.getElementById("users");
    const childNodeToBeDeleted = document.getElementById(userId);
    if (childNodeToBeDeleted) {
      parentNode.removeChild(childNodeToBeDeleted);
    }
  }
  