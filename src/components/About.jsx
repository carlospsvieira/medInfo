import React from "react";

function About() {
  return (
    <div id="about" className="flex items-center h-screen">
      <div className="w-[600px] mx-[10%]">
        <p className="text-justify text-slate-50 text-xl">
          " I've always been in the habit of learning the active ingredients
          in the most common meds and other hygiene products that my family and
          I own at home. This web app brings the most relevant info about these
          products, so you learn about them too. It's not supposed to replace
          any advice from a certified physician, please look for one before
          making use of any medication and follow their advice. "
        </p>
        <p className="text-zinc-700 mt-3 text-end text-lg"> - Carlos Vieira</p>
      </div>
    </div>
  );
}

export default About;
