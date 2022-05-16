import Head from 'next/head'
import config from '../../config'

export default function SEO({ description, title, image }) {
  const siteTitle = config.title

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta
        name="description"
        content="A tool that brings attention and understanding to how color contrast can affect people with different visual impairments."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://whocanuse.com" />
      <meta property="og:title" content="WhoCanUse" />
      <meta
        property="og:image"
        content="https://whocanuse.com/whocanuse_banner.png"
      />
      <meta
        property="og:description"
        content="A tool that brings attention and understanding to how color contrast can affect people with different visual impairments."
      />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content="https://whocanuse.com/whocanuse_banner.png"
      />
      <meta property="twitter:creator" content="@CoreyGinnivan" />
      <meta property="twitter:title" content="WhoCanUse" />
      <meta
        property="twitter:description"
        content="A tool that brings attention and understanding to how color contrast can affect people with different visual impairments."
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}
