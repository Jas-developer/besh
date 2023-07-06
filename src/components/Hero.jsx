import React, { useState } from "react";

export const Hero = ({ header }) => {
  const [convertedText, setConvertedText] = useState("");

  const handleConvert = (event) => {
    event.preventDefault();
    const text = event.target.elements.textarea.value;
    const converted = text.replace(/ /g, "🤸🏻‍♂️");
    setConvertedText(converted);
  };

  const handleCopy = () => {
    const el = document.createElement("textarea");
    el.value = convertedText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <>
      <div className="hero-wrapper">
        <div className="text-center mt-4">
          <span className="font-bold text-2xl rounded-lg text-yellow-500">
            {header}
          </span>
        </div>
        <div className="grid lg:grid-cols-2 p-4">
          <div className="grid-item  ">
            <form className="text-center" onSubmit={handleConvert}>
              <textarea
                name="textarea"
                id=""
                cols="30"
                rows="10"
                className="border-2 shadow-2xl text-center p-6 rounded-lg"
                placeholder="Paste the text that you want to beshify"
              ></textarea>
              <br />
              <button
                type="submit"
                className="p-2 rounded-lg bg-orange-500 w-60 mt-4"
              >
                Convert
              </button>
            </form>
          </div>
          <div className="grid-item p-6 md:mx-48">
            <div className=" border shadow rounded-lg mt-2">
              {convertedText ? (
                <>
                  <p className="p-6">{convertedText}</p>
                </>
              ) : (
                <p className="p-6">Beshify text will appear here..</p>
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              className="p-2 rounded-lg bg-blue-500 text-white mt-4 w-56"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
          <span className="text-gray-400 mt-4 ml-3 text-center">
            Develop by: <b>Jason E</b>.
          </span>
        </div>
      </div>
    </>
  );
};
