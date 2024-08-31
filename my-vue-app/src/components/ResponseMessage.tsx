import { useEffect, useState } from "react";
import "../Css/responseMessage.css";

interface MessageProps {
  messageError?: string;
  messageOk?: string;
}

const ResponseMessage = ({ messageError, messageOk }: MessageProps) => {
  const [displayMessage, setDisplayMessage] = useState<string | undefined>(undefined);
  const [displayClass, setDisplayClass] = useState<string>("");

  useEffect(() => {
    const messageToShow = messageOk || messageError;

    if (messageToShow) {
      const timeout = setTimeout(() => {
        setDisplayMessage(messageToShow);
        setDisplayClass(messageOk ? "response-ok" : "response-error");
      }, 500);

      return () => clearTimeout(timeout);

    } else {
      setDisplayClass("");
    }
  }, [messageError, messageOk]);

  return (
    <>
      {displayMessage && (
        <div className={displayClass}>
          <h2>{displayMessage}</h2>
        </div>
      )}
    </>
  );
};

export default ResponseMessage;
