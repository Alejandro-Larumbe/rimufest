import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from './layout'
import { getSortedEventsData } from '../lib/concerts'
import Date from './date'
import ArticleWithImage from './ArticleWithImage'

export async function getStaticProps() {
  const allEventsData = getSortedEventsData()
  return {
    props: {
      allEventsData
    }
  }
}

export default function Concerts({ allEventsData }) {

  return (
    <>
      <Head>
        <title>{allEventsData.title}</title>
      </Head>
      <p>
        <Link href="/">
          <a>
            back to home
          </a>
        </Link>
      </p>

      <ArticleWithImage/>


      {
          allEventsData.map(({id, title, imgSrc, subtitle}) => {
          return (
            <div key={id}>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <Link href={`/events/${id}`}>
                <a>{title}</a>
              </Link>
              <Image src={`/events/${id}.jpeg`} alt={`${title} event`} width={806} height={605} />
            </div>
          )
        })
      }
    </>
  )
}
