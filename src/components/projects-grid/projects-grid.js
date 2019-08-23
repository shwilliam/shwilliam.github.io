import React from 'react'
import GitHubButton from 'react-github-btn'
import {Consumer} from 'store/createContext'
import {NoWrap} from 'components/utils'
import Tag from 'components/tag'
import {
  ProjectsGrid as StyledProjectsGrid,
  ProjectHeader,
} from './projects-grid.css'

const ProjectsGrid = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <StyledProjectsGrid>
        {projects.map(({node}) => {
          const {frontmatter} = node

          return (
            <div key={frontmatter.path}>
              <ProjectHeader>
                <h3>{frontmatter.title}</h3>
                {frontmatter.tech && (
                  <NoWrap>
                    {frontmatter.tech.split(' ').map(tag => (
                      <Tag key={tag} value={tag}>
                        {tag}
                      </Tag>
                    ))}
                  </NoWrap>
                )}
              </ProjectHeader>
              <div>{frontmatter.excerpt}</div>
              {frontmatter.source && (
                <GitHubButton
                  href={frontmatter.source}
                  data-size="large"
                  // data-show-count="true"
                />
              )}
            </div>
          )
        })}
      </StyledProjectsGrid>
    )}
  </Consumer>
)

export default ProjectsGrid
