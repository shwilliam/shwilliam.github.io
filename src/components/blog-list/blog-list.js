import React from 'react'
import {Link} from 'gatsby'
import {Consumer} from 'store/createContext'
import {
  BlogList as BlogListStyled,
  BlogListTitle,
  BlogListDate,
} from './blog-list.css'

const BlogList = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <BlogListStyled>
        {projects.map(({node}) => {
          const {frontmatter} = node

          return (
            <li key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <BlogListTitle>{frontmatter.title}</BlogListTitle>
                <BlogListDate>{frontmatter.date}</BlogListDate>
                <p>{frontmatter.description}</p>
              </Link>
            </li>
          )
        })}
      </BlogListStyled>
    )}
  </Consumer>
)

export default BlogList
