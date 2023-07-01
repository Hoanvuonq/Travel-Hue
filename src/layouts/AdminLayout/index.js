import React from 'react';
import AdminHeader from './components/header';
import AdminSidebar from './components/sidebar';
import { selectStatusSidebar } from '../../redux/slice/app';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const AdminLayout = ({ children }) => {

  const openSidebar = useSelector(selectStatusSidebar)

  return (
    <div className="pt-20 ">
      <AdminHeader />
      <div className='flex'>
        <AdminSidebar />
        <div className={classNames('h-[100px] flex-1 transition-all duration-200 px-5', openSidebar ? 'ml-[300px]' : 'ml-[100px]')}> {children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
