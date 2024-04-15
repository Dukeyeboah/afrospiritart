//Navigation Instructions
const NavigationInstructions = () => {
  return (
    <div className="interface delayed-fade-in">
      {/* Controls */}
      <div className="controls">
        <div className="move">
          <div className="shift">
            <div className=" shiftkey">SHIFT: RUN</div>
          </div>
          <div className="motion">
            <div className="raw">
              <div className={`key`}>⬆️</div>
            </div>
            <div className="raw">
              <div className={`key`}>⬅️</div>
              <div className={`key`}>⬇️</div>
              <div className={`key`}>➡️</div>
            </div>
            <div className="raw">
              <div className="key large">JUMP</div>
            </div>
          </div>
        </div>
        <div className="raw">
          <div className={"key larger"}>Click & Drag Scrren to Rotate </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationInstructions;