import { Breadcrumb, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import NavBar from '../../components/common/navbar'
import PayPalBtn from '../../components/paypal/PayPalBtn'
import PriceCard from '../../components/price/PriceCard'
import env from '../../config/environments'

export default function Subscription() {
	const paypalSubscribe = (data: any, actions: any) => {
		return actions.subscription.create({
			'plan_id': env.paypalPlanId,
		});
	};
	const paypalOnApprove = (data: any, actions: any) => {
		// call the backend api to store transaction details
		console.log("Payapl approved")
		console.log(data.subscriptionID)
		return actions.subscription.get().then(function (details: any) {
            // Show a success message to your buyer
            alert("Subscription completed");

            // OPTIONAL: Call your server to save the subscription
            // return fetch("/paypal-subscription-complete", {
			// 	method: "post",
			// 	body: JSON.stringify({
			// 		orderID: data.orderID,
			// 		subscriptionID: data.subscriptionID
			// 	})
            // });
		});
	};
	const paypalOnError = (err: any) => {
		console.log("Error")
	}
	return (
		<>
			<NavBar />
			<Breadcrumb>
				<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
					Home
				</Breadcrumb.Item>
				<Breadcrumb.Item active>Subscritpion</Breadcrumb.Item>
			</Breadcrumb>
			<Container>
				<PriceCard getStartedBtn={
					<PayPalBtn
						createSubscription={paypalSubscribe}
						onApprove={paypalOnApprove}
						catchError={paypalOnError}
						onError={paypalOnError}
					/>
				}/>
			</Container>
		</>
	)
}