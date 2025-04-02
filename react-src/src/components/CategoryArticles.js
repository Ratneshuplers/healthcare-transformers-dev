import React, {useState} from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import '../css/ArticleListFilter.scss';
import SingleArticleList from "./SingleArticleList";

const groupClicked = (group, setActiveGroup) => (e) => {
	e.preventDefault();
	setActiveGroup(group)
}

const loadMoreArticles = (ajaxUrl, activeGroup, groupCategories, setGroupCategories, setActiveGroup, isLoading, setIsLoading) => async (e) => {
	e.preventDefault();
	if (isLoading) {
		return;
	}
	setIsLoading(true)
	const groupCategoryIndex = groupCategories.findIndex(obj => obj.id === activeGroup.id);
	try {
		const nextPage = activeGroup.lastPage + 1;
		const response = await fetch(`${ajaxUrl}?action=loadMorePosts&category=${activeGroup.id}&page=${nextPage}&perPage=${activeGroup.perPage}`);
		const responseJson = await response.json();
		const updatedGroupCategories = groupCategories.map(obj => {
			if (obj.id === activeGroup.id) {
				obj.posts = obj.posts.concat(responseJson.posts)
				obj.foundPosts = responseJson.foundPosts
				obj.lastPage = nextPage
				return obj;
			}
			return obj;
		});
		setGroupCategories(updatedGroupCategories)
		setActiveGroup(updatedGroupCategories[groupCategoryIndex])
	} catch (error) {}
	setIsLoading(false)
}

function CategoryArticles ({data}) {
	const [groupCategories, setGroupCategories] = useState(data.categories)
	const activeGroupIndex = groupCategories.findIndex(obj => obj.id === data.selectedCategoryId);
	const [activeGroup, setActiveGroup] = useState(groupCategories[activeGroupIndex] ?? groupCategories[0])
	const [isLoading, setIsLoading] = useState(false)

	return (
		<section className="article-list-main padding-2">
			<div className='container'>
				<div className='row'>

					{ data.heading &&
						<div className="col-12">
						 <h4>{data.heading}</h4>
						</div>
					}

					{ groupCategories && groupCategories.length > 1 &&
						<div className="col-12">
							<div className="article-list-filter">
								<Scrollbars>
									<ul>
										{groupCategories.map((group) => (
											<li className={`${group.id === activeGroup.id ? "active" : ""}`} key={group.id}>
												<a href={`${window.location.href}#`} onClick={groupClicked(group, setActiveGroup)}>{group.title}</a>
											</li>
										))}
									</ul>
								</Scrollbars>
							</div>
						</div>
					}

					{ activeGroup.posts.length === 0 &&
						<div className='col-12'>
							No articles found.
						</div>
					}
					{ activeGroup.posts.map((post, index) => (
						<div className='col-12 col-md-6 col-lg-4 col-xl-3' key={index}>
							<SingleArticleList data={post} />
						</div>
					)) }

					{ activeGroup.posts.length < activeGroup.foundPosts &&
						<div className="col-12 text-center">
							<a href={`${window.location.href}#`} className={`btn-main min-width ${isLoading ? 'btn-disabled' : ''}`} onClick={loadMoreArticles(data.ajaxUrl, activeGroup, groupCategories, setGroupCategories, setActiveGroup, isLoading, setIsLoading)}>
								View more {'  '}
								{isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
							</a>
						</div>
					}
				</div>
			</div>
		</section>
	);
}

export default CategoryArticles;
