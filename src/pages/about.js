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

    {/* Div 0 */}
    <div className={styles.textCenter}>
    {/* <div> */}
      {/* Add Portrait */}
      <StaticImage
        src="../images/migueltest.png"
        loading="eager"
        width={350}
        quality={60}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>

    {/* Div 1; intro */}
    <div>
      <h1>
        Miguel Rivera-Lanas's Blog:
      </h1>

      <p className={styles.intro}>
        This blog 
      </p>

    </div>

    {/* Div 2; Contact */}


  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage