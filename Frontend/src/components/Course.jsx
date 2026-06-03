import React from "react";
import Cards from "./Cards";
import list from "../data/list.json";
import { Link } from "react-router";

const Course = () => {
  return (
    <div className="container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here!:)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          laudantium, expedita impedit adipisci fugiat aliquid ex veritatis
          dolore illum dolor veniam beatae esse voluptate nemo nisi officia
          velit eius deserunt id non, rerum deleniti commodi ducimus. Pariatur
          aliquid, magni eum dignissimos veniam iusto! Consectetur ipsam soluta
          harum alias eius dolor!
        </p>
        <Link to="/">
          <button className="cursor-pointer bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
