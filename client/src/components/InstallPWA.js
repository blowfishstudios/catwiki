import React, { useEffect, useState } from "react";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      console.log("PWA install has been triggered :D");
      setSupportsPWA(true);
      setPromptInstall(event);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (event) => {
    event.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <div className="center-btn">
      <button
        className="icon-installable"
        id="setup_button"
        aria-label="Install app"
        title="😃 I'm installable"
        onClick={onClick}
      />
    </div>
  );
};

export default InstallPWA;
