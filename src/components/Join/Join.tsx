import React from 'react'

const Join = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Top Left SVG */}
      <div className="absolute left-0 top-0 z-0">
        <svg
          width="191"
          height="343"
          viewBox="0 0 191 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="391.279"
            height="198.661"
            rx="37"
            transform="matrix(0.749735 -0.661738 0.79959 0.600547 -261.608 175.925)"
            fill="#FFCC00"
          />
          <rect
            width="391.279"
            height="198.661"
            rx="29"
            transform="matrix(0.749735 -0.661738 0.79959 0.600547 -276.346 222.925)"
            fill="#FFCC00"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Bottom Right SVG */}
      <div className="absolute bottom-0 right-0 z-0">
        <svg
          width="263"
          height="157"
          viewBox="0 0 263 157"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="402.698"
            height="264.89"
            rx="22"
            transform="matrix(-0.77547 -0.631385 0.77547 -0.631385 312.439 448.005)"
            fill="#FFCC00"
            stroke="black"
            strokeWidth="4"
          />
          <rect
            width="383.203"
            height="160.725"
            rx="31"
            transform="matrix(-0.77547 -0.631385 0.77547 -0.631385 376.196 343.427)"
            fill="#FFCC00"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-[40px]/[48px] lg:text-5xl">
            JOIN THE SUNSHINE WARRIORS MOVEMENT
          </h2>
          <p className="mb-8 text-base text-[#586876] sm:text-lg">
            There Every child and young person deserves a future filled with
            hope, safety, and opportunity. At Sunshine Warriors, we're on a
            mission to help young victim-survivors of domestic violence heal,
            thrive, and reclaim their joy. But we can't do it alone.
          </p>
          <a
            href="/#"
            className="inline-flex rounded-lg bg-[#FFB80E] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-opacity-90 sm:px-10"
          >
            Join us today!
          </a>
        </div>
      </div>
    </section>
  )
}

export default Join
