import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import IconLink from '../IconLink';

describe('<IconLink />', () => {
  test('should render correctly', () => {
    const internalLink = {
      name: 'Home',
      url: '/',
      icon: 'home',
      isInternal: true,
    };
    const { asFragment } = render(
      <MemoryRouter>
        <IconLink {...internalLink} />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
