interface FooterMenuItems {
  id: number;
  url: string;
  name: string;
}

export const footerData: {
  id: number;
  title: string;
  menuItems: FooterMenuItems[];
}[] = [
  {
    id: 1,
    title: "Get to Know Us",
    menuItems: [
      { id: 1, name: "About Us", url: "/about-us" },
      {
        id: 2,
        name: "Rules & Reservation Policies",
        url: "/rules-reservation-policies",
      },
      { id: 3, name: "Accessibility", url: "/accessibility" },
      { id: 4, name: "Media Center", url: "/media-center" },
      { id: 5, name: "Site Map", url: "/site-map" },
    ],
  },
  {
    id: 2,
    title: "Plan with Us",
    menuItems: [
      { id: 1, name: "Find Trip Inspiration", url: "/find-trip-inspiration" },
      { id: 2, name: "Build a Trip", url: "/build-a-trip" },
      { id: 3, name: "Buy a Pass", url: "/buy-a-pass" },
      { id: 4, name: "Enter a Lottery", url: "/enter-a-lottery" },
    ],
  },
  {
    id: 3,
    title: "Let Us Help You",
    menuItems: [
      { id: 1, name: "Your Account", url: "/your-account" },
      { id: 2, name: "Your Reservations", url: "/your-reservations" },
      { id: 3, name: "Contact Us", url: "/contact-us" },
      { id: 4, name: "Help Center", url: "/help-center" },
      { id: 5, name: "Submit Feedback", url: "/submit-feedback" },
    ],
  },
];
