import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className="flex">
      <div className="flex-1 justify-center flex flex-col p-[150px] tex-left items-left">
        <div className="pl-[40px]">
          <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5x">
            Sunshine Warriors
          </h1>
          <p className="mb-8 max-w-[480px] text-base text-body-color text-[#586876]">
            Children are at greater risk of family, domestic, and sexual
            violence. <br />
            According to the 2021-22 PSS, about 1 in 8 (13% or 2.6 million)
            people, aged 18 years and over, witnessed violence towards a parent
            by a partner before the age of 15. A higher proportion of people had
            witnessed partner violdence against their mothers (12%, or 2.2
            million) than their fathers (4.3%, or 837,000) (ABS 2023a).
          </p>
          <div className="flex flex-wrap items-center">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="relative z-10 inline-block">
          <img
            src="/assets/child.jpeg"
            alt="hero"
            className="w-[350px] h-[350px] md:w-[550px] md:h-[600px] object-cover lg:ml-auto mt-[30px] md:mt-0"
            style={{
              borderTopLeftRadius: '180px',
              borderTopRightRadius: '30px',
              borderBottomLeftRadius: '30px',
              borderBottomRightRadius: '30px',
            }}
          />

          <span className="absolute -bottom-8 -left-8 z-[-1]">
            <svg
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
              <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
