import femi from "../assets/profile.png";
import postImg from "../assets/postimg.png";

export const userPosts = [
  {
    id: 1,
    username: "Femi Falana",
    timeAgo: "12 mins ago",
    content: "Guys, what did you learn today?",
    userProfile: femi,
    postImg: null,
    comments: [],
    upvotes: 12,
    downvotes: 0,
    shares: 4,
  },
  {
    id: 2,
    username: "Femi Falana",
    timeAgo: "22 mins ago",
    content: "What I’ve been working on recently",
    userProfile: femi,
    postImg: postImg,
    comments: [],
    upvotes: 12,
    downvotes: 0,
    shares: 4,
  },
];

export const userMedia = userPosts.filter((post) => post.postImg);

export const userComments = [
  {
    id: 1,
    username: "Femi Falana",
    userProfile: femi,
    content: "I learnt about React and testing.",
    timeAgo: "5 mins ago",
    parentPost: "Guys, what did you learn today?",
  },
  // ...more comments
];

export const userUpvotes = userPosts;
export const userDownvotes = [];
