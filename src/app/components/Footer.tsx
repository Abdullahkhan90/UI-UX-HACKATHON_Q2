import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      {/* Top Section */}
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        {/* Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-[40%] xl:w-auto">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">Abdullah</h1>
          <p className="text-gray-500 text-center lg:text-left w-full lg:max-w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Lists Section */}
        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-end w-full lg:w-[60%] xl:w-auto lg:mr-10">
          {/* About */}
          <div className="about">
            <ul className="flex flex-col gap-1 text-center lg:text-left">
              <li className="font-bold text-lg">About</li>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          {/* Community */}
          <div className="community">
            <ul className="flex flex-col gap-1 text-center lg:text-left">
              <li className="font-bold text-lg">Community</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          {/* Socials */}
          <div className="socials">
            <ul className="flex flex-col gap-1 text-center lg:text-left">
              <li className="font-bold text-lg">Socials</li>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="line border-t w-full border-[#e7eef6]"></div>

      {/* Bottom Section */}
      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        {/* Copyright */}
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        {/* Privacy & Terms */}
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
