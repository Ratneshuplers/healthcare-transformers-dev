import React, {useState, useRef} from "react";
import SingleArticleList from "./SingleArticleList";
import '../css/FilterResources.scss';
import ResourcePostContent from './ResourcePostContent'

const loadMoreArticles = (ajaxUrl, filters, filteredItems, setFilteredItems, isLoadMoreLoading, setIsLoadMoreLoading) => async (e) => {
	e.preventDefault();
	if (isLoadMoreLoading) {
		return;
	}
	setIsLoadMoreLoading(true)
	try {
		const nextPage = filteredItems.lastPage + 1;
		let ajaxFireUrl = `${ajaxUrl}?action=loadMorePosts&resources=true&page=${nextPage}&perPage=${filteredItems.perPage}&s=${filters.s}&category=${filters.categories}&contentType=${filters.contentTypes}`;
		const response = await fetch(ajaxFireUrl);
		const responseJson = await response.json();
		setFilteredItems(filteredItems => ({
			posts: [...filteredItems.posts, ...responseJson.posts],
			perPage: responseJson.perPage,
			lastPage: responseJson.lastPage,
			foundPosts: responseJson.foundPosts
		}))
	} catch (error) {}
	setIsLoadMoreLoading(false)
}

const triggerSearchChange = (filters, setFilters) => (e) => {
	filters.s = e.target.value
	setFilters({...filters})
}

const triggerCategoryChange = (categoryId, allCategories, filters, setFilters) => (e) => {
	if (e.target.checked) {
		if (categoryId === 0) {
			filters.categories = allCategories.map(i=>i.id)
		}
		else {
			filters.categories.push(categoryId)
		}
	}
	else {
		if (categoryId === 0) {
			filters.categories = []
		}
		else {
			filters.categories = filters.categories.filter(item => item !== categoryId)
		}
	}
	setFilters({...filters})
}

const triggerContentTypeChange = (contentType, allContentTypes, filters, setFilters) => (e) => {
	if (e.target.checked) {
		if (contentType === 0) {
			filters.contentTypes = allContentTypes
		}
		else {
			filters.contentTypes.push(contentType)
		}
	}
	else {
		if (contentType === 0) {
			filters.contentTypes = []
		}
		else {
			filters.contentTypes = filters.contentTypes.filter(item => item !== contentType)
		}
	}
	setFilters({...filters})
}

