import Sidebar from "../components/Common/Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-200 p-6">{children}</main>
    </div>
  );
};

export default AppLayout;
