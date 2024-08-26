export const toggleFullscreen = (element, setIsFullscreen) => {
    if (!document.fullscreenElement) {
      element.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => console.error("Error attempting to enable fullscreen mode:", err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(err => console.error("Error attempting to exit fullscreen mode:", err));
    }
  };
  