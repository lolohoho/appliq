"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { templates } from "@/data";
import { PinContainer } from "@/components/Pin";

const Templates = () => {
  return (
    <div className="py-20">
      <h1 className=" font-bold text-4xl md:text-5xl text-center">
        Une selection de{" "}

        {/* <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc"> */}
        {/* <span className="text-transparent bg-gradient-to-r from-custom-violet to-custom-white bg-clip-text inline-block"> */}
        {/* <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text inline-block"> */}
        <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text inline-block">
          {/* <span className="text-transparent bg-gradient-to-r from-violet-500 to-primary bg-clip-text inline-bloc"> */}

          templates

        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {templates.filter(tpl => tpl != null).map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.target}
              href="ddd"
              goto={item.goto}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={"/my" + item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={"/my" + icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {/* <a href='#' title= {"Visite le site " + item.title} target="_blank"> */}
                    <a href='/kkk' title={"Visite le site " + item.title} onClick={(e) => {
                      e.stopPropagation(); // on bloque le clic du container
                      // PAS de e.preventDefault() ici !
                      // Comme ça, le lien fonctionne normalement
                    }}>
                      Voir le Site Live</a>
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
