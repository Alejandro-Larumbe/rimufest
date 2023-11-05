import React from "react";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO";

const artists = [
  {
    name: "Amelia Taylor",
    instrument: "Violin",
    title: "Director, Co-Founder",
    website: "https://www.ameliacetaylor.com",
    image: "amelia-4",
    path: "/amelia-taylor",
    bio: [
      "New Zealand violinist Amelia Taylor has an active international career as a performer and pedagogue. Amelia is founder and director of ArcaSōnica, a chamber music collective that tours annually in Mexico bringing fresh and exciting performances with international musicians, as well as masterclasses, chamber music coachings, and side-by-side concerts with youth orchestra programs. As part of the Taylor-Larumbe duo, she has performed extensively in New Zealand, USA and Mexico. As well as keeping a busy chamber schedule, Taylor performs regularly with symphony orchestras, such as Opus Orchestra (NZ), Baton Rouge Symphony Orchestra, Louisiana Philharmonic, Lansing Symphony, and Midland Symphony Orchestra.",
      "A talented teacher, Amelia is a certified Suzuki instructor in both the USA and NZ. She currently has a private Suzuki studio in San Diego, USA and Tauranga, NZ.",
      "Amelia became fascinated with the violin as a toddler and began learning the violin through the Suzuki method. She holds a bachelor’s degree from Waikato University, where she was a Sir Edmund Hillary Scholar, as well as receiving multiple Blues awards. Her graduate studies include a master's in violin performance from Louisiana State University with Espen Lilleslaten, former concertmaster of Bergen Philharmonic (Norway), and an artist diploma at the University of Michigan with David Halen, concertmaster of St. Louis Symphony.",
      "Amelia has a rich and diverse pool of education to draw upon, from her teachers to her students. She is forever learning and experimenting with ways of teaching and self-improvement.",
    ],
  },
  {
    name: "Alejandro Larumbe",
    instrument: "Violin, Orchestra Conductor",
    title: "Co-Founder",
    image: "alejandro",
    path: "/alejandro-larumbe",
  },
  {
    name: "Kate Ellingham-Hunt",
    instrument: "Violin, Alexander Technique",
    website: "https://kate-eh.co.nz",
    image: "kate",
    path: "/kate-ellingham-hunt",
    bio: [
      "As a child, Kate learned the violin through the Suzuki method and later completed a Bmus in performance violin at the NZ School of Music. ",
      "She has taught private and group Suzuki lessons for over 15 years in NZ and the UK. ",
      "She spent three years training to be a teacher of the Alexander Technique in London where she got the chance to assist with the Alexander Technique programme at the Royal College of Music. ",
      "She has an interest in the way we use our bodies and how that affects our health and technique as musicians. ",
    ],
  },
  {
    name: "Donald Maurice",
    instrument: "Viola",
    website: "https://www.donaldmaurice.org",
    image: "donald-maurice1",
    path: "/donald-maurice",
    bio: [
      "Donald was, until retiring in 2020, Professor of Music at Victoria University of Wellington. He has performed internationally for four decades as a solo violist and chamber musician and has given world premieres and New Zealand premieres of many works. He has presented at twenty International Viola Congresses.",
      "He was awarded the Silver Alto Clef by the International Viola Society in 2000, was made an Honorary Life Member of the American Viola Society in 2007, and in 2009 he gave the William Primrose Memorial Concert in Utah. He has performed for New Zealand diplomatic missions in Washington DC, New York, Ottawa, Berlin, Bangkok, Kuala Lumpur, and Warsaw. In 2014 he was made a Member of the New Zealand Order of Merit.",
      "Donald has books published on Béla Bartók and Alfred Hill. “Bartók's Viola Concerto - The Remarkable Story of his Swansong” (Oxford) is recognized as an authoritative text.",
      "The award-winning CD of his live 2008 performance of Boris Pigovat's 'Holocaust Requiem' has received high acclaim in Europe and North America. He gave the German premiere of this work in Wuerzburg in 2011.",
      "He is the producer of Lacrimosa, a documentary film about the composer and the Requiem.",
      "Donald’s solo and chamber music discography spans 18 CDs on Naxos, Tantara, Acte Prealable, Atoll, and Kiwi Pacific. He is featured playing viola d’amore on a documentary film made in Poland about the baroque composer Christoph Graupner. His most recent viola d’amore CD with Archi d’Amore Zelanda (Atoll) features trios by New Zealand composers David Hamilton and Michael Williams.",
      "In 2018, Donald founded Sinfonia for Hope, an orchestra of professional musicians who donate their time once a year to raise funds for humanitarian causes.",
      "Donald studied under Nannie Jamieson at the Guildhall School of Music and Drama, Donald McInnes at the University of Washington, Max Rostal at the Aldeburgh Festival, and William Primrose at the Banff School of Fine Arts.",
    ],
  },
  {
    name: "Maria Mo",
    instrument: "Piano",
    image: "maria-mo",
    path: "/maria-mo",
    bio: [
      "Maria Mo has performed in New Zealand, Australia, the United Kingdom, and across Europe as both a solo recitalist and chamber musician. She was an associate artist at the 2014 Australian Cello Awards (Sydney, Australia) and a guest artist at the 2010 Semaine Internationale de Piano festival (Blonay, Switzerland), as well as the Gesellschaft für Musiktheater in Vienna. She has toured as a concerto soloist with Opus Chamber Orchestra, the Trust Waikato Symphony Orchestra, Auckland Symphony Orchestra, Auckland Youth Orchestra, and Wairua Sinfonietta.",
      "In 2009, she was the winner of the Royal Over-Seas League Arts/Pettman International Scholarship for a New Zealand Chamber Ensemble as pianist for the Leonari trio, which led to an 8-week concert tour and study trip in the United Kingdom in 2010, playing prestigious venues and festivals such as St. Martin-in-the-Fields and Edinburgh Fringe Festival. The trio also toured with Chamber Music New Zealand in 2012 to critical acclaim. In December 2018, Maria had the honor of being selected to perform for South Korean President Moon Jae-In on his inaugural trip to New Zealand.",
      "Maria studied with Katherine Austin as a Sir Edmund Hillary Music Scholar at the University of Waikato, where she received the Hillary Medal and the Lili Kraus Piano Award and graduated with a Master of Music with First Class Honors in 2009. In 2013, she graduated with Excellence under Professor Doris Adam at the Vienna Conservatory and received further training from Professor Christopher Hinterhuber at the University for Music and Performing Arts Vienna.",
      "In 2022, Maria completed a Doctor of Musical Arts at the University of Waikato, where she researched the legacy of Janetta McStay, the renowned pianist and New Zealand’s first full-time lecturer in piano at the University of Auckland from 1963–1982.",
    ],
  },
];
export async function getStaticPaths() {
  // Generate the paths for each artist
  const paths = artists.map((artist) => ({
    params: { id: artist.path.slice(1) }, // Use "id" instead of "slug"
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch the data for the specific artist based on the id
  const artist = artists.find((a) => a.path === `/${params.id}`);

  return {
    props: { artist },
  };
}

const Artist = ({ artist }) => {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Annual NZ 2024"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting, and organizational skills, all transferable life skills."
      />
      <div className="h-48"></div>
      <div className="md:w-100 md:mx-auto md:my-20 p-8">
        {/* Flexbox layout for medium (md) screens and larger */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:self-end">
            <div className="text-5xl font-extrabold text-pink">
              {artist.name}
            </div>
            {artist.title && <p className="text-3xl">{artist.title}</p>}
            <p className="text-2xl">{artist.instrument}</p>
            {artist.website && (
              <a
                href={artist.website}
                className="text-xl text-blue-500 hover:underline"
              >
                {artist.website}
              </a>
            )}
          </div>
          <div className="md:w-1/2">
            <img
              src={`/${artist.image}.jpeg`}
              alt={artist.name}
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
        {/* Display the artist's biography if it's available in the data */}
        {artist.bio && (
          <div className="mt-4">
            {artist.bio.map((paragraph, index) => (
              <div key={index} className="text-lg">
                {paragraph}
              </div>
            ))}
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Artist;
