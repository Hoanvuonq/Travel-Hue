import React, {useState,useEffect}from 'react'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import { faStar as SolidStar, faStarHalfAlt as HalfStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '../../../../pages/Blog/Blog';

import img from '../../../../Assets/img(1).jpg'
import img2 from '../../../../Assets/img(2).jpg'
import img3 from '../../../../Assets/img(3).jpg'
import img4 from '../../../../Assets/img(4).jpg'
import img5 from '../../../../Assets/img(5).jpg'
import img6 from '../../../../Assets/img(6).jpg'
import img7 from '../../../../Assets/img(7).jpg'
import img8 from '../../../../Assets/img(8).jpg'
import img9 from '../../../../Assets/img(9).jpg'
import img10 from '../../../../Assets/img(10).jpg'
import img11 from '../../../../Assets/img(11).jpg'
import img12 from '../../../../Assets/img(12).jpg'
import img13 from '../../../../Assets/img(13).jpg'
import img14 from '../../../../Assets/img(14).jpg'
import img15 from '../../../../Assets/img(15).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

import './Main.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Chùa Thiên Mụ',
    location: 'FG3V+6X Hue City, Thua Thien Hue',
    grade: 'Di tích lịch sử',
    fees: '4,5',
    description: 'Chùa Thiên Mụ hay còn gọi là chùa Linh Mụ, là một ngôi chùa cổ nằm trên đồi Hà Khê, tả ngạn sông Hương, cách trung tâm thành phố Huế khoảng 5 km về phía Tây. Chùa Thiên Mụ chính thức được khởi lập vào năm Tân Sửu, thời chúa Tiên Nguyễn Hoàng - vị chúa Nguyễn đầu tiên ở Đàng Trong.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Đồi Vọng Cảnh',
    location: 'P102 Huyen Tran Princess, Thuy Bieu, Hue City, Thua Thien Hue',
    grade: 'Danh lam thắng cảnh',
    fees: '4,6',
    description: 'Đồi Vọng Cảnh là một ngọn đồi cao 43m ở phía Tây Nam thành phố Huế, chân đồi giáp với sông Hương. Nó nằm ở giữa khu lăng tẩm của các vua Nguyễn và đối diện với điện Hòn Chén, được thành lập từ xa xưa ở bờ đối diện.'

  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Lăng Khải Định',
    location: 'Thuy Bang commune, Huong Thuy district, Hue, Thua Thien Hue 530000',
    grade: 'Di tích lịch sử',
    fees: '4,4',
    description: 'Tổng thể của Lăng là một khối nổi hình chữ nhật, cao 127 bậc. Núi, đồi, suối của một vùng rộng lớn xung quanh Lăng được sử dụng làm yếu tố phong thủy: tiền án, hậu chẩm, tả rồng, hữu bạch hổ, minh đường, thủy tụ, tạo cho lăng Khải Định một cảnh quan thiên nhiên. thiên nhiên hùng vĩ.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Lăng Tự Đức',
    location: 'Dong Ba Bridge, Thuong Village, Hue City, Thua Thien Hue 530000',
    grade: 'Di tích lịch sử',
    fees: '4,4',
    description: 'Lăng Tự Đức là một quần thể công trình kiến trúc, trong đó có mộ vua Tự Đức, nằm trong một thung lũng hẹp thuộc làng Dương Xuân Thượng, tổng Cư Chánh, nay là thôn Thượng Ba, phường Thủy Xuân, TP. Huế. Khi mới xây dựng, Tự Đức đặt tên là Khiêm Cung.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Cầu Trường Tiền',
    location: 'Truong Tien Bridge, Phu Hoi, Hue City',
    grade: 'Danh lam thắng cảnh',
    fees: '4,7',
    description: 'Cầu Trường Tiền hay cầu Tràng Tiền dài 402,60 m, gồm 6 dầm thép hình răng lược, khẩu độ mỗi dầm 67 m. Cầu rộng 6 m, được thiết kế theo kiến trúc Gothic, bắc qua sông Hương.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Chợ Đông Ba',
    location: 'Phu Hoa, Hue City, Thua Thien Hue',
    grade: 'Danh lam thắng cảnh',
    fees: '4,2',
    description: 'Chợ Đông Ba Huế là khu chợ truyền thống nổi tiếng nhất Cố đô, có giá trị văn hóa lịch sử cao. Khu chợ này vốn có tên là Quý Gia Thị để đánh dấu sự trở lại của vua Nguyễn khi trở lại Phú Xuân. Cái tên Chợ Đông Ba ở Huế bắt đầu xuất hiện từ năm 1887 dưới triều vua Đồng Khánh.'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Trường THPT Chuyên Quốc Học Huế',
    location: '12 Le Loi, Vinh Ninh, Hue City, Thua Thien Hue',
    grade: 'Danh lam thắng cảnh',
    fees: '4,8',
    description: 'Trường Quốc Học là một ngôi trường nổi tiếng ở thành phố Huế, Việt Nam. Được thành lập vào ngày 23 tháng 10 năm 1896, Quốc Học là trường trung học lâu đời thứ ba ở Việt Nam sau Collège Chasseloup-Laubat và Collège de My Tho.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Núi Ngự Bình',
    location: 'An Cuu, City. Hue, Thua Thien Hue',
    grade: 'Danh lam thắng cảnh',
    fees: '4,2',
    description: 'Núi Ngự Bình gọi tắt là núi Ngự, xưa có tên là Hòn Mồ hay Núi Bằng; là ngọn núi cao 103 m ở hữu ngạn sông Hương, cách trung tâm thành phố Huế 4 km về phía nam.'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bảo tàng Cổ vật Hoàng gia',
    location: '03 Le Truc, Phu Hau, Hue City, Thua Thien Hue',
    grade: 'Di tích lịch sử',
    fees: '4,5',
    description: 'Bảo tàng Cổ vật Cung đình Huế là bảo tàng trực thuộc Trung tâm Bảo tồn Di tích Cố đô Huế quản lý. Tòa nhà chính của bảo tàng bằng gỗ, với 128 cây cột bằng gỗ quý, trên các cột có chạm hình tứ linh: long - li - quy - phượng và hơn 1000 bài thơ bằng chữ Hán.'
  },

  {
    id:10,
    imgSrc: img10,
    destTitle: 'Lăng Minh Mạng',
    location: '9HQC+CW2, Unnamed Road, Huong Tra, Thua Thien Hue',
    grade: 'Di tích lịch sử',
    fees: '4,4',
    description: 'Lăng Minh Mạng, tên chữ là Hiếu Lăng, do vua Thiệu Trị triều Nguyễn cho xây dựng, tọa lạc trên núi Cẩm Kê, thôn An Bằng, xã Hương Thọ, thành phố Huế, tỉnh Thừa Thiên Huế, gần ngã ba Bạng. Láng là nơi hợp lưu của hai dòng Hữu Trạch và Tả Trạch tạo thành sông Hương, cách trung tâm thành phố Huế 12 km.'
  },

  {
    id:11,
    imgSrc: img11,
    destTitle: 'Sông Hương',
    location: '03 Le Truc, Phu Hau, Hue City, Thua Thien Hue',
    grade: 'Danh lam thắng cảnh',
    fees: '4,5',
    description: 'Sông Hương có hai nguồn chính đều bắt nguồn từ dãy Trường Sơn. Dòng chính Tả Trạch dài khoảng 67 km, bắt nguồn từ dãy Trường Sơn Đông, dọc theo khu vực vườn quốc gia Bạch Mã, chảy về phía Tây Bắc với 55 thác nước. hùng vĩ, đi qua thị trấn Nam Đông rồi hợp lưu với dòng Hữu Trạch tại ngã ba Tuần (cách khu vực lăng Minh Mạng khoảng 3 km về phía Bắc).'
  },

  {
    id:12,
    imgSrc: img12,
    destTitle: 'Huyền Không Sơn Thượng',
    location: 'FF2V+FJX, Cham, Huong Ho, Huong Tra, Thua Thien Hue',
    grade: 'Danh lam thắng cảnh',
    fees: '4,7',
    description: 'Huyền Không Sơn Thượng là một ngôi chùa ở làng Chăm, phường Hương Hồ, thành phố Huế, tỉnh Thừa Thiên Huế. Chùa thuộc hệ phái Phật giáo Nam Tông, do Hòa thượng Giới Đức thành lập năm 1989. Chùa nổi tiếng với bài thơ Đá của Huyền Không Sơn Thượng Triệu Tâm Anh và Sáu Mã.'
  },
  {
    id:13,
    imgSrc: img13,
    destTitle: 'Chùa Từ Hiếu',
    location: 'Duong Xuan Thuong III village, Thuy Xuan, Hue City, Thua Thien Hue',
    grade: 'Danh lam thắng cảnh',
    fees: '4,7',
    description: 'Chùa Từ Hiếu hay Tổ đình Từ Hiếu là tên một ngôi chùa thuộc thôn Dương Xuân Thượng III, phường Thủy Xuân, thành phố Huế, tỉnh Thừa Thiên Huế. Chùa là một trong những ngôi chùa cổ kính lớn và là danh lam thắng cảnh lịch sử văn hóa của cố đô Huế.'
  },
  {
    id:14,
    imgSrc: img14,
    destTitle: 'Điện Hòn Chén',
    location: 'CHC7+Q5H, Hai Cat Village, Huong Tra, Thua Thien Hue',
    grade: 'Di tích lịch sử',
    fees: '4,3',
    description: 'Điện Hòn Chén hay điện Huệ Nam tọa lạc trên núi Ngọc Trản, thuộc thôn Ngọc Hồ, phường Hương Hồ, thành phố Huế, tỉnh Thừa Thiên Huế. Trước đây, núi Ngọc Trản có tên là Hương Uyển Sơn, sau đổi tên là Ngọc Trản, dân gian vẫn gọi là Hòn Chén vì có liên quan đến giai thoại vua Minh Mạng đánh rơi chén ngọc.'
  },
  {
    id:15,
    imgSrc: img15,
    destTitle: 'Phố đi bộ Nguyễn Đình Chiểu',
    location: 'Nguyen Dinh Chieu, Phu Hoi, Hue City, Thua Thien Hue',
    grade: 'Địa điểm du lịch',
    fees: '4,4',
    description: 'Phố đi bộ Nguyễn Đình Chiểu cũng là nơi được chọn để tổ chức nhiều hoạt động phục vụ mọi đối tượng du khách, đặc biệt trong đó có du thuyền trên sông Hương. Đây được xem là hoạt động du lịch nổi bật giúp du khách thư giãn, giải trí cũng như đắm mình trong vẻ đẹp mộng mơ của vùng đất cố đô.'
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
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right" className="title">
      Thắng cảnh hàng đầu tại Thành phố Huế
      </h3>
    </div>

    <div className="secContent grid">
      {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
        return (
          <div key={id} data-aos="fade-up" className="singleDestination">
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{location}</span>
              </span>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}</span>
                </div>
                <div className="price">
                  <h5>
                    {fees}
                    <span>{renderRatingStars(fees)}</span>
                  </h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>

              <button className="btn flex" onClick={() => handleItemClick(id)}>
                Chi tiết <HiOutlineClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>

    {selectedItem !== null && (
      <Blog
        imgSrc={Data[selectedItem - 1].imgSrc}
        description={Data[selectedItem - 1].description}
        closePopup={closePopup}
      />
    )}
  </section>
  )
}

export default Main