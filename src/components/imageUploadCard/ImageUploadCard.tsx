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
                  style={{ width: 350, height: 300, background: "cyan", cursor: "pointer" }}
                  component="label"
                >
                  <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
                  <Center>
                    <IconTransitionBottomFilled color="white" size={100} />
                  </Center>
                  <Text ta="center" mt="xl" size="lg" fw={700} color="white">
                    تنزيل صورة مطلبك من تلفونك
                  </Text>
                </Card>

                <Text ta="center" size="xl" fw={700}>أو</Text>

                {/* Camera Capture Card */}
                {!isCameraOpen ? (
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="xl"
                    style={{ width: 350, height: 300, background: "lightgray", border: "3px solid cyan", cursor: "pointer" }}
                    onClick={() => setIsCameraOpen(true)}
                  >
                    <Center>
                      <IconCameraFilled color="cyan" size={100} />
                    </Center>
                    <Text ta="center" mt="xl" size="lg" fw={700} color="cyan">
                      اضغط هنا لاخذ صورة مطلبك
                    </Text>
                  </Card>
                ) : (
                  <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width="100%" height="100%" videoConstraints={{ facingMode: "user" }} />
                )}

                {isCameraOpen && (
                  <Center>
                    <Button onClick={handleCapture} mt="md" color="cyan">اضغط هنا لاخذ صورة مطلبك</Button>
                  </Center>
                )}

                {image && (
                  <>
                    <Center>
                      <img src={image} alt="Captured" style={{ marginTop: "20px", width: "80%", borderRadius: "10px", border: "3px solid cyan" }} />
                    </Center>
                    <Group justify="center" mt="xl">
                      <Button onClick={handleNext}>الخطوة التالية</Button>
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
          <Text ta="center" size="xl" fw={700}>الخطوة الثانية: إدخال رقم الهاتف</Text>
          <Group justify="center" mt="xl">
            <IconPhoneFilled color="cyan" size={100} />
          </Group>
          <Container size="xs">
            <Text ta="center" size="lg" mt="md" fw={600} color="cyan">
              اكتب نومرو تلفونك [ باش نعلموك بتوفر دواك مع رقم الانتظار و التوقيت المناسب لاستلام دواك ]
            </Text>
          </Container>
          <Group justify="center">
            <TextInput
              rightSection={<IconPhone size={20} color={"grey"} />}
              size="md"
              radius="xl"
              mt="xl"
              placeholder="أدخل رقمك"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              styles={{
                input: { paddingLeft: "20px" },
                wrapper: { border: "1px solid grey", borderRadius: "24px", width: "400px" },
              }}
            />
          </Group>
          <Group justify="center" mt="xl">
            <Button onClick={handlePrev} variant="outline" color="dark">الخطوة السابقة</Button>
            <Button onClick={handleNext} color="cyan">الخطوة التالية</Button>
          </Group>
        </div>
      )}

      {step === 3 && (
        <div>
          <Text ta="center" size="xl" fw={700}>الخطوة الثالثة: الدفع</Text>
          <Group justify="center" mt="xl">
            <Card
              shadow="sm"
              padding="lg"
              radius="xl"
              style={{ background: "cyan", cursor: "pointer" }}
            >
              <Center>
                <Text ta="center" color="white" size="lg" fw={700}>
                  الدفع عبر SMS
                </Text>
              </Center>
            </Card>
          </Group>
          <Group justify="center" mt="xl">
            <Button onClick={handlePrev} variant="outline" color="dark">الخطوة السابقة</Button>
            <Button color="cyan">إتمام العملية</Button>
          </Group>
        </div>
      )}
    </div>
    </>
  );
};

export default ImageUploadCard;
