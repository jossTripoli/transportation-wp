export const transportationMock = {
  primaryCta: {
    label: "Get a Quote",
    href: "#",
  },
  secondaryCta: {
    label: "Book Online",
    href: "#",
  },
  categories: [
    {
      label: "Experience",
      headingTop: "THE ABC",
      headingAccent: "Transportation",
      headingBottom: "EXPERIENCE",
      icon: "/images/experience/experience-icon.svg",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sem vel arcu volutpat luctus. Donec porta, magna sed facilisis gravida, neque risus dapibus justo, non viverra massa mi sed urna.",
      subcategories: [
        {
          label: "Comprehensive Driver Clearances",
          heading: "Comprehensive Driver Clearances",
          body:
            "Curabitur non lorem at nisl posuere efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet sapien sed magna porttitor gravida.",
          icon: "/images/experience/comprehensive-driver-clearances-icon.svg",
          image: "/images/experience/comprehensive-driver-clearances.jpg",
          imageAlt: "Black sedan parked on a road at sunset",
        },
        {
          label: "Real-Time GPS Tracking & Monitoring",
          heading: "Real-Time GPS Tracking & Monitoring",
          body:
            "Aliquam erat volutpat. Phasellus fermentum, neque at consequat dapibus, justo nibh cursus velit, a viverra lectus ipsum id lorem. Mauris tincidunt magna vel tellus finibus, id tempus turpis gravida.",
          icon: "/images/experience/real-time-gps-tracking-monitoring-icon.svg",
          image: "/images/experience/real-time-gps-tracking-monitoring.jpg",
          imageAlt: "Driver using a GPS tracking screen inside a vehicle",
        },
        {
          label: "In-House Maintenance & Safety Options",
          heading: "In-House Maintenance & Safety Options",
          body:
            "Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam dignissim elit ac urna pretium, sed commodo risus laoreet.",
          icon: "/images/experience/in-house-maintenance-safety-options-icon.svg",
          image: "/images/experience/in-house-maintenance-safety-options.jpg",
          imageAlt: "Mechanic working under the hood of a vehicle",
        },
        {
          label: "Wheelchair-Accessible Vehicles",
          heading: "Wheelchair-Accessible Vehicles",
          body:
            "Praesent posuere tellus non nibh interdum, sed gravida justo bibendum. Etiam vitae ligula nec massa tincidunt malesuada. Integer ac augue sed orci blandit luctus vitae at nisi.",
          icon: "/images/experience/wheelchair-accessible-vehicles-icon.svg",
          image: "/images/experience/wheelchair-accessible-vehicles.jpg",
          imageAlt: "Accessible parking sign with wheelchair symbol",
        },
      ],
    },
    {
      label: "We Care",
      headingTop: "THE ABC",
      headingAccent: "Transportation",
      headingBottom: "WE CARE",
      icon: "/images/we-care/we-care-icon.svg",
      intro:
        "Vivamus laoreet arcu at sem vulputate, nec dignissim nulla bibendum. Fusce quis lectus non mi condimentum faucibus. Aenean in ex vitae libero tempor ultricies at vitae neque.",
      subcategories: [
        {
          label: "Unmatched Standards",
          heading: "Unmatched Standards",
          body:
            "Morbi tristique magna id diam volutpat, quis elementum tortor volutpat. Duis consequat sem a lectus tincidunt, vitae pretium ex interdum. Integer facilisis sapien et sem ullamcorper volutpat.",
          icon: "/images/we-care/unmatched-standards-icon.svg",
          image: "/images/we-care/unmatched-standards.jpg",
          imageAlt: "Transportation service standards and care",
        },
        {
          label: "Easy Booking Experience",
          heading: "Easy Booking Experience",
          body:
            "Nunc vel lacus non odio rhoncus vulputate. Cras finibus, eros sed posuere laoreet, turpis elit placerat justo, non dictum ipsum velit at est. Proin at risus ac nibh vehicula varius.",
          icon: "/images/we-care/easy-booking-experience-icon.svg",
          image: "/images/we-care/easy-booking-experience.jpg",
          imageAlt: "Older adult using a laptop to book transportation",
        },
        {
          label: "24/7 Customer Support",
          heading: "24/7 Customer Support",
          body:
            "Donec imperdiet tortor sed mi faucibus, vitae feugiat purus luctus. Sed gravida sem et magna iaculis, vel sodales arcu dignissim. Nulla facilisi. Integer blandit orci id mi luctus.",
          icon: "/images/we-care/24-7-customer-support-icon.svg",
          image: "/images/we-care/24-7-customer-support.jpg",
          imageAlt: "Customer support representative wearing a headset",
        },
      ],
    },
    {
      label: "Safety",
      headingTop: "THE ABC",
      headingAccent: "Transportation",
      headingBottom: "SAFETY",
      icon: "/images/safety/safety-icon.svg",
      intro:
        "Maecenas at nisl a sapien dictum dignissim. Quisque sit amet est in dolor fermentum hendrerit. Sed non risus vel magna vulputate tincidunt in non lorem.",
      subcategories: [
        {
          label: "Certified Drivers",
          heading: "Certified Drivers",
          body:
            "Etiam non sapien tempor, imperdiet ipsum vitae, pellentesque lectus. Sed ut erat nec urna tincidunt convallis. Aenean sit amet massa eget velit consequat pulvinar.",
          icon: "/images/safety/certified-drivers-icon.svg",
          image: "/images/safety/certified-drivers.jpg",
          imageAlt: "Certified transportation driver",
        },
        {
          label: "Accountability",
          heading: "Accountability",
          body:
            "Ut maximus leo sit amet nisi bibendum, ac faucibus mi iaculis. Integer eget tellus ut augue ultricies commodo. Pellentesque ac neque eu lectus pharetra elementum.",
          icon: "/images/safety/accountability-icon.svg",
          image: "/images/safety/accountability.jpg",
          imageAlt: "Transportation accountability and service monitoring",
        },
      ],
    },
  ],
} as const;