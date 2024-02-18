import { BrowserRouter } from "react-router-dom";
import Navbar from "./Pages/Navbar.jsx";
import "./navbar.css";
import "./App.css";
import AllRoutes from "./AllRoutes.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme.js";
import Footer from "./Pages/Footer.jsx";

// <ChakraProvider>
//   <TheRestOfYourApplication />
// </ChakraProvider>

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <AllRoutes />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
