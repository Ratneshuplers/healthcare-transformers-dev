import React  from 'react'
import Breadcrumbs from './Breadcrumbs'


function BreadcrumbOnly ({data}) {
  if (data.breadcrumb && data.breadcrumb.length > 0 ) {
    return (
      <div className="container breadcrumbs-full-line">
        <div className="row">
          <div className="col-12">
            <Breadcrumbs items={data.breadcrumb} />
          </div>
        </div>
      </div>
    )
  }
  return false
}

export default BreadcrumbOnly