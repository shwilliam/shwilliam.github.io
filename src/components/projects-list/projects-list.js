import React from 'react'
import GitHubButton from 'react-github-btn'
import {Consumer} from 'store/createContext'
import LinkButton from 'components/link-button'
import {BoxNoWrap} from 'components/box'
import Tag from 'components/tag'
import {
  ProjectActions,
  ProjectContent,
  ProjectDescription,
  ProjectList as StyledProjectList,
  ProjectListItem,
  ProjectTitle,
  ProjectFlexWrapper,
} from './projects-list.css'

const ProjectsList = projects => (
  <Consumer>
    {({activeCategory, setActiveCategory}) => (
      <StyledProjectList>
        {projects
          .sort(({node}) => {
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
                  !frontmatter.tech.split(' ').includes(activeCategory)
                    ? 'dim'
                    : ''
                }
              >
                <ProjectFlexWrapper>
                  <ProjectContent>
                    <ProjectTitle>{frontmatter.title}</ProjectTitle>
                    {frontmatter.tech && (
                      <BoxNoWrap>
                        {frontmatter.tech.split(' ').map(tag => (
                          <Tag
                            key={tag}
                            value={tag}
                            onClick={() => setActiveCategory(tag)}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </BoxNoWrap>
                    )}
                    <ProjectDescription>
                      {frontmatter.excerpt}
                    </ProjectDescription>
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
                </ProjectFlexWrapper>
              </ProjectListItem>
            )
          })}
      </StyledProjectList>
    )}
  </Consumer>
)

export default ProjectsList
