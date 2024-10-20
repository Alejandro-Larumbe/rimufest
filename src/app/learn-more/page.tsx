import Image from "next/image";
import React from "react";
import { PageHero } from "~/components/PageHero/PageHero";

export const learnMore = [
  {
    title: "Ensemble/Orchestra",
    image: "/learn-more/orchestra.jpg",
    paragraphs: [
      "During RimuFest, students will participate in a large ensemble. They will be divided into sections, playing the same music together to foster teamwork, synchronization, and unified sound. Ensemble practice helps develop listening skills, musicality, and following a conductor, while cultivating collaboration as students work towards a shared performance goal.",
      "These experiences prepare students for their chamber groups, where they will take on leadership roles and perform independently.",
    ],
  },
  {
    title: "Chamber Music",
    image: "/learn-more/chamber.jpg",
    paragraphs: [
      "At RimuFest, each student will be placed in a small chamber group of 2-5 players, where they will be the sole performer of their part. Students are expected to learn their parts beforehand to ensure cohesive rehearsals. Dedicated coaching sessions with RimuFest faculty help them refine their ensemble skills.",
      "Chamber music is highly rewarding, refining fundamental skills like rhythm, pitch, timing, and dynamics. It fosters creativity, coordination, and memorization, while also nurturing social and emotional development. It offers a comprehensive musical experience that enhances both individual musicianship and group performance.",
    ],
  },
  {
    title: "Masterclass",
    image: "/learn-more/masterclass.jpg",
    paragraphs: [
      "Masterclasses are an integral part of the RimuFest programme, held at the end of each day. Students perform in front of their peers and faculty, receiving constructive feedback on their performance. The masterclass environment is supportive, allowing students to learn from each other's performances and receive helpful feedback from coaches to take to their next practice session, providing rehearsal techniques and guidance for improvement.",
      "Beyond music, students also learn stage presence: how to walk on and off stage, engage with the audience, and use effective body language. These skills help them become more expressive, polished performers, enhancing both confidence and overall presentation. The masterclass experience not only refines musical abilities but also nurtures a well-rounded stage persona, preparing students for future performances.",
    ],
  },
  {
    title: "Rehearsal vs Coaching",
    image: "/learn-more/coaching.jpg",
    paragraphs: [
      "A rehearsal is a practice session where students come together without a teacher to work on their music, focusing on teamwork, communication, and interpretation. Each student is responsible for their part while actively listening and responding to others.",
      "A coaching session is led by an experienced teacher who provides feedback to refine the performance. Coaches offer insights into musicality, interpretation, and technique, guiding the group toward a more cohesive sound. Unlike rehearsals, where the focus is on the collaborative efforts of the group, coaching sessions are more instructional and led by the teacher.",
      "Both rehearsals and coaching are vital to students' growth in chamber music—rehearsals encourage independence and collaboration, while coachings provide professional guidance to elevate their musical skills. Together, these elements contribute to a well-rounded and enriching chamber music experience at RimuFest.",
    ],
  },
  {
    title: "Viola for Violinists",
    image: "/learn-more/viola.jpg",
    paragraphs: [
      "RimuFest offers violinists the chance to explore the viola, even with little to no prior experience. The viola plays a crucial role in ensemble settings, acting as the link between melody and harmony. Violinists can easily adapt to the viola's deep, warm sound due to similar playing techniques, enhancing their overall musicianship.",
      "Learning the viola brings multiple benefits: it improves violin technique, and gives students new opportunities to experience different musical roles in both chamber and orchestral settings.",
    ],
  },
];

interface LearnMoreItemProps {
  item: {
    title: string;
    image: string;
    paragraphs: string[];
  };
}

export const LearnMoreItem: React.FC<LearnMoreItemProps> = ({ item }) => (
  <div>
    <div className="relative w-full aspect-10/12">
      <Image alt={item.title} fill className="object-cover" src={item.image} />
    </div>
    <div className="pl-6 mt-8 border-l border-gray-200">
      <h2 className="font-bold">{item.title}</h2>
      <div className="mt-4">
        {item.paragraphs.map((paragraph, idx) => (
          <p className="text-sm" key={idx}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export const LearnMore = () => {
  return (
    <>
      <PageHero title="Learn more" image={"/learn-more.jpeg"} />

      <div className="lg:mx-24 my-48">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mx-6 md:mx-24 lg:mx-0 mt-8">
          <div className="flex flex-col gap-24">
            {learnMore.slice(0, 3).map((item) => (
              <LearnMoreItem key={item.title} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-24 lg:mt-32">
            {learnMore.slice(3).map((item) => (
              <LearnMoreItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
