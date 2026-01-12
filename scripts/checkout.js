import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js"; // this run the function you put in this --> { function }
import '../data/cart-class.js'; // this run all inside the file

renderOrderSummary();
renderPaymentSummary();