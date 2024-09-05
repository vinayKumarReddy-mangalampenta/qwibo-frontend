// src/components/CustomerList.js
import React, { Component, useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import "./index.css";
import CustomerCard from "../CustomerCard";
import Filter from "./filter";

const Home = () => {
	const [customers, setCustomers] = useState([
		{
			id: "1438fb44-fcc7-4527-bade-323d3609c404",
			firstName: "vinniiii",
			lastName: "reddy",
			email: "test0d2@gmail.com",
			phoneNumber: 8688969330,
		},
	]);

	useEffect(() => {
		const fetchData = async () => {
			const url = "https://qwipo-assignment.onrender.com/customers";
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				setCustomers(data);
			} else {
				toast.error("Unable to retrieve data", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					transition: Bounce,
				});
			}
		};

		fetchData();
	}, []);

	return (
		<div className="home-container">
			<h1>Customer List</h1>
			<section className="users-data-container">
				<ul className="d-flex flex-wrap gap-3 justify-content-left list-unstyled p-3">
					{customers.map((customer) => (
						<CustomerCard key={customer.id} customer={customer} />
					))}
				</ul>

				{/* filter code */}
				<Filter setUsersData={setCustomers} />
			</section>
		</div>
	);
};

export default Home;
