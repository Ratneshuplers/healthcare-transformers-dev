import React from "react";
import '../css/Event.scss';
import Breadcrumbs from "./Breadcrumbs";
import Content from './Content'
import MostPopular from "./MostPopular";

function EventDetail ({data}) {
	//console.log(data.upcomingEvents)
	return (
		<section className={`${data.event.past ? 'event-main past-event-data': 'event-main'}`}>
			<div className='features-img'>
				<img src={data.event?.images?.['1440x450'] ? data.event?.images?.['1440x450'] : ''} alt=''></img>
			</div>
			<div className='spacer-56'></div>
			<div className='container'>
				<div className="row">
					<div className="col-12 col-md-12">
					{ data.breadcrumb && data.breadcrumb.length > 0 && <div className='col-12'><Breadcrumbs items={data.breadcrumb} /></div> }
						<div className="row">
							<div className={`${data.event.past ? 'col-12 col-md-8': 'col-12 col-md-8'}`}>
								<div className='text'>

									
									<div className='post-meta'>

									 
										<h1>{data.event.title}</h1>
										<h4>{data.event.headline}
											<span>{data.event.eventDate} {data.event.eventTime ? ` | ${data.event.eventTime}` : ''}</span>
										</h4>
										<p className='big-text' dangerouslySetInnerHTML={{__html: data.event.description}}></p>
									</div>
									{data.event.agenda && data.event.agenda.length > 0 && (
										<div className="accordion" id="accordionExample">
											<div className='accordion-content'>
												<div id="headingOne">
													<button className="btn-collapse collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														Agenda
													</button>
												</div>
												<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
													<div className='text big-text'>
														{data.event.agenda.map((agendaItem, index) => (
															<p key={index}>
																<big>{agendaItem.title}</big>
																<span dangerouslySetInnerHTML={{__html: agendaItem.description}}></span>
															</p>
														))}
													</div>
												</div>
											</div>
										</div>
									)}
									{data.event.authors && data.event.authors.length > 0 && (
										<div className='Host-list'>
											{data.event.authors.map((author, index) => (
												<div className='row' key={index}>
													<div className='col-12 col-md-3'>
														<a href={author.wpAuthor.url}>
															<img src={author.wpAuthor.images?.['472x265'] ? author.wpAuthor.images?.['472x265'] : ''} alt=""></img>
														</a>
													</div>
													<div className='col-12 col-md-9'>
														<div className='host-details'>
															<span>{author.role}</span>
															<h5>
																<a href={author.wpAuthor.url}>{author.wpAuthor.title}</a>
																<a href={author.wpAuthor.url} className='arrow'>
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11L2.586 13Z" fill="#0B41CD"/>
																	</svg>
																</a>
															</h5>
															<p>
																{author.wpAuthor.authorProfession}<br />
																{author.wpAuthor.authorDescription.slice(0,20)}...
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									)}
									<div className="host-spacer"></div>
								</div>
							</div>
							<div className='col-12 col-md-4'>
								{
									(data?.event?.registration?.title || data?.event?.registration?.description || data?.event?.registration?.marketo_form_id) && (data.event.past === false) &&
										<div className='registration-form'>
											<h2>{data?.event?.registration?.title}</h2>
											<p>{data?.event?.registration?.description}</p>
											{
												data?.event?.registration?.marketo_form_id &&
												<Content html={`<form id="mktoForm_${data.event.registration.marketo_form_id}"></form>`} rootClass="" />
											}
										</div>
								}
								{data.upcomingEvents && data.upcomingEvents.posts && data.upcomingEvents.posts.length > 0 && false && (
										<MostPopular data={data.upcomingEvents} />
								)}
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default EventDetail;
