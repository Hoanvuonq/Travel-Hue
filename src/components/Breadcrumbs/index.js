import React from 'react';
import PropType from 'prop-types';
import { Breadcrumbs, Button } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const MyBreadcrumbs = ({ className, breadcrumbs = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={className}>
      <Breadcrumbs>
        {breadcrumbs.map((item, i) => (
          <Button
            key={i}
            onClick={() => navigate(item.path)}
            variant="text"
            color="blue-gray"
            className={classNames('px-2 py-1 flex items-center gap-2',location.pathname !== item.path && 'opacity-50')}
          >
            {item.icon}
            <p>{item.title}</p>
          </Button>
        ))}
      </Breadcrumbs>
    </div>
  );
};

MyBreadcrumbs.propTypes = {
  className: PropType.string,
  breadcrumbs: PropType.arrayOf(
    PropType.shape({
      title: PropType.string,
      icon: PropType.node,
      path: PropType.string,
    })
  ),
};

export default MyBreadcrumbs;
