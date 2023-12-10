import React, { useEffect, useState } from 'react';

const Exam = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [exitConfirmation, setExitConfirmation] = useState(false);

  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', disableContextMenu);

    const disableKeyboardShortcuts = (e) => {
      e.preventDefault();
    };
    document.addEventListener('keydown', disableKeyboardShortcuts);

    const disableNavigation = () => {
      window.onbeforeunload = () => {
        return exitConfirmation ? null : 'Are you sure you want to leave?';
      };
    };
    disableNavigation();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is not visible (loses focus)
        console.log('Tab lost focus');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      window.onbeforeunload = null;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [exitConfirmation]);

  const enterFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const handleExitFullscreen = () => {
    openModal();
  };

  const handleConfirmExit = () => {
    setExitConfirmation(true);
    closeModal();
    exitFullscreen();
  };

  return (
    <div>
      <button onClick={enterFullscreen}>Enter Fullscreen</button>
      <h1>Welcome to Kiosk Mode!</h1>
      <button onClick={handleExitFullscreen}>Exit Fullscreen</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Do you really want to exit fullscreen?</p>
            <button onClick={handleConfirmExit}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exam;
