import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UpNextButton, RoundButtonMusic, Cover } from '@my-workspace/my-ui'
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
        <View style={{ flex: 1, width: 412, backgroundColor: "#1F1D2B", justifyContent: 'center', alignItems: 'center' }}>
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

            <View style={{ flex: 4 , borderRadius: 20, overflow: 'hidden', flex: 'none'}}>
                <Cover
                    borderRadius={20}
                    imageUrl={dataPlayer.poster}
                />
            </View>

            <View style={{ width: 300, marginTop: 30, marginBottom: 35}}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 500, textAlign: 'left' }}>{dataPlayer.name}</Text>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: 400, textAlign: 'left' }}>{dataPlayer.description}</Text>
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
                <View style={{ flex: 1, minWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'  }}>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(currentDuration)}</Text>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(maxDuration - currentDuration)}</Text>


                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                
                <RoundButtonMusic
                    backgroundColor="#2F3142"
                    margin={10}
                    icon={<Feather name="chevron-left" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 2) }}
                    size={38}
                /> 
                <RoundButtonMusic
                    backgroundColor="#2F3142"
                    margin={10}
                    icon={isPlaying ? <FontAwesome name="pause" size={36} color="white" /> : <FontAwesome name="play" size={36} color="white" />}
                    onClickButton={() => { handlePlay(!isPlaying) }}
                    size={70}
                /> 
                <RoundButtonMusic
                    backgroundColor="#2F3142"
                    margin={10}
                    icon={<Feather name="chevron-right" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 2) }}

                    size={38}
                /> 

            </View>
            <View style={{ flex: 'none', padding:0, alignItems: "center" , borderBottomColor: "white", borderBottomWidth: 1, marginBottom:20}}>
                
                <UpNextButton
                    backgroundColor="transparent"
                    padding={0}
                    borderRadius={80}
                    text="Up Next"
                    textColor="#FFFFFF"
                    type="button"
                    decorationLine="underline"
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})