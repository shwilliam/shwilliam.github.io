import React from 'react'
import GitHubButton from 'react-github-btn'
import {Consumer} from 'store/createContext'
import LinkButton from 'components/link-button'
import Tag from 'components/tag'
import {
  ProjectActions,
  ProjectContent,
  ProjectDescription,
  // ProjectLink,
  ProjectList as StyledProjectList,
  ProjectListItem,
  ProjectTitle,
} from './projects-list.css'

const ProjectsList = (projects, filter = false) => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <StyledProjectList>
        {projects
          .sort(({node}) => {
            if (!filter) return false
            if (!activeCategory) return false

            return !node.frontmatter.tech.split(' ').includes(activeCategory)
          })
          .map(({node}) => {
            const {frontmatter} = node

            return (
              <ProjectListItem
                key={frontmatter.path}
                className={
                  activeCategory &&
                  filter &&
                  !frontmatter.tech.split(' ').includes(activeCategory)
                    ? 'dim'
                    : ''
                }
              >
                {/* <ProjectLink
                  to={frontmatter.path}
                  target="_blank"
                    rel="noopener noreferrer"
                > */}
                <ProjectContent>
                  <ProjectTitle>{frontmatter.title}</ProjectTitle>

                  <ProjectDescription>{frontmatter.excerpt}</ProjectDescription>

                  {frontmatter.tech.split(' ').map(tag => (
                    <Tag
                      key={tag}
                      value={tag}
                      onClick={() => filter && setActiveCategory(tag)}
                    >
                      {tag}
                    </Tag>
                  ))}
                </ProjectContent>
                {/* </ProjectLink> */}

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
              </ProjectListItem>
            )
          })}
      </StyledProjectList>
    )}
  </Consumer>
)

export const ProjectsListWithFilter = projects =>
  // TODO: refactor this to be more explicit
  ProjectsList(projects, true)

export default ProjectsList
