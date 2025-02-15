"use client";

import React from "react";
import Image from "next/image";
import MenusComponent from "@/app/components/Menus";
import { Button } from "@/components/ui/button";

function MenuPage() {
  return (
    <>
      {/* Menu Section */}
      <section className="bg-[#131212] text-white pt-5">
        <div className="flex flex-col items-center">
          <h3 className="text-[#FF9F0D] text-xl pb-5">Choose & Pick</h3>
          <h1 className="text-5xl font-bold pb-8 text-center">
            <span className="text-[#ffab2e]">Fr</span>om Our Menu
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-5">
        <div className="relative w-full h-64">
  <Image
    className="rounded-lg object-cover"
    src={"/image/salad.png"}
    alt="Fresh salad with vegetables"
    fill
    style={{ objectFit: "cover" }}
  />
</div>

          <div className="flex flex-wrap justify-center gap-5">
            <MenusComponent />
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="bg-[#131212] text-white py-10">
        <div className="flex flex-col items-center">
          <h3 className="text-[#FF9F0D] text-xl pb-5">Chefs</h3>
          <h1 className="text-5xl font-bold pb-10 text-center">
            <span className="text-[#ffab2e]">Me</span>et Our Chef
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          <div className="w-full">
            <Image
              className="rounded-lg object-cover"
              src={"/image/chefone.png"}
              alt="Chef 1"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full">
            <Image
              className="rounded-lg object-cover"
              src={"/image/cheftwo.png"}
              alt="Chef 2"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full">
            <Image
              className="rounded-lg object-cover"
              src={"/image/chefthree.png"}
              alt="Chef 3"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full">
            <Image
              className="rounded-lg object-cover"
              src={"/image/cheffour.png"}
              alt="Chef 4"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
<div className="py-10 flex justify-center">
          <Button className="py-4 px-8 border border-[#FF9F0D] rounded-full text-lg">
            See More
          </Button>
        </div>

      {/* Client Testimonials Section */}
      <section className="bg-[#131212] h-full text-white flex justify-center py-10 px-5">
        <Image
          className="rounded-lg max-w-full"
          src={"/image/whatclientsays.png"}
          alt="What clients say"
          width={1400}
          height={1400}
        />
      </section>
    </>
  );
}

export default MenuPage;

