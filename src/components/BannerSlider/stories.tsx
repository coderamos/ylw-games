import { Story, Meta } from '@storybook/react/types-6-0';

import BannerSlider, { BannerSliderProps } from '.';

import { mock as bannerItemsMock } from './mock';

export default {
  title: 'Design System/Slider/BannerSlider',
  component: BannerSlider,
  args: {
    items: bannerItemsMock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    },
    jest: ['BannerSlider.test.tsx']
  },
  decorators: [
    Story => (
      <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const BannerSliderOnMobile: Story<BannerSliderProps> = args => (
  <BannerSlider {...args} />
);

BannerSliderOnMobile.argTypes = {
  items: {
    control: {
      type: ''
    }
  }
};

BannerSliderOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
};

export const BannerSliderOnDesktop: Story<BannerSliderProps> = args => (
  <BannerSlider {...args} />
);

BannerSliderOnDesktop.argTypes = {
  items: {
    type: ''
  }
};
