import React from "react";
import me from "../Image/me.jpg";

export const Header = () => {
	return (
		<div>
			<div className="text-center mb-5">
				<div className="row">
					<div className="col-md-2">
						<img
							className="rounded"
							src={me}
							alt="profile_pic"
							width="180rem"
						/>
					</div>
					<div className="col-md-10">
						<h1>Aashish Paudel</h1>
						<p>Software Engineer</p>
						<p>Phone: 04xxxxx | email: aa@asdnasda.com</p>
						<button className="btn btn-primary">Download Resume</button>
						<br />
						<button className="btn btn-secondary mt-2">Github Profile</button>
					</div>
				</div>
			</div>
		</div>
	);
};
