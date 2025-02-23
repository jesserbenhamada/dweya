import {
  ActionIcon,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  rem,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { myColors } from "../constants/Colors";
import classes from "./css/HomePage.module.css";
import bgImage from "../assets/bg1.png"; // Import the image
import cardImage from "../assets/img1.jpg"; // Import the image
import VideoPlayer from "../components/videoplayer/VideoPlayer";
import {
  IconCameraFilled,
  IconCircleArrowDown,
  IconCoinFilled,
  IconPhoneFilled,
  IconTransitionBottomFilled,
} from "@tabler/icons-react";
import ImageUploadCard from "../components/imageUploadCard/ImageUploadCard";
import { useMediaQuery } from "@mantine/hooks";

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screen

  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2 }} my={"xl"}>
        <div>
          <Group justify="center" align="center">
            <Text ta={"center"} size="6rem" fw={1000} c={myColors.dark}>
              راحتك أولويتنا
            </Text>
            <Text
              ta={"center"}
              size="6rem"
              fw={1000}
              variant="gradient"
              gradient={{
                from: myColors.primary,
                to: myColors.secondary,
                deg: 90,
              }}
            >
              مع منصة دوايا{" "}
            </Text>
            <Container size={"xs"}>
              <Text
                ta={"right"}
                mt={"xl"}
                size="2.5rem"
                fw={1000}
                c={myColors.light}
              >
                موقعنا يسهل عليك الحصول على دوائك. منغير ما تضيع وقتك ماعليك كان
                تبعثلنا تصويرة مطلبك و احنا نرتحوك من الانتظار و نعلموك بتوفر
                دواك و رقم الانتظارك
              </Text>
            </Container>
          </Group>
        </div>
        <div style={{ position: "relative", width: "100%", height: 550 }}>
          {/* Bottom Card (Background) */}
          <Card
            radius="md"
            style={{
              width: 680,
              height: 550,
              backgroundImage: `linear-gradient(to top, rgba(0, 114, 153, 0.6), rgba(255, 255, 255, 0)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "300px 0px 0px 24px",
              position: "absolute",
              top: 0,
              right: 0, // Move to the right
              zIndex: 1, // Background should be below
            }}
          />

          {/* Top Card (Foreground) */}
          <Card
            radius="md"
            withBorder
            style={{
              width: "90%", // Make it slightly smaller than the bottom card
              maxWidth: 550, // Prevents it from getting too large
              aspectRatio: "1 / 1", // Makes it square-like while maintaining responsiveness
              backgroundImage: `url(${cardImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "24px",
              borderWidth: "16px",
              borderColor: "#ffffff",
              position: "absolute",
              top: "45%",
              right: "5%", // Adjust this for better positioning
              transform: "translateY(-50%)", // Center vertically
              zIndex: 2,
            }}
          />
        </div>
      </SimpleGrid>
      <VideoPlayer />
      <Group mt={"xl"} justify="center">
        <Text
          ta={"center"}
          size="6rem"
          fw={1000}
          variant="gradient"
          gradient={{
            from: myColors.primary,
            to: myColors.secondary,
            deg: 90,
          }}
        >
          الخطوات
        </Text>
      </Group>{" "}
      <Container size={"xl"}>
        {[
          {
            title: "الخطوة الاولى",
            description: "صور مطلب دوائك مباشرة او نزلها من تلفونك",
            icon: (
              <IconCameraFilled
                color="white"
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            ),
          },
          {
            title: "الخطوة الثانية",
            description:
              "اكتب نومرو تلفونك [ باش نعلموك بتوفر دواك مع رقم الانتظار و التوقيت المناسب لاستلام دوائك ]",
            icon: (
              <IconPhoneFilled
                color="white"
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            ),
          },
          {
            title: "الخطوة الثالثة",
            description:     "إدفع من تلفونك عن طريق إرسالية قصيرة أو عن طريق حسابك البنكي",
        
            icon: (
              <IconCoinFilled
                color="white"
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            ),
          },
        ].map((step, index) => (
          <Grid key={index} mt={index === 0 ? "70px" : "40px"} align="center">
            {isMobile ? (
              // MOBILE VERSION: Icon above text
              <>
            <Grid.Col span={9}>
                  <Text ta="right"               dir="rtl" // Ensure the text direction is right-to-left for Arabic
 size="2rem" fw={1000} c={myColors.dark}>
                    {step.title}
                  </Text>
                  <Text ta="right"               dir="rtl" // Ensure the text direction is right-to-left for Arabic
 size="1.5rem" fw={1000} c={myColors.primary}>
                    {step.description}
                  </Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <ActionIcon
                    variant="white"
                    radius="lg"
                    style={{
                      width: 90,
                      height: 90,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      background: `linear-gradient(90deg, ${myColors.primary}, ${myColors.secondary})`,
                    }}
                  >
                    {step.icon}
                  </ActionIcon>
                </Grid.Col>
              </>
            ) : (
              // DESKTOP VERSION: Text left, Icon right
              <>
                <Grid.Col span={10}>
                  <Text ta="right" size="3rem" fw={1000} c={myColors.dark}>
                    {step.title}
                  </Text>
                  <Text ta="right" size="3rem" fw={1000} c={myColors.primary}>
                    {step.description}
                  </Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <ActionIcon
                    variant="white"
                    radius="lg"
                    style={{
                      width: 140,
                      height: 140,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      background: `linear-gradient(90deg, ${myColors.primary}, ${myColors.secondary})`,
                    }}
                  >
                    {step.icon}
                  </ActionIcon>
                </Grid.Col>
              </>
            )}
          </Grid>
        ))}
        <Container size={"md"}>
          <Divider
            size="md"
            my={"70px"}
            color={"gray"}
            labelPosition="center"
            label={
              <>
                <IconCircleArrowDown color={"gray"} size={40} />
              </>
            }
          />
        </Container>
      </Container>
      <Container size={"md"}>
      
        <Group my={"70px"} justify="center">
          {isMobile ? (
            <>
              <Text
                ta="center"
                size="4rem"
                fw={1000}
                variant="gradient"
                gradient={{
                  from: myColors.primary,
                  to: myColors.secondary,
                  deg: 90,
                }}
              >
                ابدا سجل
              </Text>{" "}
              <Text ta="center" size="4rem" fw={1000} c={myColors.dark}>
                من هنا
              </Text>
            </>
          ) : (
            <>
              <Text ta="center" size="4rem" fw={1000} c={myColors.dark}>
                من هنا
              </Text>
              <Text
                ta="center"
                size="4rem"
                fw={1000}
                variant="gradient"
                gradient={{
                  from: myColors.primary,
                  to: myColors.secondary,
                  deg: 90,
                }}
              >
                ابدا سجل
              </Text>
            </>
          )}
        </Group>

        {/* <ImageUploadCard /> */}

        <Divider size="md" my={"70px"} color={"gray"} />
        <Card
          shadow="sm"
          padding="lg"
          radius="xl"
          style={{
            background: `rgba(0, 114, 153, 0.3)`,

            border: `3px solid ${myColors.primary}`,
          }}
        >
          <Group align="center" justify="center">
            <Text ta={"center"} size="2rem" fw={1000} c={myColors.light}>
              معلوم الخدمة 5 دنانير
            </Text>{" "}
            <IconCoinFilled color={myColors.primary} size={80} stroke={1.5} />
          </Group>
        </Card>
      </Container>
    </>
  );
};

export default HomePage;
