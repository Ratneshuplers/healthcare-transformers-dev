import React from "react";
import '../css/Footer.scss';

const getHrefUrl = (link) => {
	return link === '#' ? `${window.location.href}#` : link
}

const socialIcons =
	{
		linkedin: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.3 4H4.7C4.3 4 4 4.3 4 4.7V19.4C4 19.7 4.3 20 4.7 20H19.4C19.8 20 20.1 19.7 20.1 19.3V4.7C20 4.3 19.7 4 19.3 4ZM8.7 17.6H6.4V10H8.8V17.6H8.7ZM7.6 9C6.8 9 6.2 8.3 6.2 7.6C6.2 6.8 6.8 6.2 7.6 6.2C8.4 6.2 9 6.8 9 7.6C8.9 8.3 8.3 9 7.6 9ZM17.6 17.6H15.2V13.9C15.2 13 15.2 11.9 14 11.9C12.8 11.9 12.6 12.9 12.6 13.9V17.7H10.2V10H12.5V11C12.8 10.4 13.6 9.8 14.7 9.8C17.1 9.8 17.5 11.4 17.5 13.4V17.6H17.6Z" className="svgfillsocial" /> </svg>,
		facebook: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.0229 20L10 13H7V10H10V8C10 5.3008 11.6715 4 14.0794 4C15.2328 4 16.2241 4.08587 16.5129 4.12425V6.94507L14.843 6.94583C13.5334 6.94583 13.2799 7.5681 13.2799 8.48124V10H17L16 13H13.2799V20H10.0229Z" className="svgfillsocial"/> </svg>,
		twitter: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 7C19.4 7.3 18.8 7.4 18.1 7.5C18.8 7.1 19.3 6.5 19.5 5.7C18.9 6.1 18.2 6.3 17.4 6.5C16.8 5.9 15.9 5.5 15 5.5C13.3 5.5 11.8 7 11.8 8.8C11.8 9.1 11.8 9.3 11.9 9.5C9.2 9.4 6.7 8.1 5.1 6.1C4.8 6.6 4.7 7.1 4.7 7.8C4.7 8.9 5.3 9.9 6.2 10.5C5.7 10.5 5.2 10.3 4.7 10.1C4.7 11.7 5.8 13 7.3 13.3C7 13.4 6.7 13.4 6.4 13.4C6.2 13.4 6 13.4 5.8 13.3C6.2 14.6 7.4 15.6 8.9 15.6C7.8 16.5 6.4 17 4.8 17C4.5 17 4.3 17 4 17C5.5 17.9 7.2 18.5 9 18.5C15 18.5 18.3 13.5 18.3 9.2C18.3 9.1 18.3 8.9 18.3 8.8C19 8.3 19.6 7.7 20 7Z" className="svgfillsocial"/> </svg>,
		instagram: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M12 5.441C14.136 5.441 14.389 5.45 15.233 5.488C15.7402 5.49409 16.2425 5.58746 16.718 5.764C17.0658 5.89248 17.3802 6.09754 17.638 6.364C17.9045 6.62179 18.1095 6.93622 18.238 7.284C18.4145 7.75949 18.5079 8.26183 18.514 8.769C18.552 9.613 18.561 9.869 18.561 12.002C18.561 14.135 18.552 14.391 18.514 15.235C18.5079 15.7422 18.4145 16.2445 18.238 16.72C18.1052 17.0651 17.9015 17.3785 17.64 17.64C17.3785 17.9015 17.0651 18.1052 16.72 18.238C16.2445 18.4145 15.7422 18.5079 15.235 18.514C14.391 18.552 14.135 18.561 12.002 18.561C9.869 18.561 9.613 18.552 8.769 18.514C8.26183 18.5079 7.75949 18.4145 7.284 18.238C6.93622 18.1095 6.62179 17.9045 6.364 17.638C6.09754 17.3802 5.89248 17.0658 5.764 16.718C5.58746 16.2425 5.49409 15.7402 5.488 15.233C5.45 14.389 5.441 14.133 5.441 12C5.441 9.867 5.45 9.611 5.488 8.767C5.49409 8.25983 5.58746 7.75749 5.764 7.282C5.89248 6.93422 6.09754 6.61979 6.364 6.362C6.62179 6.09554 6.93622 5.89048 7.284 5.762C7.75949 5.58546 8.26183 5.49209 8.769 5.486C9.613 5.448 9.869 5.439 12.002 5.439L12 5.441ZM12 4C9.827 4 9.555 4.009 8.7 4.048C8.03696 4.06148 7.381 4.18727 6.76 4.42C6.22596 4.62056 5.74231 4.9356 5.343 5.343C4.9356 5.74231 4.62056 6.22596 4.42 6.76C4.18727 7.381 4.06148 8.03696 4.048 8.7C4.009 9.555 4 9.827 4 12C4 14.173 4.009 14.445 4.048 15.3C4.06148 15.963 4.18727 16.619 4.42 17.24C4.62056 17.774 4.9356 18.2577 5.343 18.657C5.74231 19.0644 6.22596 19.3794 6.76 19.58C7.38163 19.813 8.03828 19.9387 8.702 19.952C9.555 19.991 9.827 20 12 20C14.173 20 14.445 19.991 15.3 19.952C15.9637 19.9387 16.6204 19.813 17.242 19.58C17.7734 19.3743 18.256 19.0599 18.659 18.657C19.0619 18.254 19.3763 17.7714 19.582 17.24C19.815 16.6184 19.9407 15.9617 19.954 15.298C19.993 14.445 20.002 14.173 20.002 11.998C20.002 9.823 19.993 9.553 19.954 8.698C19.9397 8.03552 19.8132 7.38025 19.58 6.76C19.3794 6.22596 19.0644 5.74231 18.657 5.343C18.2577 4.9356 17.774 4.62056 17.24 4.42C16.619 4.18727 15.963 4.06148 15.3 4.048C14.445 4.009 14.173 4 12 4ZM12 7.892C11.1875 7.892 10.3933 8.13293 9.71772 8.58432C9.04216 9.03571 8.51563 9.6773 8.2047 10.4279C7.89378 11.1786 7.81243 12.0046 7.97093 12.8014C8.12944 13.5983 8.52069 14.3303 9.09521 14.9048C9.66972 15.4793 10.4017 15.8706 11.1986 16.0291C11.9954 16.1876 12.8214 16.1062 13.5721 15.7953C14.3227 15.4844 14.9643 14.9578 15.4157 14.2823C15.8671 13.6067 16.108 12.8125 16.108 12C16.108 11.4605 16.0017 10.9263 15.7953 10.4279C15.5889 9.92953 15.2863 9.47667 14.9048 9.0952C14.5233 8.71374 14.0705 8.41115 13.5721 8.2047C13.0737 7.99825 12.5395 7.892 12 7.892ZM12 14.667C11.4725 14.667 10.9569 14.5106 10.5183 14.2175C10.0797 13.9245 9.73787 13.5079 9.53601 13.0206C9.33415 12.5333 9.28134 11.997 9.38425 11.4797C9.48715 10.9623 9.74116 10.4871 10.1141 10.1141C10.4871 9.74116 10.9623 9.48715 11.4797 9.38424C11.997 9.28134 12.5333 9.33415 13.0206 9.53601C13.5079 9.73787 13.9245 10.0797 14.2175 10.5183C14.5106 10.9569 14.667 11.4725 14.667 12C14.667 12.7073 14.386 13.3857 13.8859 13.8859C13.3857 14.386 12.7073 14.667 12 14.667ZM17.23 7.73C17.23 8.26019 16.8002 8.69 16.27 8.69C15.7398 8.69 15.31 8.26019 15.31 7.73C15.31 7.1998 15.7398 6.77 16.27 6.77C16.8002 6.77 17.23 7.1998 17.23 7.73Z" className="svgfillsocial" /> </svg>,
		youtube: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.85 8.7C20.85 8.7 20.7 7.425 20.1 6.9C19.425 6.15 18.675 6.15 18.3 6.15C15.75 6 12 6 12 6C12 6 8.25 6 5.7 6.15C5.325 6.225 4.575 6.225 3.9 6.9C3.375 7.425 3.15 8.7 3.15 8.7C3.15 8.7 3 10.125 3 11.625V12.975C3 14.4 3.15 15.9 3.15 15.9C3.15 15.9 3.3 17.175 3.9 17.7C4.575 18.45 5.475 18.375 5.85 18.45C7.275 18.6 12 18.6 12 18.6C12 18.6 15.75 18.6 18.3 18.375C18.675 18.3 19.425 18.3 20.1 17.625C20.625 17.1 20.85 15.825 20.85 15.825C20.85 15.825 21 14.4 21 12.9V11.55C21 10.125 20.85 8.7 20.85 8.7ZM10.125 14.625V9.6L15 12.15L10.125 14.625Z" className="svgfillsocial"/> </svg>
	}
