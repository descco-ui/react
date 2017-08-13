import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Tag from './index';

import '../../../node_modules/@descco/ui-core/lib/css/06-components/tag.css';

const stories = storiesOf('Tag', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <Tag onRemove={action('removed')}>name</Tag>
));

