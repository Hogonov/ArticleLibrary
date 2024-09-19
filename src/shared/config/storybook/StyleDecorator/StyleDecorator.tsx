import { Decorator, Story } from '@storybook/react';
// eslint-disable-next-line course-fsd-plugin/layer-imports
import '@/app/styles/index.scss';

const StyleDecorator: Decorator = (Story: Story) => <Story />;

export default StyleDecorator;
