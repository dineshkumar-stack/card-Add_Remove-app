import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";

const data = [
  {
    img: "",
    productName: "Fancy Product",
    offer: "$35.00",
    productPrice: "$26.00",
    AddToCard: "Add to cart",
  },
  {
    img: "",
    productName: "Special Item",
    rating: "⭐⭐⭐⭐⭐",
    productPrice: "$47.00",
    sale: "sale",
    AddToCard: "Add to cart",

  },
  {
    img: "",
    productName: "sale item",
    offer: "$35.00",
    productPrice: "$25.00",
    sale: "sale",
    AddToCard: "Add to cart",
  },
  {
    img: "",
    productName: "Sale Item",
    rating: "⭐⭐⭐⭐⭐",
    sale: "sale",
    productPrice: "$95.00",
    AddToCard: "Add to cart",
  },
  {
    img: "",
    productName: "Fancy Product",
    productPrice: "$48.00",
    viewOption: "View options",
  },
  {
    img: "",
    productName: "Fancy Product",
    offer: "$70.00",
    productPrice: "$65.00",
    sale: "sale",
    AddToCard: "Add to cart",
  },
  {
    img: "",
    productName: "Fancy Product",
    productPrice: "$141.00",
    AddToCard: "Add to cart",
  },
  {
    img: "",
    productName: "Fancy Product",
    productPrice: "$25.00",
    sale: "sale",
    viewOption: "View options",
  },
];

function App() {


  <body>
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h2 className="display-4 fw-bolder">Shop Smartphones in lowest price</h2>
          <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
      </div>
    </header>
  </body>

  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h2 className="display-4 fw-bolder">Shop in style</h2>
          <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          <div className="cartItem-container">
            <h1>Cart {cartCount} </h1>
            <div className="card-container">
              {data.map((prod, idx, accArr) => (
                <ProductDetail1
                  array={accArr}
                  key={prod.idx}
                  rating={prod.rating}
                  offer={prod.offer}
                  sale={prod.sale}
                  productImage={prod.productImage}
                  productName={prod.productName}
                  productPrice={prod.productPrice}
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
export default App;

function ProductDetail1({ rating, productName, offer, sale, productPrice, array, setCartCount, cartCount }) {
  const [show, setShow] = useState(true)
  const handleAdd = () => {
    setShow(!show)
    setCartCount(cartCount + 1)
  }

  const handleRemove = () => {
    setShow(!show)
    setCartCount(cartCount - 1)

  }

  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
        <div className='badge bg-dark text-white position-absolute' style={{ top: "0.5rem", right: "0.5rem" }}>{sale}</div>
        <Card.Img variant="top" src="https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png" />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Text>{rating}</Card.Text>
          
          <Card.Text><span class="text-muted text-decoration-line-through">{offer}</span> {productPrice}</Card.Text>
          {show ? <Button variant="outline-dark" onClick={handleAdd}>Add to cart</Button>
            :
            <Button style={{ backgroundColor: "red" }} onClick={handleRemove}>Remove cart</Button>
          }
        </Card.Body>
      </Card>
    </div>
  );
}
