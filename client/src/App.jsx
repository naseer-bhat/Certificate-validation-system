import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import ValidateCertificate from "./components/pages/ValidateCertificate";
// import ManageCertificates from "./components/pages/ManageCertificates";	


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
		    
			{user && <Route path="/" exact element={<Main />} />}
			{/* <Route path="/" element={<Dashboard />} /> */}
			<Route path="/validate" element={<ValidateCertificate />} />
			
			{/* <Route path="/manage" element={<ManageCertificates />} /> */}
            {/* <Route path="/reports" element={<Reports />} /> */}

			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		
	);
}

export default App;
