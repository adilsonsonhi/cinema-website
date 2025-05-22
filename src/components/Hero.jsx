import { React, useEffect, useRef, useState } from "react";
import { Images, images, Movies } from "../assets/assets";
import SmallBadge from "./ui/SmallBadge";
import PrimaryBtn from "./buttons/PrimaryBtn";
import SecondaryBtn from "./buttons/SecondaryBtn";
import LinkBtn from "./buttons/LinkBtn";

const Hero = () => {
  const [current, setCurrent] = useState(0); // começa no centro
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const total = Movies.length;
  const firstIndex = (current - 0 + total) % total;
  const firstMovie = Movies[firstIndex];

  const advance = () => {
    setCurrent((prev) => (prev + 1) % total);
    setProgress(0);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setProgress(0);
  };

  const goTo = (index) => {
    setCurrent(index);
    setProgress(0);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          advance();
          return 0;
        }
        return prev + 0.666; // 100 / (15s * 10)
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [current]);

  return (
    <div className="max-w-[1440px] my-0 mx-auto px-20 py-6">
      {/* HEADER */}
      <div className="text-center">HEADER</div>

      {/* HERO DETAILS */}
      <div className="flex flex-col justify-center gap-16 w-[100%] max-w-[487px] min-h-[787px] z-[10]">
        <img
          className="w-[487px]"
          src={firstMovie.titleCover}
          alt={firstMovie.titleCover}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-[24px] uppercase tracking-[-0.4px] ad-line-1">
              {firstMovie.title}
            </h1>

            <div className="flex flex-col gap-2">
              <p className="neo-regular">Classificação IMDb</p>
              <div className="flex gap-3">
                <div className="flex gap-1 items-center">
                  {firstMovie.stars.map((star, index) => (
                    <img
                      key={index}
                      className="w-6"
                      src={star}
                      alt={`Star ${index + 1}`}
                    />
                  ))}
                </div>
                <p>
                  {firstMovie.imdbRating}
                  <span className="text-[#85847C]">&nbsp;/&nbsp;10</span>
                </p>
                <p>{firstMovie.duration}</p>
                <p>{firstMovie.ageRating}</p>
              </div>

              <div className="flex gap-3">
                {firstMovie.categories.map((category, index) => (
                  <SmallBadge key={index}>{category}</SmallBadge>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <p className="text-[#A8A6A0] ad-line-3">
                {firstMovie.description}
              </p>
              <LinkBtn text={"Ver mais"} />
            </div>

            <div className="flex gap-2">
              <PrimaryBtn text={"COMPRAR BILHETES"} />
              <SecondaryBtn imageSource={Images.playBtn} text={"VER TRAILER"} />
            </div>
          </div>
        </div>
      </div>

      {/* HERO BACKGROUND */}
      <div className="hero-bg">
        <div className="relative min-h-72 overflow-hidden z-index-1">
          <img
            src={images[current]}
            alt={`Imagem ${current + 1}`}
            className="w-full h-full object-cover transition-all"
          />
        </div>

        {/* MINIATURAS */}
        <div className="flex justify-center mt-[-100px] ml-52 gap-4">
          {[-1, 0, 1].map((offset) => {
            const index = (current + offset + images.length) % images.length;
            const isActive = offset === 0;

            return (
              <div key={index} className="flex flex-col items-center">
                <button
                  onClick={() => goTo(index)}
                  className={`group relative w-[200px] h-[124px] rounded-md overflow-hidden border-2 transition-all ${
                    isActive
                      ? "border-blue-500 scale-110"
                      : "border-transparent opacity-70"
                  }`}
                  aria-label={`Selecionar imagem ${index + 1}`}
                >
                  <img
                    src={images[index]}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover group-hover:brightness-110"
                  />
                </button>

                {isActive && (
                  <div className="w-full mt-3 h-1 bg-[#3D3D3D] rounded overflow-hidden">
                    <div
                      className="h-full bg-[#AE0B2B] transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
