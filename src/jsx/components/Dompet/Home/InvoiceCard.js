import React from "react";
import AdminServices from "../../../../services/AdminService";
import useAsync from "../../../hooks/useAsync";

const InvoiceCard = () => {
	const { data, error, isLoading } = useAsync(AdminServices.dashboard);

	console.log(data)

	// Destructure data for better readability
	const { totalUsers, totalServices } = data?.data || {};

	return (
		<>
			<div className="col-xl-3 col-xxl-6 col-sm-6">
				<div className="card bg-warning invoice-card">
					<div className="card-body d-flex">
						<div className="icon me-3">
						{/* <img src="img/total-users.svg" alt="" /> */}
							<i className="fas fa-users text-white fs-2"></i>
						</div>
						<div>
							<h2 className="text-white invoice-num">{totalUsers ?? 0}</h2>
							<span className="text-white fs-18">Total Users</span>
						</div>
					</div>
				</div>
			</div>

			<div className="col-xl-3 col-xxl-6 col-sm-6">
				<div className="card bg-success invoice-card">
					<div className="card-body d-flex">
						<div className="icon me-3">
							{/* Replace with an actual icon */}
							<i className="fas fa-concierge-bell text-white fs-2"></i>
						</div>
						<div>
							<h2 className="text-white invoice-num">{totalServices ?? 0}</h2>
							<span className="text-white fs-18">Total Services</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InvoiceCard;





							<svg width="35px" height="34px">
							<path   fill="rgb(255, 255, 255)"
							 d="M32.482,9.730 C31.092,6.789 28.892,4.319 26.120,2.586 C22.265,0.183 17.698,-0.580 13.271,0.442 C8.843,1.458 5.074,4.140 2.668,7.990 C0.255,11.840 -0.509,16.394 0.514,20.822 C1.538,25.244 4.224,29.008 8.072,31.411 C10.785,33.104 13.896,34.000 17.080,34.000 L17.286,34.000 C20.456,33.960 23.541,33.044 26.213,31.358 C26.991,30.866 27.217,29.844 26.725,29.067 C26.234,28.291 25.210,28.065 24.432,28.556 C22.285,29.917 19.799,30.654 17.246,30.687 C14.627,30.720 12.067,29.997 9.834,28.609 C6.730,26.671 4.569,23.644 3.752,20.085 C2.934,16.527 3.546,12.863 5.486,9.763 C9.488,3.370 17.957,1.418 24.359,5.414 C26.592,6.808 28.360,8.793 29.477,11.157 C30.568,13.460 30.993,16.016 30.707,18.539 C30.607,19.448 31.259,20.271 32.177,20.371 C33.087,20.470 33.911,19.820 34.011,18.904 C34.363,15.764 33.832,12.591 32.482,9.730 L32.482,9.730 Z"/>
							<path   fill="rgb(255, 255, 255)"
							 d="M22.593,11.237 L14.575,19.244 L11.604,16.277 C10.952,15.626 9.902,15.626 9.250,16.277 C8.599,16.927 8.599,17.976 9.250,18.627 L13.399,22.770 C13.725,23.095 14.150,23.254 14.575,23.254 C15.001,23.254 15.427,23.095 15.753,22.770 L24.940,13.588 C25.592,12.937 25.592,11.888 24.940,11.237 C24.289,10.593 23.238,10.593 22.593,11.237 L22.593,11.237 Z"/>
							</svg>