import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// const initialOptions = {
//     clientId:
//         "AUnlNcn3YNaJoGpqGgf6rS3LQuajUSsMtU3UNFC-a5fWtkY36bs0pjxhU0pUpFaXWm6lE4PhxS48UX6j",
//     currency: "USD",
//     intent: "capture",
// };

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PayPalScriptProvider
                    options={{
                        "client-id":
                            "AUnlNcn3YNaJoGpqGgf6rS3LQuajUSsMtU3UNFC-a5fWtkY36bs0pjxhU0pUpFaXWm6lE4PhxS48UX6j",
                    }}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PayPalScriptProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
