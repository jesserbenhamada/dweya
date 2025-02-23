import React, { useRef, useState } from "react";
import {
  Group,
  Card,
  Center,
  ActionIcon,
  Text,
  Stepper,
  Button,
  Image,
  TextInput,
  Container,
  Grid,
  SimpleGrid,
  PasswordInput,
  Stack,
  Alert,
} from "@mantine/core";
import {
  IconTransitionBottomFilled,
  IconCameraFilled,
  IconPhone,
  IconPhoneFilled,
  IconCoinFilled,
} from "@tabler/icons-react"; // Import icons
import { myColors } from "../../constants/Colors";
import bankPayImage from "../../assets/paymentheader.jpg"; // Import the image
import Webcam from "react-webcam";

const ImageUploadCard = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const firstStep = () => setStep(1);

  const handleCapture = () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      setImage(screenshot);
      setIsCameraOpen(false);
    }
  };
  return (
    <>
     <div>
      {step === 1 && (
        <div>
          <Text ta="center" size="xl" fw={700}>الخطوة الأولى: تحميل صورة</Text>
          <Group justify="center" mt="xl">
            {!selectedImage ? (
              <>
                {/* Upload Card */}
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="xl"
                  style={{
                    width: 350,
                    height: 300,
                    background: `linear-gradient(90deg, ${myColors.primary}, ${myColors.secondary})`,
                    cursor: "pointer",
                  }}
                  component="label"
                >
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <Center>
                  <Card
                                      onChange={handleImageChange}

  radius="50%"
  style={{
    width: 160,
    height: 160,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",       // Enables flexbox
    justifyContent: "center",  // Centers horizontally
    alignItems: "center",      // Centers vertically
  }}
>
  <IconTransitionBottomFilled
    color={myColors.primary}
    style={{ width: "70%", height: "70%" }}
    stroke={1.5}
  />
</Card>
                  </Center>
                  <Text
                    ta={"center"}
                    mt={"xl"}
                    size="2rem"
                    fw={1000}
                    c={"white"}
                  >
                    تنزيل صورة مطلبك من تلفونك
                  </Text>
                </Card>
                <Text ta={"center"} size="4rem" fw={1000} c={myColors.dark}>
                  أو
                </Text>
                {/* Camera Capture Card */}
                {!isCameraOpen ? (
                   <Card
                   shadow="sm"
                   padding="lg"
                   radius="xl"
                   style={{
                     width: 350,
                     height: 300,
                     background: myColors.lighter,
                     border: '3px solid ${myColors.primary}',
                   }}
                   onClick={() => setIsCameraOpen(true)} // Open camera when clicked
                 >
                   <Center>
                   <Card
                   onClick={() => setIsCameraOpen(true)} // Open camera when clicked

  radius="50%"
  style={{
    width: 160,
    height: 160,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",       // Enables flexbox
    justifyContent: "center",  // Centers horizontally
    alignItems: "center",      // Centers vertically
  }}
>
                       <IconCameraFilled
                         color={myColors.primary}
                         style={{ width: "70%", height: "70%" }}
                         stroke={1.5}
                       />
                     </Card>
                   </Center>
                   <Text
                     ta={"center"}
                     mt={"xl"}
                     size="2rem"
                     fw={1000}
                     c={myColors.primary}
                   >
                     اضغط هنا لاخذ صورة مطلبك
                   </Text>
                 </Card>
                ) : (
<Webcam
  ref={webcamRef}
  screenshotFormat="image/jpeg"
  width="100%"
  height="100%"
  videoConstraints={{
    facingMode: { ideal: "environment" }, // Tries to use the rear camera
  }}
/>                )}

                {isCameraOpen && (<>
                  <Center>
                  <Button onClick={handleCapture} mt="md" color="cyan">
                    اضغط هنا لاخذ صورة مطلبك
                  </Button>
                </Center>
                <Center>
                  <Button onClick={() => setIsCameraOpen(false)} mt="md" color="red">
                    اغلاق الكاميرا
                  </Button>
                </Center></>
                )}

                {image && (
                  <>
                    <Center>
                      <img src={image} alt="Captured" style={{ marginTop: "20px", width: "80%", borderRadius: "10px",                     border: '3px solid ${myColors.primary}',
 }} />
                    </Center>
                   <Group justify="center" mt="xl">
                
                  <Button
                    radius={"xl"}
                    variant="gradient"
                    gradient={{
                      from: myColors.primary,
                      to: myColors.secondary,
                      deg: 90,
                    }}
                    style={{
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      minWidth: "120px", // Add your desired min-width here
                    }}
                    onClick={handleNext}
                  >
                    الخطوة التالية
                  </Button>
                </Group>
                  </>
                )}
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Image src={selectedImage} alt="Selected" height={600} style={{ maxWidth: "100%", borderRadius: "12px" }} />
                <Group justify="center" mt="xl">
                  <Button onClick={() => setSelectedImage(null)} variant="outline" color="dark">إزالة الصورة</Button>
                  <Button onClick={handleNext} color="cyan">الخطوة التالية</Button>
                </Group>
              </div>
            )}
          </Group>
        </div>
      )}

      {step === 2 && (
        <div>
              <Group justify="center">
            <ActionIcon
              mt={"xl"}
              variant="white"
              aria-label="Upload"
              radius="50%"
              style={{
                width: 160,
                height: 160,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                pointerEvents: "none", // Makes the icon unclickable
              }}
            >
              <IconPhoneFilled
                color={myColors.primary}
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>{" "}
          <Container size={"xs"}>
            <Text
              ta={"center"}
              size="xl"
              mt={"md"}
              fw={600}
              c={myColors.primary}
            >
              اكتب نومرو تلفونك [ باش نعلموك بتوفر دواك مع رقم الانتظار و
              التوقيت المناسب لاستلام دواك ]
            </Text>
          </Container>
          <Group justify="center">
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
                  border: "1px solid grey",
                  borderRadius: "24px",
                  transition: "border 0.2s ease, box-shadow 0.2s ease",
                  outline: "none",
                  width: "400px", // Fixed width
                },
                input: {
                  color: "grey",
                  paddingLeft: "20px",
                },
              }}
            />
          </Group>
          <Group justify="center" mt="xl">
            <Button
            onClick={handlePrev}
              variant="white"
              c={myColors.dark}
              radius={"xl"}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                minWidth: "120px", // Add your desired min-width here
              }}
            >
              الخطوة السابقة
            </Button>
            <Button
             onClick={handleNext}
              radius={"xl"}
              variant="gradient"
              gradient={{
                from: myColors.primary,
                to: myColors.secondary,
                deg: 90,
              }}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                minWidth: "120px", // Add your desired min-width here
              }}
            >
              الخطوة التالية
            </Button>
          </Group>
        </div>
      )}

      {step === 3 && (
        <div>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
  <Card
              shadow="sm"
              padding="lg"
              radius="xl"
              style={{
                    background: `linear-gradient(90deg, ${myColors.primary}, ${myColors.secondary})`,
                cursor: "pointer",
              }}
              onClick={() => setSelectedPayment("sms")} // Set selection when clicked
            >
              <Center>
                <ActionIcon
                  variant="white"
                  aria-label="SMS Payment"
                  radius="50%"
                  style={{
                    width: 80,
                    height: 80,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    pointerEvents: "none", // Makes the icon unclickable
                  }}
                >
                  <IconPhoneFilled
                    color={myColors.primary}
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Center>
              <Text ta="center" mt="sm" size="1.5rem" c="white" lh="2rem">
                SMS ادفع من تلفونك عن طريق
              </Text>
            </Card>

            {/* Bank Payment Card */}
            <Card
              shadow="sm"
              padding="lg"
              radius="xl"
              style={{
                    background: `linear-gradient(90deg, ${myColors.primary}, ${myColors.secondary})`,
                cursor: "pointer",
              }}
              onClick={() => setSelectedPayment("bank")} // Set selection when clicked
            >
              <Center>
                <ActionIcon
                  variant="white"
                  aria-label="Bank Payment"
                  radius="50%"
                  style={{
                    width: 80,
                    height: 80,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    pointerEvents: "none", // Makes the icon unclickable
                  }}
                >
                  <IconCoinFilled
                    color={myColors.primary}
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Center>
              <Text ta="center" mt="sm" size="1.5rem" c="white" lh="2rem">
                أدفع عن طريق حسابك البنكي
              </Text>
            </Card></SimpleGrid>
            <Container size={"sm"}>
            {/* Show Input if SMS Payment is Selected */}
            {selectedPayment === "sms" && (
              <>
                {" "}
                <Card
                  mt={"xl"}
                  shadow="sm"
                  padding="lg"
                  radius="xl"
                  style={{
                    background: myColors.lighter,
                    border:' 3px solid ${myColors.primary}',
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedPayment("sms")} // Set selection when clicked
                >
                  <Group justify="center">
                    <TextInput
                      rightSection={<IconPhone size={20} color="grey" />}
                      size="md"
                      radius="xl"
                      placeholder="أدخل رقمك"
                      c="grey"
                      styles={{
                        label: {
                          color: "grey",
                          fontWeight: 800,
                          marginBottom: "8px",
                        },
                        wrapper: {
                          border: "1px solid grey",
                          borderRadius: "24px",
                          transition: "border 0.2s ease, box-shadow 0.2s ease",
                          outline: "none",
                          width: "auto",
                        },
                        input: {
                          color: "grey",
                          paddingLeft: "20px",
                        },
                      }}
                    />
                  </Group>
                </Card>
              </>
            )}
            {selectedPayment === "bank" && (
              <>
                {" "}
                <Card
                  mt={"xl"}
                  shadow="sm"
                  padding="lg"
                  radius="xl"
                  style={{
                    background: myColors.lighter,
                    border: '3px solid ${myColors.primary}',
                    cursor: "pointer",
                  }}
                >
                  <Image radius="md" src={bankPayImage} alt="Bank Payment" />
                  <Text
                    ta="left"
                    mt="sm"
                    size="1.2rem"
                    c={myColors.dark}
                    lh="2rem"
                  >
                    we have sent you a text message with a code to your
                    registered mobile number ending in +216***9211
                    <br />
                    you are paying to DWEYA the amount of 0.500 dt on 11.02.2025
                    <br />
                    you have 3 attempts to enter password and 3 to resend{" "}
                  </Text>
                  <Stack>
                    <PasswordInput
                      size="md"
                      my={"md"}
                      radius="xl"
                      placeholder="your code"
                      c="grey"
                      styles={{
                        label: {
                          color: "grey",
                          fontWeight: 800,
                          marginBottom: "8px",
                        },
                        wrapper: {
                          border: "1px solid grey",
                          borderRadius: "24px",
                          transition: "border 0.2s ease, box-shadow 0.2s ease",
                          outline: "none",
                        },
                        input: {
                          color: "grey",
                          paddingLeft: "20px",
                        },
                      }}
                    />
                    <Button fullWidth radius="xl" color={myColors.primary}>
                      Submit
                    </Button>
                    <Button fullWidth radius="xl" color={"grey"}>
                      Cansel
                    </Button>
                  </Stack>
                </Card>
              </>
            )}
          </Container>
          <Group justify="center" mt="xl">
            <Button
              variant="white"
              c={myColors.dark}
              radius={"xl"}
              onClick={handlePrev}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                minWidth: "120px", // Add your desired min-width here
              }}
            >
              الخطوة السابقة
            </Button>
            <Button
              onClick={handleNext}
              radius={"xl"}
              variant="gradient"
              gradient={{
                from: myColors.primary,
                to: myColors.secondary,
                deg: 90,
              }}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                minWidth: "120px", // Add your desired min-width here
              }}
            >
              الخطوة التالية
            </Button>
          </Group>
        </div>
      )}
        {step === 4 && (
        <div>
              <Text ta="center" mt="sm" size="1.5rem" c={myColors.dark} lh="2rem">
            لقد انتهينا من العملية، انتظر الإشعار على الهاتف لمعرفة موعد استلام
            الدواء الخاص بك
          </Text>
          <Center>
            <Button
              mt={"xl"}
              c={"white"}
              radius="xl"
              onClick={firstStep}
              variant="gradient"
              gradient={{
                from: myColors.primary,
                to: myColors.secondary,
                deg: 90,
              }}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                minWidth: "120px", // Add your desired min-width here
              }}
            >
              الخطوة الأولى
            </Button>
          </Center>
        
        </div>
      )}

    </div>
    </>
  );
};

export default ImageUploadCard;
