import React, { useState } from 'react';
import '../css/Article.scss'
import MostPopular from './MostPopular'
import Breadcrumbs from './Breadcrumbs'
import Content from './Content'
import AuthorSlide from './AuthorSlide'
import CategorisedArticles from './CategorisedArticles'
import PostSocialShare from './PostSocialShare'



function PostContent ({data}) {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const scrollToFooter = () => {
      setIsFormVisible(true);
      setTimeout(() => {
          const footerElement = document.getElementById("subscriptionform");
          if (footerElement) {
              footerElement.scrollIntoView({ behavior: "smooth" });
          }
      }, 50); 
  };
  

  return (
    <React.Fragment>
      <section className="article-main ht-article-detail">
        {data?.post?.images?.['1440x450'] &&
          <div className="features-img">
            <img src={data.post.images['1440x450']} alt=""></img>
          </div>
        }
        <div className='spacer-56'></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9">
              <div className="text">
                { data.breadcrumb && data.breadcrumb.length > 0 && <Breadcrumbs items={data.breadcrumb} /> }

               
                <div className="post-meta">
                  <h1>{data?.post?.title}</h1>
                  
                  <div className="row g-0 align-items-center">
                    <div className="col">
                          <h6 className="m-0">{data?.post?.authors?.map(item => item.title).join(', ')}</h6>
                    </div>
                    <div className="col-12 col-md-auto my-3">
                        <a href="#subscriptionform" className="btn-outline d-block" onClick={(e) => { e.preventDefault(); scrollToFooter(); }}>Subscribe</a>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col">
                      <div className="post-deate">
                        {data?.post?.publishedDate} {
                        data?.post?.avgReadingTime ? ` | ${data.post.avgReadingTime}` : ''
                      }
                      </div>
                    </div>
                    <div className="col-12 col-md-auto">
                      <div className="social-share mb-42">
                        <PostSocialShare post={data.post} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-content pt-0'>
                { data?.htmlContent &&
                  <Content html={data?.htmlContent} rootClass="text" />
                }
</div>
                <div className="social-share mt-48">
                  <PostSocialShare post={data.post} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mobile-hide">
              {data.popularPosts && data.popularPosts.posts && data.popularPosts.posts.length > 0 && (
                <MostPopular data={data.popularPosts} />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className={`Aboutus-main padding-1 gr-1 ${isFormVisible ? '' : 'd-none'}`} id="subscriptionform">
        <div class="container">
          <div class="row">
            <div class="col-12">
                      { data?.bottomhtml &&
                        <Content html={data?.bottomhtml} rootClass="text" />
                      }
            </div>
          </div>
        </div>
      </section>

      {data?.post?.authors && data?.post?.authors.length > 0 &&
        <AuthorSlide items={data?.post?.authors} />
      }
      



      <section className="article-main ht-article-detail desktop-hide">
        <div className='spacer-56'></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              {data.popularPosts && data.popularPosts.posts && data.popularPosts.posts.length > 0 && (
                <MostPopular data={data.popularPosts} />
              )}
            </div>
          </div>
        </div>
      </section>
      {data?.relatedArticles && data?.relatedArticles.length > 0 &&
        <CategorisedArticles data={data?.relatedArticles} orangeBg={false} />
      }
     
 
    </React.Fragment>

  )
}

export default PostContent