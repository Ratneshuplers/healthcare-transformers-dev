import React from "react";
import '../css/MostPopular.scss';

function MostPopular ({data}) {
	if (data.posts.length === 0) {
		return;
	}
	return (
		<div className='most-popular-list'>
			<h4>Most popular</h4>
			{data.posts.map((post) => (
				<div className='popular-article' key={post.id}>
					<a href={post.url}>
						{post?.images?.['288x162'] && <img src={post.images['288x162']} alt="thumb"></img>}
						<p>{post.title}</p>
					</a>
				</div>
			))}
		</div>
	);
}

export default MostPopular; 
