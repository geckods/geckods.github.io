import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NavBar from '../components/NavBar'
import PrivateRoute from '../components/privateRoute'
import { getUser, isLoggedIn } from "../services/auth"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        {isLoggedIn() ? (
          <>
            <NavBar />
            <ol style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const isPrivate = post.frontmatter.private || false

                const PostComponent = () => (
                  <li key={post.fields.slug}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <small>{post.frontmatter.date}</small>
                        <h2>
                          <Link to={post.fields.slug} itemProp="url">
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </h2>
                      </header>
                    </article>
                  </li>
                )

                return isPrivate ? (
                  <PrivateRoute component={PostComponent} key={post.fields.slug} />
                ) : (
                  <PostComponent key={post.fields.slug} />
                )
              })}
            </ol>
            <div className="bio-spacing">
              <Bio />
            </div>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted content
          </>
        )}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { is_demo: { ne: true } }, fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY MMM DD")
          title
          description
          private
        }
      }
    }
  }
`
