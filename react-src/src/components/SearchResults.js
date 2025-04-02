import React from "react";
import '../css/SearchResults.scss';

function SearchResults ({data}) {
	return (
		<section className='search-results'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-9'>
						{data.items.length > 0 && (
							<h4>Search Results Found For: "{data.searchQuery}"</h4>
						)}
						{data.items.length === 0 && (
							<h4>No search results found for: "{data.searchQuery}"</h4>
						)}

						{data.items.map((item, index) => (
							<div className='search-list' key={index}>
								{item.breadcrumb && item.breadcrumb.length > 0 && (
									<div className='breadcrumbs-search'>
										<ul>
											{item.breadcrumb.map((breadcrumbItem, index) => (
												<li key={index}>
													{
														breadcrumbItem.url ? <a href={breadcrumbItem.url}>{breadcrumbItem.title}</a> : breadcrumbItem.title
													}
												</li>
											))}
										</ul>
									</div>
								)}
								<h5>
									<a href={item.url}>{item.title}</a>
									<a href={item.url} className='arrow'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z" fill="#0B41CD"/>
										</svg>
									</a>
								</h5>
								<p>
									{item.authors && item.authors.length > 0 && (
										<React.Fragment>
											{item.authors.join(', ')} <br />
										</React.Fragment>
									)}
									{item.shortContent}
								</p>
							</div>
						))}
						{data.maxPages > 1 && (
							<div className='d-flex justify-content-center align-items-center pt-52'>
								<ul className='pagrination'>
									<li>
										<a href={`${data.prevPageLink ? data.prevPageLink : `${window.location.href}#`}`} className={`${data.prevPageLink ? '': 'disabled'}`} onClick={(e) => { if(!data.prevPageLink) {e.preventDefault()} }}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z"/>
											</svg>
										</a>
									</li>
									<li>
										<span>{data.currentPage} / {data.maxPages}</span>
									</li>
									<li>
										<a href={`${data.nextPageLink ? data.nextPageLink : `${window.location.href}#`}`} className={`${data.nextPageLink ? '': 'disabled'}`} onClick={(e) => { if(!data.nextPageLink) {e.preventDefault()} }}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z"/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						)}

					</div>
				</div>
			</div>
		</section>
	);
}

export default SearchResults; 
