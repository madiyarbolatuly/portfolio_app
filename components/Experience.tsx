import { workExperience } from "@/data";
import React from "react";
import { Button, MovingBorder } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div id="experience" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 mt-12 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col justify-center gap-2 p-3 py-6 lg:flex-row lg:items-center md:p-5 lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 lg:w-32 md:w-20"
              />
              <div className="lg:ms-5">
                <h1 className="text-xl font-bold text-start md:text-2xl">
                  {" "}
                  {card.title}
                </h1>
                <p className="mt-3 font-semibold text-start text-white-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
