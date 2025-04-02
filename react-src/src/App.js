			import React from "react";
			import "./App.scss";
			import Header from "./components/Header";
			import Footer from "./components/Footer";
			import Headline from "./components/Headline";
			import LatestArticle from "./components/LatestArticle";
			import CategorisedArticles from "./components/CategorisedArticles";
			import PopularArticles from "./components/PopularArticles";
			import HomeNewsletter from "./components/HomeNewsletter";
			import HomeAboutUs from "./components/HomeAboutUs";
			import SectionHeading from "./components/SectionHeading";
			import CategoryArticles from "./components/CategoryArticles";
			import ResourceCenterArticles from "./components/ResourceCenterArticles";
			import AuthorList from "./components/AuthorList";
			import AuthorHeading from "./components/AuthorHeading";
			import LatestArticles from "./components/LatestArticles";
			import AboutUsContent from "./components/AboutUsContent";
			import UpcomingEvents from "./components/UpcomingEvents";
			import PastEvents from "./components/PastEvents";
			import EventDetail from "./components/EventDetail";
			import TrainingDetail from "./components/TrainingDetail";
			import LatestTrainings from "./components/LatestTrainings";
			import SearchResults from "./components/SearchResults";
			import PageContent from "./components/PageContent";
			import PostContent from "./components/PostContent";
			import ThankYouPage from "./components/ThankYouPage";
			import NotFound from './components/NotFound'
			import BreadcrumbOnly from './components/BreadcrumbOnly'

			
			
			const jsonData = window.frontend.pageJson
			function App() {
				return (
					<div className="App">
					{Object.keys(jsonData.blocks).map((block, index) => {
								return (<React.Fragment key={index}>
									{(() => {
										switch (block) {
											case 'Header':
												return <Header data={jsonData.blocks.Header}  />
											case 'Headline':
												return <Headline data={jsonData.blocks.Headline} />
											case 'LatestArticle':
												return <LatestArticle data={jsonData.blocks.LatestArticle} />
											case 'CategorisedArticles':
												return <CategorisedArticles data={jsonData.blocks.CategorisedArticles.filteredArticles} orangeBg={jsonData.blocks.CategorisedArticles.orangeBg} />
											case 'PopularArticles':
												return <PopularArticles data={jsonData.blocks.PopularArticles} />
											case 'HomeNewsletter':
												return <HomeNewsletter data={jsonData.blocks.HomeNewsletter} />
											case 'HomeAboutUs':
												return <HomeAboutUs data={jsonData.blocks.HomeAboutUs} />
											case 'SectionHeading':
												return <SectionHeading data={jsonData.blocks.SectionHeading} />
											case 'CategoryArticles':
												return <CategoryArticles data={jsonData.blocks.CategoryArticles} />
											case 'ResourceCenterArticles':
												return <ResourceCenterArticles data={jsonData.blocks.ResourceCenterArticles} />
											case 'BreadcrumbOnly':
												return <BreadcrumbOnly data={jsonData.blocks.BreadcrumbOnly} />
											case 'AuthorList':
												return <AuthorList data={jsonData.blocks.AuthorList} />
											case 'AuthorHeading':
												return <AuthorHeading data={jsonData.blocks.AuthorHeading} />
											case 'AuthorArticles':
												return <LatestArticles data={jsonData.blocks.AuthorArticles} smallTitle="Articles" title="Author's latest publications" />
											case 'AboutUsContent':
												return <AboutUsContent data={jsonData.blocks.AboutUsContent} />
											case 'UpcomingEvents':
												return <UpcomingEvents data={jsonData.blocks.UpcomingEvents} />
											case 'PastEvents':
												return <PastEvents data={jsonData.blocks.PastEvents} />
											case 'EventDetail':
												return <EventDetail data={jsonData.blocks.EventDetail} />
											case 'TrainingDetail':
												return <TrainingDetail data={jsonData.blocks.TrainingDetail} />
											case 'LatestTrainings':
												return <LatestTrainings data={jsonData.blocks.LatestTrainings} />
											case 'SearchResults':
												return <SearchResults data={jsonData.blocks.SearchResults} />
											case 'PageContent':
												return <PageContent data={jsonData.blocks.PageContent} />
											case 'PostContent':
												return <PostContent data={jsonData.blocks.PostContent} />
											case 'ThankYouPage':
												return <ThankYouPage data={jsonData.blocks.ThankYouPage} />
											case 'Footer':
												return <Footer data={jsonData.blocks.Footer} />
											case 'NotFound':
												return <NotFound data={jsonData.blocks.NotFound} />
											default:
												return
										}
									})()}
								</React.Fragment>)
					})}
					</div>
				);
			}

			export default App;
