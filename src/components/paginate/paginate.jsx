import React from "react";
import "./paginate.css";

export default function Paginate({ nextPage, prevPage, setCurrentPage }) {
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<a
						className="page-link paginateItem"
						aria-label="Previous"
						onClick={() => setCurrentPage(prevPage)}
					>
						<span aria-hidden="true" value={prevPage}>
							&laquo;
						</span>
					</a>
				</li>
				<li className="page-item">
					<a className="page-link disabled disabledItem">&bull;</a>
				</li>
				<li className="page-item">
					<a
						className="page-link paginateItem"
						aria-label="Next"
						onClick={() => setCurrentPage(nextPage)}
					>
						<span aria-hidden="true">
							&raquo;
						</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}
