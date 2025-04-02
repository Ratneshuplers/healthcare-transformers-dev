import React, {useState, useEffect} from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import SingleArticleList from "./SingleArticleList";
import '../css/ArticleListFilter.scss';

const groupClicked = (group, setActiveGroup, setPagination) => (e) => {
	e.preventDefault();
	setActiveGroup(group)
	setPagination(calculatePagination(group))
}

const paginate = (page, activeGroup, setPagination) => (e) => {
	e.preventDefault();
	setPagination(calculatePagination(activeGroup, page))
}

const calculatePagination = (activeGroup, currentPage = 1) => {
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
	let totalPages = Math.ceil(activeGroup.posts.length/perPage)
	currentPage = currentPage > totalPages ? totalPages : currentPage;
	currentPage = currentPage < 1 ? 1 : currentPage;
	let startIndex = (currentPage-1)*perPage
	return {
		items: activeGroup.posts.slice(startIndex,startIndex+perPage),
		page: currentPage,
		totalPages: totalPages
	}
}

function CategorisedArticles ({data, orangeBg, trainingSeriesContent=false}) {
	const [activeGroup, setActiveGroup] = useState(data[0])
	const [pagination, setPagination] = useState(calculatePagination(activeGroup))
	useEffect(() => {
		function handleResize() {
			setPagination(calculatePagination(activeGroup))
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [activeGroup])
	return (
		<section className={`padding-1 ${orangeBg ? 'alt-color' : ''}`}>
			<div className='container'>
				<div className='row'>
					<div className="col-12">
						{!orangeBg && !trainingSeriesContent &&
							<span className="More-articles-of">More articles of</span>
						}
						{trainingSeriesContent  && (
							<div className="">
								<h3>Related content</h3>
								<div className="spacer-56"></div>
							</div>
						)}
						{!trainingSeriesContent  && (
							<div className="article-list-filter">
								<Scrollbars  >
									<ul>
										{data.map((group) => (
											<li className={`${group.id === activeGroup.id ? "active" : ""}`} key={group.id}>
												<a href={`${window.location.href}#`} onClick={groupClicked(group, setActiveGroup, setPagination)}>{group.title}</a>
											</li>
										))}
									</ul>
								</Scrollbars>
							</div>
						)}
					</div>
					{ pagination.items.length === 0 &&
						<div className='col-12'>
							No articles found.
						</div>
					}
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
										<a href={`${window.location.href}#`} className={`${pagination.page === 1 ? 'disabled': ''}`} onClick={paginate(pagination.page - 1, activeGroup, setPagination)}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z"/>
											</svg>
										</a>
									</li>
									<li>
										<span>{pagination.page} / {pagination.totalPages}</span>
									</li>
									<li>
										<a href={`${window.location.href}#`} className={`${pagination.page === pagination.totalPages ? 'disabled': ''}`} onClick={paginate(pagination.page + 1, activeGroup, setPagination)}>
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

export default CategorisedArticles;
