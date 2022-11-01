import { faker } from "@faker-js/faker";
import { useState } from "react";

import SingleProduct from "./SingleProduct";

faker.seed(100);
const Home = () => {
  //let x = 0;
  let[x,setX] = useState(0) ;
    const productsArr = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  console.log(productsArr);
  // Adding to cart:
  // 1. Create cart state and send as props with SingleProduct
  
  const [products] = useState(productsArr);

  return (<>
    <h1>{x}</h1> <br />
    <button onClick={()=>{
      setX (x+1);
     // x++ ;
    }}> add </button>
    <div className="row">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
    </>
  );
};

export default Home;
