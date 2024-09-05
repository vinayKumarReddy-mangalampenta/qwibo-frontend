// src/components/CustomerList.js
import React, { Component, useState } from "react";

import "./index.css";
import CustomerCard from "../CustomerCard";

class Home extends Component {
	state = {
		customers: [],
	};

	componentDidMount() {
		const url = "https://qwipo-assignment.onrender.com/customers";
		fetch(url)
			.then((response) => response.json())
			.then((data) => this.setState({ customers: data }))
			.catch((error) => console.error("Error fetching customers:", error));
	}

	handleFilterChange = (newFilters) => {
		// setFilters(newFilters);
	};

	render() {
		const { customers } = this.state;

		return (
			<div className="home-container">
				<h1>Customer List</h1>
				<section className="users-data-container">
					<Filter onFilterChange={this.handleFilterChange} />
					<ul className="d-flex flex-wrap gap-3 justify-content-left list-unstyled p-3">
						{customers.map((customer) => (
							<CustomerCard key={customer.id} customer={customer} />
						))}
					</ul>
				</section>
			</div>
		);
	}
}

export default Home;

const Filter = ({ onFilterChange }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleFilterChange = () => {
		onFilterChange({
			name,
			email,
			phoneNumber,
		});
	};

	return (
		<div className="search-filter-container">
			<h1>Filters</h1>
			<div className="filter-input">
				<label>Name:</label>
				<input
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
						handleFilterChange();
					}}
				/>
			</div>
			<div className="filter-input">
				<label>Email:</label>
				<input
					type="text"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						handleFilterChange();
					}}
				/>
			</div>
			<div className="filter-input">
				<label>Phone Number:</label>
				<input
					type="text"
					value={phoneNumber}
					onChange={(e) => {
						setPhoneNumber(e.target.value);
						handleFilterChange();
					}}
				/>
			</div>
		</div>
	);
};
