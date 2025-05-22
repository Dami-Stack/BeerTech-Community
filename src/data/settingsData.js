import femi from "../assets/profile.png";
import banner from "../assets/banner.png";
// src/data/settingsData.js

const settingsData = {
  account: {
    general: [
      {
        title: "Email Address",
        type: "action",
        action: "editEmailAddress",
        modalTitle: "Edit Email Address",
        modalFields: [
          {
            label: "Current Email Address",
            name: "emailCurrent",
            type: "text",
            value: "femifalana@ng.ab-inbev.com",
            disabled: true,
          },
          {
            label: "New Email Address",
            name: "email",
            type: "email",
            placeholder: "Enter new email address",
          },
        ],
      },
      {
        title: "Gender",
        type: "dropdown",
        value: "Male",
      },
    ],
    profile: [
      {
        title: "Edit Display Name",
        type: "action",
        action: "editDisplayName",
        modalTitle: "Edit Display Name",
        modalFields: [
          {
            label: "Current Display Name",
            name: "displayNameCurrent",
            type: "text",
            value: "Femi Falana",
            disabled: true,
          },
          {
            label: "New Display Name",
            name: "displayName",
            type: "text",
            placeholder: "Enter new display name",
          },
        ],
      },

      {
        title: "Edit Profile Picture",
        type: "action",
        action: "editProfilePicture",
        modalTitle: "Edit Profile Picture",
        modalFields: [
          {
            type: "image",
            name: "profileImageCurrent",
            value: femi, // this becomes the key to map the image inside the modal
            disabled: true,
          },
          {
            label: "Upload New Profile Picture",
            name: "profileImage",
            type: "file",
          },
        ],
      },

      {
        title: "About Description",
        type: "action",
        action: "editAboutDescription",
        modalTitle: "Edit Description",
        modalFields: [
          {
            label: "Company role",
            name: "aboutDescriptionCurrent",
            type: "text",
            value: "Software Engineer",
            disabled: true,
          },
          {
            label: "Edit Bio",
            name: "aboutDescription",
            type: "text",
            placeholder: "Enter new bio",
          },
        ],
      },

      {
        title: "Edit Banner Picture",
        type: "action",
        action: "editBannerPicture",
        modalTitle: "Edit Banner Picture",
        modalFields: [
          {
            type: "image",
            name: "bannerImageCurrent",
            value: banner,
            disabled: true,
          },
          {
            label: "Upload New Banner Picture",
            name: "bannerImage",
            type: "file",
          },
        ],
      },
    ],
  },
  privacy: {
    socialInteractions: [
      {
        title: "Allow People to Follow You",
        type: "toggle",
        value: true,
        description:
          "Let people follow you to see your profile posts in their home feed",
      },
      {
        title: "Who Can Send You Inbox Messages",
        type: "dropdown",
        value: "Everyone",
        options: ["Everyone", "Followers Only", "No One"],
        modalFields: [
          {
            label: "Who can send you inbox messages?",
            name: "inboxMessages",
            type: "select",
            options: ["Everyone", "Followers Only", "No One"],
            value: "Everyone",
          },
        ],
        modalTitle: "Inbox Message Settings",
      },
      {
        title: "Allow Chat Requests From",
        type: "dropdown",
        value: "Everyone",
        options: ["Everyone", "Followers Only", "No One"],
        modalFields: [
          {
            label: "Allow chat requests from",
            name: "chatRequests",
            type: "select",
            options: ["Everyone", "Followers Only", "No One"],
            value: "Everyone",
          },
        ],
        modalTitle: "Chat Request Settings",
      },
      {
        title: "Blocked Accounts",
        type: "action",
        action: "manageBlockedAccounts",
        modalTitle: "Blocked Accounts",
        modalFields: [
          // Add fields as needed for your modal
        ],
      },
      {
        title: "Show Active Communities",
        type: "toggle",
        value: true,
      },
    ],
  },
};

export default settingsData;
