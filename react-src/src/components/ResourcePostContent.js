import React from 'react'
import '../css/ResourceCenterArticle.scss'
import '../css/Article.scss'
import Content from './Content'
import PostSocialShare from './PostSocialShare'

function ResourcePostContent ({data}) {
  return (
    <section className="resource-center-article article-main">
      <div className="text">
        { data?.post?.contentType &&
          <span className="tag">{data.post.contentType.toUpperCase()}</span>
        }
        <h1>{data.post.title}</h1>
        <div className="social-share">
          <PostSocialShare post={data.post} />
        </div>
      </div>
      { data?.htmlContent &&
        <Content html={data?.htmlContent} rootClass="text" />
      }
    </section>
  )
}

export default ResourcePostContent
