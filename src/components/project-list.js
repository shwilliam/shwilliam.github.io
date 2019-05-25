import React, { useContext, useEffect } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Fuse from 'fuse.js'
import styled from 'styled-components'
import FilterContext from '../context/filter-context'

import { TEXT } from '../constants/colors'

import List from './list'

const DateWrapper = styled.div`
  font-size: 0.85rem;
  color: ${TEXT.SECONDARY};
`

const ThirdHeader = styled.h3`
  font-size: 1.2rem;
  margin: 0;
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
          <section className="br-ns">
            {
              query && <div className="pl3 pr2 bb-ns bg-light-gray flex justify-between">
                &#39;{query}&#39;
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="bg-transparent bn pointer dim"
                >clear</button>
              </div>
            }
            <List>
              {
                filteredProjects.length
                  ? filteredProjects.map(({ node }) => {
                    const { excerpt, frontmatter } = node

                    return (
                      <li key={frontmatter.path} className="bb bt-0-ns bt">
                        <Link
                          to={frontmatter.path}
                          onClick={() => {
                            // if small
                            if (typeof window.innerWidth === 'number' && window.innerWidth < 480) {
                              // clear query & category
                              setCategory()
                              setQuery()
                            }
                          }}
                          className="link pv2-ns pv4 dib near-black w-100 ph3-ns ph4 pv2 focus-bg"
                          activeClassName="bl bw2"
                        >
                          <DateWrapper>
                            {frontmatter.date}
                          </DateWrapper>
                          <ThirdHeader>{frontmatter.title}</ThirdHeader>
                          <div className="dn-ns">
                            {excerpt}
                          </div>
                        </Link>
                      </li>
                    )
                  })
                  : <li className="bb bt-0-ns bt pv2-ns pv4 near-black w-100 ph3-ns ph4 pv2 dib">
                    <div className="mt1 b nowrap">
                    No results
                      <span className="ml2" role="img" aria-label="Crying emoji">😢</span>
                    </div>
                    <a className="db nowrap mb1 mt0-ns mt1 link" href={`mailto:w-lindvall@outlook.com?subject=Have you worked with ${query}?`}>
                      Get in touch
                    </a>
                  </li>
              }
            </List>
          </section>
        )
      }}
    />
  )
}

export default ProjectList
