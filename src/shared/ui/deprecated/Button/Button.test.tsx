import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('check content in button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('check theme clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
