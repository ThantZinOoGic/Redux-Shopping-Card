import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let firstRender = true;
function App() {
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
   const notification = useSelector(state => state.ui.notification);
   const cart = useSelector(state => state.cart);
   const dispatch = useDispatch();
   useEffect(() => {
    if(firstRender)
    {
      firstRender = false;
      return;
    }
    const sendRequest = async () => {
      dispatch(uiActions.showNotification({
        open : true,
        message : "Sending Request",
        type  : "warning"
      }))
      const res = await fetch('https://redux-shopping-cart-1e946-default-rtdb.firebaseio.com/cartItems.json', {
        method : "PUT",
        body : JSON.stringify(cart),
      });
      const data = await res.json();
      dispatch(uiActions.showNotification({
        open : true,
        message : "Sending Request TO Database Successfully",
        type  : "success"
      }))
    };
    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({
        open : true,
        message : "Sending Request Fail",
        type  : "error"
      }))
    });
   },[cart])
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
