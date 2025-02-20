import {
  IconAt,
  IconBrandGoogle,
  IconBrandGoogleFilled,
  IconBrandInstagram,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandTwitter,
  IconBrandTwitterFilled,
  IconBrandYoutube,
  IconPhone,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Container,
  Group,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./css/FooterSimple.module.css";
import { myColors } from "../constants/Colors";
import { useState } from "react";

export function FooterSimple() {
  const [isFocusedText, setIsFocusedText] = useState(false);

  return (
    <footer className={classes.footer}>
      <Container size={"xl"} className={classes.inner}>
        <div className={classes.logo}>
          <Text
            size="10rem"
            fw={1000}
            variant="gradient"
            gradient={{
              from: myColors.primary,
              to: myColors.secondary,
              deg: 90,
            }}
          >
            دوايا
          </Text>
          <Group
            gap={"xs"}
            mt={"md"}
            className={classes.social}
            justify="center"
            wrap="nowrap"
          >
            <ActionIcon
              size="xl"
              radius={"50%"}
              color={myColors.dark}
              variant="light"
            >
              <IconBrandTwitterFilled
                style={{ width: "60%", height: "60%" }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              size="xl"
              radius={"50%"}
              color={myColors.dark}
              variant="light"
            >
              <IconBrandGoogleFilled
                style={{ width: "60%", height: "60%" }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              size="xl"
              radius={"50%"}
              color={myColors.dark}
              variant="light"
            >
              <IconBrandInstagramFilled
                style={{ width: "60%", height: "60%" }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              size="xl"
              radius={"50%"}
              color={myColors.dark}
              variant="light"
            >
              <IconBrandLinkedinFilled
                style={{ width: "60%", height: "60%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </div>
        <div>
          <Group justify="right">
            <Text
              ta={"right"}
              size="3rem"
              fw={1000}
              variant="gradient"
              gradient={{
                from: myColors.primary,
                to: myColors.secondary,
                deg: 90,
              }}
            >
              !تواصل
            </Text>
            <Text ta={"right"} size="3rem" fw={1000} c={myColors.dark}>
              ابقى على
            </Text>
          </Group>
          <Container size={"xs"} p={0}>
          <Text
            ta={"right"}
            mt={"xl"}
            size="1.5rem"
            fw={1000}
            c={myColors.dark}
          >
            اشترك في النشرة الإخبارية لدينا لتحصل على أحدث التحديثات لدينا
          </Text></Container>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <TextInput
              rightSection={<IconPhone size={20} color={"grey"} />}
              // variant="unstyled"
              size="md"
              radius={"xl"}
              mt={"xl"}
              placeholder="أدخل رقمك"
              c={"grey"}
  styles={{
                label: {
                  color: "grey",
                  fontWeight: 800,
                  marginBottom: "8px",
                },
                wrapper: {
                  border: 
                     "1px solid grey",
                  borderRadius: "24px",
                  transition: "border 0.2s ease, box-shadow 0.2s ease",
                  outline: "none",
                  width: "400px", // Fixed width
                },
                input: {
                  color:"grey",
                  paddingLeft: "20px",
                },
              }}


              // styles={{
              //   label: {
              //     color: isFocusedText ? "#007299" : "#ffffff",
              //     fontWeight: 800,
              //     marginBottom: "8px",
              //   },
              //   wrapper: {
              //     border: isFocusedText
              //       ? "1px solid #007299"
              //       : "1px solid #ffffff",
              //     borderRadius: "4px",
              //     transition: "border 0.2s ease, box-shadow 0.2s ease",
              //     outline: "none",
              //     width: "400px", // Fixed width
              //   },
              //   input: {
              //     color: isFocusedText ? "#007299" : "#9DA3BB",
              //     paddingLeft: "40px",
              //   },
              // }}
              onFocus={() => setIsFocusedText(true)}
              onBlur={() => setIsFocusedText(false)}
            />
          </div>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
      <Text
            ta={"center"}
            mt={"xl"}
            size="1.5rem"
            fw={1000}
            c={myColors.dark}
          >
www.dweya.tn
          </Text>
      </Container>
    </footer>
  );
}
