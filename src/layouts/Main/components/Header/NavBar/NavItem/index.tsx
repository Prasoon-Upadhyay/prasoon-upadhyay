/**
 * NavItem component.
 */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface NavItemProps {
  name: string;
  url: string;
  icon: IconProp;
  size?: SizeProp;
  color: string;
  mdFileName: string;
}

const NavItem: React.FC<NavItemProps> = ({
  name,
  url,
  mdFileName, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...iconProps
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onCloseClicked = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/');
  };

  return (
    <span className={classes.root}>
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive ? classes.currentTab : classes.otherTab
        }
        end
      >
        <FontAwesomeIcon {...iconProps} size={iconProps.size || 'lg'} />
        <span className={classes.navText}>{name}</span>
        <FontAwesomeIcon
          onClick={onCloseClicked}
          className="closeButton"
          icon="times"
          size="1x"
          title="Close"
        />
      </NavLink>
    </span>
  );
};

export default NavItem;
