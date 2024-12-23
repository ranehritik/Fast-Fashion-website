import Nav from './Navbar/Nav'
import Recomm from './Recomm/Recomm'
import Product from './Product/Product'
import Sidebar from './Sidebar/Sidebar'
import products from './Db/Database'
import { useState } from 'react'
import Card from './Component/Card'
import Cart from './Cart/Cart'

const App = () => {

  const [selectedcategory, setSelectedcategory] = useState(null);   //for prics color category recomm btn
  const [query, setQuery] = useState("");                           //for input
  const [cart,setCart] = useState([])
  const [show, setShow] = useState(true)

  const handlecartclick = (product) => {
     
    setCart((prevCart) => [...prevCart, product]); 
    console.log("cartclick",product);
  };

  const handleinputchange = (e) =>{                                 //for input
    setQuery(e.target.value);    
  }

  const handlechange = (e) => {                                     //for prics color category
    setSelectedcategory(e.target.value);   
  }

  const handleclick = (e) => {                                      //for recomm btn
    setSelectedcategory(e.target.value);
  }

  function  inputdata(products,query,selectedcategory){
   
    let filterproduct = products;

    if (query) {

      filterproduct = filterproduct.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        (product.newPrice && product.newPrice.includes(query))
      );       
    }
    if (selectedcategory){

    filterproduct = filterproduct.filter(
       ({category, color, newPrice, title}) =>
         category === selectedcategory ||
         color === selectedcategory ||
         newPrice === Number(selectedcategory) ||
         title === selectedcategory
     );
   } 
   
   return filterproduct.map(({img,title,newPrice}) => (
     <Card 
       key={Math.random()} 
       img={img}
       title={title}
       newPrice={newPrice}
       handlecartclick={() => handlecartclick({  img, title, newPrice })}
       />
   ));

  }
  const result = inputdata(products, selectedcategory, query);

  return (
    <>
      <Nav size={cart.length} query={query} setShow={setShow} handleinputchange={handleinputchange}/>
      {
        show ?<Product result={result}/>:<Cart cart={cart} setCart={setCart}/>
      }
      
      <Recomm handleclick={handleclick}/>
      <Sidebar handlechange={handlechange}/>
    </>  
  )
}

export default App
