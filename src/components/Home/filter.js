import React, { useState } from "react";

const Filter = (props) => {
    const { setUsersData } = props;
	const [query, setQuery] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	return (
		<div>
			<input />
		</div>
	);
};

export default Filter;
