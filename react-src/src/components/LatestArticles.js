import React, {useEffect, useState} from "react";
import SingleArticleList from "./SingleArticleList";
import '../css/AuthorPublications.scss';

const paginate = (page, posts, setPagination) => (e) => {
	e.preventDefault();
	setPagination(calculatePagination(posts, page))
}

const calculatePagination = (posts, currentPage = 1) => {
	let perPage = 4;
	if (window.innerWidth < 768) {
		perPage = 1
	}
	else if (window.innerWidth < 992) {
		perPage = 2
	}
	else if (window.innerWidth < 1200) {
		perPage = 3
	}
	let totalPages = Math.ceil(posts.length/perPage)
	currentPage = currentPage > totalPages ? totalPages : currentPage;
	currentPage = currentPage < 1 ? 1 : currentPage;
	let startIndex = (currentPage-1)*perPage
	return {
		items: posts.slice(startIndex,startIndex+perPage),
		page: currentPage,
		totalPages: totalPages
	}
}

function LatestArticles ({data, smallTitle, title}) {
	const [pagination, setPagination] = useState(calculatePagination(data.filteredItems.posts))
	useEffect(() => {
		function handleResize() {
			setPagination(calculatePagination(data.filteredItems.posts))
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [data])

	if (data.filteredItems.posts.length === 0) {
		return
	}
	return (
		<section className="authorpublications padding-1">
			<div className='container'>
				<div className='row'>
					<div className="col-12">
						{smallTitle && <span className="More-articles-of">Articles</span> }
						<h3>{title}</h3>
					</div>
					{pagination.items.map((post, index) => (
						<div className='col-12 col-md-6 col-lg-4 col-xl-3' key={index}>
							<SingleArticleList data={post} />
						</div>
					))}
					{pagination.totalPages > 1 && (
						<div className="col-12">
							<div className='d-flex justify-content-center align-items-center pt-52'>
								<ul className='pagrination'>
									<li>
										<a href={`${window.location.href}#`} className={`${pagination.page === 1 ? 'disabled': ''}`} onClick={paginate(pagination.page - 1, data.filteredItems.posts, setPagination)}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z"/>
											</svg>
										</a>
									</li>
									<li>
										<span>{pagination.page} / {pagination.totalPages}</span>
									</li>
									<li>
										<a href={`${window.location.href}#`} className={`${pagination.page === pagination.totalPages ? 'disabled': ''}`} onClick={paginate(pagination.page + 1, data.filteredItems.posts, setPagination)}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z"/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default LatestArticles;
