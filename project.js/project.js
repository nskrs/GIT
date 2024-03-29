let total=0;
function AddtoScreen(event){
    event.preventDefault();
    let price =event.target.amount.value;
    let productname =event.target.productname.value;
   const obj={
    price:price ,
    productname: productname
   }

axios.post("https://crudcrud.com/api/a28d1198e2724b118a52e4b304ab977f/ProductData", obj)
.then((response) => {
    showUserOnScreen(response.data)
    console.log(response)
})
.catch((err) => {
    console.log(err)
})
}

window.addEventListener("DOMContentLoaded" ,() =>{
    axios.get("https://crudcrud.com/api/a28d1198e2724b118a52e4b304ab977f/ProductData")
.then((response) => {
    console.log(response)
    
    for(var i=0; i<response.data.length;i++)
    {
        showUserOnScreen(response.data[i])
       total=total+parseFloat(response.data[i].price)
    }
    
})
.catch((err) => {
    console.log(err)
})

})
function showUserOnScreen(user){
    
    document.getElementById('amount').value = user.price
    document.getElementById('productname').value =user.productname

    

    const parentNode= document.getElementById('users');
    
const childHTML =`<li class= "li" id=${user._id}>  ${user.productname} - ${user.price} 
                 <button onclick=deleteUser('${user._id}')> Delete Product </button>
                 </li>`
parentNode.innerHTML=parentNode.innerHTML+childHTML
document.getElementById('totalprice').innerHTML="Total Worth of Products:" +total;
    console.log(total)

}

    
    function deleteUser(userId){
        axios.delete(`https://crudcrud.com/api/a28d1198e2724b118a52e4b304ab977f/ProductData/${userId}`)
           .then(() => {
           
            removeUserFromScreen(userId)
        
        })
        .catch((err) => {
            console.log(err)
        })
        }

        function removeUserFromScreen(userId){
            const parentNode =document.getElementById('users');
            const childNodeToBeDeleted = document.getElementById(userId)
            if(childNodeToBeDeleted)
            {
                parentNode.removeChild(childNodeToBeDeleted)
            }
        }
    
