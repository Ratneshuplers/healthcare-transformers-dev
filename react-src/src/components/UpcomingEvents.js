import React from "react";
import '../css/UpcomingEvents.scss';

function UpcomingEvents ({data}) {
	if(data.upcomingEvents.posts.length <= 0) {
		return
	}
	return (
		<div className='Upcoming-events'>
			<div className="container">
				<div className="row">
					<div className='col-12'>
						<h4 className='title'>{data.sectionTitle}</h4>
					</div>
					<div className='col-12'>
						{data.upcomingEvents.posts.map((event) => (
							<div className='row upeventrow' key={event.id}>
								
									<div className='col-12 col-md-4 col-xl-3'>
									{
									event?.images?.['288x162'] &&
										<a href={event.url}><img src={event.images['288x162']} alt=""></img></a>
									}
									</div>
							
								<div className={`col-12  ${event?.images?.['288x162'] ? 'col-md-8 col-xl-9' : ''}`}>
									<div className='text'>
										<h4>
											<a href={event.url}>{event.title}</a>
											<a href={event.url}>
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z" fill="#0B41CD"/>
												</svg>
											</a>
										</h4>
										<span>{event.eventDate}</span>
										<p>
											{event.authors.length > 0 &&
												<React.Fragment>
													{event.authors.map(item => item.wpAuthor.title).join(', ')}
													<br />
												</React.Fragment>
											}
											{event.eventTime} {event.duration ? ` | ${event.duration}` : ''}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UpcomingEvents;