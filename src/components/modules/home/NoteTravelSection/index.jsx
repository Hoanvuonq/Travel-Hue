import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import ContainSection from '../../../ContainSection';

import styles from './style.module.scss';

const notes = [
  {
    title: 'Huế có gì chơi?',
    note: 'Huế có rất nhiều địa điểm tham quan để bạn tìm hiểu về lịch sử văn hóa nơi đây. Hãy ghé thăm Đại Nội Huế, sông Hương, chợ Đông Ba, phố đi bộ Huế, Điện Hòn Chén để khám phá trọn vẹn Cố Đô Huế nhé.',
  },
  {
    title: 'Nên đi du lịch Huế vào mùa nào?',
    note: 'Huế có hai mùa rõ rệt là mùa mưa và mùa khô. Thời điểm thích hợp nhất để du lịch Huế là vào mùa khô (từ Tháng 5 đến Tháng 9) và mùa xuân (Tháng 1 đến cuối Tháng 2).',
  },
  {
    title: 'Vì sao Huế được gọi là cố đô?',
    note: 'Huế được gọi là cố đô vì nơi này trước đây là thủ phủ của các vị vua chúa Triều Nguyễn.',
  },
  {
    title: 'Huế có bao nhiêu lăng tẩm?',
    note: 'Nhà Nguyễn có đến 13 vị vua tại vị, nhưng chỉ có 7 lăng tẩm. Du lịch Huế không thể bỏ qua các khu lăng tẩm với nét kiến trúc độc đáo này.',
  },
  {
    title: 'Ăn gì ở Huế?',
    note: 'Ẩm thực Huế mang nhiều nét đặc trưng riêng mà hiếm nơi nào có được. Khi du lịch Huế, bạn đừng quên thưởng thức các món đậm chất Huế như cơm hến, bún bò Huế, chè hẻm, nem lụi, hến xúc bánh đa...',
  },
];

const NoteTravelSection = () => {
  const [showNote, setShowNote] = React.useState(-1);

  const handleClickItem = (index) => {
    setShowNote((i) => (i === index ? -1 : index));
  };

  return (
    <ContainSection title="Du lịch Huế cần lưu ý">
      <div className={styles.wrap}>
        {notes.map((note, i) => (
          <div
            key={`${i}-${note.title}`}
            onClick={() => handleClickItem(i)}
            className={styles.item}
          >
            <div className={styles.inner}>
              <span>{note.title}</span>
              <div>
                <FiChevronDown className={styles.icon} />
              </div>
            </div>
            <div className={`${styles.note} ${showNote === i && styles.show}`}>{note.note} </div>
          </div>
        ))}
      </div>
    </ContainSection>
  );
};

export default NoteTravelSection;
