import React from "react";
import Image from "next/image";
import pakora from "../../public/image/pakora.png";
import cheese from "../../public/image/cheese.png";
import burger from "../../public/image/burger.png";
import icecream from "../../public/image/icecream.png";
import bread from "../../public/image/bread.png";
import sandwich from "../../public/image/sandwhich.png";

function Menus() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
      <div className="flex items-center bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          className="rounded-full"
          src={pakora}
          alt="Lettuce Leaf"
          width={60}
          height={60}
        />
        <div className="pl-4">
          <h2 className="text-lg font-bold">Lettuce Leaf</h2>
          <p className="text-sm text-gray-400">
            Lacus nisi, et ac dapibus velit in consequat.
          </p>
          <span className="text-[#FF9F0D] font-semibold">12.5$</span>
        </div>
      </div>

      <div className="flex items-center bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          className="rounded-full"
          src={cheese}
          alt="Glow Cheese"
          width={60}
          height={60}
        />
        <div className="pl-4">
          <h2 className="text-lg font-bold">Glow Cheese</h2>
          <p className="text-sm text-gray-400">
            Lacus nisi, et ac dapibus velit in consequat.
          </p>
          <span className="text-[#FF9F0D] font-semibold">12.5$</span>
        </div>
      </div>

      <div className="flex items-center bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          className="rounded-full"
          src={burger}
          alt="Fresh Breakfast"
          width={60}
          height={60}
        />
        <div className="pl-4">
          <h2 className="text-lg font-bold">Fresh Breakfast</h2>
          <p className="text-sm text-gray-400">
            Lacus nisi, et ac dapibus velit in consequat.
          </p>
          <span className="text-[#FF9F0D] font-semibold">12.5$</span>
        </div>
      </div>

      <div className="flex items-center bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          className="rounded-full"
          src={icecream}
          alt="Italian Pizza"
          width={60}
          height={60}
        />
        <div className="pl-4">
          <h2 className="text-lg font-bold">Italian Pizza</h2>
          <p className="text-sm text-gray-400">
            Lacus nisi, et ac dapibus velit in consequat.
          </p>
          <span className="text-[#FF9F0D] font-semibold">12.5$</span>
        </div>
      </div>

      <div className="flex items-center bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          className="rounded-full"
          src={bread}
          alt="Mild Butter"
          width={60}
          height={60}
        />
        <div className="pl-4">
          <h2 className="text-lg font-bold">Mild Butter</h2>
          <p className="text-sm text-gray-400">
            Lacus nisi, et ac dapibus velit in consequat.
          </p>
          <span className="text-[#FF9F0D] font-semibold">12.5$</span>
        </div>
      </div>

      <div className="flex items-center bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          className="rounded-full"
          src={sandwich}
          alt="Slice Beef"
          width={60}
          height={60}
        />
        <div className="pl-4">
          <h2 className="text-lg font-bold">Slice Beef</h2>
          <p className="text-sm text-gray-400">
            Lacus nisi, et ac dapibus velit in consequat.
          </p>
          <span className="text-[#FF9F0D] font-semibold">12.5$</span>
        </div>
      </div>
    </section>
  );
}

export default Menus;
