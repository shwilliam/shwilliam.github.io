import Typography from 'typography'
import typographyThemeGithub from 'typography-theme-github'

typographyThemeGithub.overrideThemeStyles = ({rhythm}, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    borderBottom: 'none',
  },
})

const typography = new Typography(typographyThemeGithub)

export default typography