;
/*console.log(socialIcons)
let socialIcons1 = [...socialIcons]
console.log(socialIcons1.linkedin)*/
/*const socialIcons = [
	{key: 'linkedin', value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.3 4H4.7C4.3 4 4 4.3 4 4.7V19.4C4 19.7 4.3 20 4.7 20H19.4C19.8 20 20.1 19.7 20.1 19.3V4.7C20 4.3 19.7 4 19.3 4ZM8.7 17.6H6.4V10H8.8V17.6H8.7ZM7.6 9C6.8 9 6.2 8.3 6.2 7.6C6.2 6.8 6.8 6.2 7.6 6.2C8.4 6.2 9 6.8 9 7.6C8.9 8.3 8.3 9 7.6 9ZM17.6 17.6H15.2V13.9C15.2 13 15.2 11.9 14 11.9C12.8 11.9 12.6 12.9 12.6 13.9V17.7H10.2V10H12.5V11C12.8 10.4 13.6 9.8 14.7 9.8C17.1 9.8 17.5 11.4 17.5 13.4V17.6H17.6Z" className="svgfillsocial" /> </svg>'},
];*/

/*var socialIconsObj = socialIcons.reduce(
	(obj, item) => Object.assign(obj, { [item.key]: item.value }), {});*/

//console.log({socialIcons[linkedin]})



