import React from 'react'
import GitHubButton from 'react-github-btn'
import LinkButton from 'components/link-button'
import {
  ProjectActions,
  ProjectContent,
  ProjectDescription,
  // ProjectLink,
  ProjectList as StyledProjectList,
  ProjectListItem,
  ProjectTitle,
} from './projects-list.css'

const ProjectsList = projects => (
  <StyledProjectList>
    {projects.map(({node}) => {
      const {frontmatter} = node

      return (
        <ProjectListItem key={frontmatter.path}>
          {/* <ProjectLink
            to={frontmatter.path}
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <ProjectContent>
            <ProjectTitle>{frontmatter.title}</ProjectTitle>

            <ProjectDescription>{frontmatter.excerpt}</ProjectDescription>
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
)

export default ProjectsList
