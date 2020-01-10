import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import '../components/all.sass'
import Layout from '../components/Layout'


export const IndexPageTemplate = ({
}) => (
  <div className='isIndex'>
    <div className='row'>
      <div>
        <p class='landing'>
          <span class='landingSpan'>Tree planting and brushing in BC’s Southern Interior</span>
        </p>
      </div>
    </div>
    {/* <div className='row'>
      <div>
        <p class='landing'>
          <span class='landingSpan'>Contracting since 2005. Based in Enderby, BC.</span>
        </p>
      </div>
    </div> */}
    <div className='row'>
      <div class='buttonLanding'>
        <Link to="/employment">
          <button class="button is-large is-success">Plant with us</button>
        </Link>
      </div>
    </div>
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage