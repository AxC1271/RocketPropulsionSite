import { Avatar, Button, Paper, Text } from '@mantine/core';
import classes from "./UserInfoAction.module.css";

interface UserInfoActionProps {
  avatarSrc: string;
  name: string;
  email: string;
  position: string;
  onSendMessage?: () => void;
}

export default function UserInfoAction({ 
  avatarSrc, 
  name, 
  email, 
  position, 
  onSendMessage 
}: UserInfoActionProps) {
  return (
    <Paper 
    radius="md" 
    withBorder 
    p="lg" 
    bg="var(--mantine-color-body)"
    className={classes.card}
    >
      <Avatar
        src={avatarSrc}
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {email} • {position}
      </Text>
    </Paper>
  );
}