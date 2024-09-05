import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerForm from "./components/CustomerForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<div>
				{/* <button onClick={notify}>Notify!</button> */}
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					transition="Bounce"
				/>
			</div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/new" element={<CustomerForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
