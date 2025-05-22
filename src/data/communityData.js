import frontendImage from "../assets/front.png";
import backendImage from "../assets/back.png";
import ui from "../assets/ui.png"
import mobile from "../assets/mobiledevImg.png"
import devOp from "../assets/DevopsImage (1).png"
import smImage1 from "../assets/smfold (1).png";
import smImage2 from "../assets/smfold (2).png";
import smImage3 from "../assets/smfold (3).png";
import smImage4 from "../assets/smfold (4).png";
import bImage1 from "../assets/backsm (1).png";
import bImage2 from "../assets/backsm (2).png";
import bImage3 from "../assets/backsm (3).png";
import bImage4 from "../assets/backsm (4).png";


const communityData = [
  {
    id: 1,
    name: "Front-end Developers",
    profileImage: frontendImage,
    description:
      "A space for Front - end Developers to connect and learn from each other. Here, you can vent out your problems concerning topics under Front- End Development and also seek solutions!",
    smallImages: [smImage1, smImage2, smImage3, smImage4],
  },
  {
    id: 2,
    name: "Back-end Developers",
    profileImage: backendImage,
    description:
      "A community for Back-end Developers to discuss databases, server-side logic, and everything behind the scenes!",
    smallImages: [bImage1, bImage2, bImage3, bImage4],
  },
  // Add more communities as needed
  {
    id: 3,
    name: "UI/UX Designers",
    profileImage: ui,
    description:
      "A hub for UI/UX Designers to connect, share ideas, and solve design challenges together. Whether seeking inspiration, feedback, or collaboration, this is your creative space! 🎨✨",
  },
  {
    id: 4,
    name: "DevOps & Infrastructure",
    profileImage: devOp,
    description:
      "The space for DevOps engineers to connect and learn from each other. Here, you can vent out your problems concerning topics under DevOps and infrastructure and also seek solutions!",
  },
  {
    id: 5,
    name: "Mobile Developers",
    profileImage: mobile,
    description:
      "A space for Mobile Developers to connect and learn from each other. Here, you can vent out your problems concerning topics under Mobile development and also seek solutions!",
  },
];

export default communityData;
