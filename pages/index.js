import Head from 'next/head'
import { request } from '../lib/datocms'
import { Search } from '../src/components/Search';
import { Example } from '../src/components/Example';
import { ExemploProvider } from '../src/hooks/Exemplo';
const HOMEPAGE_QUERY = `
query MyQuery {
  allExamples {
    id
    title
    explanation {
      value
    }
    image {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        alt
      }
    }
  }
  allPadraos {
    id
    title
    explanation {
      value
    }
    image {
      responsiveImage {
        alt
        aspectRatio
        bgColor
        base64
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
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
  console.log("data: ",data)
  const exemplos = data.allExamples
  const padrao = data.allPadraos
  console.log(exemplos, padrao)
  return (
      
    <ExemploProvider>
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Search exemplos={exemplos}/>
      <Example padrao={padrao}/>
      
    </div>
    </ExemploProvider>
  )
}
