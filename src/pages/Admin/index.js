import React from 'react';
import { routes } from '../../utils/routes';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate && navigate(routes.ADMIN_DASHBOARD);
  }, []);

  return <div></div>;
};

export default AdminPage;

AdminPage.options = {
  route: routes.ADMIN,
};
