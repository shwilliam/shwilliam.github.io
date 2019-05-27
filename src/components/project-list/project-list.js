import React, {useContext, useEffect} from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Fuse from 'fuse.js'
import {BREAKPOINTS} from '../../constants/breakpoints'
import FilterContext from '../../context/filter-context'
import List from '../list'
import HideOnDevice from '../hide-on-device'
import StyleWrapper from './style-wrapper'
import ListItem, {NoResultsListItem} from './list-item'
import SearchQuery from './search-query'
import ClearButton from './clear-button'
import Title from './title'
import Date from './date'
import ContactLink from './contact-link'
import NoWrap from '../no-wrap'

function focusMainLink() {
  const mainLink = document.querySelector('main').querySelector('a')
  if (mainLink) mainLink.focus()
}

const ProjectList = () => {
  const {category, setCategory, query, setQuery} = useContext(FilterContext)

  useEffect(() => focusMainLink(), [])

  const handleLinkClick = () => {
    if (
      typeof window !== 'undefined' &&
      window.innerWidth < BREAKPOINTS.PHONE
    ) {
      // clear query & category
      setCategory()
      setQuery()
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
            limit: 1000
          ) {
            edges {
              node {
                excerpt(pruneLength: 50)
                html
                frontmatter {
                  date(formatString: "DD-MM-YYYY")
                  path
                  title
                  category
                }
              }
            }
          }
        }
      `}
      render={data => {
        const projects = data.allMarkdownRemark.edges

        let filteredProjects = projects
          // filter by category
          .filter(({node}) => {
            if (category && node.frontmatter.category !== category) return false
            else return true
          })

        // filter by query
        if (query) {
          const fuse = new Fuse(filteredProjects, {
            keys: [
              {name: 'node.frontmatter.title', weight: 0.9},
              {name: 'node.frontmatter.category', weight: 0.8},
              {name: 'node.html', weight: 0.4},
            ],
          })

          filteredProjects = fuse.search(query)
        }

        return (
          <StyleWrapper>
            {query && (
              <SearchQuery>
                &#39;{query}&#39;
                <ClearButton type="button" onClick={() => setQuery('')}>
                  clear
                </ClearButton>
              </SearchQuery>
            )}
            <List>
              {filteredProjects.length ? (
                filteredProjects.map(({node}) => {
                  const {excerpt, frontmatter} = node

                  return (
                    <ListItem key={frontmatter.path}>
                      <Link
                        to={frontmatter.path}
                        onClick={handleLinkClick}
                        activeClassName="active"
                      >
                        <Date>{frontmatter.date}</Date>
                        <Title>{frontmatter.title}</Title>
                        <HideOnDevice device="PHONE">{excerpt}</HideOnDevice>
                      </Link>
                    </ListItem>
                  )
                })
              ) : (
                <NoResultsListItem>
                  <NoWrap>
                    No results
                    <span role="img" aria-label="Crying emoji">
                      😢
                    </span>
                  </NoWrap>
                  <ContactLink
                    href={`mailto:w-lindvall@outlook.com?subject=Have you worked with ${query}?`}
                  >
                    Get in touch
                  </ContactLink>
                </NoResultsListItem>
              )}
            </List>
          </StyleWrapper>
        )
      }}
    />
  )
}

export default ProjectList
