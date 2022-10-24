//add product {objects of object} to storage
const addToDb=(name,id)=>{
    let product={
         name:name,
         ID:id,
         Quantity:1
      };
    
    const cart =localStorage.getItem("shopping-cart")

    let shoppingCart;

    if (cart) {

        shoppingCart=JSON.parse(cart)

    }
    else{
   
       shoppingCart={};

    }
    
    // const productStringify=JSON.stringify(product)

    shoppingCart[id]=product;

    

    if ( shoppingCart[id]) {

         let value =shoppingCart[id].Quantity;

        //  console.log(typeof value);

         shoppingCart[id]["Quantity"]=parseInt(shoppingCart[id]["Quantity"])+2;

         console.log(shoppingCart[id]["Quantity"]);
         
    }

    const shoppingCartStringify=JSON.stringify(shoppingCart);

    localStorage.setItem("shopping-cart",shoppingCartStringify)

    


}


//-----------Remove Data from storage----------//

const deleteDataFromStorage=(id)=>{

 
     let shoppingCart =localStorage.getItem("shopping-cart")
     
     
     if (shoppingCart) {

        shoppingCart=JSON.parse(shoppingCart);

        if (shoppingCart[id]) {
            
            console.log("Found it");

             delete shoppingCart[id];
             
               const shoppingCartStringify=JSON.stringify(shoppingCart);

             localStorage.setItem("shopping-cart", shoppingCartStringify)
            
        }                                                                                      


         
       

      
     }

   
}




export{addToDb,deleteDataFromStorage}





























/* eslint-disable no-unused-vars */
// const addToStorage=(id)=>{

//     const checkFindcy = localStorage.getItem(id);

//     if (checkFindcy) {

//         const newValue =parseFloat(checkFindcy) +1;

//         localStorage.setItem(id,newValue);
        
//     }
//     else{

//         localStorage.setItem(id,1);

//     }
// }


