import React from 'react'
import GitHubButton from 'react-github-btn'
import {Consumer} from 'store/createContext'
import {BoxNoWrap} from 'components/box'
import Tag from 'components/tag'
import {
  ProjectActions,
  ProjectDescription,
  ProjectsGrid as StyledProjectsGrid,
  ProjectsGridItem,
  ProjectTitle,
  ProjectImageWrapper,
} from './projects-grid.css'

const ProjectsGrid = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <StyledProjectsGrid>
        {projects.map(({node}) => {
          const {frontmatter} = node

          return (
            <ProjectsGridItem key={frontmatter.path}>
              <ProjectTitle>{frontmatter.title}</ProjectTitle>
              {frontmatter.tech && (
                <BoxNoWrap>
                  {frontmatter.tech.split(' ').map(tag => (
                    <Tag key={tag} value={tag}>
                      {tag}
                    </Tag>
                  ))}
                </BoxNoWrap>
              )}

              <ProjectImageWrapper>
                <img src={frontmatter.imgUrl} alt={frontmatter.imgAlt} />
              </ProjectImageWrapper>

              <ProjectDescription>{frontmatter.excerpt}</ProjectDescription>

              <ProjectActions>
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
            </ProjectsGridItem>
          )
        })}
      </StyledProjectsGrid>
    )}
  </Consumer>
)

export default ProjectsGrid
