// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

import "./index.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerForm = () => {
	const { Formik } = formik;

	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const schema = yup.object().shape({
		firstName: yup
			.string()
			.matches(/^[A-Za-z]+$/, "First name must contain only letters")
			.required("First name is required"),
		lastName: yup
			.string()
			.matches(/^[A-Za-z]+$/, "Last name must contain only letters")
			.required("Last name is required"),
		email: yup
			.string()
			.email("Invalid email format")
			.required("Email is required"),
		phoneNumber: yup
			.number()
			.typeError("Phone number must contain only digits")
			.test(
				"len",
				"Phone number must be exactly 10 digits",
				(val) => val && val.toString().length === 10
			)
			.required("Phone number is required"),
		address: yup.string().required("Address is required"),
	});

	return (
		<div className="form-container">
			<Formik
				validationSchema={schema}
				onSubmit={(values, errors) => {
					const url = "https://qwipo-assignment.onrender.com/customers";

					const data = {
						firstName: values.firstName,
						lastName: values.lastName,
						phoneNumber: values.phoneNumber,
						email: values.email,
						address: values.address,
					};

					const createCustomer = async () => {
						setLoading(true);
						try {
							const response = await fetch(url, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(data),
							});

							if (!response.ok) {
								throw new Error(`HTTP error! status: ${response.status}`);
							}

							const result = await response.json();
							toast.success("Account Created..!!", {
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
							navigate("/");
						} catch (error) {
							toast.error(error, {
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
							console.error("Error:", error);
						}
						setLoading(false);
					};

					createCustomer();
				}}
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					phoneNumber: "",
					address: "",
				}}
			>
				{({ handleSubmit, handleChange, values, touched, errors }) => (
					<Form className="user-info-form" noValidate onSubmit={handleSubmit}>
						<h1>User Creation Form</h1>
						<Form.Group as={Col} md="12" controlId="validationFormik03">
							<Form.Label className="input-label">First Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="First Name"
								name="firstName"
								value={values.firstName}
								onChange={handleChange}
								isInvalid={!!errors.firstName}
							/>

							<Form.Control.Feedback type="invalid">
								{errors.firstName}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="12" controlId="validationFormik03">
							<Form.Label className="input-label">Last Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Last Name"
								name="lastName"
								value={values.lastName}
								onChange={handleChange}
								isInvalid={!!errors.lastName}
							/>

							<Form.Control.Feedback type="invalid">
								{errors.lastName}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="12" controlId="validationFormik03">
							<Form.Label className="input-label">Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								name="email"
								value={values.email}
								onChange={handleChange}
								isInvalid={!!errors.email}
							/>

							<Form.Control.Feedback type="invalid">
								{errors.email}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="12" controlId="validationFormik03">
							<Form.Label className="input-label">Phone Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Phone number"
								name="phoneNumber"
								value={values.phoneNumber}
								onChange={handleChange}
								isInvalid={!!errors.phoneNumber}
							/>

							<Form.Control.Feedback type="invalid">
								{errors.phoneNumber}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="12" controlId="validationFormik03">
							<Form.Label className="input-label">Address </Form.Label>
							<Form.Control
								type="text"
								placeholder="E.g: 1-53 Tirupati"
								name="address"
								value={values.address}
								onChange={handleChange}
								isInvalid={!!errors.address}
							/>

							<Form.Control.Feedback type="invalid">
								{errors.address}
							</Form.Control.Feedback>
						</Form.Group>

						<Button disabled={loading} className="mt-4" type="submit">
							{loading ? "submitting" : "Submit"}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default CustomerForm;
