import React, { useState } from 'react'

const getHrefUrl = (link) => {
	return link === '#' ? `${window.location.href}#` : link
}

const toggleMenu = (key, menu, setMenu) => (e) => {
	e.preventDefault();
	let currentState = menu[key].isOpen || false
	let menu1 = [...menu]
	menu1[key].isOpen = !currentState
	setMenu(menu1)
}

const toggleLevel1Menu = (level0Index, key, menu, setMenu) => (e) => {
	e.preventDefault();
	let currentState = menu[level0Index].submenu_level_1[key].isOpen || false
	let menu1 = [...menu]
	menu[level0Index].submenu_level_1[key].isOpen = !currentState
	setMenu(menu1)
}

function NavbarItems (props) {
	const {menuData, homeUrl} = props
	const [menu, setMenu] = useState(menuData)
	return (
		<div className="collapse navbar-collapse" id="MenuMain">
			<ul className="navbar-nav w-100 Mobile-hide">
				{menu.map((menuItem, index) => (
					<React.Fragment key={index}>
						{menuItem.prepend_line_seperator &&
							<li className="nav-spartor"></li>
						}
						<li className={`nav-item ${menuItem.isOpen ? 'open-menu' : ''}`}>
							{menuItem.has_submenu &&
								<a className="nav-link" href={getHrefUrl(menuItem.nav_menu_link.url)} onClick={toggleMenu(index, menu, setMenu)} target={menuItem.nav_menu_link.target}>
									{menuItem.nav_menu_link.title}
									{menuItem.has_submenu && menuItem.submenu_level_1.length > 0 &&
										<span className="mobile-arrow1">
										<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.0017 16.2121L18.0117 10.2021L16.5977 8.78711L11.9977 13.3871L7.40472 8.78711L5.99072 10.2011L12.0017 16.2121Z" fill="#544F4F"/>
										</svg>
									</span>
									}
								</a>
							}
							{!menuItem.has_submenu &&
								<a className="nav-link" href={getHrefUrl(menuItem.nav_menu_link.url)} target={menuItem.nav_menu_link.target}>
									{menuItem.nav_menu_link.title}
								</a>
							}
							{menuItem.has_submenu && menuItem.submenu_level_1.length > 0 &&
								<div className="submenu no-show-mobile">
									<div className='overflow-hidden'>
									<div className="menu-title">
										<a href={getHrefUrl(menuItem.nav_menu_link.url)} target={menuItem.nav_menu_link.target}>{menuItem.nav_menu_link.title}</a>
									</div>
									<ul className={`menu-lavel-1`}>
										{menuItem.submenu_level_1.map((level1Item, level1Index) => (
											<li className={`menu-lavel-li-1 ${level1Item.has_submenu && level1Item.submenu_level_2.length ? "has-submenu" : ""} ${level1Item.isOpen ? 'open-menu' : ''} `} key={level1Index}>
												<a href={getHrefUrl(level1Item.nav_menu_link.url)} target={level1Item.nav_menu_link.target}>
													{level1Item.nav_menu_link.title}
													{level1Item.has_submenu && level1Item.submenu_level_2.length > 0 &&
														<span className="mobile-arrow1" onClick={toggleLevel1Menu(index, level1Index, menu, setMenu)}>
														<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.586001 9.00003L15.172 9.00003L9.879 14.293L11.293 15.707L19 8.00003L11.293 0.29303L9.879 1.70703L15.172 7.00003L0.586001 7.00003L0.586001 9.00003Z" fill="black"/>
</svg>

													</span>
													}
												</a>
												{level1Item.has_submenu && level1Item.submenu_level_2.length > 0 &&
													<ul className={`menu-lavel-2 ${level1Item.rightBorder ? "" : "no-border"}`}>
														{level1Item.submenu_level_2.map((level2Item, level2Index) => (
															<li className={`menu-lavel-li-2 ${level2Item.has_submenu && level2Item.submenu_level_3.length ? "has-submenu" : ""}`} key={level2Index}>
																<a href={getHrefUrl(level2Item.nav_menu_link.url)} target={level2Item.nav_menu_link.target}>{level2Item.nav_menu_link.title}</a>
																{level2Item.has_submenu && level2Item.submenu_level_3.length > 0 &&
																	<ul className="menu-lavel-3">
																		{level2Item.submenu_level_3.map((level3Item, level3Index) => (
																			<li className="menu-lavel-li-3" key={level3Index}>
																				<a href={getHrefUrl(level3Item.nav_menu_link.url)} target={level3Item.nav_menu_link.target}>{level3Item.nav_menu_link.title}</a>
																			</li>
																		))}
																	</ul>
																}
															</li>
														))}
													</ul>
												}
											</li>
										))}
									</ul>
									</div>
								</div>
							}
						</li>
					</React.Fragment>
				))}
				<li className="mobile-spartor"></li>
				<li className="nav-item mobile">
					<a href={`${homeUrl}/newsletter`} className="nav-link">
						Subscribe
					</a>
				</li>
				<li className="nav-item mobile">
					<a href={`${homeUrl}/about-us`} className="nav-link">
						About us
					</a>
				</li>
				<li className="mobile-spartor"></li>
				<li className="nav-item mobile">
					<a href={`${homeUrl}/?s=`} className="nav-link">
						Search
					</a>
				</li>
			</ul>
		</div>
	);
}

export default NavbarItems;