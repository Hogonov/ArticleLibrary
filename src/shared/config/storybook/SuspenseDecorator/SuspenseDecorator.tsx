import { Decorator, Story } from '@storybook/react';
import { Suspense } from 'react';

const SuspenseDecorator: Decorator = (Story: Story) => (
    <Suspense>
        <Story />
    </Suspense>
);

export default SuspenseDecorator;
