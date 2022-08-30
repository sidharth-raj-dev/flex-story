import React from "react";
import Card from "./../../components/card";
import LayoutFlex from "./../../components/layout-flex";
import config from "./config/styleConfig";

// this composition is made of four card component and one layout component 

const cards = [1,2,3,4];

function LayoutFlexAndCard({
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
                cards.map((number) => <Card styleConfig={config.cardStyleConfig} key={number}/>)
            }
        </LayoutFlex>
    );
}

export default LayoutFlexAndCard;