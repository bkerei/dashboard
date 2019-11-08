/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Bobbi Kerei (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Bobbi Kerei

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";

import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";


const DashboardRoutes = [
  {
    path: "/Dashboard",
    name: "Dashboard",

    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Resume",
    
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Content",
    
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Guru Card",
    
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Quiz",
   
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },

];

export default DashboardRoutes;
