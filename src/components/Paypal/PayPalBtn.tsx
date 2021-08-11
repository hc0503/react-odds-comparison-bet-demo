import { PayPalButton } from "react-paypal-button-v2"

import env from '../../config/environments'

export default function PayPalBtn(props: any) {
	const { createSubscription, onApprove, catchError, onError } = props
	const paypalClientId = env.paypalClientId

	return (
		<PayPalButton
			createSubscription={(data: any, details: any) => createSubscription(data, details)}
			onApprove={(data: any, details: any) => onApprove(data, details)}
			onError={(err: any) => onError(err)}
			catchError={(err: any) => catchError(err)}
			options={{ 
				clientId: paypalClientId,
				vault: true,
			}}
			style={{
				color: "blue",
				layout: "horizontal",
				label: "subscribe"
			}}
		/>
	)
}
