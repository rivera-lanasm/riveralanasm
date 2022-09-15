import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"
// styling
import * as styles from "../styles/index.module.css"


export default function PostsPage() {
     const data = useStaticQuery(graphql`
       query GetBlogPosts {
         allMdx {
           nodes {
             id
             frontmatter {
               title
               slug
               summary
               date(fromNow: true)
             }
           }
         }
       }
     `);
     const posts = data.allMdx.nodes;

     return (
      <Layout>
        <h1>Hello Frontend Masters!</h1>
        <Link to="/about">About this site</Link> 

       <h2>Check out my recent blog posts</h2>
       <ul>
         {posts.map((post) => (
           <li key={post.id}>
             <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>{' '}
             <small>posted {post.frontmatter.date}</small>
           </li>
         ))}
       </ul>
      </Layout>
    );
  }


// =========================
// MAIN CONTENT
// =========================

const links = [
  {
    text: "Sociotechnical Systems",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]


// =========================
// MAIN CONTENT
// =========================

const PostsPage_old = () => (
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


    {/* 
    ===============
    Main Content 
    ===============
    */}
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}`}
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    {/* footer links */}

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

// export default PostsPage
