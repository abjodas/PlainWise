import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Divider, useTheme } from '@rneui/themed';
import Button from './src/components/button'
import API from './src/api/API';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts, SourceCodePro_300Light, SourceCodePro_700Bold } from '@expo-google-fonts/source-code-pro';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const userId = 1
  const logoImageUrl = "https://playwise.gr/wp-content/uploads/2023/01/PlayWise-1.png";
  const coverImageUrl = "https://png.pngtree.com/thumb_back/fh260/background/20201015/pngtree-gamer-style-cmando-neon-effect-vactor-image_418958.jpg";
  const fbLogo = "https://e7.pngegg.com/pngimages/728/398/png-clipart-mobile-app-computer-icons-facebook-social-media-app-store-facebook-orange-logo.png";
  const [follow, setFollow] = useState("FOLLOW");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const ytLink = "https://www.youtube.com/watch?v=KC0ddYQcnq4&t=1902s";

  let [fontsLoaded] = useFonts({
    SourceCodePro_300Light,
    SourceCodePro_700Bold
  });

  let fontSize = 24;
  let paddingVertical = 6;



  const pressingButton = () => {
    setPressed(!pressed);
  }
  useEffect(() => {
    /* if(data.length == 0){
      fetch(`${API}/userdata/${userId}`).then(response => response.json()).then(json => setData(json))
      console.log("DATA", data.length)
    }
    else{
      console.log(data)
    } */
    const url = `${API}/userdata/${userId}`;
    const fetchUsers = async () => {
      try{
        setIsLoading(true);
        const response = await axios.get(url);
        
        if(response.status == 200){
          setData(response.data);
          console.log(data);
        }else{
          throw new Error("Failed to fetch user data");
        }
      }catch(error){
        console.log(error);
      }
      setIsLoading(false);
      
    }
    if(data.length == 0){

      fetchUsers();
    }
   
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else{
    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection:"row", height: 100}}><Image style={styles.logoImage} source={require('./assets/logo.png')} /></View>
        <View style={styles.cover}><Image style={styles.coverImage} source={{uri: coverImageUrl}} /></View>
        <TouchableOpacity style={styles.profile}><Image style={styles.profileImage} source={require('./assets/profile.png')} /></TouchableOpacity>
        <View style={styles.profileId}><Text style={styles.profileName}>Dragon_Ballz</Text></View>
        <View style={styles.profileId}><Text style={styles.idText}>@UID007</Text></View>
        <View style={styles.profileId}><Text style={styles.desigText}>Game Designation</Text></View>
        <View style={styles.button}><Button name={"FOLLOW"} follow={follow} setFollow={setFollow} /></View>
        <View style={styles.socialMedia}>
          <TouchableOpacity><Image style={{width: 20, height: 20, borderRightWidth: 10, borderColor: "black"}} source={require('./assets/fblogo.png')}/></TouchableOpacity>
          <Divider orientation="vertical" width={1} color={"orange"} />
          <TouchableOpacity><Image style={{width: 25, height: 20, resizeMode: 'contain'}} source={require('./assets/discordlogo.png')}/></TouchableOpacity>
          <Divider orientation="vertical" width={1} color={"orange"} />
          <TouchableOpacity><Image style={{width: 25, height: 20, resizeMode: 'contain'}} source={require('./assets/youtubelogo.png')}/></TouchableOpacity>
          <Divider orientation="vertical" width={1} color={"orange"} />
          <TouchableOpacity><Image style={{width: 20, height: 20}} source={require('./assets/instalogo.png')}/></TouchableOpacity> 
          <Divider orientation="vertical" width={1} color={"orange"} />
          <TouchableOpacity><Image style={{width: 25, height: 20, resizeMode: 'contain'}} source={require('./assets/linkedinlogo.png')}/></TouchableOpacity> 
          </View>
          <View style={styles.userDesc}>
            <View style={{alignItems: 'center'}}>
            <Text style={styles.descText}>500</Text>
            <Text style={styles.descTextSmall}>followers</Text>
            </View>
            
            <View style={{borderRightWidth: 1.5, height: 13, marginTop: 10}}></View>
            <View style={{alignItems: "center"}}>
            <Text style={styles.descText}>200</Text>
            <Text style={styles.descTextSmall}>following</Text>
            </View>
            <View style={{borderRightWidth: 1.5, height: 13, marginTop: 10}}></View>
            <View style={{alignItems: 'center'}}>
            <Image style={styles.clanLogo} source={require('./assets/clan_logo.png')} />
            <Text style={styles.descTextSmall}>clan</Text>
            </View>
          </View>
          <View style={styles.buttonsLayout}>
          <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ff6600"}}><Text style={styles.buttonText}>Posts</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.buttonText}>Social</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.buttonText}>About</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.buttonText}>Gallery</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.buttonText}>Device</Text></TouchableOpacity>
          </View>
          <View style={{backgroundColor: "#e0e0e0", height: 10, width: "100%"}}></View>
        <View style={{backgroundColor: "#e0e0e0", flex: 1, width: "100%", alignItems: "center", height: "100%"}}>
          <View style={{width: "90%", backgroundColor: "white",  borderColor: "#ff6600", borderWidth: 1, borderRadius: 5}}>
              <View style={{flexDirection: "row", backgroundColor: "#f06a23", alignItems: 'center'}}>
                <View style={{flexDirection: "row", width: 200}}>
                <Image style={{width: 50, height: 54}} source={require('./assets/profileimage.png')} />
                <View>
                <Text style={{color: 'white', marginLeft: 5, fontFamily: "SourceCodePro_700Bold"}}>{data.username}</Text>
                <View style={{backgroundColor: 'white', height: 18, width: 150, marginTop: 15, borderRadius: 2}}>
  
                <Text style={{fontFamily: 'SourceCodePro_300Light', fontSize: 10}}>offline</Text>
                </View>
                </View>
                </View>
                <View style={{flex: 1}}>
                <View style={{backgroundColor: "white", flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 3, marginLeft: -2}}>
                  <TouchableOpacity>
                  <Feather name="send" size={13} color="black" />     
                  </TouchableOpacity>
               
                <Text style={{marginLeft: -45, fontSize: 12, fontWeight: "bold"}}>Follow</Text>
                <TouchableOpacity>
                <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                </TouchableOpacity>
                </View>
                
                </View>
                
              </View>
              <View style={{padding: 10}}>
                  <Text>{data.bio}</Text>
                  <Text style={{fontSize: 12, color: "#f06a23"}}>{ytLink}</Text>
                </View>
                <View style={{height: 40, flex: 1, backgroundColor: "#f06a23", justifyContent: "center", flexDirection: "row"}}>
                  <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <FontAwesome name="heart" size={18} color="white" style={{marginLeft: 10}} />
                <Text style={{color: "white", width: 100,alignSelf: 'center', marginLeft: 10}}>5,275 Likes</Text> 
                  </View>
                  <View style={{flexDirection:"row", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <FontAwesome5 name="comment-alt" size={15} color="black" />
                      <Text style={{fontSize: 10, marginRight: 10}}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <Ionicons name="chatbox-ellipses-outline" size={15} color="black" />
                      <Text style={{fontSize: 10, marginRight: 10}}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                    <FontAwesome name="send-o" size={15} color="black" />
                      <Text style={{fontSize: 10}}>Share</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                <View>
                  <View style={{flexDirection: "row"}}>
                    <Text style={{fontWeight: "bold", marginLeft: 4}}>Heading</Text>
                    <Text> this is a text placeholder and will be replaced</Text>
                  </View>
                  <Text style={{marginLeft: 7, fontSize: 12, color: "grey"}}>250 comments</Text>
                  <View style={{flexDirection: "row"}}>
                  <Text style={{fontWeight: "bold", marginLeft: 4}}>Username</Text>
                  <Text> this is the comment by the user</Text>

                  </View>
                  </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  logoImage:{
    width: '100%',
    
    resizeMode: 'contain'
  },
  coverImage:{
    flex: 1,
  },
  cover: {
    width: "100%",
    height: 150
  },
  profile: {
    flexDirection: "row",
    marginTop: -40,
    justifyContent: "center",
    zIndex: 5,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white"
  },
  profileId: {
    flexDirection: "row",
    justifyContent: "center"
  },
  profileName: {
    color: "#ff6600",
    fontWeight: "900",
    fontSize: 18,
  },
  idText: {
    color: "grey",
    fontSize: 10
  },
  desigText: {
    color: 'grey',
    fontSize: 13,
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    justifyContent: 'center'
  },
  socialMedia: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: 'space-evenly',
    backgroundColor: "#ffe6db",
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    padding: 5,
  },
  userDesc: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    alignSelf: 'center',
    width: "80%",
    paddingTop: 5
  },
  descText: {
    fontSize: 18,
    fontWeight: "800",
  },
  descTextSmall: {
    fontSize: 10,
    color: 'grey',
    fontWeight: "600"
  },
  clanLogo: {
    width: 20,
    height: 20
  },
  buttonsLayout: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 5
  },
  buttonText: {
    color: "#ff6600",
    fontWeight: "800"
  }
});
