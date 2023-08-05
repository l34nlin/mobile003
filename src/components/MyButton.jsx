import { useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";




const MyButton = ({title,onPressButton}) => {
    const [texto,setTexto]= useState('texto')
    const onPressButton=()=>{
        if(texto=='texto'){
            setTexto('')
        }else If(texto==''){
            setTexto('texto')
        }
    }


 
    return (
        <TouchableOpacity onPress={onPressButton}>
            <view>
                <text>{title}</text>
            </view>
        </TouchableOpacity>

    );
}

export default MyButton;