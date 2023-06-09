

import './Suggestions.scss'
import Item1 from '../../../../Assets/img(1).jpg'

const Suggestions = () => {
    return (
        <div className="suggest">
            <div className="header-content">
                <img className='img-suggest-item' src={Item1} alt="item 1" />
                <div className="title-content"><span className='title-img'>Chùa Thiên Mụ</span></div>
            </div>
            <div className="content-suggest">
                <p>Chùa Thiên Mụ hay còn gọi là chùa Linh Mụ, là một ngôi chùa cổ nằm trên đồi Hà Khê, tả ngạn sông Hương, cách trung tâm thành phố Huế khoảng 5 km về phía Tây. Chùa Thiên Mụ chính thức được khởi lập vào năm Tân Sửu, thời chúa Tiên Nguyễn Hoàng - vị chúa Nguyễn đầu tiên ở Đàng Trong.</p>
            </div>
        </div>
    );
}

export default Suggestions