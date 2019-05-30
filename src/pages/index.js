import React, {useContext} from 'react'
import {BREAKPOINTS} from '../constants/breakpoints'
import FilterContext from '../context/filter-context'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  // TODO: refactor
  const {category, query} = useContext(FilterContext)

  return (
    <Layout>
      <SEO title="Home" keywords={[`home`]} />
      {typeof window !== 'undefined' &&
      window.innerWidth < BREAKPOINTS.PHONE &&
      (category || query) ? null : (
        <section>
          <p>
            <span role="img" aria-label="wave">
              👋
            </span>
            Hej!
            <br />
            <br />
            I&#8217;m William (
            <a
              href="https://github.com/shwilliam"
              target="_blank"
              rel="noopener noreferrer"
            >
              @shwilliam
            </a>{' '}
            on GitHub). I&nbsp;love the web and working to make it more fun,
            interesting and exciting to use.
            <br />
            <br />
            Select a project from the left to read a bit more about it, or{' '}
            <a href="mailto:w-lindvall@outlook.com">get it touch</a> if
            you&#8217;re looking for something in particular!
          </p>
        </section>
      )}
    </Layout>
  )
}

export default IndexPage
