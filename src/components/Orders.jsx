import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../assets/functions/dbFncs";
import { StyledOrders } from "../styles/OrderStyles";

export const Orders = () => {
  const ordersList = useSelector((state) => state.appStatus.orders);
  const userId = useSelector((state) => state.appStatus.userId);

  useEffect(() => {
    getOrders(userId); //getOrders
    console.log(userId);
  }, []);

  useEffect(() => {
    //al cuete?
    console.log(ordersList);
  }, [ordersList]);

  return (
    <StyledOrders>
      <h2>Pedidos</h2>
      <main className="orders">
        {ordersList.length > 0 ? (
          ordersList.map((order) => (
            <article className="order">
              <p>Order ID: {order._id}</p>
              <p>User ID: {order.userId}</p>
              <p>Items:</p>
              {order.items.map((item) => (
                <div className="items">
                  <h3>Titulo: {item.title}</h3>
                  <p>Descripcion: {item.description}</p>
                  <p>Precio: {item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              ))}
              <p>Status: {order.status}</p>
              <p>Fecha: {order.date}</p>
              <p>Total sin envío: {order.price}</p>
              <p>Total con envío: {order.total}</p>
            </article>
          ))
        ) : (
          <p>No hay pedidos</p>
        )}
      </main>
    </StyledOrders>
  );
};
