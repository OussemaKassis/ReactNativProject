import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput  } from 'react-native'
import { CardMusic } from '@my-workspace/my-ui'
import React, { useState } from 'react'

const PlaylistScreen = ({ navigation }) => {
    const [playlist] = useState([{
        name: "Bảy Bảy Một Một",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70, 
        poster : "https://img.freepik.com/free-vector/podcast-poster-template_47987-2203.jpg?w=2000",
        description: 'Jenny Wilson',
    }, {
        name: "Một Cú Lừa",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70,
        poster : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg",
        description: 'Robert Fox',
    },
    {
        name: "Có Chắc Yêu Là Đây",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70,
        poster : "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/02/2a34d8_7379666dccd349fba302ec6114e5990amv2.png?fit=600%2C345&ssl=1",
        description: 'Esther Howard',
    },{
        name: "Muốn Nói Với Em",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70,
        poster : "https://cdn.shopify.com/s/files/1/0969/9128/products/Pink_Floyd_-_Live_At_Pompei_-_Retro_Vintage_Music_Poster_e2e843cf-b707-4e70-b23e-ab3d4db4c955.jpg?v=1570137326",
        description: 'Brooklyn Simmons',
    },{
        name: "example 5",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70,
        poster : "https://t4.ftcdn.net/jpg/03/90/51/33/360_F_390513320_XeE8GnVdATUg9eXQDoe4N3153YG6Fjed.jpg",
        description: 'artist',
    },{
        name: "example 6",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70,
        poster : "https://static.displate.com/857x1200/displate/2021-05-22/103bb940acaf47fc2cfe071a72945b80_9f29d128bc434739891d77d3cac3fab5.jpg",
        description: 'artist',
    }
])
    return (
        
        <View style={{ flex: 1, width: 412, backgroundColor: "#1F1D2B" }}>
            <View style={{ flex: 'none', width: 412, textAlign: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: 700,  textAlign: "center", color: "white", paddingTop: 50 }}>My Project</Text>
            </View>
            <View style={{ flex: 'none', width: 412, textAlign: "center", borderRadius: 17, overflow: 'hidden' }}>
                <TextInput inlineImageRight="username" inlineImagePadding={5} placeholder='Search' placeholderTextColor="white" style={{ flex: 'none', margin: 'auto',  width: 355, borderRadius: 17, backgroundColor: '#252836', marginTop: 30, paddingTop: 15, paddingLeft: 30,paddingBottom: 15, paddingRight: 30}}/>
            </View>

            <View style={{ flex: 'none', width: 412, paddingLeft: 22 }}>
                <Text style={{ fontSize: 24, fontWeight: 700,  textAlign: "left", color: "white", paddingTop: 30 }}>Trending</Text>
            </View>

            <View style={{ flex: 'none', width: 412, display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: 30, gap: 20 }}>
                {playlist.map(p=>{return(
                    <TouchableOpacity onPress={()=>navigation.navigate("Home", {...p})} >
                        <CardMusic title={p.name} description={p.description} posterUrl={p.poster}></CardMusic>
                    </TouchableOpacity>
                )})}
            </View>

            <View style={{ flex: 1, width: 412 }}>
                <Button title='Artiste' onPress={()=> {navigation.navigate('Artiste')}}></Button>
            </View>


            

        </View>
    )
}

export default PlaylistScreen

const styles = StyleSheet.create({})