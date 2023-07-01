import { Card, List, Typography, ListItem, Tooltip, Button } from '@material-tailwind/react';
import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectStatusSidebar } from '../../../../redux/slice/app';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../../../utils/routes';
import { AiTwotoneHome } from 'react-icons/ai';


const AdminSidebar = () => {

  const openSidebar = useSelector(selectStatusSidebar)

  const navigate = useNavigate()
  const location = useLocation()



  const listSidebar = [
    { title: 'Dashboard', icon: <AiTwotoneHome size={24} />, path: routes.ADMIN_DASHBOARD },
    { title: 'User management', icon: <BsFillPeopleFill size={24} />, path: routes.ADMIN_USER_MANAGEMENT }
  ]

  return (
    <div className=''>
      <Card className={classNames("transition-all duration-200 fixed top-[80px] h-[calc(100vh-80px)] w-full p-4 rounded-none",
        openSidebar ? 'w-[300px]' : 'w-[100px]'
      )}>
        <div className="p-4 mb-2">
          <Typography variant="h5" color="blue-gray" className="text-center">
            Hue Travel
          </Typography>
        </div>
        <List className='min-w-full' >
          {listSidebar.map((item, index) => {
            const active = item.path === location.pathname;
            return <ListItem key={`${index}-${item.title}`} onClick={() => navigate(item.path)} className={classNames('transition-all duration-200 w-full hover:bg-black/5', active && 'bg-blue-500/5 hover:bg-blue-600/5')}>
              <Tooltip placement="right" offset={30} content={item.title} animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }} >
                <div className={classNames('transition-all duration-200 flex justify-center flex-1', openSidebar && '!justify-start', active && 'text-blue-500/95')}>
                  {item.icon}
                  {openSidebar && <p className='ml-2'>{item.title}</p>}
                </div>
              </Tooltip>
            </ListItem>
          })}

        </List>
      </Card>
    </div>
  )
};

export default AdminSidebar;