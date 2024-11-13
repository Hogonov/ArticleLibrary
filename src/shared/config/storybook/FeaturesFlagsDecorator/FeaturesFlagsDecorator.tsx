import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: Story) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };

export default FeaturesFlagsDecorator;
