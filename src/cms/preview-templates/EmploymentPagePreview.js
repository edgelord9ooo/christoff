import React from 'react'
import PropTypes from 'prop-types'
import { EmploymentPageTemplate } from '../../templates/employment-page'

const EmploymentPageReview = ({ entry, widgetFor }) => (
  <EmploymentPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

EmploymentPageReview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EmploymentPageReview
