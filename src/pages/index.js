import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`]} />
    <section className="dib-ns dn">
      <span
        className="f1 pa2 fr"
        role="img"
        aria-label="wave"
      >
      👋
      </span>
      <p className="f3 pv3 pv4-l mt4 mh3 mh4-l">
        Hej!
        <br /><br />
          I&#8217;m William (usually{' '}
        <a className="link" href="https://github.com/shwilliam" target="_blank" rel="noopener noreferrer">
          @shwilliam
        </a>
        {' '}on the internet). I&nbsp;love the web and working to make it more fun, interesting
        and exciting to use.
        <br /><br />
        Select a project from the left to read a bit more about it, or{' '}
        <a className="link" href="mailto:w-lindvall@outlook.com">
          get it touch
        </a>
        {' '}if you&#8217;re looking for something in particular!
      </p>
    </section>
  </Layout>
)

export default IndexPage
