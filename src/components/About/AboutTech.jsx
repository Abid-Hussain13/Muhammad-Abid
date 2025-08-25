import React from "react";
import techKnowledge from "../../data/techKnowledge";
import LanguageBox from "./LanguageBox";

function AboutTech() {
  const perBoxDelay = 250;

  // Split last two separately
  const normalItems = techKnowledge.filter((item) => item.id <= 100);
  const lastTwoItems = techKnowledge.filter((item) => item.id > 100);

  return (
    <div className="my-20">
      {/* Normal items in grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
        {normalItems.map((languageContent, idx) => (
          <LanguageBox
            key={languageContent.id}
            id={languageContent.id}
            imgUrl={languageContent.ImageUrl}
            language={languageContent.language}
            learning={languageContent.learning}
            boxColor={languageContent.color}
            delay={idx * perBoxDelay}
          />
        ))}
      </div>

      {/* Last two items in their own row */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
        {lastTwoItems.map((languageContent, idx) => (
          <LanguageBox
            key={languageContent.id}
            id={languageContent.id}
            imgUrl={languageContent.ImageUrl}
            language={languageContent.language}
            learning={languageContent.learning}
            boxColor={languageContent.color}
            delay={(normalItems.length + idx) * perBoxDelay}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutTech;
