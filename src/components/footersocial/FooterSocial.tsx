import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import Logo from '../../assets/images/logo.png';
import classes from './FooterSocial.module.css';

export default function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img
          className={classes.image}
          src={Logo}
          alt=""
        />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <Text 
      c="dimmed" 
      mt="md"
      className={classes.attribution}
      >
        This website is developed by Andrew Chen.
      </Text>
    </div>
  );
}