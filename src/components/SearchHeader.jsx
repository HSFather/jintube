import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill, BsYoutube } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function SearchHeader({ isDarkMode, toggleDarkMode }) {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <>
      <header className="flex w-full p-4 text-2xl border-b border-zinc-600 mb-4">
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-brand text-4xl" />
          <h1 className="text-3xl font-bold ml-2">Jintube</h1>
        </Link>
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
          <input
            className="w-7/12 p-2 rounded-full border-4"
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="pl-4">
            <BsSearch className="text-2xl" />
          </button>
          <button
            className="pl-10"
            type="button"
            onClick={toggleDarkMode}
            isdarkmode="isDarkMode"
          >
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </form>
      </header>
    </>
  );
}
