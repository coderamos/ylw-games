import { Story, Meta } from '@storybook/react/types-6-0';

import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Design System/Ribbon',
  component: Ribbon,
  args: {
    children: 'soon'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const RibbonDefault: Story<RibbonProps> = args => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#171717',
      margin: '0 auto'
    }}
  >
    <Ribbon {...args} />
  </div>
);
