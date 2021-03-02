import { FaAlignJustify } from "react-icons/fa";
import React from "react";

const TrackerElement = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="tracker-element">
      <div>Tytuł trackera</div>
      <div>Projekt trackera - if exist</div>
      <div>od do godzina</div>
      <div>łączny czas</div>
      <div className="tracker-element__menu">
        <FaAlignJustify
          className="tracker-element__icon"
          onClick={() => setModal(!modal)}
        />
        {modal && (
          <div className="tracker-element__modal">
            <div>Usuń</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackerElement;
