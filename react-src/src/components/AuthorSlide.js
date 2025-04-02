import React, { useState } from 'react'
import '../css/HomeAboutUs.scss'

const paginate = (items, newIndex, setActiveIndex, setActiveItem) => (e) => {
  e.preventDefault();
  if (!items[newIndex]) {
    return
  }
  setActiveIndex(newIndex)
  setActiveItem(items[newIndex])
}

function AuthorSlide ({items}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeItem, setActiveItem] = useState(items[activeIndex])

  return (
    <section className="padding-2 alt-color twocoltext">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Author</h4>
          </div>
          <div className="col-12 col-md-6 col-lg-7">
          <div className='author-slide-img'><img src={activeItem?.images?.['724x407'] ? activeItem?.images?.['724x407'] : ''} alt=""></img></div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="text pt-0">
              <h2>{activeItem?.title}</h2>
              <span>
                {activeItem?.authorDegree &&
                  <React.Fragment>
                    {activeItem.authorDegree} <br/>
                  </React.Fragment>
                }
                {activeItem?.authorProfession}
              </span>
              <p className="mh-inharite">
                {activeItem?.title} {activeItem.authorDescription.slice(0,250)}...
              </p>
              <a href={activeItem.url} className="btn-outline">
                Learn more
              </a>
            </div>
          </div>
          {
            items.length > 1 &&
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center ">
                <ul className="pagrination">
                  <li>
                    <a href={`${window.location.href}#`} className={`${activeIndex === 0 ? 'disabled': ''}`} onClick={paginate(items, activeIndex - 1, setActiveIndex, setActiveItem)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.28789 12.0007L14.2979 18.0107L15.7129 16.5967L11.1129 11.9967L15.7129 7.40374L14.2989 5.98974L8.28789 12.0007Z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <span>{activeIndex + 1} / {items.length}</span>
                  </li>
                  <li>
                    <a href={`${window.location.href}#`} className={`${activeIndex === items.length - 1 ? 'disabled': ''}`} onClick={paginate(items, activeIndex + 1, setActiveIndex, setActiveItem)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15.7131 12.0002L9.70309 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default AuthorSlide