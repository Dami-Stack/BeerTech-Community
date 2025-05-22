const commData = {
  communities: [
    {
      id: 1,
      name: "UI/UX Design Enthusiasts",
      description:
        "A community of designers focused on UI/UX trends, tips, and projects.",
      profileImage: "path/to/sarah-profile.jpg", // Adjusted the field name to be more clear
      
      posts: [
        {
          id: 1,
          username: "Sarah Lee",
          timeAgo: "5 minutes ago",
          content: "Exploring new UI/UX design trends for 2024!",
          postImg: "path/to/post-image-1.jpg",
        },
      ],
      members: [
        {
          name: "Sarah Lee",
          role: "Admin",
          profilePic: "path/to/sarah-profile.jpg",
        },
      ],
    },
  ],
};

export default commData;
