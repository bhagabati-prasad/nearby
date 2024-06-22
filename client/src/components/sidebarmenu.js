import * as Fa from 'react-icons/fa';
import * as Io from 'react-icons/io';
import * as Ai from 'react-icons/ai';
import * as Bi from 'react-icons/bi';
import * as Ri from 'react-icons/ri';
import * as Gi from 'react-icons/gi';

const iconClosed = <Io.IoIosArrowDown />;
const iconOpened = <Io.IoIosArrowUp />;

export const sidemenu = [
  {
    title: 'For rent',
    path: '/category/rent',
    icon: <Ri.RiHome7Line />,
  },
  {
    title: 'Nearby Stores',
    path: '/category/store',
    icon: <Bi.BiStore />,
    // iconClosed,
    // iconOpened,
    // subnav: [
    //   {
    //     title: 'All Stores',
    //     path: '/category/stores',
    //   },
    //   {
    //     title: 'Grocery stores',
    //     path: '/category/stores/sub/category/grocery',
    //     icon: <Ri.RiStore2Line />,
    //   },
    //   {
    //     title: 'Medicine stores',
    //     path: '/category/stores/sub/category/medicine',
    //     icon: <Ai.AiOutlineMedicineBox />,
    //   },
    //   {
    //     title: 'Book stores',
    //     path: '/category/stores/sub/category/book',
    //     icon: <Ri.RiBook2Line />,
    //   },
    //   {
    //     title: 'Electronics',
    //     path: '/category/stores/sub/category/electronics',
    //     icon: <Gi.GiElectric />,
    //   },
    // ],
  },
  {
    title: 'Hospitals',
    path: '/category/hospital',
    icon: <Fa.FaRegHospital />,
  },
  {
    title: 'Foods & Drinks',
    path: '/category/food',
    icon: <Bi.BiDrink />,
    // iconClosed,
    // iconOpened,
    // subnav: [
    //   {
    //     title: 'All Items',
    //     path: '/category/foods',
    //   },
    //   {
    //     title: 'Coffee Shop',
    //     path: '/category/foods',
    //     icon: <Bi.BiCoffee />,
    //   },
    //   {
    //     title: 'Ice cream parlour',
    //     path: '/category/foods',
    //     icon: <Fa.FaIceCream />,
    //   },
    //   {
    //     title: 'Hotels & Restaurants',
    //     path: '/category/foods',
    //     icon: <Fa.FaIceCream />,
    //   },
    // ],
  },
  {
    title: 'gas station',
    path: '/category/gas-station',
    icon: <Gi.GiGasPump />,
  },
  {
    title: 'garage',
    path: '/category/garage',
    icon: <Gi.GiMechanicGarage />,
  },
  {
    title: 'Shopping mall',
    path: '/category/mall',
    icon: <Ai.AiOutlineShoppingCart />,
  },
  {
    title: 'Beauty & haircut',
    path: '/category/beauty',
    icon: <Ai.AiOutlineScissor />,
  },
  {
    title: 'College & Institute',
    path: '/category/institute',
    icon: <Fa.FaSchool />,
  },
  {
    title: 'Entertainment',
    path: '/category/entertainment',
    icon: <Bi.BiMovie />,
  },
];
