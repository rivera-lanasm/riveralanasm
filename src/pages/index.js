import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// styling
import * as styles from "../styles/index.module.css"
// import * as styles from "../styles/_base.scss"

// =========================
// MAIN CONTENT
// =========================


// =========================
// MAIN CONTENT
// =========================

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    {/* 
    ===============
    Intro 
    ===============
    */}
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      
      {/* header */}
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>

    {/* 
    ===============
    Main Content 
    ===============
    */}



    {/* footer links */}

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
