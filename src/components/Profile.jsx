import React, { useState, useRef, useEffect } from "react";
import Navbar from "./home/Navbar";
import Sidebar from "./home/Sidebar";
import femi from "../assets/profile.png";
import EditModal from "../components/EditModal";
import PostCard from "./home/Postcard";
import camICON from "../assets/Add Camera.png";

import {
  userPosts,
  userMedia,
  userComments,
  userUpvotes,
  userDownvotes,
} from "../data/userProfileData";

const tabs = ["Posts", "Media", "Comments", "Upvotes", "Downvotes"];
const sortOptions = ["Hot", "New", "Top"];

// Modal fields for editing profile picture
const editProfileModalFields = [
  {
    type: "image",
    name: "profileImageCurrent",
    value: femi,
  },
  {
    label: "Upload New Profile Picture",
    name: "profileImage",
    type: "file",
  },
];

// Modal fields for creating a post/community
const createPostModalFields = [
  {
    label: "Community name*",
    name: "communityName",
    type: "text",
    maxLength: 21,
    required: true,
    helper: "Your community description",
    placeholder: "Community name",
  },
  {
    label: "Description*",
    name: "description",
    type: "textarea",
    maxLength: 300,
    required: true,
    placeholder: "Description",
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const [sort, setSort] = useState("New");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormState, setModalFormState] = useState({});
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [modalType, setModalType] = useState("editProfile"); // "editProfile" or "createPost"
  const [modalStep, setModalStep] = useState(1); // 1 or 2 for create community
  const sortRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortDropdownOpen(false);
      }
    }
    if (sortDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortDropdownOpen]);

  // Open modal and set initial form state
  const openEditProfileModal = () => {
    setModalType("editProfile");
    setModalFormState({});
    setIsModalOpen(true);
    setModalStep(1);
  };

  const openCreatePostModal = () => {
    setModalType("createPost");
    setModalFormState({});
    setIsModalOpen(true);
    setModalStep(1);
  };

  // Handle input changes in modal
  const handleModalChange = (e) => {
    const { name, type, files, value } = e.target;
    setModalFormState((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle save (edit profile)
  const handleModalSave = () => {
    setIsModalOpen(false);
    // Save logic here
  };

  // Handle next step in create community modal
  const handleModalNext = () => {
    setModalStep(2);
  };

  // Handle create community (final step)
  const handleModalCreate = () => {
    setIsModalOpen(false);
    setModalStep(1);
    // Create community logic here
  };

  // Modal title logic
  const getModalTitle = () => {
    if (modalType === "createPost") {
      return modalStep === 1
        ? "Tell us about your community"
        : "Style your community";
    }
    return "Edit Profile Picture";
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="flex-1 mx-auto p-9">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-6 w-full max-w-2xl mx-auto space-x-4 md:space-x-16">
            <div className="flex items-center gap-4 relative">
              <img
                src={femi}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              {/* Camera icon overlay */}
              <button
                className="absolute left-14 bottom-2 bg-white rounded-full p-1 border border-gray-200 shadow hover:bg-gray-100 transition"
                onClick={openEditProfileModal}
                style={{ zIndex: 2 }}
                aria-label="Change profile picture"
              >
                <img src={camICON} alt="Edit" className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-2xl font-bold">Femi Falana</h2>
                <p className="text-gray-500">Product designer</p>
              </div>
            </div>
            <button
              className="px-4 py-2 rounded-full border border-yellow-900 image-text"
              onClick={openEditProfileModal}
            >
              Edit profile
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 md:gap-6 mb-0 mx-auto justify-around max-w-2xl w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 font-medium rounded-full ${
                  activeTab === tab
                    ? "bg-yellow-50 text-yellow-600"
                    : "text-gray-500 hover:text-yellow-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Create Post & Sort */}
          <div className="flex items-center gap-4 mt-6 mb-2 max-w-2xl w-full mx-auto ">
            <button
              className="border border-yellow-400 text-yellow-600 px-4 py-1 rounded-full font-medium hover:bg-yellow-50 transition text-sm"
              onClick={openCreatePostModal}
            >
              Create post
            </button>
            <div className="relative" ref={sortRef}>
              <button
                className="flex items-center gap-1 text-gray-700 text-sm font-medium focus:outline-none"
                onClick={() => setSortDropdownOpen((open) => !open)}
              >
                {sort}
                <span className="text-lg">&#8964;</span>
              </button>
              {sortDropdownOpen && (
                <div className="absolute left-0 mt-2 w-32 h-56 bg-white rounded-2xl shadow-lg border z-10 py-4 flex flex-col items-center justify-evenly">
                  <div className="font-semibold text-gray-700 text-xs mb-2">
                    Sort by
                  </div>
                  <div className="flex flex-col justify-evenly h-full w-full">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        className={`w-full text-gray-700 py-2 hover:bg-gray-100 rounded transition text-sm ${
                          sort === option ? "font-bold" : ""
                        }`}
                        onClick={() => {
                          setSort(option);
                          setSortDropdownOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-b mb-4 mt-6 max-w-2xl w-full mx-auto" />

          {/* Tab Content */}
          <div className="max-h-[60vh] overflow-y-auto max-w-2xl w-full mx-auto">
            {activeTab === "Posts" && (
              <PostCard posts={userPosts} scrollCount={8} />
            )}
            {activeTab === "Media" && (
              <PostCard posts={userMedia} scrollCount={8} />
            )}
            {activeTab === "Comments" && (
              <PostCard
                posts={userComments}
                showImage={false}
                showActions={false}
                type="comments"
              />
            )}
            {activeTab === "Upvotes" && (
              <PostCard
                posts={userUpvotes}
                showImage={false}
                highlight="upvote"
                type="upvotes"
              />
            )}
            {activeTab === "Downvotes" && (
              <PostCard
                posts={userDownvotes}
                showImage={false}
                highlight="downvote"
                type="downvotes"
              />
            )}
          </div>
        </div>
      </div>
      {/* Edit Profile or Create Post Modal */}
      <EditModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setModalStep(1);
        }}
        modalTitle={getModalTitle()}
        modalFields={
          modalType === "createPost"
            ? createPostModalFields
            : editProfileModalFields
        }
        formState={modalFormState}
        onChange={handleModalChange}
        onSave={handleModalSave}
        step={modalType === "createPost" ? modalStep : 1}
        onNext={handleModalNext}
        onCreate={handleModalCreate}
      />
    </div>
  );
};

export default Profile;
