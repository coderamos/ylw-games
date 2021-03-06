import { Story, Meta } from '@storybook/react/types-6-0';
import FormSignUp from '.';

export default {
  title: 'Design System/Form/FormSignUp',
  component: FormSignUp,
  parameters: {
    jest: ['FormSignUp.test.tsx']
  }
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      width: '30rem',
      margin: 'auto'
    }}
  >
    <FormSignUp />
  </div>
);
