
import Header from "./components/Header/Header";
import React from "react";
import store from "./store";
import { Provider } from "react-redux";


const App = () => {
  return (
    <>
     <Provider store={store}>
     
     <Header />
   </Provider>
     
    </>
  );
};

export default App;

