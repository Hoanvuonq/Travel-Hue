import React from 'react';
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography
} from '@material-tailwind/react';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { TiThMenu } from 'react-icons/ti'
import { BiLogOut } from 'react-icons/bi'
import logo from '../../../../Assets/logo.jpg'
import avatar from '../../../../Assets/profile-img.jpg'
import { routes } from '../../../../utils/routes';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { setOpenSidebar } from '../../../../redux/slice/app';



export default function AdminHeader() {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const menuAccount = [
    { icon: <BsFillPersonFill size={18} />, title: 'My account', navigate: () => navigate('#') },
    { icon: <AiFillSetting size={18} />, title: 'Settings', navigate: () => navigate('#') },
    { separate: true },
    { icon: <BiLogOut size={18} />, title: 'Logout', navigate: () => navigate(routes.ADMIN_LOGIN) }
  ]

  const id = useId()
  return (
    <>
      <Navbar className='fixed top-0 left-0 flex justify-between rounded-none h-[80px] text-textColor'>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-5'>
            <Avatar size='sm' src={logo} className='border border-black cursor-pointer' />
            <p className='text-[20px]'>Admin</p>
          </div>
          <Button variant="text" color='blue-gray' onClick={() => dispatch(setOpenSidebar())}>
            <TiThMenu size={24} />
          </Button>
        </div>
        <div>
          <Menu placement='bottom-end'>
            <MenuHandler>
              <div className="flex items-center gap-4 cursor-pointer">
                <Avatar size='sm' src={avatar} />
                <div>
                  <Typography variant="h6">Candice Wu</Typography>
                  <Typography variant="small" color="gray" className="font-normal">Web Developer</Typography>
                </div>
              </div>
            </MenuHandler>
            <MenuList>
              {menuAccount.map(m =>
                m.separate ? <hr key={id} className="my-2 border-blue-gray-50" /> :
                  <MenuItem key={m.title} className={classNames('flex items-center gap-5 hover:bg-black/5')} onClick={m.navigate}>
                    {m.icon}
                    <div>{m.title}</div>
                  </MenuItem>
              )}
            </MenuList>
          </Menu>
        </div>
      </Navbar>
    </>
  );
}
