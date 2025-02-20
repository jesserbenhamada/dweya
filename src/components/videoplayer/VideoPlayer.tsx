import { Card, Container, Text } from "@mantine/core";

export default function VideoPlayer() {
  return (
    <div
  style={{
    width: "100%",
    minHeight: "70vh", // Allows it to shrink on smaller screens
    backgroundImage: `linear-gradient(to top, rgba(0, 114, 153, 0.6), rgba(86, 224, 224,  0.6)),url('/src/assets/bg2.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5% 2%", // Adds spacing for smaller screens
  }}
>
      <Container size="md" p="xl">
      <Card
  shadow="md"
  radius="md"
  withBorder
  style={{
    borderRadius: "24px",
    borderWidth: "3px",
    borderColor: "#ffffff",
    zIndex: 1,
    overflow: "hidden", // Ensure video fits inside the card
  }}
>
  {/* Video Player */}
  <video
    width="100%" // Makes it fully responsive
    style={{
      aspectRatio: "16 / 9", // Maintains the aspect ratio
      borderRadius: "24px",
      objectFit: "cover", // Ensures it fills the space properly
    }}
    controls
    poster="/src/assets/videoPlaceholder.jpg" // Cover image before playing
  >
    <source src="/src/assets/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</Card>


        {/* Text Below Video */}
        <Text ta="center" mt="xl" size="2.5rem" fw={1000} c="white">
          “ كيفاش تعمل باش تصب المطلب متاعك ”
        </Text>
      </Container>
    </div>
  );
}