function ResourceCenterArticles ({data}) {
	const firstRenderRef = useRef(true);
	const [filteredItems, setFilteredItems] = useState(data.filteredItems)
	const [filters, setFilters] = useState({
		s: '',
		categories: [],
		contentTypes: [],
	})
	const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false)
	const [isFiltersLoading, setIsFiltersLoading] = useState(false)
	const [showSingle, setShowSingle] = useState(!!data.singleResourceArticleDetail)

	React.useEffect(() => {
		const filterArticles = setTimeout( () => {
			if (firstRenderRef.current) {
				firstRenderRef.current = false;
			}
			else {
				setShowSingle(false)
				setIsFiltersLoading(true)
				let ajaxFireUrl = `${data.ajaxUrl}?action=loadMorePosts&resources=true&page=1&perPage=${filteredItems.perPage}&s=${filters.s}&category=${filters.categories}&contentType=${filters.contentTypes}`;
				fetch(ajaxFireUrl)
				.then((response) => response.json())
				.then((data) => {
					setFilteredItems(data)
					setIsFiltersLoading(false)
				})
			}
		}, 250)
		return () => clearTimeout(filterArticles)
	}, [filters, data.ajaxUrl, filteredItems.perPage])

	return (
		<section className="article-list-main padding-2">
			<div className='container'>
				<div className="row">

					

					<div className="col-12 col-md-8 col-lg-9 ">
						{
							showSingle &&
							<ResourcePostContent data={data.singleResourceArticleDetail} />
						}
						{
							!showSingle &&
							<React.Fragment>
								{ isFiltersLoading && (
									<div className="card position-relative overflow-hidden" style={{border: "none", minHeight: "300px"}}>
										<div className="card-body">...</div>
										<div className="position-absolute w-100 h-100 d-flex flex-column align-items-center bg-white justify-content-center">
											<div className="spinner-border" role="status">
												<span className="sr-only">Loading...</span>
											</div>
											<div>Loading</div>
										</div>
									</div>
								)}
								{ !isFiltersLoading && (
									<div className='row'>
										{ filteredItems.posts.length > 0 && filteredItems.posts.map((post, index) => (
											<div className='col-12 col-md-6 col-lg-4' key={index}>
												<SingleArticleList data={post} />
											</div>
										)) }
										{ filteredItems.posts.length === 0 &&
											(
												<div className='col-12'>
													<div className="card position-relative overflow-hidden" style={{border: "none", minHeight: "300px"}}>
														<div className="card-body">...</div>
														<div className="position-absolute w-100 h-100 d-flex flex-column align-items-center bg-white justify-content-center">
															<div>No resources found</div>
														</div>
													</div>
												</div>

											)
										}
										{ filteredItems.posts.length < filteredItems.foundPosts &&
											<div className="col-12 text-center">
												<a href={`${window.location.href}#`} className={`btn-main min-width ${isLoadMoreLoading ? 'btn-disabled' : ''}`} onClick={loadMoreArticles(data.ajaxUrl, filters, filteredItems, setFilteredItems, isLoadMoreLoading, setIsLoadMoreLoading)}>
													View more {'  '}
													{isLoadMoreLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
												</a>
											</div>
										}
									</div>
								)}
							</React.Fragment>
						}

					</div>
					<div className={`col-12 col-md-4 col-lg-3 ${showSingle ? 'order-md-first' : 'order-first'}`}>
						<div className='filter-Left'>
							<div className='mobile-hide'>
								<h4>{data.filterTitle}</h4>
								<div className='filter-block'>
									<h6>Search by</h6>
									<input type="text" className="form-control" placeholder='title, author...' value={filters.s} onChange={triggerSearchChange(filters, setFilters)} />
								</div>
								{ data.filterCategories.length > 0 &&
									<div className='filter-block'>
										<h6>Category</h6>
										<div className='filter-row'>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" autoComplete="off" className="custom-control-input" id="check0" checked={filters.categories.length === data.filterCategories.length} onChange={triggerCategoryChange(0, data.filterCategories, filters, setFilters)} />
												<label className="custom-control-label" htmlFor="check0">All</label>
											</div>
										</div>
										{data.filterCategories.map((category) => (
											<div className='filter-row' key={category.id}>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" autoComplete="off" className="custom-control-input" id={`check${category.id}`} checked={filters.categories.includes(category.id)} onChange={triggerCategoryChange(category.id, data.filterCategories, filters, setFilters)} />
													<label className="custom-control-label" htmlFor={`check${category.id}`}>{category.title}</label>
												</div>
											</div>
										))}
									</div>
								}
								{ data.filterContentTypes.length > 0 &&
									<div className='filter-block'>
										<h6>Content type</h6>
										<div className='filter-row'>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" autoComplete="off" className="custom-control-input" id="contentType0" checked={filters.contentTypes.length === data.filterContentTypes.length} onChange={triggerContentTypeChange(0, data.filterContentTypes, filters, setFilters)} />
												<label className="custom-control-label" htmlFor="contentType0">All</label>
											</div>
										</div>
										{data.filterContentTypes.map((contentType, index) => (
											<div className='filter-row' key={index+1}>
												<div className="custom-control custom-checkbox">
													<input type="checkbox" autoComplete="off" className="custom-control-input" id={`contentType${index+1}`} checked={filters.contentTypes.includes(contentType)} onChange={triggerContentTypeChange(contentType, data.filterContentTypes, filters, setFilters)} />
													<label className="custom-control-label" htmlFor={`contentType${index+1}`}>{contentType}</label>
												</div>
											</div>
										))}
									</div>
								}
							</div>
							<div className='desktop-hide'>
								<div className="accordion" id="accordionExample2">
									<div className='accordion-content'>
										<div id="headingOnea">
											<button className="btn-collapse collapsed" type="button" data-toggle="collapse" data-target="#collapseOnea" aria-expanded="true" aria-controls="collapseOnea">
												{data.filterTitle}
											</button>
										</div>
										<div id="collapseOnea" className="collapse" aria-labelledby="headingOnea" data-parent="#accordionExample2">
											<div className='text p-0'>
												<div className='filter-block'>
													<h6>Search by</h6>
													<input type="text" className="form-control" placeholder='title, author...' value={filters.s} onChange={triggerSearchChange(filters, setFilters)} />
												</div>
												{ data.filterCategories.length > 0 &&
													<div className='filter-block'>
														<h6>Category</h6>
														<div className='filter-row'>
															<div className="custom-control custom-checkbox">
																<input type="checkbox" autoComplete="off" className="custom-control-input" id="mcheck0" checked={filters.categories.length === data.filterCategories.length} onChange={triggerCategoryChange(0, data.filterCategories, filters, setFilters)} />
																<label className="custom-control-label" htmlFor="mcheck0">All</label>
															</div>
														</div>
														{data.filterCategories.map((category) => (
															<div className='filter-row' key={category.id}>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" autoComplete="off" className="custom-control-input" id={`mcheck${category.id}`} checked={filters.categories.includes(category.id)} onChange={triggerCategoryChange(category.id, data.filterCategories, filters, setFilters)} />
																	<label className="custom-control-label" htmlFor={`mcheck${category.id}`}>{category.title}</label>
																</div>
															</div>
														))}
													</div>
												}
												{ data.filterContentTypes.length > 0 &&
													<div className='filter-block'>
														<h6>Content type</h6>
														<div className='filter-row'>
															<div className="custom-control custom-checkbox">
																<input type="checkbox" autoComplete="off" className="custom-control-input" id="mcontentType0" checked={filters.contentTypes.length === data.filterContentTypes.length} onChange={triggerContentTypeChange(0, data.filterContentTypes, filters, setFilters)} />
																<label className="custom-control-label" htmlFor="mcontentType0">All</label>
															</div>
														</div>
														{data.filterContentTypes.map((contentType, index) => (
															<div className='filter-row' key={index+1}>
																<div className="custom-control custom-checkbox">
																	<input type="checkbox" autoComplete="off" className="custom-control-input" id={`mcontentType${index+1}`} checked={filters.contentTypes.includes(contentType)} onChange={triggerContentTypeChange(contentType, data.filterContentTypes, filters, setFilters)} />
																	<label className="custom-control-label" htmlFor={`mcontentType${index+1}`}>{contentType}</label>
																</div>
															</div>
														))}
													</div>
												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default ResourceCenterArticles;
