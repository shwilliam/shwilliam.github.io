import React from 'react'
import GitHubButton from 'react-github-btn'
import {Consumer} from 'store/createContext'
import LinkButton from 'components/link-button'
import {NoWrap, FlexBetween, Dim} from 'components/utils'
import Tag from 'components/tag'
import {ProjectActions, ProjectContent, ProjectTitle} from './projects-list.css'

const ProjectsList = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <ul>
        {projects
          .sort(({node}) => {
            if (!activeCategory) return false

            return !node.frontmatter.tech.split(' ').includes(activeCategory)
          })
          .map(({node}) => {
            const {frontmatter} = node

            return (
              <Dim
                key={frontmatter.path}
                className={
                  activeCategory &&
                  !frontmatter.tech.split(' ').includes(activeCategory)
                    ? 'dim'
                    : ''
                }
              >
                <li>
                  <FlexBetween>
                    <ProjectContent>
                      <ProjectTitle>{frontmatter.title}</ProjectTitle>
                      {frontmatter.tech && (
                        <NoWrap>
                          {frontmatter.tech.split(' ').map(tag => (
                            <Tag
                              key={tag}
                              value={tag}
                              onClick={() => setActiveCategory(tag)}
                            >
                              {tag}
                            </Tag>
                          ))}
                        </NoWrap>
                      )}
                      <p>{frontmatter.excerpt}</p>
                    </ProjectContent>

                    <ProjectActions>
                      {frontmatter.link && (
                        <LinkButton
                          href={frontmatter.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </LinkButton>
                      )}
                      {frontmatter.source && (
                        <GitHubButton
                          href={frontmatter.source}
                          data-size="large"
                          // data-show-count="true"
                        >
                          Source
                        </GitHubButton>
                      )}
                    </ProjectActions>
                  </FlexBetween>
                </li>
              </Dim>
            )
          })}
      </ul>
    )}
  </Consumer>
)

export default ProjectsList
