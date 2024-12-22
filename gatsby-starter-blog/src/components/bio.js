/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            codeforces
            linkedin
            cphof
            motoinstagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br />
          <a href={`https://codeforces.com/${social?.codeforces || ``}`}>
            <StaticImage
              src="../images/codeforces-icon.png"
              alt="Codeforces"
              width={32}
              height={32}
            />
          </a>
          
          <a href={`https://www.linkedin.com/in/${social?.linkedin || ``}`}>
            <StaticImage
              src="../images/linkedin-icon.png"
              alt="Linkedin"
              width={24}
              height={24}
            />
          </a>
          
          <a href={`https://www.cphof.org/profile/codeforces:${social?.cphof || ``}`}>
            <StaticImage
              src="../images/cphof-icon.png"
              alt="CPHOF"
              width={72}
              height={24}
            />
          </a>
          <a href={`https://www.instagram.com/${social?.motoinstagram || ``}`}>
            <StaticImage
              src="../images/instagram-icon.png"
              alt="instagram"
              width={24}
              height={24}
            />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
