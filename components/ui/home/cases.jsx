"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const cases = [
  {
    title: "Case 1",
    image: "/images/landing/case-1.webp",
  },
  {
    title: "Case 2",
    image: "/images/landing/case-2.webp",
  },
  {
    title: "Case 3",
    image: "/images/landing/case-3.webp",
  },
  {
    title: "Case 4",
    image: "/images/landing/case-4.webp",
  },
  {
    title: "Case 5",
    image: "/images/landing/case-5.webp",
  },
  {
    title: "Case 6",
    image: "/images/landing/case-6.webp",
  },
];

const items = cases.concat(cases).concat(cases);

export default function Cases() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);
  }, [api, current]);

  return (
    <div className="relative z-10 bg-black pt-16 pb-24 border-t border-zinc-800">
      <div className="container">
        <div className="w-full pb-4 lg:pb-0 lg:px-16 text-lg md:text-2xl font-light text-center">
          Trusted by businesses worldwide
        </div>
      </div>
      <Carousel setApi={setApi} className="select-none hover:cursor-pointer">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
              <div className="relative aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image src={item.image} alt={item.title} fill />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
