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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Correctly set the image URL
    }
  };
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const firstStep = () => setActive(0); // Function to go to the first step
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null); // State to store captured image

  const webcamRef = useRef<Webcam>(null);

  // Capture photo handler
  const handleCapture = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot();
      if (capturedImage) {
        setImage(capturedImage); // Set the captured image to the state
      } else {
        console.error("Error capturing image");
      }
    } else {
      console.error("Webcam reference is null");
    }
  };
  return (
    <>
 <Stepper
      color="cyan"
      active={active}
      allowNextStepsSelect={false}
      onStepClick={setActive}
      styles={{
        // steps: { display: "none" }, // Hides the stepper navigation
      }}
    >        <Stepper.Step label="الخطوة الاولى" description="صورة مطلب">
          <Group justify="center" mt={"xl"}>
            {!selectedImage ? (
              <>
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
                    <ActionIcon
                      variant="white"
                      aria-label="Upload"
                      radius="50%"
                      style={{
                        width: 160,
                        height: 160,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <IconTransitionBottomFilled
                        color={myColors.primary}
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
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

      {/* {!isCameraOpen ? (
        
        <Card
        shadow="sm"
        padding="lg"
        radius="xl"
        style={{
          width: 350,
          height: 300,
          background: myColors.lighter,
          border: `3px solid ${myColors.primary}`,
        }}
        onClick={() => setIsCameraOpen(true)} // Open camera when clicked
      >
        <Center>
          <ActionIcon
            variant="white"
            aria-label="Take Picture"
            radius="50%"
            style={{
              width: 160,
              height: 160,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <IconCameraFilled
              color={myColors.primary}
              style={{ width: "70%", height: "70%" }}
              stroke={1.5}
            />
          </ActionIcon>
        </Center>
         <Text ta={"center"} mt={"xl"} size="2rem" fw={1000} c={myColors.primary}>
         اضغط هنا لاخذ صورة مطلبك
       </Text>
    
   </Card>
      ) : (
        <Webcam
          audio={false}
          screenshotFormat="image/jpeg"
          width="100%"
          height="100%"
          videoConstraints={{
            facingMode: "user",
          }}
          ref={webcamRef} // Set the webcamRef to the Webcam component
          onUserMediaError={() => console.log("Camera error")}
        />
      )}

      {isCameraOpen && (
        <Center>
          <button
            onClick={handleCapture} // Capture photo when button is clicked
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: myColors.primary,
              color: "white",
              borderRadius: "5px",
            }}
          >
                    اضغط هنا لاخذ صورة مطلبك

          </button>
        </Center>
      )}

      {image && (<>
        <Center>
          <img
            src={image} // Display the captured image
            alt="Captured"
            style={{
              marginTop: "20px",
              width: "80%",
              borderRadius: "10px",
              border: `3px solid ${myColors.primary}`,
            }}
          />
        </Center>
        <Group justify="center" mt="xl">
  
        <Button onClick={nextStep}>الخطوة التالية</Button>
      </Group></>
      )} */}

      {/* Display text when camera is not open */}

       
              </>
            ) : (
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <Image
                  src={selectedImage}
                  alt="Selected"
                  h={"600px"}
                  style={{
                    maxWidth: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
                <Group justify="center" mt="xl">
                  <Button
                   variant="white"
                   c={myColors.dark}
                   radius={"xl"}
                 
                   style={{
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                     minWidth: "120px", // Add your desired min-width here
                   }}
                    onClick={() => setSelectedImage(null)} // Reset image selection
                  >
                    إزالة الصورة
                  </Button>
                  <Button   radius={"xl"}
              variant="gradient"
              gradient={{
                from: myColors.primary,
                to: myColors.secondary,
                deg: 90,
              }}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                minWidth: "120px", // Add your desired min-width here
              }} onClick={nextStep}>الخطوة التالية</Button>
                </Group>
              </div>
            )}
          </Group>
        </Stepper.Step>
        <Stepper.Step label="الخطوة الثانية" description="رقم هاتفك">
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
              onClick={prevStep}
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
              onClick={nextStep}
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
        </Stepper.Step>
        <Stepper.Step label="الخطوة الثالثة" description="دفع">
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            {/* SMS Payment Card */}
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
                  </ActionIcon></Center>
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
                  </ActionIcon></Center>
                  <Text ta="center" mt="sm" size="1.5rem" c="white" lh="2rem">
                    أدفع عن طريق حسابك البنكي
                  </Text>
                
            </Card>
          </SimpleGrid>
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
                    border: `3px solid ${myColors.primary}`,
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
                    border: `3px solid ${myColors.primary}`,
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
              onClick={prevStep}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                minWidth: "120px", // Add your desired min-width here
              }}
            >
              الخطوة السابقة
            </Button>
            <Button
              onClick={nextStep}
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
        </Stepper.Step>
        <Stepper.Completed>
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
        </Stepper.Completed>
      </Stepper>
    </>
  );
};

export default ImageUploadCard;
