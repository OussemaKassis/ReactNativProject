import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type UpNextButtonProps = {
    backgroundColor: string
    textColor: string
    borderRadius: string
    textDecorationL: string
    padding: number,
    decorationLine: string
    text: string
    type: 'link' | 'button'
}

const UpNextButton: React.FC<UpNextButtonProps> = (props) => {
    const { backgroundColor, textColor, borderRadius, padding, text, type,textDecorationL,decorationLine } = props

    const styleComponent = {
       container : type =='link' ? {} : { backgroundColor : backgroundColor, padding: 0, borderRadius: borderRadius},
       text: type =='link' ? {  borderBottomColor : backgroundColor , borderBottomWidth : 2,  textDecorationColor: textDecorationL, textDecorationLine: decorationLine } :{}

    }
    return (
        <View>
            <TouchableOpacity style={styleComponent.container}>
                <Text style={[styleComponent.text , { color : textColor} ]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpNextButton

const styles = StyleSheet.create({})