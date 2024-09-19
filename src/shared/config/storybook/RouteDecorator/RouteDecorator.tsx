import { Decorator, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouteDecorator: Decorator = (Story: Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);

export default RouteDecorator;
