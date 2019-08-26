import React from 'react'
import {Consumer} from 'store/createContext'
import {NoWrap} from 'components/utils'
import Tag from 'components/tag'
import {
  ProjectsGrid as ProjectsGridStyled,
  ProjectLink,
  ProjectHeader,
  ProjectTitle,
} from './projects-grid.css'

const ProjectsGrid = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <ProjectsGridStyled>
        {projects.map(({node}) => {
          const {frontmatter} = node

          return (
            <ProjectLink
              key={frontmatter.path}
              href={frontmatter.source}
              target="_blank"
              rel="noopener noreferrer"
            >
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
      </ProjectsGridStyled>
    )}
  </Consumer>
)

export default ProjectsGrid
