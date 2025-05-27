import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export default function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Where we document the design and manufacturing of 
          liquid propulsion engines
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Get started with the basics of liquid propulsion engines using our 
            guide and documentation.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
}