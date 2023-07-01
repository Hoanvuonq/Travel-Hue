import * as React from 'react';
import { routes } from '../../../utils/routes';
import AdminLayout from '../../../layouts/AdminLayout';

const Dashboard = (props) => {
  const {} = props;

  return <div>Dashboard</div>;
};

Dashboard.options = {
  layout: AdminLayout,
  route: routes.ADMIN_DASHBOARD,
};

export default Dashboard;
