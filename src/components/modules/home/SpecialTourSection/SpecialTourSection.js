import * as React from 'react';

import style from './style.module.scss';
import ContainSection from '../../../ContainSection';
import AsideTourCategory from './AsideTourCategory';
import ContentTour from './ContentTour';
import TourCard from '../../../TourCard';

const SpecialTourSection = (props) => {
  const {} = props;

  return (
    <ContainSection title="Huế 2023 Có Gì Đặc Biệt?">
      <div className={style.wrapper}>
        <div>
          <AsideTourCategory />
        </div>
        <div>
          <ContentTour>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <TourCard
                  key={`${i}`}
                  thumbnail={
                    'https://res.klook.com/image/upload/c_fill,w_420,h_260/activities/mqc6kjhyldygx9oqtjw9.webp'
                  }
                  title={
                    'Thuê Xe Đi Núi Thần Tài, Hội An, Huế, Bà Nà Hills hoặc Vinwonders Nam Hội An từ Đà Nẵng '
                  }
                  price={100000}
                />
              ))}
          </ContentTour>
        </div>
      </div>
    </ContainSection>
  );
};

export default SpecialTourSection;
