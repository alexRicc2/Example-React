import Head from 'next/head'
import { request } from '../lib/datocms'
import { Search } from '../src/components/Search';
const HOMEPAGE_QUERY = `
query MyQuery {
  allExamples {
    id
    title
    explanation {
      value
    }
    image {
      responsiveImage{
         width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
  }
}
`
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}


export default function Home(props) {
  const {data} = props
  const exemplos = data.allExamples
  console.log(exemplos)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search exemplos={exemplos}/>
    </div>
  )
}
