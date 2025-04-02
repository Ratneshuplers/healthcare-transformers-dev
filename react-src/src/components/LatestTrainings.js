import React, {useState} from "react";
import '../css/PastEvents.scss';
import eventBlankImg from '../images/photo1-blank.png';

const loadMoreTrainings = (ajaxUrl, trainings, setTrainings, isLoading, setIsLoading) => async (e) => {
	e.preventDefault();
	if (isLoading) {
		return;
	}
	setIsLoading(true)
	try {
		const nextPage = trainings.lastPage + 1;
		const response = await fetch(`${ajaxUrl}?action=loadMoreTrainings&page=${nextPage}&perPage=${trainings.perPage}`);
		const responseJson = await response.json();
		setTrainings({
			posts: trainings.posts.concat(responseJson.posts),
			foundPosts: responseJson.foundPosts,
			lastPage: responseJson.lastPage,
			perPage: responseJson.perPage,
		})
	} catch (error) {}
	setIsLoading(false)
}

function LatestTrainings ({data}) {
	const [trainings, setTrainings] = useState(data.latestTrainings)
	const [isLoading, setIsLoading] = useState(false)
	return (
		trainings.posts.length > 0 &&
		<div className='part-events'>
			<div className="container">
				<div className="row">
					<div className='col-12'>
						<h4 className='title'>{data.sectionTitle}</h4>
					</div>
					<div className='col-12'>
						<div className='row'>
							{trainings.posts.map((event) => (
								<div className='col-12 col-md-6 col-lg-3' key={event.id}>
									<a href={event.url} className='past-thumb'>
										<img src={event?.images?.['288x162'] ? event.images['288x162'] : eventBlankImg} alt=""></img>
									</a>
									<div className='text'>
										<h4>
											<a href={event.url}>{event.title}</a>
											<a href={event.url}>
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z" fill="#0B41CD"/>
												</svg>
											</a>
										</h4>
										<small>{event?.authors?.map(item => item.wpAuthor.title).join(', ')}</small>
									</div>
								</div>
							))}
						</div>
					</div>

					{ trainings.posts.length < trainings.foundPosts &&
						<div className="col-12 text-center">
							<a href={`${window.location.href}#`} className={`btn-main min-width ${isLoading ? 'btn-disabled' : ''}`} onClick={loadMoreTrainings(data.ajaxUrl, trainings, setTrainings, isLoading, setIsLoading)}>
								View more {'  '}
								{isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
							</a>
						</div>
					}

				</div>
			</div>
		</div>
	);
}

export default LatestTrainings;