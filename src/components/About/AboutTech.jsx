import React from "react";
import techKnowledge from "../../data/techKnowledge";
import LanguageBox from "./LanguageBox";

function AboutTech() {

  const rows = [];
  let tempRow = [];

  techKnowledge.forEach(item => {
    tempRow.push(item);

    if (item.id > 100 && tempRow.length === 2) {
      rows.push(tempRow);
      tempRow = [];
    } else if (item.id <= 100 && tempRow.length === 3) {
      rows.push(tempRow);
      tempRow = [];
    }
  });

  if (tempRow.length > 0) {
    rows.push(tempRow);
  }

  const rowStarts = [];
  let acc = 0;
  for (let i = 0; i < rows.length; i++) {
    rowStarts.push(acc);
    acc += rows[i].length;
  }

  const perBoxDelay = 250;

  return (
    <div className="my-20 space-y-5">
      {rows.map((row, idx) => {
        const start = rowStarts[idx];
        return (<div
          key={idx}
          className={`grid gap-5 ${row.some(item => item.id > 100) ? "grid-cols-3 md:grid-cols-2" : "grid-cols-4 md:grid-cols-3"}`}
        >
          {row.map((languageContent, boxIdx) => (
            <LanguageBox
              key={languageContent.id}
              id={languageContent.id}
              imgUrl={languageContent.ImageUrl}
              language={languageContent.language}
              learning={languageContent.learning}
              boxColor={languageContent.color}
              delay={(start + boxIdx) * perBoxDelay}
            />
          ))}
        </div>
        )
      })}
    </div>
  );
}

export default AboutTech;
