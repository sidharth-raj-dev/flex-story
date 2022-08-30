import React from "react";

function LayoutFlex({styleConfig, children}) {
    return (
        <div
            style={{
                height: styleConfig.height,
                width: styleConfig.width,
                display: styleConfig.display,
                flexDirection: styleConfig.flex_direction,
                justifyContent: styleConfig.justify_content,
                alignItems: styleConfig.align_items,
                flexWrap: styleConfig.flex_wrap,
                background: styleConfig.background,
                border: `${styleConfig.border} solid ${styleConfig.border_color}`,
                marginTop: styleConfig.margin_top,
                marginLeft: styleConfig.margin_left,
                marginBottom: styleConfig.margin_bottom,
                marginRight: styleConfig.margin_right,
            }}
        >
            {children}
        </div>
    );
}

export default LayoutFlex;