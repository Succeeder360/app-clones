import { Animated } from "react-native";
import { useRef } from "react";

const scrollFunction = async (info, flatListRef) => {
    await wait();
    flatListRef.current?.scrollToIndex({
        index: info.index,
        animated: true,
    });
};


const handleOnscroll = ({event, scrollX}) => {
   
    Animated.event(
        [{
            nativeEvent:{
                contentOffset:{
                    x:scrollX
                }
            }
        }
    ],
       
{
    useNativeDriver:false
}
       
    )(event)


}


export {scrollFunction, handleOnscroll};