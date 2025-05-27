import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, List, Text, ThemeIcon, Title } from '@mantine/core';
import Lottie from 'lottie-react';
import Collaboration from "../../assets/animations/Collaboration.json";
import classes from './HeroBullets.module.css';
import { useNavigate } from 'react-router-dom';

export default function HeroBullets() {
    const navigate = useNavigate();
    return (
        <Container size="md">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        A <span className={classes.highlight}>Modern</span> Liquid <br /> Propulsions Team
                    </Title>
                    <Text c="dimmed" mt="md">
                        We are a student led team at Case Western Reserve University 
                        where we design, test, and build rocket engines
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
                            <b>LOX based</b> – our engines use liquid oxygen propellant
                            due to its high performance.
                        </List.Item>
                        <List.Item>
                            <b>Environmentally Friendly</b> – Liquid oxygen based rockets produce
                            less carbon emissions.
                        </List.Item>
                        <List.Item>
                            <b>Higher Control & Leverage</b> – Liquid based rockets possess a higher
                            degree of maneuverability, making them highly versatile.
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button 
                        radius="xl" 
                        size="md" 
                        className={classes.control}
                        onClick={() => navigate('/our-team')}
                        >
                            Our Team
                        </Button>
                        <Button 
                        variant="default" 
                        radius="xl" 
                        size="md" 
                        className={classes.control}
                        onClick={() => navigate('/contact-us')}
                        >
                            Contact Us
                        </Button>
                    </Group>
                </div>
                <Lottie animationData={Collaboration} />
            </div>
        </Container>
    );
}