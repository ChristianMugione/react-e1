import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../assets/functions/dbFncs";
import { StyledOrders } from "../styles/OrderStyles";
import { prettyDate } from "../assets/functions/auxiliar";
import { useNavigate } from "react-router-dom";

export const Orders = () => {
  const ordersList = useSelector((state) => state.appStatus.orders);
  const userId = useSelector((state) => state.appStatus.userId);
  const token = useSelector((state) => state.appStatus.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) navigate("/");
  }, []);

  useEffect(() => {
    if (!ordersList) {
      getOrders(userId, token);
      return;
    }
    if (ordersList.length === 0) {
      getOrders(userId, token); //getOrders
    }
  }, [userId]);

  // useEffect(() => {
  //   if (ordersList == []) {
  //     return;
  //   }
  //   //for cuet?
  //   // console.log(ordersList[0].date);
  // }, [ordersList]);

  return (
    <StyledOrders>
      <h2>Pedidos</h2>
      <main className="orders">
        {ordersList && ordersList.length > 0 ? (
          ordersList.map((order, index) => {
            const date = prettyDate(order.date);

            return (
              <div className="container" key={index}>
                <article className="order">
                  <div className="order-header">
                    <p>{date}</p>
                    <p>{order.status}</p>
                  </div>
                  {/* <p>Order ID: {order._id}</p> */}
                  {/* <p>User ID: {order.userId}</p> */}
                  {/* <h3>Items:</h3> */}
                  {order.items.map((item, index) => (
                    <div className="item-container" key={index}>
                      <div className="item">
                        <div className="item-image">
                          {item.image && (
                            <img src={item.image} alt={item.title} />
                          )}
                          {!item.image && (
                            <img
                              src="/imagen-no-disponible.png"
                              alt={item.title}
                            />
                          )}
                        </div>
                        <div className="item-info">
                          <h3 className="item-title">{item.title}</h3>
                          <p className="item-description">{item.description}</p>
                        </div>
                        <p className="item-price">
                          $ {item.price} ( {item.quantity} )
                        </p>
                      </div>
                      <div className="line"></div>
                    </div>
                  ))}

                  <div className="totals">
                    <p>Total: {order.price}</p>
                    <p>Con envío: {order.total}</p>
                  </div>
                </article>
              </div>
            );
          })
        ) : (
          <p>No hay pedidos</p>
        )}
      </main>
    </StyledOrders>
  );
};
