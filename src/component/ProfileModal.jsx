import React, { useState } from 'react';

const ProfileModal = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(true)}>
        Open Profile
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-bg fixed inset-0 bg-black opacity-25"></div>
          <div className="modal-content bg-white p-8 rounded-lg text-center z-50">
            <span className="close absolute top-0 right-0 p-4 cursor-pointer" onClick={closeModal}><button className=' bg-red-500 text-white p-2 rounded-sm font-bold text-xl'>Close</button></span>
            <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
            <p><strong>Name:</strong> {props.name}</p> {/* Replace with actual name */}
            <p><strong>LinkedIn:</strong> <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn Profile</a></p> {/* Replace with actual LinkedIn profile URL */}
            <p><strong>Email:</strong>{props.email}</p> {/* Replace with actual email address */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
