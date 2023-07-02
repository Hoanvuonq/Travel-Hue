import * as React from 'react';
import { routes } from '../../utils/routes';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import ContainSection from '../../components/ContainSection';
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

import destinationData from '../../data/destinations.json';
import { AppUtils } from '../../utils/AppUtils';
import Popup from '../../components/Popup';

import style from './style.module.scss';
import MapIframe from '../../components/MapIFrame';
import Image from '../../components/Image';
import { useSelector } from 'react-redux';
import { selectProposes } from '../../redux/slice/propose';
import { useNavigate } from 'react-router';

import { DestinationData } from '../../components/DestinationData';
console.log(`file: index.js:20 ~ data:`, DestinationData);

const Propose = () => {
  const [currentTour, setCurrentTour] = React.useState({});
  const [showPopup, setShowPopup] = React.useState(false);

  const proposeData = useSelector(selectProposes);

  const navigate = useNavigate();
  const handleClickCard = (i) => {
    setCurrentTour(i);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setCurrentTour({});
  };

  React.useEffect(() => {
    if (!proposeData || proposeData.length === 0) {
      setShowPopup(false);
      setCurrentTour({});
      navigate(routes.FORM);
    }
  }, [proposeData]);

  return (
    <ContainSection>
      <Typography className="" variant="h4">
        Đề xuất.
      </Typography>
      <div className="flex flex-wrap gap-10 mt-5">
        {proposeData?.map((item, index) => (
          <Button
            key={`${index}`}
            variant="text"
            className="w-1/6 h-[300px] p-0"
            onClick={() => handleClickCard(item)}
          >
            <Card
              shadow={false}
              className="relative grid items-end justify-center w-full h-full overflow-hidden text-center cursor-pointer"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                style={{
                  backgroundImage: `url(${item.thumbnail})`,
                }}
                className="absolute inset-0 w-full h-full m-0 bg-center bg-cover rounded-none"
              >
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative px-2 py-14">
                <Typography variant="h5" color="white" className="">
                  {item.destTitle}
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400">
                  {item.fees}
                </Typography>
              </CardBody>
            </Card>
          </Button>
        ))}
      </div>
      <Popup visible={showPopup && !!currentTour} onClose={handleClosePopup} center>
        <div className={style.popup}>
          <div className={style.head}>
            {currentTour.historicalSites}
            <div onClick={handleClosePopup} className={style.iconClose}>
              <FaTimes />
            </div>
          </div>
          <div className={style.content}>
            <h1>{currentTour.destTitle}</h1>
            <p className={style.info}>
              Loại hình di sản: <span>{currentTour.culturalRelics}</span>
            </p>

            <p className={style.info}>
              Giá vé: <span>{(currentTour.fees)}</span>
            </p>

            <p className={style.info}>
              Giới thiệu: <span>{currentTour.description}</span>
            </p>
            <div className={style.img}>
              <Image source={currentTour.thumbnail} />
            </div>
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

Propose.options = {
  layout: MainLayout,
  route: routes.PROPOSE,
};

export default Propose;
