import Typography from 'typography'
import wordpressKubrickTheme from 'typography-theme-wordpress-kubrick'

wordpressKubrickTheme.overrideThemeStyles = ({rhythm}, options) => ({
  'ul, ol': {
    marginLeft: 0,
    paddingLeft: 0,
    textIndent: 0,
  },
  li: {
    margin: 0,
    display: 'inline-block',
  },
  'li::before': {
    content: "'' !important",
  },
})

const typography = new Typography(wordpressKubrickTheme)

export default typography
