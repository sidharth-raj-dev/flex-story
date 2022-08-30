import React from "react";

function Card({styleConfig}) {
    return (
        <div 
            style={{
                height: styleConfig.height,
                width: styleConfig.width,
                border: `${styleConfig.border} solid ${styleConfig.border_color}`,
                borderRadius: styleConfig.border_radius,
                background: styleConfig.background,
                marginTop: styleConfig.margin_top,
                marginLeft: styleConfig.margin_left,
                marginBottom: styleConfig.margin_bottom,
                marginRight: styleConfig.margin_right
            }}
        >
            
        </div>
    );
}

export default Card;
