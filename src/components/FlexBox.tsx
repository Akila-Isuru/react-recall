import React from "react";

function FlexBox() {
  return (
    <div>
      <nav className="bg-slate-900 text-white">
        <ul
          className="uppercase flex flex-row gap-10 justify-center p-3
           flex-wrap
        
        "
        >
          <li className="hover:bg-red-600 p-3 rounded-lg">
            <a href=""></a>Home
          </li>
          <li className="hover:bg-red-600 p-3 rounded-lg">
            <a href="">Start here</a>
          </li>
          <li className="hover:bg-red-600 p-3 rounded-lg">
            <a href="">Projects</a>
          </li>
          <li className="hover:bg-red-600 p-3 rounded-lg">
            <a href=""></a>About
          </li>
        </ul>
      </nav>
      <div className="grid grid-cols-2">
        <div>
          <img
            src="/public/car.jpg"
            alt="car"
            width="1600"
            height={800}
            className="max-w-8xl mx-auto p-2 h-130"
          />
        </div>
        <div>
          <h1 className="text-center text-red-500 text-xl font-bold max-w-3xl mx-auto">
            Lets learn Tailwind !
          </h1>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            quidem commodi accusantium libero aliquid alias tempora, repellat
            necessitatibus non neque eligendi atque doloribus incidunt
            consequuntur maxime aperiam dolorum, voluptas quo. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Id perspiciatis magnam,
            temporibus ab voluptatibus et beatae praesentium quod eius accusamus
            laudantium sequi! Earum consequatur molestias in, aliquid natus fuga
            recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus quidem commodi accusantium libero aliquid alias tempora,
            repellat necessitatibus non neque eligendi atque doloribus incidunt
            consequuntur maxime aperiam dolorum, voluptas quo. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Id perspiciatis magnam,
            temporibus ab voluptatibus et beatae praesentium quod eius accusamus
            laudantium sequi! Earum consequatur molestias in, aliquid natus fuga
            recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus quidem commodi accusantium libero aliquid alias tempora,
            repellat necessitatibus non neque eligendi atque doloribus incidunt
            consequuntur maxime aperiam dolorum, voluptas quo. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Id perspiciatis magnam,
            temporibus ab voluptatibus et beatae praesentium quod eius accusamus
            laudantium sequi! Earum consequatur molestias in, aliquid natus fuga
            recusandae!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlexBox;
