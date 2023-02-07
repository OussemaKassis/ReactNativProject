import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type UpNextButtonProps = {
    backgroundColor: string
    textColor: string
    borderRadius: string
    padding: number,
    text: string
    type: 'link' | 'button'
}

const UpNextButton: React.FC<UpNextButtonProps> = (props) => {
    const { backgroundColor, textColor, borderRadius, padding, text, type } = props

    const styleComponent = {
       container : type =='link' ? {} : { backgroundColor : backgroundColor, padding: padding, borderRadius: borderRadius},
       text: type =='link' ? {  borderBottomColor : backgroundColor , borderBottomWidth : 2 } :{}

    }
    return (
        <View>
            <TouchableOpacity style={styleComponent.container}>
                <Text style={[styleComponent.text , { color : textColor } ]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpNextButton

const styles = StyleSheet.create({})