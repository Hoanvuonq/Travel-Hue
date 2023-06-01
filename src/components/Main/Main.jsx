import React, {useEffect}from 'react'
import './Main.css'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import { faStar as SolidStar, faStarHalfAlt as HalfStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import img10 from '../../Assets/img(10).jpg'
import img11 from '../../Assets/img(11).jpg'
import img12 from '../../Assets/img(12).jpg'
import img13 from '../../Assets/img(13).jpg'
import img14 from '../../Assets/img(14).jpg'
import img15 from '../../Assets/img(15).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Thien Mu Pagoda',
    location: 'FG3V+6X Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,5',
    description: 'Thien Mu Pagoda, also known as Linh Mu Pagoda, is an ancient pagoda located on Ha Khe hill, on the left bank of the Perfume River, about 5 km west of Hue city center. Thien Mu Pagoda was officially established in the year of Tan Suu, during the reign of Lord Tien Nguyen Hoang - the first Nguyen Lord in Dang Trong.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Vong Canh Hill',
    location: 'P102 Huyen Tran Princess, Thuy Bieu, Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,6',
    description: 'Vong Canh Hill is a 43m high hill in the southwest of Hue city, the foothills adjacent to the Perfume River. It is located in the middle of the mausoleum of the Nguyen kings and opposite the Hon Chen Palace, which was established in ancient times in the opposite bank.'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Khai Dinh Mausoleum',
    location: 'Thuy Bang commune, Huong Thuy district, Hue, Thua Thien Hue 530000',
    grade: 'Sights & Landmarks',
    fees: '4,4',
    description: 'The overall of the Mausoleum is a rectangular floating block reaching 127 steps high. Mountains, hills and streams of a large area around the Mausoleum are used as feng shui elements: criminal record, post-occipital, left dragon, right white tiger, clear path, water convergence, giving Khai Dinh mausoleum a natural landscape. majestic nature.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Tomb of Tu Duc',
    location: 'Dong Ba Bridge, Thuong Village, Hue City, Thua Thien Hue 530000',
    grade: 'Sights & Landmarks',
    fees: '4,4',
    description: 'Tu Duc Tomb is a complex of architectural works, including Tu Duc burial place, located in a narrow valley in Duong Xuan Thuong village, Cu Chanh canton, now Thuong Ba village, Thuy Xuan ward, city. Hue. When it was first built, Tu Duc named it Khiem Cung.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Truong Tien Bridge',
    location: 'Truong Tien Bridge, Phu Hoi, Hue City',
    grade: 'Sights & Landmarks',
    fees: '4,7',
    description: 'Truong Tien Bridge or Trang Tien Bridge is a 402.60 m long bridge, consisting of 6 comb-shaped steel beams with an aperture of 67 m each. The bridge is 6 m wide, designed in Gothic architecture, spanning the Perfume River.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Dong Ba Market',
    location: 'Phu Hoa, Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,2',
    description: 'Dong Ba Market in Hue is the most famous traditional market in the ancient capital, with high cultural and historical value. This market was originally named Quy Gia Thi to mark the return of the Nguyen king when he returned to Phu Xuan. The name Dong Ba Market in Hue began to appear in 1887 under the reign of King Dong Khanh.'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Quoc Hoc High School for the Gifted in Hue',
    location: '12 Le Loi, Vinh Ninh, Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,8',
    description: 'Quoc Hoc School is a famous school in Hue city, Vietnam. Established on October 23, 1896, Quoc Hoc is the third oldest high school in Vietnam after Collège Chasseloup-Laubat and Collège de My Tho.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Ngu Binh Mountain',
    location: 'An Cuu, City. Hue, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,2',
    description: 'Ngu Binh Mountain, briefly called Ngu Mountain, was formerly known as Hon Mo or Nui Bang; is a mountain 103 m high on the right bank of the Perfume River, 4 km south of Hue city center.'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Museum of Royal Antiquities',
    location: '03 Le Truc, Phu Hau, Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,5',
    description: 'Hue Museum of Royal Antiquities is a museum under the management of Hue Monuments Conservation Center. The main building of the museum is wooden, with 128 precious wooden pillars, on the columns there are carvings of four spirits: long - li - Quy - phuong and more than 1000 poems in Chinese characters.'
  },

  {
    id:10,
    imgSrc: img10,
    destTitle: 'Minh Mang Tomb',
    location: '9HQC+CW2, Unnamed Road, Huong Tra, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,4',
    description: 'Minh Mang Tomb, whose literal name is Hieu Lang, built by Emperor Thieu Tri of the Nguyen Dynasty, is located on Cam Ke mountain, An Bang hamlet, Huong Tho commune, Hue city, Thua Thien Hue province, near Bang junction. Lang is the confluence of two streams, Huu Trach and Ta Trach, forming the Perfume River, 12 km from the center of Hue city.'
  },

  {
    id:11,
    imgSrc: img11,
    destTitle: 'Huong River',
    location: '03 Le Truc, Phu Hau, Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,5',
    description: 'The Perfume River has two main sources, both originating from the Truong Son mountain range. The main stream of Ta Trach is about 67 km long, originating from the Truong Son Dong range, along the Bach Ma national park area, flowing to the northwest with 55 waterfalls. majestic, passing Nam Dong town and then confluence with Huu Trach stream at Tuan junction (about 3 km north of Minh Mang mausoleum area).'
  },

  {
    id:12,
    imgSrc: img12,
    destTitle: 'Huyen Khong Son Thuong',
    location: 'FF2V+FJX, Cham, Huong Ho, Huong Tra, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,7',
    description: 'Huyen Khong Son Thuong is a pagoda in Cham village, Huong Ho ward, Hue city, Thua Thien Hue province. The pagoda belongs to the Theravada Buddhist sect, was founded by the Venerable Gioi Duc in 1989. The pagoda is famous for the poem Stone by Huyen Khong Son Thuong Trieu Tam Anh and Sau Ma.'
  },
  {
    id:13,
    imgSrc: img13,
    destTitle: 'Tu Hieu Pagoda',
    location: 'Duong Xuan Thuong III village, Thuy Xuan, Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,7',
    description: 'Tu Hieu Pagoda or Tu Hieu Communal House is the name of a temple in Duong Xuan Thuong III village, Thuy Xuan ward, Hue city, Thua Thien Hue province. The pagoda is one of the great ancient temples and is a cultural and historical scenic spot of the ancient capital of Hue.'
  },
  {
    id:14,
    imgSrc: img14,
    destTitle: 'Hon Chen Palace',
    location: 'CHC7+Q5H, Hai Cat Village, Huong Tra, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,3',
    description: 'Hon Chen or Hue Nam Palace is located on Ngoc Tran mountain, in Ngoc Ho village, Huong Ho ward, Hue city, Thua Thien Hue province. Previously, Ngoc Tran mountain was called Huong Uyen Son, later renamed Ngoc Tran, folk still call it Hon Chen because it is related to an anecdote about King Minh Mang dropping the jade cup.'
  },
  {
    id:15,
    imgSrc: img15,
    destTitle: 'Nguyen Dinh Chieu pedestrian street',
    location: 'Nguyen Dinh Chieu, Phu Hoi, Hue City, Thua Thien Hue',
    grade: 'Sights & Landmarks',
    fees: '4,4',
    description: 'Phố đi bộ Nguyễn Đình Chiểu còn là nơi được chọn để tổ chức nhiều hoạt động nhằm phục vụ cho tất cả khách tham quan, đặc biệt trong đó có hoạt động du thuyền trên sông Hương. Đây đươc xem là một hoạt động du lịch nổi bật nhằm giúp du khách có thể thử giản, giải trí cũng như hòa mình với vẽ đẹp mộng mơ của mãnh đất Cố Đô.'
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  const renderRatingStars = (rating) => {
    const roundedRating = Math.ceil(parseFloat(rating));
    const stars = [];
  
    const starStyle = {
      color: '#faaf00',
      fontSize: '1rem',
    };
  
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(<FontAwesomeIcon key={i} icon={SolidStar} className="star filled" style={starStyle} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={HalfStar} className="star" style={starStyle} />);
      }
    }
  
    return stars;
  };

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
        Top attractions in Hue city
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img  src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}</span>
                    </div>
                    <div className="price">
                      <h5>{fees}
                        {/* <span>
                          <img className='img-star' src={Star} alt="Star" />
                        </span> */}
                        <span>
                        {renderRatingStars(fees)}
                        </span>
                      </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Main