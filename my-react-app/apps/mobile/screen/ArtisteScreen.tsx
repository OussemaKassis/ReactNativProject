import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { CardMusic } from '@my-workspace/my-ui'
import React, { useState } from 'react'

const ArtisteScreen = () => {

  const [playlist] = useState([{
    name: "Jenny Wilson",
    urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    duration : 70, 
    poster : "https://images.hindustantimes.com/img/2022/05/31/550x309/kk_dies_1654020620972_1654020621077.png",
    description: '694, 856 Followers',
}, {
    name: "Brooklyn Simmons",
    urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    duration : 70,
    poster : "https://images.unsplash.com/photo-1527735095040-147bffb4cede?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    description: '229, 942 Followers',
},
{
    name: "Ariana Grande",
    urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    duration : 70,
    poster : "https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/12/27124120/Ariana-Grande-2.jpg",
    description: '58, 584, 030 Followers',
},{
    name: "Robert Fox",
    urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    duration : 70,
    poster : "https://www.fluentu.com/blog/spanish/wp-content/uploads/sites/2/2017/02/famous-spanish-singers-3.jpg",
    description: '120, 563 Followers',
}])
  return (
    <View style={{ flex: 1, width: 412, backgroundColor: "#1F1D2B" }}>
            <View style={{ flex: 'none', width: 412, textAlign: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: 700,  textAlign: "center", color: "white", paddingTop: 50 }}>My Project</Text>
            </View>
            <View style={{ flex: 'none', width: 412, textAlign: "center", borderRadius: 17, overflow: 'hidden' }}>
                <TextInput inlineImageRight="username" inlineImagePadding={5} placeholder='Search' placeholderTextColor="white" style={{ flex: 'none', margin: 'auto',  width: 355, borderRadius: 17, backgroundColor: '#252836', marginTop: 30, paddingTop: 15, paddingLeft: 30,paddingBottom: 15, paddingRight: 30}}/>
            </View>

            <View style={{ flex: 'none', width: 412, paddingLeft: 22 }}>
                <Text style={{ fontSize: 24, fontWeight: 700,  textAlign: "left", color: "white", paddingTop: 30 }}>Artiste</Text>
            </View>

            <View style={{ flex: 'none', width: 412, display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 30, gap: 20 }}>
                {playlist.map(p=>{return(
                    <TouchableOpacity >
                        <CardMusic title={p.name} description={p.description} posterUrl={p.poster}></CardMusic>
                    </TouchableOpacity>
                )})}
            </View>

        </View>
  )
}

export default ArtisteScreen

const styles = StyleSheet.create({})