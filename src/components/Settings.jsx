import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./home/Navbar";
import settingsData from "../data/settingsData";
import EditModal from "./EditModal"; // ✅ Added

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalFormState, setModalFormState] = useState({});
  const [gender, setGender] = useState("Male");
  const [privacySettings, setPrivacySettings] = useState([]);

  const navigate = useNavigate();

  const openModal = (item) => {
    if (!item.modalFields || item.modalFields.length === 0) {
      console.warn("No modalFields found for item:", item);
      return;
    }
    const initialForm = {};
    item.modalFields?.forEach((field) => {
      initialForm[field.name] = field.value || "";
    });
    setModalData(item);
    setModalFormState(initialForm);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
    setModalFormState({});
  };

  const handleMessageTabClick = () => {
    navigate("/Message");
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModalSave = () => {
    console.log("Form Submitted:", modalFormState);
    closeModal();
  };

  const fetchPrivacySettings = () => {
    setPrivacySettings(settingsData.privacy?.socialInteractions || []);
  };

  const renderGeneralSettings = () => {
    const { general } = settingsData.account;
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">General</h2>
        {general.map((item, index) => (
          <div
            key={index}
            onClick={() => item.type === "action" && openModal(item)}
            className={`flex justify-between items-center mb-4 text-gray-700 ${
              item.type === "action" ? "cursor-pointer hover:text-blue-500" : ""
            }`}
          >
            <span>{item.title}</span>
            {item.type === "dropdown" && item.title === "Gender" ? (
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border rounded px-2 py-1 text-gray-700"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : item.type === "action" ? (
              <span className="font-medium text-blue-500">&gt;</span>
            ) : (
              <span className="font-medium">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderProfileSettings = () => {
    const { profile } = settingsData.account;
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        {profile.map((item, index) => (
          <div
            key={index}
            onClick={() => item.type === "action" && openModal(item)}
            className="flex justify-between items-center mb-4 text-gray-700 cursor-pointer hover:text-blue-500"
          >
            <span>{item.title}</span>
            <span className="font-medium text-blue-500">&gt;</span>
          </div>
        ))}
      </div>
    );
  };

  // ...existing imports and state...

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-2 sm:p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Settings
        </h1>

        {/* Responsive Tabs */}
        <div className="flex flex-nowrap overflow-x-auto gap-2 sm:gap-6 border-b border-gray-300 pb-2 mb-4 sm:mb-6">
          {[
            "account",
            "privacy",
            "preferences",
            "notifications",
            "messages",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "privacy") fetchPrivacySettings();
                if (tab === "messages") navigate("/message");
                if (tab === "notifications") navigate("/Notify");
              }}
              className={`flex-1 min-w-[120px] py-2 px-2 sm:px-4 text-base sm:text-lg font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-4 border-blue-500 text-blue-500 bg-blue-50"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "account" && (
            <>
              {renderGeneralSettings()}
              {renderProfileSettings()}
            </>
          )}

          {activeTab === "privacy" && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Social Interactions
              </h2>
              {privacySettings.length > 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-0">
                  {privacySettings.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row items-start justify-between px-0 py-3 sm:py-4 border-b last:border-b-0"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-base sm:text-lg">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-gray-500 text-xs sm:text-sm mt-1">
                            {item.description}
                          </div>
                        )}
                      </div>
                      {/* Toggle */}
                      {item.type === "toggle" && (
                        <label className="inline-flex items-center mt-2 sm:mt-0 ml-0 sm:ml-4 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={item.value}
                            onChange={() => {
                              setPrivacySettings((prev) =>
                                prev.map((setting, i) =>
                                  i === index
                                    ? { ...setting, value: !setting.value }
                                    : setting
                                )
                              );
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-10 h-5 sm:w-12 sm:h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition-colors duration-300">
                            <div className="absolute left-0 top-0 h-5 w-5 sm:h-6 sm:w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-5 sm:peer-checked:translate-x-6"></div>
                          </div>
                        </label>
                      )}

                      {/* Dropdown */}
                      {item.type === "dropdown" && (
                        <select
                          className="ml-0 sm:ml-4 mt-2 sm:mt-0 py-1 text-gray-700 text-sm sm:text-base"
                          value={item.value}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setPrivacySettings((prev) =>
                              prev.map((setting, i) =>
                                i === index
                                  ? { ...setting, value: newValue }
                                  : setting
                              )
                            );
                          }}
                        >
                          {item.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                      {/* Action */}
                      {item.type === "action" && (
                        <button
                          className="flex items-center ml-0 sm:ml-4 mt-2 sm:mt-0 text-gray-700 hover:text-blue-600 font-medium"
                          onClick={() => openModal(item)}
                        >
                          <span className="ml-2 text-xl">&gt;</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>Loading privacy settings...</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalData && (
        <EditModal
          isOpen={isModalOpen}
          onClose={closeModal}
          modalTitle={modalData?.modalTitle || ""}
          modalFields={modalData?.modalFields || []}
          formState={modalFormState}
          onChange={handleModalChange}
          onSave={handleModalSave}
        />
      )}
    </div>
  );
};

export default Settings;
