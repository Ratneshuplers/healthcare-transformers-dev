import React, { useState } from 'react'
import '../css/EventThankYou.scss'
import Breadcrumbs from './Breadcrumbs'
import LatestArticles from './LatestArticles'
import linkedInIcon from '../images/linkedin.svg'
import FacebookIcon from '../images/facebook.svg'
import TwitterIcon from '../images/twitter.svg'
import LinkIcon from '../images/link.svg'

const getHrefUrl = (link) => {
  return link === '#' ? `${window.location.href}#` : link
}

const getImage = (platform) => {
  switch (platform) {
    case 'linkedIn':
      return linkedInIcon;
    case 'facebook':
      return FacebookIcon;
    case 'twitter':
      return TwitterIcon;
    default:
      return LinkIcon;
  }
}

function ThankYouPage ({ data }) {
  const [isShared, setIsShared] = useState(false)
  return (
    <React.Fragment>
      <section className="event-main">
        {
          data.featuredImage &&
          <div className="features-img">
            <img src={data.featuredImage} alt=""></img>
          </div>
        }
        <div className='spacer-64'></div>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              { data.breadcrumb && data.breadcrumb.length > 0 && <Breadcrumbs items={data.breadcrumb} /> }
            </div>
            <div className="col-12">
              <div className="text w-100">
                <div className="post-meta">
                  {data?.ThankYouHeading?.title &&
                    <h2>{data?.ThankYouHeading?.title}</h2>
                  }
                  {data?.ThankYouHeading?.description &&
                    <p className="big-text mb-0" dangerouslySetInnerHTML={{__html: data?.ThankYouHeading?.description}}></p>
                  }
                  {data?.ThankYouHeading?.links && data?.ThankYouHeading?.links?.length > 0 &&
                    <div className="twobnt">
                      {data?.ThankYouHeading?.links.map((link, index) => (
                        <a href={getHrefUrl(link.link.url)} target={link.link.target} className="btn-main" key={index}>{link.link.title}</a>
                      ))}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          (data?.ThankYouSocial?.image || data?.ThankYouSocial?.title || data?.ThankYouSocial?.description || (data?.ThankYouSocial?.socialLinks && data?.ThankYouSocial?.socialLinks?.length > 0)) &&
          <div className="twocol-vent">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  {
                    data?.ThankYouSocial?.image &&
                    <img src={data?.ThankYouSocial?.image} alt=""></img>
                  }
                </div>
                <div className="col-12 col-md-1">
                </div>
                <div className="col-12 col-md-5">
                  <div className="text">
                    <h2>{data?.ThankYouSocial?.title}</h2>
                    {
                      data?.ThankYouSocial?.description &&
                      <p dangerouslySetInnerHTML={{__html: data?.ThankYouSocial?.description}}></p>
                    }
                    { data?.ThankYouSocial?.socialLinks && data?.ThankYouSocial?.socialLinks?.length > 0 &&
                      <div className="social-share">
                        <ul>
                          {data?.ThankYouSocial?.socialLinks.map((link, index) => (
                            <li key={index}>
                              <a href={getHrefUrl(link.url)} target="_blank" rel="noopener noreferrer" onClick={(e) => {setIsShared(true)}}><img src={getImage(link.social_platform)} alt=""></img></a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                    {
                      isShared &&
                      <React.Fragment>
                        {
                          data?.ThankYouSocial?.downloadContent &&
                          <p dangerouslySetInnerHTML={{__html: data?.ThankYouSocial?.downloadContent}}></p>
                        }
                        {
                          data?.ThankYouSocial?.downloadLink && data?.ThankYouSocial?.downloadLink?.url?.length > 0 &&
                          <a href={getHrefUrl(data?.ThankYouSocial?.downloadLink.url)} target={data?.ThankYouSocial?.downloadLink.target} className="btn-main">{data?.ThankYouSocial?.downloadLink.title}</a>
                        }
                      </React.Fragment>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
      { data.LatestArticles &&
        <LatestArticles data={data.LatestArticles} smallTitle="" title="Don’t Miss Our Latest Publications"/>
			}
    </React.Fragment>
  )
}

export default ThankYouPage