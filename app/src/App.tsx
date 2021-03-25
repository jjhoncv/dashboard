import * as React from "react";
import { Routes } from "./routes/Router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./stores";
import { FloatLoading } from "./components/Float";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<FloatLoading />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
