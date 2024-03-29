interface IProps {
	getStartedBtn: any;
}
export default function PriceCard({getStartedBtn}: IProps) {
	return (
		<div className="row mt-5">
			<div className="col-4 mx-auto card mb-4 box-shadow text-center">
				<div className="card-header">
					<h4 className="my-0 font-weight-normal">Preminum</h4>
				</div>
				<div className="card-body">
					<h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
					<ul className="list-unstyled mt-3 mb-4">
						<li>500 requests per month</li>
						<li>All sports</li>
						<li>All bookmakers</li>
						<li>All betting markets</li>
					</ul>
					{getStartedBtn}
				</div>
			</div>
		</div>
	)
}