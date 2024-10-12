import React from "react";
import { Provider } from "react-redux";
import store from './store';

import Header from "./components/Header/Header";
import Counter from './Counter';

const App = () => {
  return (
    <>
     <Provider store={store}>
      <Counter />
    </Provider>
      <Header />
    </>
  );
};

export default App;

