import remark from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const concertsDirectory = path.join(process.cwd(), "/content/concerts");

export function getSortedConcertsData() {
  const fileNames = fs.readdirSync(concertsDirectory);
  const allConcertsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const imgSrc = `/concerts/${id}.jpeg`;

    const fullPath = path.join(concertsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      imgSrc,
      fullPath,
    };
  });

  return allConcertsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllConcertIds() {
  const fileNames = fs.readdirSync(concertsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getConcertData(id) {
  const fullPath = path.join(concertsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
