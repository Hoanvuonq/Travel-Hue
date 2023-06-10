import * as React from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Popup from '../../../Popup';
import style from './style.module.scss';
import ContainSection from '../../../ContainSection';
import AsideTourCategory from './AsideTourCategory';
import ContentTour from './ContentTour';
import TourCard from '../../../TourCard';
import { dataTourSelector, specialTourSelector } from './SpecialTourSlice';
import MapIframe from '../../../MapIFrame';
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import Image from '../../../Image';
import { AppUtils } from '../../../../utils/AppUtils';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const SpecialTourSection = (props) => {
  const {} = props;
  const [currentTour, setCurrentTour] = React.useState({});
  const [showPopup, setShowPopup] = React.useState(false);
  const data = useSelector(dataTourSelector);

  const handleClickCard = (i) => {
    setCurrentTour(data[i]);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setCurrentTour({});
  };

  return (
    <ContainSection title="Huế 2023 Có Gì Đặc Biệt?">
      <div className={style.wrapper}>
        <div>
          <AsideTourCategory data={data} />
        </div>
        <div>
          <ContentTour>
            {data.map((v, i) => (
              <TourCard
                onClick={() => handleClickCard(i)}
                key={`${i}`}
                catalog={v.tenloaihinhdisan}
                location={`${v.diachi && v.diachi + ','} ${v.tenxaphuong}`}
                thumbnail={v.anhdaidien}
                title={v.tendisan}
                price={v.giave || v.giavetreem}
              />
            ))}
          </ContentTour>
        </div>
      </div>
      <Popup visible={showPopup && !!currentTour} onClose={handleClosePopup} center>
        <div className={style.popup}>
          <div className={style.head}>
            {currentTour.tenphanloaidisan}
            <div onClick={handleClosePopup} className={style.iconClose}>
              <FaTimes />
            </div>
          </div>
          <div className={style.content}>
            <h1>{currentTour.tendisan}</h1>
            <p className={style.info}>
              Loại hình di sản: <span>{currentTour.tenloaihinhdisan}</span>
            </p>
            {currentTour.giave && (
              <p className={style.info}>
                Giá vé: <span>{AppUtils.formatMoney(currentTour.giave)} VND</span>
              </p>
            )}
            <p className={style.address}>
              <div className={style.iconAddress} c>
                <FaMapMarkerAlt />
              </div>
              {[
                currentTour.diachi,
                currentTour.tenxaphuong,
                currentTour.tenhuyenthithanh,
                currentTour.tentinh,
              ].join(', ')}
            </p>
            <p className={style.info}>
              Giới thiệu: <span>{currentTour.thongtingioithieu}</span>
            </p>
            <div className={style.img}>
              <Image source={currentTour.anhdaidien} />
            </div>
            <div className={style.desc}>{currentTour.thongtinchitiet}</div>
            <div className={style.map}>
              <MapIframe
                height={500}
                width="100%"
                lat={currentTour.vido}
                lng={currentTour.kinhdo}
              />
            </div>
          </div>

          <div className={style.foot} />
        </div>
      </Popup>
    </ContainSection>
  );
};

export default SpecialTourSection;
