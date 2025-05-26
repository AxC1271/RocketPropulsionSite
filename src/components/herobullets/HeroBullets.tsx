import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, List, Text, ThemeIcon, Title } from '@mantine/core';
import Lottie from 'lottie-react';
import RocketAnimation from "../../assets/animations/RocketAnimation.json";
import classes from './HeroBullets.module.css';

export default function HeroBullets() {
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>Modern</span> Liquid <br /> Propulsions Team
                    </Title>
                    <Text c="dimmed" mt="md">
                        We are a student led team within the Case Western Reserve 
                        Rocket Team, where we design, test, and build rocket engines
                        that utilize liquid propellant instead of traditional fuel-based
                        approaches.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck size={12} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>TypeScript based</b> – build type safe applications, all components and hooks
                            export types
                        </List.Item>
                        <List.Item>
                            <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                            any project
                        </List.Item>
                        <List.Item>
                            <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                            keyboard
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control}>
                            Get started
                        </Button>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>
                            Source code
                        </Button>
                    </Group>
                </div>
                <Lottie animationData={RocketAnimation} />
            </div>
        </Container>
    );
}