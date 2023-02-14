import React from "react";

const Footer = () => {
  return (
    <div className="flex my-28 pt-24 border-t">
      <div className="mr-24">
        <div className="text-2xl mb-5 font-bold">Contact Information</div>
        <div className="flex">
          <div className="flex flex-col">
            <span style={{ color: "#878a8f", marginBottom: 10 }}>Email: </span>
            <span style={{ color: "#878a8f" }}>Phone: </span>
          </div>
          <div className="flex flex-col ml-3">
            <a href="mailto:ameer23009@gmail.com" style={{ marginBottom: 10 }}>
              ameer23009@gmail.com
            </a>
            <a href="tel:+917562844576">+917-562844576</a>
          </div>
        </div>
      </div>
      <div>
        <div className="text-2xl mb-5 font-bold">Follow me on</div>
        <div className="grid grid-cols-4 gap-4">
          {/* <a href="https://dribbble.com" target="_blank" rel="noreferrer">
            <img
              src="/assets/dribbble.svg"
              alt="dribbble"
              className="w-6 h-6"
            />
          </a> */}
          <a
            href="https://instagram.com/mohamedameer07?igshid=MDM4ZDc5MmU="
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-7 h-7"
            />
          </a>
          <a
            href="https://behance.net/mohamedameer5"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/behance.svg" alt="behance" className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ameer-9a614824a"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-7 h-7"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
