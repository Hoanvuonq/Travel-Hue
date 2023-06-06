import React from 'react';
import { routes } from '../../utils/routes';
import MainLayout from '../../layouts/MainLayout';
import './Blog.css'


const Blog = ({ imgSrc, description, closePopup }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <div className="popup-container">
            <img src={imgSrc} alt="Popup Image" />
            <p>{description}</p>
            <div className='btn-close' onClick={closePopup}>X</div>
          </div>
        </div>
      </div>
    );
  };
  
Blog.options = {
  layout: MainLayout,
  route: routes.BLOG
};

export default Blog;
