import Typography from 'typography'
import wordpressKubrickTheme from 'typography-theme-wordpress-kubrick'

wordpressKubrickTheme.overrideThemeStyles = ({rhythm}, options) => ({
  a: {
    color: '#000000 !important',
    textDecoration: 'underline',
  },
  'ul, ol': {
    marginLeft: 0,
    paddingLeft: 0,
    textIndent: 0,
  },
  li: {
    margin: 0,
  },
  'li::before': {
    content: "'' !important",
  },
})

const typography = new Typography(wordpressKubrickTheme)

export default typography
