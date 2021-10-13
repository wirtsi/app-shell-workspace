import classNames from 'classnames';
import React from 'react';
import styles from './Header.module.css';

type Shoe = {
    size: number
};

type Props = {
  children: React.ReactNode,
  className?: string,
  shoe?: Shoe
};

const Header = ({ children, className, shoe }: Props) => (
  <header
    className={classNames([
      styles.header,
      className,
    ])}
  >
    {shoe?.size}
    {children}
  </header>
);

export default Header;
