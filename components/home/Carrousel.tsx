import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const Carrousel = () => {


  return (
    <Carousel className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gradient-to-r my-8 from-blue-500 to-indigo-600 p-4">
        <div className="text-center py-8 text-white">
            <h1 className="text-2xl sm:text-5xl font-extrabold mb-4">
            🌟 Tingkatkan Diri Melalui <span className="underline decoration-yellow-400">Literasi Digital</span>
            </h1>
            <p className="text-md sm:text-xl font-light max-w-2xl mx-auto">
                Jelajahi keajaiban ilmu pengetahuan dan jembatani pemahaman menuju masa depan yang lebih cerah. 🚀
            </p>
        </div>
        <div className="relative">
            <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                    key={index}
                    className="relative w-full max-w-4xl h-full flex items-center justify-center"
                >
                    <div className="relative w-full h-96 rounded-lg overflow-hidden bg-blue-800 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                            Poster Literasi {index + 1}
                        </span>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute z-10 top-1/2 -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
            </CarouselPrevious>
            <CarouselNext className="absolute z-10 top-1/2 -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                <ChevronRightIcon className="w-5 h-5 text-gray-800" />
            </CarouselNext>
        </div>
    </Carousel>

  );
};

export default Carrousel;