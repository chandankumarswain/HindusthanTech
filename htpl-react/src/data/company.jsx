/* ------------------------------------------------------------------
   Shared HTPL company content — single source of truth so the same
   copy is reused on the landing page and the dedicated About page.
   Text is verbatim from the HTPL company profile.
------------------------------------------------------------------ */

export const CREDENTIALS = ['MSME Recognized', 'DGQA Approved', 'ISO 9001:2015']

export const VISION_TEXT =
  'To become a nationally trusted leader in fire tender and emergency vehicle manufacturing by delivering innovative, reliable, and high-quality solutions that enhance fire safety and emergency response capabilities.'

export const MISSION_TEXT =
  'To manufacture reliable and high-performance fire-fighting and rescue vehicles through innovative engineering, quality manufacturing, timely delivery, and dedicated customer support, while contributing to public safety and emergency preparedness.'

/* Core values — text verbatim from the HTPL company profile (PDF) */
export const VALUES = [
  {
    name: 'Safety',
    desc: 'We prioritize safety in every aspect of our design, manufacturing, testing, and service processes to support reliable emergency response operations.',
    icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />,
  },
  {
    name: 'Quality',
    desc: 'We are committed to delivering high-quality fire fighting vehicles and equipment that meet stringent performance and durability standards.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12l2.5 2.5 5-5" />
      </>
    ),
  },
  {
    name: 'Integrity',
    desc: 'We conduct our business with honesty, transparency, accountability, and ethical practices in all dealings with customers, employees, suppliers, and government organizations.',
    icon: (
      <>
        <path d="M12 3v18M7 21h10M5 7h14" />
        <path d="M8 7l-3 5.5h6zM16 7l-3 5.5h6z" />
      </>
    ),
  },
  {
    name: 'Innovation',
    desc: 'We continuously improve our technology, engineering, and manufacturing capabilities to provide advanced and efficient fire fighting solutions.',
    icon: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-3.8 10.6c.5.4.8 1 .8 1.6v.8h6v-.8c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z" />
      </>
    ),
  },
  {
    name: 'Customer Commitment',
    desc: 'We strive to understand and fulfill customer requirements through dependable products, timely delivery, and responsive after-sales support.',
    icon: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3L3 21l1.2-3.6A8.4 8.4 0 1 1 21 11.5z" />,
  },
  {
    name: 'Reliability',
    desc: 'We build products that emergency services can depend upon during critical operations where performance and durability are essential.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
]
