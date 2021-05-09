import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function About() {
  return (
    <>
      <Head>
        <title>About Rimufest</title>
      </Head>

      <header className="bg-white dark:bg-gray-800">
        <div className="md:flex">
            <div className="flex items-center justify-center w-full px-6 py-8 md:h-128 md:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">This is <span className="text-indigo-600 dark:text-indigo-400">Rimufest</span></h2>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>
                </div>
            </div>

            <div className="w-full h-64 md:w-1/2 md:h-auto">
                <div className="w-full h-full bg-cover" style={{backgroundImage: "url(/)"}}>
                    <div className="w-full h-full bg-black opacity-25"></div>
                </div>
            </div>
        </div>
    </header>


      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="/ourFounders.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our
              <br className="hidden lg:inline-block" />Founders
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          </div>
        </div>
      </section>



      <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Our Team</h2>

        <div className="flex items-center justify-center">
          <div className="grid gap-8 mt-8 sm:grid-cols-2">
            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center w-full h-72 mx-auto rounded-lg" src="/amelia.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Amelia Taylor</h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder / Co-director</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center w-full h-72 mx-auto rounded-lg" src="/alejandro.jpg" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Alejandro Larumbe</h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder / Co-director</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Image src="/about.jpeg" alt="about Rimufest" layout={'responsive'} width={806} height={605} /> */}
    </>
  )
}
