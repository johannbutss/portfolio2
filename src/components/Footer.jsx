import React from "react";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
       <div>
  <p className="text-gray text-xs font-semibold">
    Autre moyen de me contacter:{" "}
    <a
      href="mailto:johannbutspro@gmail.com"
      className="text-blue cursor-pointer hover:underline"
    >
      Mail
    </a>{" "}
    ou{" "}
    <a
      href="https://instagram.com/johann_.psd"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue cursor-pointer hover:underline"
    >
      Instagram
    </a>
  </p>
</div>

        <div className="my-5 h-px w-full bg-neutral-700" aria-hidden />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-gray text-xs font-semibold">
            &copy; {new Date().getFullYear()} Johann Buts. All rights
            reserved.
          </p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-gray text-xs font-semibold">
                <span className="mx-2 cursor-pointer hover:underline">
                  {link}
                </span>
                {i !== footerLinks.length - 1 && "|"}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
