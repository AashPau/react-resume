import React from "react";

export const Projects = () => {
	return (
		<div>
			<section>
				<h3>Projects</h3>
				<hr />
				<table border="1" className="table table-info">
					<thead className="thead-light">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Tech Used</th>
							<th scope="col">Description</th>
							<th scope="col">Links</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Portfolio</td>
							<td>html, css, javascript</td>
							<td>Portfolio for myself</td>
							<td>
								<a href="">Github</a> <a href="">Live</a>
							</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Calculator</td>
							<td>html, css, javascript</td>
							<td>It will allow for basic calculation.</td>
							<td>
								<a href="">Github</a> <a href="">Live</a>
							</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Marketing Website</td>
							<td>html, css, javascript</td>
							<td>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Eveniet perferendis doloribus fugit perspiciatis. Tempore
								sapiente et quos possimus nam magnam, nisi eveniet dolorum
								nulla, pariatur maiores placeat non ea a.
							</td>
							<td>
								<a href="">Github</a> <a href="">Live</a>
							</td>
						</tr>
						<tr>
							<th scope="row">4</th>
							<td>lorem Ipsum</td>
							<td>html, css, javascript</td>
							<td>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Eveniet perferendis doloribus fugit perspiciatis. Tempore
								sapiente et quos possimus nam magnam, nisi eveniet dolorum
								nulla, pariatur maiores placeat non ea a.
							</td>
							<td>
								<a href="">Github</a> <a href="">Live</a>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	);
};
