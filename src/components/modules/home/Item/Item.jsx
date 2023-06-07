import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';
import Item1 from '../../../../Assets/item-tour.png';
import Item2 from '../../../../Assets/item-destination.png';
import Item3 from '../../../../Assets/item-historical.png';

const items = [
  {
    srcItem: Item1,
    titleItem: 'Tour',
  },
  {
    srcItem: Item2,
    titleItem: 'Tour Trong Ngày',
  },
  {
    srcItem: Item3,
    titleItem: 'Di tích lịch sử',
  },
];

const Item = () => {
  return (
    <div className="wrapper-item">
      <div className="wrapper-item-content">
        <div className="list-item">
          {items.map((item, index) => (
            <div key={index} className="item">
                <Link className='link-item' to={"#"}>
                    <img src={item.srcItem} alt={`Item ${index + 1}`} />
                    <span>{item.titleItem}</span>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
