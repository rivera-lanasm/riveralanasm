import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>

    {/* Home Page */}
    <Seo title="Home" />

    <div>
      <h2>
        Miguel Rivera-Lanas's Blog:
      </h2>      
    </div>

    {/* Div 0 */}
    <div className={styles.textCenter}>
    {/* <div> */}
      {/* Add Portrait */}
      <StaticImage
        src="../images/migueltest.png"
        loading="eager"
        width={250}
        quality={60}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>

    {/* Div 1; intro */}
    <div>

      <p className={styles.intro}>
        This blog 
      </p>

    </div>

    {/* Div 2; Contact */}


  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
