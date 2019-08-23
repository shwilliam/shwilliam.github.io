import React from 'react'
import {Consumer} from 'store/createContext'
import {NoWrap} from 'components/utils'
import Tag from 'components/tag'
import {
  ProjectsGrid as StyledProjectsGrid,
  ProjectLink,
  ProjectHeader,
  ProjectTitle,
} from './projects-grid.css'

const ProjectsGrid = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <StyledProjectsGrid>
        {projects.map(({node}) => {
          const {frontmatter} = node

          return (
            <ProjectLink key={frontmatter.path} href={frontmatter.source}>
              <ProjectHeader>
                <ProjectTitle>{frontmatter.title}</ProjectTitle>
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
            </ProjectLink>
          )
        })}
      </StyledProjectsGrid>
    )}
  </Consumer>
)

export default ProjectsGrid
