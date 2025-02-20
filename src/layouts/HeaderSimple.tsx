
import { Burger, Button, Container, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './css/HeaderSimple.module.css';
import { myColors } from '../constants/Colors';


export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      
      <Text

      size="2.3rem"
      fw={1000}
      variant="gradient"
      gradient={{  from: myColors.primary, to: myColors.secondary, deg: 90 }}
    >
     دوايا
    </Text>
      <Group justify='right'>
      <Button
  variant="white"
  c={myColors.dark}
  radius={'xl'}
  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" , minWidth: '120px' // Add your desired min-width here
  }}>
 تسجيل الدخول
</Button>
      <Button
      radius={'xl'}
  variant="gradient"
  gradient={{ from: myColors.primary, to: myColors.secondary, deg: 90 }}
  style={{
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" ,  minWidth: '120px' // Add your desired min-width here
  }}>
      تسجيل
    </Button>
    </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}