import React, {useState} from 'react'
import GitHubButton from 'react-github-btn'
import {Consumer} from 'store/createContext'
import LinkButton from 'components/link-button'
import Tag from 'components/tag'
import Peek from 'components/peek'
import {
  ProjectActions,
  ProjectContent,
  ProjectDescription,
  ProjectList as StyledProjectList,
  ProjectListItem,
  ProjectTitle,
  ProjectFlexWrapper,
} from './projects-list.css'

const ProjectsList = (projects, filter = false) => {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
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
                  onMouseOver={() => setHoveredProject(frontmatter.title)}
                  onMouseOut={() => setHoveredProject(null)}
                >
                  <ProjectFlexWrapper>
                    <ProjectContent>
                      <ProjectTitle>{frontmatter.title}</ProjectTitle>
                      {frontmatter.tech.split(' ').map(tag => (
                        <Tag
                          key={tag}
                          value={tag}
                          onClick={() => filter && setActiveCategory(tag)}
                        >
                          {tag}
                        </Tag>
                      ))}
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

                  {frontmatter.imgUrl && (
                    <Peek isOpen={hoveredProject === frontmatter.title}>
                      <img src={frontmatter.imgUrl} alt="" />
                    </Peek>
                  )}
                </ProjectListItem>
              )
            })}
        </StyledProjectList>
      )}
    </Consumer>
  )
}

export const ProjectsListWithFilter = projects =>
  // TODO: refactor this to be more explicit
  ProjectsList(projects, true)

export default ProjectsList
