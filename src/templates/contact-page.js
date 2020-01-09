import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import facebook from '../img/social/facebook.svg'

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className='notification'>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
                <a title="facebook" href="https://www.facebook.com/All-Stars-Silviculture-Ltd-709280062785248/" target="_blank">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '2vw', height: '2vw' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
