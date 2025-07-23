import AppLayout from "../layouts/AppLayout";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default Dashboard;