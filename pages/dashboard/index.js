import DashboardLayout from "../../components/Layouts/DashBoardLayout";

const Dashboard = () => {
  return <h1>dasboard</h1>;
};

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout title="Add Training School">{page}</DashboardLayout>;
};

export default Dashboard;
