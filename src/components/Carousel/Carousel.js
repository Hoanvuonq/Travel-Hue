import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useHover } from 'hooks-react-custom';
import classNames from 'classnames';
import PropType from 'prop-types';

import styles from './carousel.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Carousel = (props) => {
  const {
    controls,
    classes,
    source,
    nextSlide,
    prevSlide,
    hideNavigateOnBegin,
    hideNavigateOnEnd,
    hoverShowNavigate,
    onRenderItem,
    onSlideChange,
    className,
    ...rest
  } = props;

  const [swiperRef, setSwiperRef] = React.useState();
  const [hoverRef, isHover] = useHover();
  const [isSlideStickWall, setIsSlideStickWall] = React.useState({
    begin: true,
    end: false,
  });

  const handlePrevSlide = React.useCallback(() => {
    if (!swiperRef) return;
    swiperRef?.slidePrev();
  }, [swiperRef]);
  const handleNextSlide = React.useCallback(() => {
    if (!swiperRef) return;
    swiperRef?.slideNext();
  }, [swiperRef]);

  const handleSLideChange = React.useCallback(
    (swiper) => {
      onSlideChange?.(swiper);
      controls &&
        setIsSlideStickWall({
          begin: swiper?.isBeginning || false,
          end: swiper?.isEnd || false,
        });
    },
    [controls, onSlideChange]
  );

  return (
    <div ref={hoverRef} className={classNames(styles.wrapCarousel, classes?.container)}>
      {controls && (
        <div
          className={classNames(
            hoverShowNavigate ? (isHover ? styles.block : styles.hidden) : styles.block,
            classes?.wrapNavigate
          )}
        >
          <div
            onClick={handlePrevSlide}
            className={classNames(
              styles.btnControls,
              styles.btnPrev,
              classes?.prevSlide,
              hideNavigateOnBegin && isSlideStickWall.begin && styles.hidden
            )}
          >
            {prevSlide}
          </div>
          <div
            onClick={handleNextSlide}
            className={classNames(
              styles.btnControls,
              styles.btnNext,
              classes?.nextSlide,
              hideNavigateOnEnd && isSlideStickWall.end && styles.hidden
            )}
          >
            {nextSlide}
          </div>
        </div>
      )}
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Autoplay, Pagination, EffectFade]}
        onSlideChange={handleSLideChange}
        {...rest}
      >
        {(source?.length || 0) > 0 &&
          source?.map((item, index) => (
            <SwiperSlide key={`${index}-120`}>{onRenderItem?.(item, index)}</SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  controls: PropType.bool,
  classes: PropType.shape({
    container: PropType.string,
    wrapNavigate: PropType.string,
    nextSlide: PropType.string,
    prevSlide: PropType.string,
  }),
  source: PropType.any.isRequired,
  nextSlide: PropType.node,
  prevSlide: PropType.node,
  hideNavigateOnBegin: PropType.bool,
  hideNavigateOnEnd: PropType.bool,
  hoverShowNavigate: PropType.bool,
  onRenderItem: PropType.func,
  className: PropType.string,
  onSlideChange: PropType.func,
};

export default React.memo(Carousel);
