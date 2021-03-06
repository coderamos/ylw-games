import Banner, { BannerProps } from 'components/Banner';
import Slider, { SliderSettings } from 'components/Slider';

import * as s from './styles';

export type BannerSliderProps = {
  items: BannerProps[];
};

const slideSettings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <s.Wrapper>
    <Slider settings={slideSettings}>
      {items.map(item => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </s.Wrapper>
);

export default BannerSlider;
