import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
// import './debug.css'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className='bg'>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/allllStarsFavIcon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/trialNum.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/trialNum.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/allllStarsFavIcon.ico"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/ogImage.png" />
      </Helmet>

      <div>
        <div className='row'><Navbar /></div>
        <div className='columns'>
          <div class="column"></div>
          <div class="column is-three-fifths">
            <div>
              {children}
            </div>
          </div>
          <div class="column"></div>
        </div>
      {/* <Footer /> */}
      </div>
    </div>
  )
}

export default TemplateWrapper
