import React from 'react'
import '../css/Training.scss'
import Breadcrumbs from './Breadcrumbs'
import Content from './Content'
import PostSocialShare from './PostSocialShare'
import AtendeesImg from "../images/1.svg";
import TimeImg from "../images/2.svg";
import AudioImg from "../images/3.svg";
import CategorisedArticles from "./CategorisedArticles";

const accessTrainingClicked = () => (e) => {
	e.preventDefault();
	document.querySelector(".post-button  a.btn-main").click();
}

function TrainingDetail ({data}) {
	return (
		<React.Fragment>
			<section className="ht-training-detail">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8">
							<div className="text">
								{data.breadcrumb && data.breadcrumb.length > 0 && <Breadcrumbs items={data.breadcrumb}/>}
								<div className="post-meta">
									<h1>{data?.training?.title}</h1>
									<div className="row g-0">
										<div className="col-12 col-md-auto">
											<div className="social-share mb-42">
												<PostSocialShare post={data.training}/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='spacer-56'></div>
					<div className="row">
						<div className="col-12 col-md-8 order-2 order-md-1">
							<div className='post-content pt-0'>
								{data?.training?.images?.['821x462'] &&
									<div className="features-img">
										<img src={data.training.images['821x462']} alt=""></img>
									</div>
								}
								<div className='spacer-56'></div>
								{data?.training?.htmlContent &&
									<Content html={data?.training?.htmlContent} rootClass="text"/>
								}
								{data.training.authors && data.training.authors.length > 0 && (
									<div className='Host-list'>
										{data.training.authors.map((author, index) => (
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
															{author.wpAuthor.authorProfession}
														</p>
													</div>
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
						<div className="col-12 col-md-4 order-1 order-md-2">
							<div className='popular-article'>
								<div className="training-right-side-links">
									<ul>
										{data.training.training_atendees_count > 49 &&
											<li>
												<a href="#"> <img src={AtendeesImg} alt=""></img>
													Attendees: {data.training.training_atendees_count}</a>
											</li>
										}
										{data?.training?.audio &&
											<li>
												<a href="#"> <img src={AudioImg} alt=""></img>
												Audio: {data.training.audio}</a>
											</li>
										}
										{data?.training?.time &&
											<li>
												<a href="#"> <img src={TimeImg} alt=""></img>
													Time: {data.training.time}</a>
											</li>
										}
									</ul>
									{data?.training?.access_training_series_link && data.training.htmlContent.includes('ht-access-postType="ht-training"') &&
										<a href="javascript:void(0)" onClick={accessTrainingClicked()} className="btn-main access-training-setires">{data?.training?.access_training_series_link}</a>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*{data?.relatedTrainings &&
				<RelatedTrainings data={data?.relatedTrainings} orangeBg={false} />
			}*/}
			{data?.CategorisedArticles &&
				<CategorisedArticles data={data?.CategorisedArticles.filteredArticles} orangeBg={false} trainingSeriesContent={true} />
			}
		</React.Fragment>
)
}

export default TrainingDetail
