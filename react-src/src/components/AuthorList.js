import React, {useState} from "react";
import '../css/AuthorList.scss';
import authorBlankImage from '../images/author_blank.png';

const changeViewChars = (isPrev, alphabets, activeChar, setActiveChar, viewChars, setViewChars) => (e) => {
	e.preventDefault();
	if ((isPrev && viewChars[0] === 'A') || (!isPrev && viewChars[0] === 'V')) {
			return;
	}
	let currentStartIndex = alphabets.indexOf(viewChars[0]);
	let newStartIndex = isPrev ? currentStartIndex - 1 : currentStartIndex + 1
	let newChars = alphabets.slice(newStartIndex, newStartIndex+5);
	setViewChars(newChars);
	if (activeChar !== null && !newChars.includes(activeChar)) {
		setActiveChar(isPrev ? newChars[4] : newChars[0])
	}
}

const charClicked = (viewChar, setActiveChar) => (e) => {
	e.preventDefault();
	setActiveChar(viewChar)
}

const toggleAll = (activeChar, setActiveChar, viewChars) => (e) => {
	if (e.target.checked) {
		activeChar = null
	}
	else {
		activeChar = viewChars[0]
	}
	setActiveChar(activeChar)
}

const paginate = (page, viewAuthors, setPaginated) => (e) => {
	e.preventDefault();
	setPaginated(calculatePagination(viewAuthors, page))
}

const calculatePagination = (viewAuthors, currentPage = 1) => {
	let perPage = 6;
	let totalPages = Math.ceil(viewAuthors.length/perPage)
	currentPage = currentPage > totalPages ? totalPages : currentPage;
	currentPage = currentPage < 1 ? 1 : currentPage;
	let startIndex = (currentPage-1)*perPage
	return {
		items: viewAuthors.slice(startIndex,startIndex+perPage),
		page: currentPage,
		totalPages: totalPages
	}
}

function AuthorList ({data}) {
	const alphabets = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
		'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
		'Y', 'Z' ];
	const authors = data.authors
	const [viewAuthors, setViewAuthors] = useState(authors)
	const [paginated, setPaginated] = useState(calculatePagination(viewAuthors))
	const [viewChars, setViewChars] = useState(alphabets.slice(0,5))
	const [activeChar, setActiveChar] = useState(null)

	React.useEffect(() => {
		let viewAuthors = authors
		if (activeChar !== null) {
			viewAuthors = authors.filter(author => author.title.replace(/Prof. |Dr. /g,'').charAt(0) === activeChar)
		}
		setViewAuthors(viewAuthors)
		setPaginated(calculatePagination(viewAuthors))
	}, [activeChar, authors])
	return (
		<section className="author-list-wrap padding-1">
			<div className="container">
				<div className="row">

					<div className="col-12">
						<div className='d-flex flex-wrap align-items-center mb-104'>
							<ul className='pagrination'>
								<li>
									<a href={`${window.location.href}#`} className={`${viewChars[0] === 'A' ? 'disabled' : ''}`} onClick={changeViewChars(true, alphabets, activeChar, setActiveChar, viewChars, setViewChars)}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z"/>
										</svg>
									</a>
								</li>
								{viewChars.map((viewChar) => (
									<li className={`${viewChar === activeChar ? "active" : ""}`} key={viewChar}>
										<a href={`${window.location.href}#`} onClick={charClicked(viewChar, setActiveChar)}>{viewChar}</a>
									</li>
								))}
								<li>
									<a href={`${window.location.href}#`} className={`${viewChars[0] === 'V' ? 'disabled' : ''}`} onClick={changeViewChars(false, alphabets, activeChar, setActiveChar, viewChars, setViewChars)}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z"/>
										</svg>
									</a>
								</li>
							</ul>
							<div className='all-author-checkbox'>
								<div className="custom-control custom-checkbox "><input type="checkbox" className="custom-control-input" checked={activeChar === null} onChange={toggleAll(activeChar, setActiveChar, viewChars)} id="check2"/><label className="custom-control-label" htmlFor="check2">All</label></div>
							</div>
						</div>
					</div>

					{paginated.items.length > 0 && paginated.items.map((author) => (
						<div className='col-12 col-md-6 col-lg-4' key={author.id}>
							<div className='author-list'>
								<div className="author-list-img">
								<a href={author.url}>
									<img src={author?.images?.['472x265'] ? author.images['472x265'] : authorBlankImage} alt={author.title}></img>
								</a>
								</div>
								<div className='text'>
									<small>{author.authorProfession}</small>
									<h5>
									<a href={author.url}><span>{author.title}</span></a>
										<a className="rightarrowlink" href={author.url}>
											<svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M4 16.9998H16.17L11.17 21.9998L12.59 23.4098L20 15.9998L12.59 8.58984L11.17 9.99984L16.17 14.9998H4V16.9998Z" fill="#0B41CD"/>
											</svg>
										</a>
									</h5>
									<p>{author.authorDescription.slice(0,100)}...</p>
								</div>
							</div>
						</div>
					))}

					{paginated.items.length === 0 && (
						<div className="col-12" >
							No Author found.
						</div>
					)}

					{ paginated.totalPages > 1 && (
						<div className="col-12">
							<div className='d-flex justify-content-center align-items-center pt-52'>
								<ul className='pagrination'>
									<li>
										<a href={`${window.location.href}#`} className={`${paginated.page === 1 ? 'disabled': ''}`} onClick={paginate(paginated.page - 1, viewAuthors, setPaginated)}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z"/>
											</svg>
										</a>
									</li>
									<li>
										<span>{paginated.page} / {paginated.totalPages}</span>
									</li>
									<li>
										<a href={`${window.location.href}#`} className={`${paginated.page === paginated.totalPages ? 'disabled': ''}`} onClick={paginate(paginated.page + 1, viewAuthors, setPaginated)}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z"/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					) }

				</div>
			</div>
		</section>
	)
}

export default AuthorList;