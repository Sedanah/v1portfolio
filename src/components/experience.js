/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QtN6hhEWvaL
 */
export const Experience = () => {
    return (
      <div className="text-white p-8">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="relative border-l border-gray-300">
          <div className="mb-8 ml-4">
            <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-4 border-black flex items-center justify-center">
              <RedoIcon className="text-white text-xs" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Reprise</h3>
            <time className="block mb-2 text-sm font-normal leading-none">[Incoming] Fall 2023</time>
            <p className="text-sm">Incoming Full Stack Software Engineer with React and Django tech stack</p>
          </div>
          <div className="mb-8 ml-4">
            <div className="absolute -left-3 w-6 h-6 bg-blue-400 rounded-full border-4 border-black flex items-center justify-center">
              <CreditCardIcon className="text-white text-xs" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Capital One: Cloud Maturity</h3>
            <time className="block mb-2 text-sm font-normal leading-none">Software Engineer Intern</time>
            <time className="block mb-2 text-sm font-normal leading-none">Jun 2023 - Aug 2023</time>
            <p className="text-sm mb-1">
              Developed MVP platform for assessing compliance, performance, and efficiency of AWS resources across org
            </p>
            <p className="text-sm mb-1">
              Integrated 6 internal data sources through APIs, cleaned and normalized, then loaded into postgreSQL
            </p>
            <p className="text-sm mb-1">
              Built dashboard using Streamlit to search for accounts, display their score and affected resources and offer
              remediation instructions; Interfaced with internal library for interacting with AWS resources (boto3
              wrapper)
            </p>
            <p className="text-sm">
              Volunteered for 12 hours to teach middle school kids coding in small groups providing individual assistance
            </p>
          </div>
          <div className="mb-8 ml-4">
            <div className="absolute -left-3 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center">
              <UmbrellaIcon className="text-white text-xs" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Liberty Mutual Insurance: Office of Data Science</h3>
            <time className="block mb-2 text-sm font-normal leading-none">Machine Learning Engineer Coop</time>
            <time className="block mb-2 text-sm font-normal leading-none">Dates not shown</time>
            <p className="text-sm">Details not shown</p>
          </div>
        </div>
      </div>
    )
  }
  
  function CreditCardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    )
  }
  
  
  function RedoIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 7v6h-6" />
        <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
      </svg>
    )
  }
  
  
  function UmbrellaIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
        <path d="M12 12v8a2 2 0 0 0 4 0" />
        <path d="M12 2v1" />
      </svg>
    )
  }
  