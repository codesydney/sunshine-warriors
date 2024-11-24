import React from 'react'

const Service = () => {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="mx-auto mb-12 max-w-[750px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-[#FFB80E]">
                Our Services
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-[#586876] px-4">
                Our survivor-led services are designed to support and empower
                children and young people impacted by domestic violence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8">
          <ServiceCard
            title="Safe and Supportive Spaces"
            details="We provide environments where children and young people feel safe, valued, and supported. Our programs are designed to be culturally informed and trauma-aware, ensuring participants can express themselves without fear of judgment or harm."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            }
          />
          <ServiceCard
            title="Healing Through Connection"
            details="Healing is at the heart of everything we do. We facilitate activities that promote emotional and psychological recovery for children and young people. Our processes ensure engagement, consultation and collaboration with children and young people survivors of DV."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            }
          />
          <ServiceCard
            title="Holistic Services and Support"
            details="Recognizing the diverse challenges faced by victim-survivors, we offer a wide range of support services that includes mentoring and care co-ordination to help participants navigate their experiences and build coping strategies while providing practical assistance."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            }
          />
          <ServiceCard
            title="Empowerment and Advocacy"
            details="We believe in amplifying the voices of young victim-survivors. Our initiatives help them share their stories, find and amplify their voices in their lived experiences while shaping better policies and practices. We focus on skill development and confidence-building."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="m12 2 4 4" />
                <path d="m12 2-4 4" />
                <path d="m12 22-4-4" />
                <path d="m12 22 4-4" />
              </svg>
            }
          />
          <ServiceCard
            title="Community Education"
            details="We collaborate with communities, schools, and policymakers to build capacity of services and agencies to ensure 'DV safe' services. We continuously seek innovative solutions to improve understanding and outcomes for children impacted by DV."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                <path d="M12 13v8" />
                <path d="M12 3v3" />
              </svg>
            }
          />
          <ServiceCard
            title="Long-Term Commitment"
            details="Our work doesn't end with immediate intervention. We stay connected, offering ongoing programs and opportunities for growth. At Sunshine Warriors, we believe that with the right support, every child can find the strength to overcome adversity."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22c6-3 9-9 9-15H3c0 6 3 12 9 15" />
                <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon, title, details }: any) => {
  return (
    <div className="bg-white rounded-[20px] p-10 shadow-md hover:shadow-lg">
      <div className="mb-8 inline-flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#FFB80E]">
        {icon}
      </div>
      <h4 className="mb-4 text-2xl font-semibold text-dark">{title}</h4>
      <p className="text-[#586876]">{details}</p>
    </div>
  )
}

export default Service
