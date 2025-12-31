// import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    // home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
    sub_menus: [
      // { link: "/", title: "Home 1" },
      // { link: "/home-2", title: "Home 2" },
      // { link: "/home-3", title: "Home 3" }, 
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Clients",
    link: "/service",
    active: "",
    sub_menus: [
      // { link: "/service", title: "Service" },
      // { link: "/service-details/1", title: "Services Details" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Careers",
    link: "/careers",
    active: "",
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog Page",
    link: "/blog",
    active: "",
    sub_menus: [
      // { link: "/blog", title: "Blog" },
      // { link: "/blog-details", title: "Blog Details" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
    active: "",
  },


];
export default menu_data;
