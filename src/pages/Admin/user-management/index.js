import React from 'react';
import { routes } from '../../../utils/routes';
import AdminLayout from '../../../layouts/AdminLayout';
import { Typography } from '@material-tailwind/react';
import MyBreadcrumbs from '../../../components/Breadcrumbs';
import MyTable from '../../../components/Table';
import { TABLE_HEAD, TABLE_ROWS } from '../../../components/Table/rawData';

const UserManagementPage = () => {
  return (
    <div className="mt-5">
      <Typography variant="h3">User Management</Typography>
      <MyBreadcrumbs
        className="mt-2"
        breadcrumbs={[
          { title: 'Dashboard', path: routes.ADMIN_DASHBOARD },
          { title: 'User Management', path: routes.ADMIN_USER_MANAGEMENT },
        ]}
      />
      <MyTable
        heads={TABLE_HEAD}
        rows={TABLE_ROWS}
        className="mt-5"
        renderRow={(item, index) => <div>1</div>}
      />
    </div>
  );
};

UserManagementPage.options = {
  layout: AdminLayout,
  route: routes.ADMIN_USER_MANAGEMENT,
};

export default UserManagementPage;
