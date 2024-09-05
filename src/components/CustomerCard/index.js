import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import "./index.css";
const CustomerCard = (props) => {
	const { customer } = props;
	const { firstName, lastName, phoneNumber, email, id } = customer;
	return (
		<li className="text-left user-card">
			<div className="d-flex gap-1">
				<FaRegUser />
				<h6>
					{firstName} {lastName}
				</h6>
			</div>

			<div className="d-flex gap-1">
				<span>
					<MdEmail />
				</span>
				<span>{email} </span>
			</div>
			<div className="d-flex gap-1">
				<span>
					<FaPhoneAlt />
				</span>
				<span>{phoneNumber} </span>
			</div>

			<a className="btn btn-primary px-3 mt-3" href={`/customer/${id}`}>
				View
			</a>
		</li>
	);
};

export default CustomerCard;
