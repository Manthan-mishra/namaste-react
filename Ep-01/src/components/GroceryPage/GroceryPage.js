import React from "react";
import "./GroceryPage.css";

const groceryItems = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$3.99 / lb",
    image:
      "https://plus.unsplash.com/premium_photo-1669557208945-640032289d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2glMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Bananas",
    price: "$0.59 / lb",
    image:
      "https://images.unsplash.com/photo-1640958900081-7b069dd23e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Carrots",
    price: "$1.29 / lb",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Tomatoes",
    price: "$2.49 / lb",
    image:
      "https://images.unsplash.com/photo-1524593166156-312f362cada0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VG9tYXRvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Broccoli",
    price: "$1.99 / lb",
    image:
      "https://images.unsplash.com/photo-1685504445355-0e7bdf90d415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnJvY2NvbGl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Strawberries",
    price: "$4.99 / box",
    image:
      "https://plus.unsplash.com/premium_photo-1690291012436-6600ce6ffdbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyYXdiZXJyaWVzfGVufDB8fDB8fHww",
  },
];

const GroceryPage = () => {
  return (
    <div className="grocery-container">
      <h1 className="grocery-heading">🛒 Fresh Grocery Picks</h1>
      <div className="grocery-grid">
        {groceryItems.map((item) => (
          <div key={item.id} className="grocery-card">
            <div className="card-img-wrapper">
              <img src={item.image} alt={item.name} className="grocery-img" />
            </div>
            <h2 className="grocery-name">{item.name}</h2>
            <p className="grocery-price">{item.price}</p>
            <button className="grocery-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryPage;
