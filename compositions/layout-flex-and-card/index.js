import React from "react";
import Card from "./../../components/card";
import LayoutFlex from "./../../components/layout-flex";
import config from "./config/styleConfig";

// this composition is made of four card component and one layout component 

function LayoutFlexAndCard({
    cards_quantity,
    flex_direction,
    justify_content,
    align_items,
    flex_wrap
}) {
    return(
        <LayoutFlex styleConfig={
            {...config.layoutFlexStyleConfig,
                flex_direction,
                justify_content,
                align_items,
                flex_wrap
            }
        }>
            {
                [...Array(Number(cards_quantity)).keys()]
                    .map((number) => <Card styleConfig={config.cardStyleConfig} key={number}/>)
            }
        </LayoutFlex>
    );
}

export default LayoutFlexAndCard;