import React from 'react'
import {Link} from 'gatsby'
import {Consumer} from 'store/createContext'
import BlogListStyled, {
  BlogListItem,
  BlogListTitle,
  BlogListDate,
} from 'components/blog-list'

const BlogList = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <BlogListStyled>
        {projects.map(({node}) => {
          const {frontmatter} = node

          return (
            <BlogListItem key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <BlogListTitle>{frontmatter.title}</BlogListTitle>
                <BlogListDate>{frontmatter.date}</BlogListDate>
                <p>{frontmatter.description}</p>
              </Link>
            </BlogListItem>
          )
        })}
      </BlogListStyled>
    )}
  </Consumer>
)

export default BlogList
