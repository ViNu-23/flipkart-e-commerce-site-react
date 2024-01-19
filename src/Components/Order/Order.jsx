import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { Button, Modal } from "react-bootstrap";
import { IoMdHelpCircle } from "react-icons/io";
import { PiPackageFill } from "react-icons/pi";


const Order = () => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );
  const [cancelorder, setCancelOrder] = useState("");

  const handleCancelOrder = (index) => {
    // Create a copy of the orders array
    const updatedOrders = [...orders];

    // Remove the selected order at the given index
    updatedOrders.splice(index, 1);

    // Update the state and local storage
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setCancelOrder("Order cancelled");
  };
  const [modalShow, setModalShow] = useState(false);

  const handleInfo = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <div style={{ margin: "18px" }}>
      <h2 style={{margin:'20px'}}>Order History  <PiPackageFill style={{marginBottom:'2px'}}/> </h2>
      {cancelorder && (
        <div
          className="alert alert-info"
          role="alert"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {cancelorder}{" "}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={()=>{
              setCancelOrder('')
            }}

          ></button>
        </div>
      )}

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index}>
              <div
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  marginBottom: "15px",
                  padding: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "left",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontWeight: "bold", marginBottom: "15px" }}>
                      Order {index + 1}
                    </div>
                    <div>Timestamp: {order.timestamp}</div>
                    <div>Subtotal: ${order.subtotal}</div>
                    <div>Shipping Cost: ${order.shippingCost}</div>
                    <div style={{ fontWeight: "bold" }}>
                      Total Cost: ${order.totalCost}
                    </div>
                  </div>
                  <div style={{ width: "40%" }}>
                    <span style={{ fontWeight: "bold" }}>Items</span>
                    <div style={{ fontSize: "small", marginTop: "15px" }}>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: "0px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {Object.keys(order.items).map((itemId) => (
                          <li
                            key={itemId}
                            style={{ margin: "0px 30px 20px 20px" }}
                          >
                            <img
                              src={order.items[itemId].img}
                              alt={`Product ${itemId}`}
                              className="product-image"
                              style={{
                                width: "60px",
                              }}
                            />
                            <div>Quantity: {order.items[itemId].quantity}</div>
                            <div> Price: ${order.items[itemId].price}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    style={{
                      marginRight: "10px",
                    }}
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleInfo(index)}
                  >
                    <FaCircleInfo style={{ height: "18px", width: "18px" }} />
                  </button>
                  <Modal show={modalShow} onHide={closeModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Delivery Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={{
                              height: "15px",
                              width: "15px",
                              background: "#68D391",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              fontSize: "smaller",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ margin: "0px 8px" }}>Ordered</div>
                            <div style={{ fontSize: "10px" }}>
                              Date:{" "}
                              {new Date(order.timestamp).toLocaleDateString(
                                "en-GB"
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            height: "20px",
                            width: "4px",
                            background: "#68D391",
                            margin: "2px 6px",
                            borderRadius: "4px",
                          }}
                        />

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={{
                              height: "15px",
                              width: "15px",
                              border: "2px solid #CBD5E0",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              fontSize: "smaller",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ margin: "0px 8px" }}>Shipped</div>
                            <div style={{ fontSize: "10px" }}>
                              Expected Date:{" "}
                              {new Date(
                                new Date(order.timestamp).getTime() +
                                  24 * 60 * 60 * 1000
                              ).toLocaleDateString("en-GB")}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            height: "20px",
                            width: "4px",
                            background: "#EDF2F7",
                            margin: "2px 6px",
                            borderRadius: "4px",
                          }}
                        />

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={{
                              height: "15px",
                              width: "15px",
                              border: "2px solid #CBD5E0",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              fontSize: "smaller",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ margin: "0px 8px" }}>Dispatched</div>
                            <div style={{ fontSize: "10px" }}>
                              Expected Date:{" "}
                              {new Date(
                                new Date(order.timestamp).getTime() +
                                  2 * 24 * 60 * 60 * 1000
                              ).toLocaleDateString("en-GB")}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            height: "20px",
                            width: "4px",
                            background: "#EDF2F7",
                            margin: "2px 6px",
                            borderRadius: "4px",
                          }}
                        />

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={{
                              height: "15px",
                              width: "15px",
                              border: "2px solid#CBD5E0",
                              borderRadius: "50%",
                            }}
                          />
                          <div
                            style={{
                              fontSize: "smaller",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ margin: "0px 8px" }}>Delivered</div>
                            <div style={{ fontSize: "10px" }}>
                              Expected Date:{" "}
                              {new Date(
                                new Date(order.timestamp).getTime() +
                                  3 * 24 * 60 * 60 * 1000
                              ).toLocaleDateString("en-GB")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "small" }}>
                        Help Centre{" "}
                        <IoMdHelpCircle
                          style={{
                            height: "15px",
                            width: "15px",
                            color: "#2874f0",
                          }}
                        />
                      </span>

                      <Button
                        style={{
                          backgroundColor: "#2874f0",
                          padding: "4px 8px",
                        }}
                        onClick={closeModal}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleCancelOrder(index)}
                  >
                    Cancel Order
                  </button>
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
