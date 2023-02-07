import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UpNextButton, RoundButtonMusic, Cover, Circle } from '@my-workspace/my-ui'
import { AntDesign, Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';


import { Video, AVPlaybackStatus } from 'expo-av';


const HomeScreen = ({ navigation, route }) => {
    console.log(route)
    const video = React.useRef(null);

    const [dataPlayer, setDataPlayer] = useState(route.params)
    const [currentDuration, setCurrentDuration] = useState(0)
    const [maxDuration, setMaxDuration] = useState(dataPlayer.duration)
    const [isPlaying, setIsPlaying] = useState(false)
    let interval;
    console.log(dataPlayer)

    const convertSecondToHHMMSS = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        let timeString = '';
        if (hours !== 0) {
            timeString += `${hours.toString().padStart(2, '0')}:`;
        }
        timeString += `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        return timeString;
    }
    const handlePlay = (isPlaying) => {
        setIsPlaying(isPlaying)
        if (isPlaying) {
            video.current.playAsync()
        } else {

           
            video.current.pauseAsync()


        }


    }


    useEffect(() => {

        if (currentDuration >= maxDuration) {
            setIsPlaying(false)
            setCurrentDuration(maxDuration)
        }
        if (currentDuration < 0) {
            setCurrentDuration(0)
        }

    }, [currentDuration])
    useEffect(() => {

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentDuration(oldValue => oldValue + 1)

            }, 1000)
        }

        return () => clearInterval(interval)

    }, [isPlaying])

    return (
        <View style={{ flex: 1, width: 412, backgroundColor: "#c30e3c", justifyContent: 'center', alignItems: 'center' }}>
            <Text>{name}</Text>

            <Video
                ref={video}
                source={{
                    uri: dataPlayer.urlMp4,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
            />

            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' , position: 'relative'}}>

                <RoundButtonMusic
                    backgroundColor="transparent"
                    position="absolute"
                    left= {-120} 
                    top= {-8}
                    size={20}
                    icon={<AntDesign name="left" size={24} color="white" />}
                    onClickButton={() => { navigation.goBack() }}
                />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>Now Playing</Text>
            </View>

            <View style={{ flex: 4 ,marginTop: 20 ,  borderRadius: 151, overflow: 'hidden', flex: 'none', borderColor: "white", borderWidth: 2}}>
                <Circle image="https://cdn.pixabay.com/photo/2022/01/28/17/28/headphones-6975223__340.png"></Circle>
            </View>

            <View style={{ width: 300, marginTop: 30, marginBottom: 20}}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 500, textAlign: 'left' }}>{dataPlayer.name}</Text>
                <Text style={{ color: '#CCCCCC', fontSize: 14, fontWeight: 400, textAlign: 'left' }}>{dataPlayer.description}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Slider
                    value={currentDuration}
                    onValueChange={(value) => { setCurrentDuration(value) }}
                    style={{ width: 300, height: 40 }}
                    minimumValue={0}
                    step={1}
                    maximumValue={maxDuration}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#FDFDFD"
                    thumbTintColor="#FFF"
                />
                <View style={{ flex: 1, minWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(currentDuration)}</Text>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(maxDuration - currentDuration)}</Text>


                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <RoundButtonMusic
                    backgroundColor="transparent"
                    margin={10}
                    icon={<Feather name="chevrons-left" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 10) }}
                    size={38}
                />
                <RoundButtonMusic
                    backgroundColor="transparent"
                    margin={10}
                    icon={<Feather name="chevron-left" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 2) }}
                    size={38}
                /> 
                <RoundButtonMusic
                    backgroundColor="#BCBCBC"
                    margin={10}
                    paddingLeft={5}
                    icon={isPlaying ? <FontAwesome name="pause" size={36} color="#c30e3c" /> : <FontAwesome name="play" size={36} color="#c30e3c" />}
                    onClickButton={() => { handlePlay(!isPlaying) }}
                    size={70}
                /> 
                <RoundButtonMusic
                    backgroundColor="transparent"
                    margin={10}
                    icon={<Feather name="chevron-right" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 2) }}

                    size={38}
                /> 
                <RoundButtonMusic
                    backgroundColor="transparent"
                    margin={10}
                    icon={<Feather name="chevrons-right" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 10) }}
                    size={38}
                />
            </View>
            <View style={{ flex: 'none', padding: 16, alignItems: "center" }}>
                <RoundButtonMusic
                    backgroundColor="transparent"
                    margin={0}
                    transform= "rotate(90deg)"
                    icon={<Feather name="chevron-left" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 2) }}
                    size={24}
                />
                <UpNextButton
                    backgroundColor="transparent"
                    padding={20}
                    borderRadius={80}
                    text="Up Next"
                    textColor="#FFFFFF"
                    type="button"
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})