function Footer ({data}) {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-2">
						<div className='footer-logo'>
							<a href="https://diagnostics.roche.com/" target="_blank"><img src={data.column4.logo ? data.column4.logo : 'src'} alt={data.siteTitle}></img></a>
						</div>
					</div>
					<div className="col-12 col-md-4">
						{data.column1.links.map((linkItem, index) => (
							<div className={`${index === 0 ? "footer-subscribe" : "footer-contact-menu"}`} key={index}>
								<a href={getHrefUrl(linkItem.link.url)} target={linkItem.link.target} dangerouslySetInnerHTML={{ __html: linkItem.link.title}}></a>
							</div>
						))}
					</div>
					<div className="col-12 col-md-3">
						<div className='footer-menu'>
							<h6>{data.column2.title}</h6>
							<ul>
								{data.column2.links.map((linkItem, index) => (
									<li key={index}>
										<a href={getHrefUrl(linkItem.link.url)} target={linkItem.link.target} dangerouslySetInnerHTML={{ __html: linkItem.link.title}}></a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className='footer-menu'>
							<h6>{data.column3.title}</h6>
							<ul>
								{data.column3.links.map((linkItem, index) => (
									<li key={index}>
										<a href={getHrefUrl(linkItem.link.url)} target={linkItem.link.target} dangerouslySetInnerHTML={{ __html: linkItem.link.title}}></a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className='row footer-bottom'>
					<div className='col-12 col-md-4'>
						<div className='social-media'>
							<div className="">
							{data.bottom.social.map((socialItem, index) => (
								<React.Fragment key={index}>
									{ socialItem.icon &&
										(
											<a href={getHrefUrl(socialItem.url)} className="socail-svg" target="_blank" rel="noopener noreferrer">
												{
													(socialIcons[socialItem.icon])
												}
											</a>
										)
									}
								</React.Fragment>
							)
							)}
							</div>
						</div>
					</div>
					<div className='col-12 col-md-8'>
						<div className='footer-main-menu'>
							<ul>
								{data.bottom.menu.map((linkItem, index) => (
									<li key={index}>
										<a href={getHrefUrl(linkItem.link.url)} target={linkItem.link.target} dangerouslySetInnerHTML={{ __html: linkItem.link.title}}></a>
									</li>
								))}
								{
									data.bottom.show_cookie_preference_link && (
										<li>
											<a href="javascript:void(0)" target="" className='ot-sdk-show-settings'>Cookie Preference</a>
										</li>
									)
								}
								{
									data.bottom.us_supplemental_privacy_policy && (
										<li>
											<b><a href={getHrefUrl(data.bottom.us_supplemental_privacy_policy.url)} target={data.bottom.us_supplemental_privacy_policy.target} dangerouslySetInnerHTML={{ __html: data.bottom.us_supplemental_privacy_policy.title}}></a></b>
										</li>
									)
								}

							</ul>
						</div>
					</div>
					<div className='col-12 col-md-4'>
						<div className='copyright-text'>
							{data.bottom.copyright}
						</div>
					</div>
					<div className='col-12 col-md-8'>
						<div className='footer-content'>
							{data.bottom.description}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;