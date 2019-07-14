import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import GitHubButton from 'react-github-btn'
import LinkButton from 'components/link-button'
import {
  ProjectActions,
  ProjectLink,
  ProjectList as StyledProjectList,
  ProjectListItem,
  ProjectTitle,
} from './project-list.css'

const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/(/projects).*\\\\.md/"}}
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD-MM-YYYY")
                path
                link
                source
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

      return (
        <StyledProjectList>
          {projects.map(({node}) => {
            const {frontmatter} = node

            return (
              <ProjectListItem key={frontmatter.path}>
                <ProjectTitle>
                  <ProjectLink
                    to={frontmatter.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {frontmatter.title}
                  </ProjectLink>
                </ProjectTitle>

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
    }}
  />
)

export default ProjectList
