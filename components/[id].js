import Head from 'next/head'
import { getAllConcertIds, getConcertData } from "../lib/concerts"
import Date from "./date"


export async function getStaticProps({ params }) {
  const eventData = await getConcertData(params.id)
  return {
    props: {
      eventData
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllConcertIds()
  return {
    paths,
    fallback: false
  }
}

export default function Event({ eventData }) {
  return (
    <>
    <Head><title>{eventData.title}</title></Head>
      <h1>
        {eventData.title}
      </h1>
      <h2>
        {eventData.subtitle}
      </h2>
      <h3>
        <br />

        <Date dateString={eventData.date}/>
      </h3>

      {eventData.title}
      <p>
        {eventData.description}
      </p>
      {eventData.title}
      {eventData.title}
      <div dangerouslySetInnerHTML={{ __html: eventData.contentHtml }} />
    </>
  )

}
