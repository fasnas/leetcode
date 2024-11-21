const cart = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Jeans', price: 40, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 }
];

function sample(value){
    let x=[]
    cart.reduce((dummy)=>{
      x.push(dummy.price*dummy.quantity)  
    })

   
}