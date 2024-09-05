import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomerCard = (props) => {
	const { customer } = props;
	const { firstName, lastName, phoneNumber, email, id } = customer;
	return (
		<li className="text-left">
			<Card style={{ width: "20rem" }}>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Card.Body>
					<Card.Title className="text-left">
						{firstName} {lastName}
					</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</li>
	);
};

export default CustomerCard;
