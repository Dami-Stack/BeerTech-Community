import React, { useState } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaComment,
  FaShare,
  FaPen,
  FaTrash,
} from "react-icons/fa";
import userProfile from "../../assets/profile/rename.png";
import postImg from "../../assets/postimg.png";
import userProfile2 from "../../assets/profile/shaw.png";
import peace from "../../assets/profile/peace.png";
import bg from "../../assets/rec.png";

const posts = [
  {
    id: 1,
    username: "Stella Page",
    timeAgo: "12 mins ago",
    content: "What I’ve been working on recently",
    userProfile: userProfile,
    postImg: postImg,
  },
  {
    id: 2,
    username: "Alex Doe",
    timeAgo: "30 mins ago",
    content: "Check out my new project!",
    userProfile: userProfile2,
  },
];

const PostCard = () => {
  return (
    <div className="flex flex-col space-y-6">
      {posts.map((post) => (
        <PostComment key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostComment = ({ post }) => {
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const handleCommentClick = () => {
    setIsCommentVisible(!isCommentVisible);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      if (editingCommentId !== null) {
        const updatedComments = comments.map((comment) =>
          comment.id === editingCommentId
            ? { ...comment, content: newComment.trim() }
            : comment
        );
        setComments(updatedComments);
        setEditingCommentId(null);
      } else {
        const newCommentObj = {
          id: Date.now(),
          username: "Damilola Elvis",
          userProfile: peace,
          content: newComment.trim(),
          timePosted: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setComments([...comments, newCommentObj]);
      }
      setNewComment("");
    }
  };

  const handleEdit = (commentId) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    setNewComment(commentToEdit.content);
    setEditingCommentId(commentId);
  };

  const handleDelete = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  const handleUpvote = () => {
    if (hasDownvoted) {
      setDownvotes(downvotes - 1);
      setHasDownvoted(false);
    }
    if (!hasUpvoted) {
      setUpvotes(upvotes + 1);
      setHasUpvoted(true);
    }
  };

  const handleDownvote = () => {
    if (hasUpvoted) {
      setUpvotes(upvotes - 1);
      setHasUpvoted(false);
    }
    if (!hasDownvoted) {
      setDownvotes(downvotes + 1);
      setHasDownvoted(true);
    }
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          src={post.userProfile}
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-gray-900 font-semibold">{post.username}</h3>
          <p className="text-gray-500 text-sm">{post.timeAgo}</p>
        </div>
      </div>

      {/* Post Content */}
      <div>
        <p className="mb-3 text-gray-800">{post.content}</p>
        {post.postImg && (
          <img
            src={post.postImg}
            alt="Post Content"
            className="w-full rounded-lg"
          />
        )}
      </div>

      {/* Interaction Buttons */}
      <div className="flex justify-between items-center mt-4">
        <div
          className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer"
          onClick={handleUpvote}
        >
          <FaArrowUp />
          <span className="ml-1">{upvotes}</span>
        </div>
        <div
          className="flex items-center space-x-1 hover:text-red-500 cursor-pointer"
          onClick={handleDownvote}
        >
          <FaArrowDown />
          <span className="ml-1">{downvotes}</span>
        </div>
        <div
          className="flex items-center space-x-1 hover:text-green-500 cursor-pointer"
          onClick={handleCommentClick}
        >
          <FaComment />
          <span className="ml-1">{comments.length}</span>
        </div>
        <div
          className="flex items-center space-x-1 hover:text-purple-500 cursor-pointer"
          onClick={handleShare}
        >
          <FaShare />
          <span className="ml-1">{shareCount}</span>
        </div>
      </div>

      {/* Conditional rendering of the comment section */}
      {isCommentVisible && (
        <div className="mt-4 bg-white p-4 border rounded-lg max-h-60 overflow-y-auto">
          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="text-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={comment.userProfile}
                        alt="User Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-gray-700">{comment.username}</span>
                      <span className="text-gray-500 ml-2">
                        {comment.timePosted}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaPen
                        className="cursor-pointer text-blue-500"
                        onClick={() => handleEdit(comment.id)}
                      />
                      <FaTrash
                        className="cursor-pointer text-red-500"
                        onClick={() => handleDelete(comment.id)}
                      />
                    </div>
                  </div>
                  <p>{comment.content}</p>
                </div>
              ))
            ) : (
              <div className="text-gray-500">No comments yet</div>
            )}
          </div>

          <div className="mt-4">
            <textarea
              placeholder="Add a comment..."
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-lg"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex justify-end mt-2">
              <button
                className=" text-white p-1 px-3 rounded-full bg-cover bg-center"
                onClick={handleCommentSubmit}
                style={{ backgroundImage: `url(${bg})` }}
              >
                {editingCommentId ? "Update Comment" : "Comment"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
