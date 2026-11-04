const contactEmail = "digitalsuresh65@gmail.com";

export const siteConfig = {
  name: "Suresh Man Joshi",
  brandName: "Digital Suresh",
  role: "AI Marketing Expert",
  email: contactEmail,
  location: "[Your Location / Serving Businesses Worldwide]",
  // Setup placeholder: add the complete scheduling URL before launch.
  bookingUrl: "",
  siteUrl: import.meta.env.PUBLIC_SITE_URL?.trim() || "http://localhost:4321",
  formEndpoint:
    import.meta.env.PUBLIC_FORM_ENDPOINT?.trim() ||
    `https://formsubmit.co/ajax/${contactEmail}`,
  formAction: `https://formsubmit.co/${contactEmail}`,
  consultationCta: "Book a Free Consultation Call",
  consultationOffer:
    "During your free consultation, I’ll analyze your business and create a customized Digital Marketing Plan that you can start implementing immediately.",
  // Setup placeholder: add only real profile URLs, e.g. { label: "LinkedIn", url: "https://..." }.
  socialLinks: [] as Array<{ label: string; url: string }>,
  about: {
    short:
      "I help small and medium businesses use AI and digital marketing to reach more customers, generate better leads, and make smarter marketing decisions.",
    personalHistory: "[Add your personal history before launch]",
    qualifications: "[Add verified qualifications or certifications before launch]",
    yearsExperience: "[Add years of experience before launch]",
  },
  services: [
    {
      id: "ai-marketing-strategy",
      title: "AI-Powered Marketing Strategy",
      summary:
        "Create a clear marketing plan and choose AI tools that support your business goals.",
      challenges: [
        "Your marketing feels scattered",
        "You are unsure what to prioritize",
        "You do not know which AI tools are useful",
      ],
      includes: [
        "Current marketing review",
        "Audience and customer journey mapping",
        "Channel and content priorities",
        "Practical AI tool recommendations",
        "An implementation roadmap",
      ],
      benefits:
        "A focused plan with clear priorities, practical actions, and tools that fit your business.",
    },
    {
      id: "lead-generation",
      title: "Lead Generation and Sales Funnel Optimization",
      summary:
        "Turn more website visitors into qualified leads with a clearer path to enquiry.",
      challenges: [
        "Lead flow is inconsistent",
        "Website visitors are not taking the next step",
        "The follow-up process is unclear or manual",
      ],
      includes: [
        "Offer and conversion-path review",
        "Landing page and form recommendations",
        "Lead qualification steps",
        "Follow-up sequence planning",
        "Funnel measurement guidance",
      ],
      benefits:
        "A simpler customer journey that helps the right prospects understand your offer and take the next step.",
    },
    {
      id: "seo-content",
      title: "Search Engine Optimization and Content Strategy",
      summary:
        "Help the right customers find you through useful, search-focused content.",
      challenges: [
        "Your business is difficult to find online",
        "Content creation is inconsistent",
        "Your website does not answer customer questions clearly",
      ],
      includes: [
        "Search and content opportunity review",
        "Website structure recommendations",
        "Content themes and editorial planning",
        "On-page SEO guidance",
        "AI-assisted content workflow design",
      ],
      benefits:
        "A clear content plan that improves visibility and makes your expertise easier to understand.",
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      summary:
        "Build a consistent social presence without making content a full-time job.",
      challenges: [
        "Posting is irregular or time-consuming",
        "Content does not connect to business goals",
        "It is unclear which platforms deserve attention",
      ],
      includes: [
        "Channel and audience review",
        "Content pillars and formats",
        "Publishing workflow",
        "Community engagement guidance",
        "Performance review framework",
      ],
      benefits:
        "A manageable social strategy that builds awareness, trust, and customer interest.",
    },
    {
      id: "paid-advertising",
      title: "Paid Advertising Campaign Management",
      summary:
        "Run focused campaigns with a clear audience, offer, and next step.",
      challenges: [
        "Advertising spend lacks a clear strategy",
        "Campaign messaging is not attracting the right audience",
        "Tracking and decision-making need improvement",
      ],
      includes: [
        "Campaign objective and audience planning",
        "Offer, message, and creative direction",
        "Landing page recommendations",
        "Campaign setup and management options",
        "Measurement and optimization guidance",
      ],
      benefits:
        "A clearer approach to paid advertising, with decisions tied to useful business goals.",
    },
    {
      id: "email-automation",
      title: "Email Marketing and Marketing Automation",
      summary:
        "Follow up with leads and customers through useful, timely email.",
      challenges: [
        "Leads are not followed up consistently",
        "Customer communication depends on manual reminders",
        "Email messages lack structure or relevance",
      ],
      includes: [
        "List and lifecycle review",
        "Welcome and follow-up sequence planning",
        "Segmentation recommendations",
        "Automation workflow mapping",
        "Message and measurement guidance",
      ],
      benefits:
        "More consistent follow-up that keeps your business useful and relevant to prospects.",
    },
    {
      id: "ai-workflows",
      title: "AI Tools and Workflow Consulting",
      summary:
        "Use AI to make repeated marketing work faster, simpler, and easier to manage.",
      challenges: [
        "Too many tools make it hard to choose",
        "Repeated marketing tasks consume valuable time",
        "Your team needs a safe, clear AI workflow",
      ],
      includes: [
        "Workflow and task review",
        "Tool selection criteria",
        "Prompt and process templates",
        "Quality-control checkpoints",
        "Adoption and documentation guidance",
      ],
      benefits:
        "A practical workflow that saves time while keeping your marketing accurate, relevant, and human.",
    },
  ],
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;
