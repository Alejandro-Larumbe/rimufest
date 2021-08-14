import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useTranslation from '../../intl/useTranslation'



export default function Artists() {
  const { t, locale } = useTranslation()
  const router = useRouter()


  return (
    <>
      <Head>
        <title>{t('artists')}</title>
      </Head>

        {/* <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">2021 Artists</h2> */}
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')" }}></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">The Harikoa Collective</h2>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white md:text-xl">{t('ensembleInResidence')}</h2>
            {/* <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p> */}

            {/* <div className="mt-8">
              <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">About Rimufest</a>
            </div> */}
          </div>
        </div>
      </section>

      <section class="container p-6 mx-auto bg-white dark:bg-gray-800">

        <div class="flex items-center justify-center">
          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

            <Artist
              name='Alejandro Larumbe'
              title={`${t('violin')}/${t('conductor')}`}
              src={"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"}
            />

            <Artist
              name='Amelia Taylor'
              title={`${t('violin')}`}
              src={"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"}
            />

            <Artist
              name='Elyse Dalabakis'
              title={`${t('violin')}/${t('conductor')}`}
              src={"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"}
            />

            <Artist
              name='Alejandro Larumbe'
              title={`${t('violin')}/${t('conductor')}`}
              src={"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function Artist({ name, title, src }) {
  return (
    <div class="w-full max-w-xs text-center">
      <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src={src} alt="avatar" />

      <div class="mt-2">
        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">{name}</h3>
        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">{title}</span>
      </div>
    </div>
  )
}
