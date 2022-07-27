import React from "react";

const Bubble = ({ pop, style }) => {
    return <div className="bubble" onClick={pop} onTouchStart={pop} style={style}></div>;
};

export default Bubble;