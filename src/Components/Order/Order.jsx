import React from 'react';

const Order = () => {
  // Retrieve the orders array from local storage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} className="order-details">
              <h3>Order {index + 1}</h3>
              <p>Timestamp: {order.timestamp}</p>
              <p>Subtotal: ${order.subtotal}</p>
              <p>Shipping Cost: ${order.shippingCost}</p>
              <p>Total Cost: ${order.totalCost}</p>
              <h4>Items:</h4>
              <ul>
                {Object.keys(order.items).map((itemId) => (
                  <li key={itemId} className="order-item">
                    <img
                      src={order.items[itemId].img}
                      alt={`Product ${itemId}`}
                      className="product-image"
                    />
                    <span>
                      Quantity: {order.items[itemId].quantity}, Price: ${order.items[itemId].price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
