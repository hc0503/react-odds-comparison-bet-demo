import { PayPalButton } from "react-paypal-button-v2"

import env from '../../config/environments'

interface IProps {
	createSubscription: (data: any, actions: any) => any;
	onApprove: (data: any, actions: any) => any;
	onError: (err: any) => void;
	catchError: (err: any) => void;
}
export default function PayPalBtn({createSubscription, onApprove, catchError, onError}: IProps) {
	const paypalClientId = env.paypalClientId

	return (
		<PayPalButton
			createSubscription={createSubscription}
			onApprove={onApprove}
			onError={onError}
			catchError={catchError}
			options={{ 
				clientId: paypalClientId,
				vault: true,
			}}
			style={{
				color: "blue",
				layout: "horizontal",
			}}
		/>
	)
}
