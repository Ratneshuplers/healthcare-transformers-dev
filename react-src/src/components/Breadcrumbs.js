import React from "react";
import '../css/Breadcrumbs.scss';

function breadcrumbs ({items}) {
	return (
		items && items.length > 0 &&
		<div className="breadcrumbs">
		<div className="ul">
				{items.map((item, index) => (
				<React.Fragment key={index}>
					{item.url ? <a href={item.url}>{item.title}</a> : <span>{item.title}</span>}
				</React.Fragment>
			))}
			</div>
    </div>
	);
}

export default breadcrumbs;