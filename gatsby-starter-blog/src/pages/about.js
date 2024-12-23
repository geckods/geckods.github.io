import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const about = data.markdownRemark

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{about.frontmatter.title}</h1>
          <p>{about.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: about.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/content/about.md/" }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY MMM DD")
      }
    }
  }
`