import Hero from "../../components/Hero";

// export async function getStaticProps() {
//   const allConcertsData = getSortedConcertsData();
//   return {
//     props: {
//       allConcertsData,
//     },
//   };
// }

export default function Concerts() {
  return (
    <>
      <Hero bgImage="concerts">
        <h1 className="uppercase text-white">Concerts</h1>
      </Hero>
      <div className="flex flex-col md:py-20 items-center p-8">
        <h1 style={{ margin: "100px auto 200px", fontSize: "24px" }}>
          Stay tuned for our upcoming up concerts....
        </h1>
      </div>
    </>
  );
}
