import React, {useState} from "react";
import '../css/Header.scss';
import NavbarItems from "./NavbarItems";

const searchClicked = (setSearchOpen) => (e) => {
	e.preventDefault();
	setSearchOpen(true)
}
const searchCloseClicked = (setSearchOpen) => (e) => {
	setSearchOpen(false)
}

const body = document.body;
const scrollUp = "scrollup";
const pFixed = "p-fixed";
const scrollDown = "scrolldown";
let lastScroll = 0;

window.addEventListener("scroll", () => {

	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		return;
	}

	if (currentScroll > lastScroll && currentScroll > 60) {
		body.classList.remove(scrollUp);
	} else if (
		currentScroll < lastScroll
	) {
		body.classList.add(scrollDown);
		body.classList.add(pFixed);
		body.classList.add(scrollUp);
	}
	lastScroll = currentScroll;
});

function Header ({data}) {
	const [searchOpen, setSearchOpen] = useState(false)
	return (
		<header>
			<div className="container">
				<nav className="navbar navbar-expand-md d-block p-0">
					<div className="d-flex align-items-center w-100">
						<a href={data.homeUrl} className='navbar-brand'><img src={data.logo ? data.logo : ''} alt={data.siteTitle}></img></a>
						<div className="navright ml-auto">
							<ul>
								{data.smallMenu.map((smallMenuItem, index) => (
									<li className="mobile-hide" key={index}>
										<a href={smallMenuItem.link.url} target={smallMenuItem.link.target}>{smallMenuItem.link.title}</a>
									</li>
								))}
								<li className="navsaprator mobile-hide" key={data.smallMenu.length}></li>
								{/*<li className="mobile-hide email-link-header" key={data.smallMenu.length + 1}>
									<a className="iconhover" href={`mailto:${data.topRightIcons.mail.email_to}?subject=${data.topRightIcons.mail.subject}&body=${data.topRightIcons.mail.body}`}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM18.1 6L12 10.7L5.9 6H18.1ZM20 18H4V7L12 13.2L20 7V18Z" className="iconfill" />
</svg>
									</a>
								</li>*/}
						
								<li className={`search-input ${searchOpen ? 'show' : ''}`} key={data.smallMenu.length + 2}>
									<a className="iconhover" href={`${window.location.href}#`} onClick={searchClicked(setSearchOpen)}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" className="iconfill"/>
</svg>
									</a>
									<div className='search-open'>
										<form method='GET' action={data.homeUrl}><input name='s' type="text"  placeholder="Enter your search term" /></form>
										<button type='button' onClick={searchCloseClicked(setSearchOpen)}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M19.974 5.436L18.565 4.026L12 10.59L5.411 4L4 5.41L10.59 12L4 18.59L5.411 20L12 13.41L18.59 20L20 18.59L13.411 12L19.974 5.436Z" fill="black"/>
											</svg>
										</button>
									</div>
								</li>
								<li key={data.smallMenu.length + 3}>
									<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#MenuMain" aria-controls="MenuMain" aria-expanded="false" aria-label="Toggle navigation">
										<span className="navbar-toggler-icon"></span>
									</button>
								</li>
							</ul>
						</div>
					</div>
					<NavbarItems menuData={data.menu} homeUrl={data.homeUrl}/>
				</nav>
			</div>
		</header>
	);
}

export default Header;