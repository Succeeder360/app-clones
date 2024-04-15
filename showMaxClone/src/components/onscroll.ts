import { Animated } from "react-native";
import { useRef } from "react";

const scrollFunction = async (info, flatListRef) => {
    await wait();
    flatListRef.current?.scrollToIndex({
        index: info.index,
        animated: true,
    });
};




export {scrollFunction};