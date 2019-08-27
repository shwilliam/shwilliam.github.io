import React from 'react'
import GitHubButton from 'react-github-btn'
import {Consumer} from 'store/createContext'
import LinkButton from 'components/link-button'
import {NoWrap} from 'components/utils'
import Tag from 'components/tag'
import {
  ProjectsList as ProjectsListStyled,
  ProjectsListItem,
  ProjectActions,
  ProjectContent,
  ProjectTitle,
} from './projects-list.css'

const ProjectsList = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <ProjectsListStyled>
        {projects
          .sort(({node}) => {
            if (!activeCategory) return false

            return !node.frontmatter.tech.split(' ').includes(activeCategory)
          })
          .map(({node}) => {
            const {frontmatter} = node

            return (
              <ProjectsListItem key={frontmatter.title}>
                <ProjectContent>
                  <ProjectTitle>{frontmatter.title}</ProjectTitle>
                  {frontmatter.tech && (
                    <NoWrap>
                      {frontmatter.tech.split(' ').map(tag => (
                        <Tag
                          key={tag}
                          value={tag}
                          onClick={() => setActiveCategory(tag)}
                          variant="large"
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
              </ProjectsListItem>
            )
          })}
      </ProjectsListStyled>
    )}
  </Consumer>
)

export default ProjectsList
