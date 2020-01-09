import React from 'react'

import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='notification'>
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'black',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            Stories
          </h1>
          <section className="section">
            <div className="container">
              <div className="content">
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
