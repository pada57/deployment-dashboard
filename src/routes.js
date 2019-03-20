import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';

import DashboardPage from "views/Dashboard/Dashboard.jsx";
import ImportPage from "views/Import/Import.jsx";

const appRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: DashboardIcon,
      component: DashboardPage,
      layout: "/App"
    },
    {
      path: "/import",
      name: "Import",
      icon: LayersIcon,
      component: ImportPage,
      layout: "/App"
    }
];

export default appRoutes;