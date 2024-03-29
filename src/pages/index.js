import Head from 'next/head';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import Results from '@/components/Results/Results';
import requests from '@/utils/requests';


export default function Home({results}) {
  // console.log({results});
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      <Results results= {results}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res)=>res.json());

  return {
    props: {
      results: request.results,
    },
  };
}