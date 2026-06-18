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
      { id: 1, name: "About Us", url: "/about" },
      {
        id: 2,
        name: "Rules & Reservation Policies",
        url: "/under-development",
      },
      { id: 3, name: "Accessibility", url: "/under-development" },
      { id: 4, name: "Media Center", url: "/under-development" },
      { id: 5, name: "Site Map", url: "/under-development" },
    ],
  },
  {
    id: 2,
    title: "Plan with Us",
    menuItems: [
      { id: 1, name: "Find Trip Inspiration", url: "/under-development" },
      { id: 2, name: "Build a Trip", url: "/under-development" },
      { id: 3, name: "Buy a Pass", url: "/under-development" },
      { id: 4, name: "Enter a Lottery", url: "/under-development" },
    ],
  },
  {
    id: 3,
    title: "Let Us Help You",
    menuItems: [
      { id: 1, name: "Your Account", url: "/under-development" },
      { id: 2, name: "Your Reservations", url: "/under-development" },
      { id: 3, name: "Contact Us", url: "/under-development" },
      { id: 4, name: "Help Center", url: "/under-development" },
      { id: 5, name: "Submit Feedback", url: "/under-development" },
    ],
  },
];
