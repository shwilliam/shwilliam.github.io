import React, { useContext, useEffect } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import styled from 'styled-components'
import MEDIA, { BREAKPOINTS } from '../../constants/breakpoints'
import { TEXT, UI } from '../../constants/colors'
import FilterContext from '../../context/filter-context'
import List from '../list'
import TextButton from '../text-button'
import HideOnDevice from '../hide-on-device'

const ProjectListWrapper = styled.section`
  border-right: 1px solid black;

  ${MEDIA.PHONE`
    border-right: none;
  `}
`

const ProjectListItem = styled.li`
  background-color: ${UI.GREY};
  border-top: 1px solid black;

  &:first-of-type {
    border-top: none;
  }

  ${MEDIA.PHONE`
    &:first-of-type {
      border-top: 1px solid black;
    }
  `}

  &:last-of-type {
    border-bottom: 1px solid black;
  }

  &:hover {
    background-color: ${UI.GREY_HOVER};
  }

  a {
    display: inline-block;
    padding: 1rem;
    width: 100%;

    &.active {
      border-left: 0.2rem solid ${UI.FOCUS};
    }
  }
`

const QueryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${UI.GREY};
  padding: 0.4rem 1rem;
  border-bottom: 1px solid black;
`

const DateWrapper = styled.div`
  font-size: 0.85rem;
  color: ${TEXT.SECONDARY};
`

const ThirdHeader = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`

const ContactLink = styled.a`
  display: block;
  color: ${TEXT.LINK};
  padding-top: 1rem;
  white-space: nowrap;

  &.active {
    border-left: 0.2rem solid ${UI.FOCUS};
  }
`

const NoResultsListItem = styled.li`
  padding: 1rem;
  background-color: ${UI.GREY};
  border-top: none;
  border-bottom: 1px solid black;
`

const NoResultsWrapper = styled.div`
  white-space: nowrap;
`

function focusMainLink () {
  const mainLink = document.querySelector('main').querySelector('a')
  if (mainLink) mainLink.focus()
}

const ProjectList = () => {
  const { category, setCategory, query, setQuery } = useContext(FilterContext)

  useEffect(() => {
    focusMainLink()
  }, [])

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
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
          .filter(({ node }) => {
            if (category && node.frontmatter.category !== category) return false
            else return true
          })

        // filter by query
        if (query) {
          const fuse = new Fuse(filteredProjects, {
            keys: [
              { name: 'node.frontmatter.title', weight: 0.9 },
              { name: 'node.frontmatter.category', weight: 0.8 },
              { name: 'node.html', weight: 0.4 }
            ]
          })

          filteredProjects = fuse.search(query)
        }

        return (
          <ProjectListWrapper>
            {
              query && <QueryWrapper>
                &#39;{query}&#39;
                <TextButton
                  type="button"
                  onClick={() => setQuery('')}
                >clear</TextButton>
              </QueryWrapper>
            }
            <List>
              {
                filteredProjects.length
                  ? filteredProjects.map(({ node }) => {
                    const { excerpt, frontmatter } = node

                    return (
                      <ProjectListItem key={frontmatter.path}>
                        <Link
                          to={frontmatter.path}
                          onClick={() => {
                            if (typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.PHONE) {
                              // clear query & category
                              setCategory()
                              setQuery()
                            }
                          }}
                          activeClassName="active"
                        >
                          <DateWrapper>
                            {frontmatter.date}
                          </DateWrapper>
                          <ThirdHeader>{frontmatter.title}</ThirdHeader>
                          <HideOnDevice device="PHONE">
                            {excerpt}
                          </HideOnDevice>
                        </Link>
                      </ProjectListItem>
                    )
                  })
                  : <NoResultsListItem>
                    <NoResultsWrapper>
                      No results
                      <span role="img" aria-label="Crying emoji">😢</span>
                    </NoResultsWrapper>
                    <ContactLink href={`mailto:w-lindvall@outlook.com?subject=Have you worked with ${query}?`}>
                      Get in touch
                    </ContactLink>
                  </NoResultsListItem>
              }
            </List>
          </ProjectListWrapper>
        )
      }}
    />
  )
}

export default ProjectList
