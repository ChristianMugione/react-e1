import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../assets/functions/dbFncs";
import { StyledOrders } from "../styles/OrderStyles";
import { prettyDate } from "../assets/functions/auxiliar";

export const Orders = () => {
  const ordersList = useSelector((state) => state.appStatus.orders);
  const userId = useSelector((state) => state.appStatus.userId);

  useEffect(() => {
    getOrders(userId); //getOrders
    console.log(userId);
  }, []);

  useEffect(() => {
    if (ordersList == []) return;
    //for cuet?
    console.log(ordersList[0].date);
  }, [ordersList]);

  return (
    <StyledOrders>
      <h2>Pedidos</h2>
      <main className="orders">
        {ordersList.length > 0 ? (
          ordersList.map((order) => {
            const date = prettyDate(order.date);

            return (
              <article className="order">
                <div className="order-header">
                  <p>{date}</p>
                  <p>{order.status}</p>
                </div>
                {/* <p>Order ID: {order._id}</p> */}
                {/* <p>User ID: {order.userId}</p> */}
                {/* <h3>Items:</h3> */}
                {order.items.map((item) => (
                  <div className="items">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>
                      $ {item.price} ({item.quantity})
                    </p>
                    <div className="line"></div>
                  </div>
                ))}

                <div className="totals">
                  <p>Total: {order.price}</p>
                  <p>Con envío: {order.total}</p>
                </div>
              </article>
            );
          })
        ) : (
          <p>No hay pedidos</p>
        )}
      </main>
    </StyledOrders>
  );
};
