import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import ResumeAssesorChatAssistant from "./components/ChatAssistant";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeSreen from "../src/screens/HomeSreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import AppContext from "./utils/Context";

function App() {
  return (
    <AppContext>
      <Router basename="/">
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id?" element={<CartScreen />} />
              <Route path="/search/:keyword" element={<HomeSreen />} />
              <Route path="/" element={<HomeSreen />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
        
        {/* Add the chat assistant component with hover text */}
        <div title="Click to open chat assistant">
          <ResumeAssesorChatAssistant /> 
        </div>
      </Router>
    </AppContext>
  );
}

export default App;