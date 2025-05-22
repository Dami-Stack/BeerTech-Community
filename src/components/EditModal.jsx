import React from "react";
import { FaCamera } from "react-icons/fa";

const EditModal = ({
  isOpen,
  onClose,
  modalTitle,
  modalFields,
  formState,
  onChange,
  onSave,
  step = 1,
  onNext,
  onCreate,
  onBack,
}) => {
  if (!isOpen) return null;

  const isProfilePictureModal = modalTitle === "Edit Profile Picture";
  const isCreateCommunity =
    modalTitle === "Tell us about your community" ||
    modalTitle === "Style your community";

  // Step 1: Community name/desc
  if (isCreateCommunity && step === 1) {
    const name = formState.communityName || "";
    const desc = formState.description || "";
    const canProceed = name.trim().length > 0 && desc.trim().length > 0;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="bg-white rounded-xl p-6 w-[95%] max-w-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-2">{modalTitle}</h2>
          <p className="text-xs text-gray-500 mb-6">
            A name and description help people understand what your community is
            all about
          </p>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (canProceed) onNext();
            }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="communityName" className="sr-only">
                  Community name
                </label>
                <input
                  type="text"
                  name="communityName"
                  id="communityName"
                  placeholder="Community name*"
                  value={name}
                  onChange={onChange}
                  maxLength={21}
                  required
                  className="border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-xs text-gray-400 text-right">
                  {name.length}/21
                </span>
                <label htmlFor="description" className="sr-only">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Description*"
                  value={desc}
                  onChange={onChange}
                  maxLength={300}
                  required
                  className="border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mt-2"
                  rows={5}
                />
                <span className="text-xs text-gray-400 text-right">
                  {desc.length}/300
                </span>
              </div>
              {/* Preview Card */}
              <div className="flex-1 flex flex-col justify-between border rounded-xl p-4 bg-gray-50 min-h-[120px]">
                <div>
                  <div className="font-semibold text-sm">Community name</div>
                  <div className="text-xs text-gray-400">
                    1 member • 1 online
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {formState.communityName
                    ? formState.communityName
                    : "Your community description"}
                </div>
              </div>
            </div>
            {/* Stepper dots */}
            <div className="flex gap-2 items-center mt-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-1 text-sm md:text-lg bg-gray-100 rounded-full hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!canProceed}
                className={`px-5 text-sm md:text-lg rounded-full ${
                  canProceed
                    ? "bg-blue-600 text-white hover:bg-blue-800"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Step 2: Style your community
  if (isCreateCommunity && step === 2) {
    const name = formState.communityName || "Community name";
    const desc = formState.description || "A community for ...";
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div className="bg-white rounded-xl p-6 w-[95%] max-w-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Style your community</h2>
          <p className="text-xs text-gray-500 mb-6">
            Adding visual flair will help establish your community’s culture
          </p>
          {/* Community Preview Card */}
          <div className="border rounded-xl p-4 bg-gray-50 flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center font-bold text-lg text-yellow-700">
              {name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-xs text-gray-400">1 member • 1 online</div>
              <div className="text-xs text-gray-500 mt-1">{desc}</div>
            </div>
          </div>
          {/* Banner and Icon Upload */}
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-center justify-between">
              <span>Banner</span>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                // onClick={handleBannerUpload}
                disabled
              >
                <FaCamera /> Add
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span>Icon</span>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                // onClick={handleIconUpload}
                disabled
              >
                <FaCamera /> Add
              </button>
            </div>
          </div>
          {/* Stepper dots */}
          <div className="flex gap-2 items-center mt-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-black" />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-1 text-sm md:text-lg bg-gray-100 rounded-full hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onCreate}
              className="px-5 text-sm md:text-lg image-background text-white rounded-full cursor-not-allowed"
              disabled
            >
              Create community
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default: Profile picture modal
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-6 text-center">{modalTitle}</h2>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            onSave();
          }}
        >
          {modalFields.map((field) => {
            // Show current image
            if (field.type === "image") {
              return (
                <div
                  key={field.name}
                  className="flex flex-col items-center gap-4"
                >
                  {isProfilePictureModal ? (
                    <div className="relative w-24 h-24">
                      <img
                        src={
                          formState[field.name]
                            ? typeof formState[field.name] === "string"
                              ? formState[field.name]
                              : URL.createObjectURL(formState[field.name])
                            : field.value
                        }
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full border"
                      />
                      <label htmlFor="profileImage">
                        <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full shadow cursor-pointer">
                          <FaCamera className="text-gray-600 text-sm" />
                        </div>
                      </label>
                    </div>
                  ) : (
                    <img
                      src={
                        formState[field.name] &&
                        typeof formState[field.name] === "string"
                          ? formState[field.name]
                          : field.value
                      }
                      alt="Banner"
                      className="w-full h-32 object-cover rounded-md border"
                    />
                  )}
                </div>
              );
            }

            // Upload new file
            if (field.type === "file") {
              return (
                <div key={field.name} className="hidden">
                  <input
                    type="file"
                    accept="image/*"
                    name={field.name}
                    id={field.name}
                    onChange={onChange}
                  />
                </div>
              );
            }

            // Textarea support
            if (field.type === "textarea") {
              return (
                <div key={field.name} className="flex flex-col gap-1">
                  <label htmlFor={field.name} className="text-sm font-medium">
                    {field.label}
                  </label>
                  <textarea
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    value={formState[field.name] || ""}
                    onChange={onChange}
                    maxLength={field.maxLength}
                    required={field.required}
                    className="border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={5}
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{field.helper}</span>
                    <span>
                      {(formState[field.name] || "").length}
                      {field.maxLength ? `/${field.maxLength}` : ""}
                    </span>
                  </div>
                </div>
              );
            }

            // Generic field (text, etc)
            return (
              <div key={field.name} className="flex flex-col gap-1">
                <label htmlFor={field.name} className="text-sm font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  value={formState[field.name] || ""}
                  onChange={onChange}
                  maxLength={field.maxLength}
                  required={field.required}
                  className="border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {field.helper && (
                  <span className="text-xs text-gray-400">{field.helper}</span>
                )}
                {field.maxLength && (
                  <span className="text-xs text-gray-400 text-right">
                    {(formState[field.name] || "").length}/{field.maxLength}
                  </span>
                )}
              </div>
            );
          })}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-1 text-sm md:text-lg bg-gray-100 rounded-full hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 text-sm md:text-lg bg-blue-600 text-white rounded-full hover:bg-blue-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
