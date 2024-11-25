import React from 'react'

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Logo and Description Section */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="mb-12 w-full">
              <a href="/#" className="mb-6 inline-block">
                <img src="/assets/logo.png" alt="logo" className="w-24 h-24" />
              </a>
              <p className="mb-7 text-base text-[#586876]">
                Sunshine Warrior will bring happiness and hope to young hearts,
                reminding them that after every storm, the sun will shine again.
              </p>
              <p className="flex items-center text-sm font-medium text-dark">
                <span className="mr-3 text-[#FFB80E]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3125 15.7813L15.6875 14.2188C15.4375 14.0938 15.1563 14.0625 14.875 14.125C14.5938 14.1875 14.3438 14.3438 14.1875 14.5938L12.9375 16.4688C10.375 15.1875 8.3125 13.125 7.03125 10.5625L8.90625 9.3125C9.15625 9.15625 9.3125 8.90625 9.375 8.625C9.4375 8.34375 9.40625 8.0625 9.28125 7.8125L7.71875 5.1875C7.59375 4.90625 7.375 4.71875 7.09375 4.625C6.8125 4.53125 6.53125 4.53125 6.25 4.65625L3.78125 5.71875C3.21875 5.96875 2.84375 6.53125 2.84375 7.15625C2.84375 12.9375 7.5625 17.6563 13.3438 17.6563C13.9688 17.6563 14.5313 17.2813 14.7813 16.7188L15.8438 14.25C15.9688 13.9688 15.9688 13.6875 15.875 13.4063C15.7813 13.125 15.5938 12.9063 15.3125 12.7813L18.3125 15.7813Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>

          {/* Spacer div for larger screens */}
          <div className="hidden lg:block lg:w-1/12"></div>

          {/* Explore Links */}
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-12 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">Explore</h4>
              <ul className="space-y-3">
                <NavLink link="/about" label="About" />
                <NavLink link="/services" label="Our Services" />
                <NavLink link="/team" label="Know Our Team" />
                <NavLink link="/contact" label="Contact" />
              </ul>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-12 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">
                Follow Us On
              </h4>
              <div className="flex space-x-4">
                <SocialLink href="/#" platform="facebook" />
                <SocialLink href="/#" platform="twitter" />
                <SocialLink href="/#" platform="youtube" />
                <SocialLink href="/#" platform="linkedin" />
              </div>
              <p className="mt-8 text-base text-[#586876]">
                © 2024 Sunshine Warriors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const NavLink = ({ link, label }: any) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base text-[#586876] hover:text-[#FFB80E] transition-colors"
      >
        {label}
      </a>
    </li>
  )
}

const SocialLink = ({ href, platform }: { href: string; platform: string }) => {
  const iconClasses = 'h-6 w-6 transition-colors'

  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E7E7] text-[#586876] hover:border-[#FFB80E] hover:bg-[#FFB80E] hover:text-white transition-colors"
    >
      {platform === 'facebook' && (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      )}
      {platform === 'twitter' && (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      )}
      {platform === 'youtube' && (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )}
      {platform === 'linkedin' && (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      )}
    </a>
  )
}

export default Footer
