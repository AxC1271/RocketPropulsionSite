import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '../../assets/images/logo.png';
import classes from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const links = [
  { link: '/', label: 'About Us' },
  {link: '/docs', label: 'Documentation'},
  { link: '/projects', label: 'Projects' },
  { link: '/our-team', label: 'Our Team' },
  { link: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate()
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${classes.link} ${active === link.link ? classes.active : ''}`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link)
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <img src={Logo} className={classes.image} alt="Logo" />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
