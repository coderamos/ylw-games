import { Story, Meta } from '@storybook/react/types-6-0';
import Heading from 'components/Heading';
import MediaMatch from '.';

export default {
  title: 'Design Stystem/MediaMatch',
  component: MediaMatch
} as Meta;

export const MediaMatchOnDesktop: Story = () => (
  <>
    <small>You can view Heading only Desktop</small>
    <MediaMatch greaterThan="medium">
      <Heading color="secondary" lineBottom>
        Heading on Desktop
      </Heading>
    </MediaMatch>
  </>
);

export const MediaMatchOnMobile: Story = () => (
  <>
    <small>You can view Heading only Mobile</small>
    <MediaMatch lessThan="medium">
      <Heading color="secondary" lineBottom>
        Heading on Mobile
      </Heading>
    </MediaMatch>
  </>
);

MediaMatchOnMobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};