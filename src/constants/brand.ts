export const BRAND = {
  name: "VinTechs",
  slogan: "Innovating Today, Empowering Tomorrow",
  description: "Modern South African IT solutions specializing in intelligent systems, software development, and business optimization.",
  colors: {
    primary: "#0B1120", // Deep Midnight Blue
    accent: "#22D3EE", // Electric Cyan
    secondary: "#334155", // Industrial Slate
    highlight: "#F59E0B", // Savannah Gold
  },
  contact: {
    email: "solutions@vintechs.co.za",
    phone: "+27 11 432 9876",
    address: "Sandton, Johannesburg, South Africa",
    socials: {
      linkedin: "https://linkedin.com/company/vintech",
      twitter: "https://twitter.com/vintech_sa",
      github: "https://github.com/vintech",
    }
  },
  services: [
    {
      id: "web-dev",
      title: "Web Application Development",
      description: "Custom web solutions for operational efficiency and scalable business growth.",
      icon: "Globe",
    },
    {
      id: "system-dev",
      title: "System & Software Development",
      description: "Automation and workflow optimization through intelligent software architecture.",
      icon: "Cpu",
    },
    {
      id: "api-integration",
      title: "API Integration",
      description: "Seamless connectivity between business tools for unified data flows.",
      icon: "Link",
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      description: "Android & iOS apps for remote access, productivity, and customer engagement.",
      icon: "Smartphone",
    },
    {
      id: "pwa",
      title: "Progressive Web Apps (PWA)",
      description: "Cross-platform access with offline capabilities and native-like performance.",
      icon: "Zap",
    },
    {
      id: "automation",
      title: "Business Process Automation",
      description: "Reducing manual workload and errors through smart automation tools.",
      icon: "Repeat",
    },
    {
      id: "dashboards",
      title: "Admin Dashboards & Monitoring",
      description: "Data-driven decision making via real-time monitoring and analytics.",
      icon: "LayoutDashboard",
    },
    {
      id: "cloud",
      title: "Cloud Deployment",
      description: "Scalable cloud infrastructure for remote access and operational stability.",
      icon: "Cloud",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Services",
      description: "Protecting sensitive company data and ensuring business continuity.",
      icon: "ShieldAlert",
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      description: "Continuous operations with proactive technical support and updates.",
      icon: "Wrench",
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      description: "Monitoring performance metrics to drive business strategy and efficiency.",
      icon: "BarChart3",
    },
  ],
  team: [
    {
      name: "Tshepo Mashaba",
      role: "Lead Software Developer",
      skills: ["Full-Stack", "Architecture"],
      avatar: "/team/dev1.jpg"
    },
    {
      name: "Lerato Modise",
      role: "API & Integration Specialist",
      skills: ["REST", "GraphQL", "Microservices"],
      avatar: "/team/api-spec.jpg"
    },
    {
      name: "Sipho Mokoena",
      role: "Automation & AI Expert",
      skills: ["Python", "Intelligent Systems", "Workflow"],
      avatar: "/team/auto-exp.jpg"
    },
    {
      name: "Zanele Khoza",
      role: "Cybersecurity Specialist",
      skills: ["Pen Testing", "Cloud Security"],
      avatar: "/team/cyber-spec.jpg"
    },
    {
      name: "Kabelo Dlamini",
      role: "Cloud & Deployment Lead",
      skills: ["AWS", "Azure", "CI/CD"],
      avatar: "/team/cloud-exp.jpg"
    }
  ],
  products: [
    {
      id: "vinmaps",
      name: "VinMaps",
      tagline: "Flagship 3D Mapping & Logistics Intelligence",
      description: "VinMaps is a flagship product developed by VinTechs, offering a comprehensive 3D mapping and logistics intelligence suite. It integrates real-time traffic analytics, atmospheric weather overlays, and autonomous incident discovery to provide a unified command center for urban navigation and fleet optimization.",
      features: [
        "Dynamic 3D Traffic Visualization",
        "Real-time Incident Detection & Alerts",
        "Integrated Weather Radar & Forecasts",
        "AI-Driven Route Optimization",
        "Enterprise Fleet API & SDK",
        "Cross-Platform Intelligence (Web/Mobile/Desktop)"
      ],
      image: "/products/vinmaps-hero.jpg"
    }
  ],
  partners: [
    { id: "scent-soul", name: "Scent & Soul", logo: "/logos/scent-soul.png" },
    { id: "scent-soul-2", name: "Scent & Soul", logo: "/logos/scent-soul.png" },
  ],
  vision: "To be the leading architect of digital transformation in Africa, empowering businesses with intelligent infrastructure.",
  mission: "Providing seamless, innovative, and data-driven technological solutions that redefine business efficiency.",
  values: ["Innovation", "Integrity", "Efficiency", "South African Excellence", "Growth"]
};
