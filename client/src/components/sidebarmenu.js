import * as Fa from "react-icons/fa";
import * as Io from "react-icons/io";
import * as Ai from "react-icons/ai";
import * as Bi from "react-icons/bi";
import * as Ri from "react-icons/ri";
import * as Gi from "react-icons/gi";

const iconClosed = <Io.IoIosArrowDown />;
const iconOpened = <Io.IoIosArrowUp />;

export const sidemenu = [
  {
    title: "For rent",
    path: "/rent",
    icon: <Ri.RiHome7Line />,
  },
  {
    title: "Nearby Stores",
    path: "/stores",
    icon: <Bi.BiStore />,
    iconClosed,
    iconOpened,
    subnav: [
      {
        title: "Grocery stores",
        path: "/stores/grocery",
        icon: <Ri.RiStore2Line />,
      },
      {
        title: "Medicine stores",
        path: "/stores/medicine",
        icon: <Ai.AiOutlineMedicineBox />,
      },
      {
        title: "Book stores",
        path: "/stores/book",
        icon: <Ri.RiBook2Line />,
      },
      {
        title: "Electronics",
        path: "/stores/electronics",
        icon: <Gi.GiElectric />,
      },
    ],
  },
  {
    title: "Hospitals",
    path: "/hospitals",
    icon: <Fa.FaRegHospital />,
  },
  {
    title: "Foods & Drinks",
    path: "/foods-and-drinks",
    icon: <Bi.BiDrink />,
    iconClosed,
    iconOpened,
    subnav: [
      {
        title: "Coffee Shop",
        path: "/foods-and-drinks/coffee",
        icon: <Bi.BiCoffee />,
      },
      {
        title: "Ice cream parlour",
        path: "/foods-and-drinks/icecream",
        icon: <Fa.FaIceCream />,
      },
      {
        title: "Hotels & Restaurants",
        path: "/foods-and-drinks/hotels",
        icon: <Fa.FaIceCream />,
      },
    ],
  },
  {
    title: "gas station",
    path: "/gas-station",
    icon: <Gi.GiGasPump />,
  },
  {
    title: "garage",
    path: "/garage",
    icon: <Gi.GiMechanicGarage />,
  },
  {
    title: "Shopping mall",
    path: "/shopping-malls",
    icon: <Ai.AiOutlineShoppingCart />,
  },
  {
    title: "Beauty & haircut",
    path: "/beauty",
    icon: <Ai.AiOutlineScissor />,
  },
  {
    title: "College & Institute",
    path: "/college",
    icon: <Fa.FaSchool />,
  },
  {
    title: "Religious places",
    path: "/religious-places",
    icon: <Bi.BiChurch />,
  },
  {
    title: "Entertainment",
    path: "/entertainment",
    icon: <Bi.BiMovie />,
  },
];
