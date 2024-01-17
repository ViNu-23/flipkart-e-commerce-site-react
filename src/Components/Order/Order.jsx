import React, { useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);


  const handleCancelOrder = (index) => {
    // Create a copy of the orders array
    const updatedOrders = [...orders];

    // Remove the selected order at the given index
    updatedOrders.splice(index, 1);

    // Update the state and local storage
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

  };

  return (
    <div style={{ margin: "18px" }}>
      <div style={{ alignItems: 'center', margin: '0px 0px 15px 0px' }}>Order History</div>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
            
          {orders.map((order, index) => (
            
            <div key={index}>
              <div style={{
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                marginBottom: '15px',
                padding: '15px',
              }}>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  borderRadius: '8px',
                }}>

                  <div style={{
                    display: 'flex', alignItems: 'left', flexDirection: 'column',
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>Order {index + 1}</div>
                    <div>Timestamp: {order.timestamp}</div>
                    <div>Subtotal: ${order.subtotal}</div>
                    <div>Shipping Cost: ${order.shippingCost}</div>
                    <div style={{ fontWeight: 'bold' }}>Total Cost: ${order.totalCost}</div>
                  </div>
                  <div style={{ width: '40%' }}>
                    <span style={{ fontWeight: 'bold' }}>Items</span>
                    <div style={{ fontSize: 'small', marginTop: '15px' }}>
                      <ul style={{
                        listStyle: 'none', padding: '0px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
                      }}>
                        {Object.keys(order.items).map((itemId) => (
                          <li key={itemId} style={{ margin: '0px 30px 20px 20px' }} >

                            <img
                              src={order.items[itemId].img}
                              alt={`Product ${itemId}`}
                              className="product-image"
                              style={{
                                width: '60px',
                              }} />
                            <div>
                              Quantity: {order.items[itemId].quantity}
                            </div>
                            <div> Price: $
                              {order.items[itemId].price}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'end',
                }}>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => handleCancelOrder(index)}>Cancel Order</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Order;
