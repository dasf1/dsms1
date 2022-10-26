import * as React from 'react';
import { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';

const BLUESH = '#3185FC';
const BACKGROUND = '#F5FAFF';
const MILK = '#e7dddcff';
const ORANGE = '#FD6B03';
const SHADOWGREY = '#E8E8E8';
const ALMOSTBLACK = '#020044';

export default function InviteScreen({route, navigation }) {
  
  
  const { user,project } = route.params;
  
  const [searched_users, set_search_users] = useState(null);
  

  return (
    <View style={styles.backgroundview}>
      <View style={styles.view_goback}>
        <View style={{ width: '20%' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('./assets/GoBackArrow.png')}
              style={styles.gobackarrow}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '50%', marginRight: '20%' }}>
          <Text style={styles.screenheader}>Invite Page</Text>
        </View>
      </View>
      <TextInput
        style={styles.txtinput}
        onChangeText={(searching) => {
          const url =
            'https://dsms0-7e9f.restdb.io/rest/contributors?q={ "user_name": {"$regex" :"' +
            searching +
            '"}}';
          var options = {
            method: 'GET',
            headers: {
              'cache-control': 'no-cache',
              'x-apikey': 'ac46ad7c4da469f793cc6cb27c88a941ae25d',
            },
          };
          
          if (searching.length != '') {
            getdata();
          } else {
            set_search_users(null);
          }

          async function getdata() {
            let res = await fetch(url, options);

            let data = await res.json();

            set_search_users(data);
          }
        }}
        placeholderTextColor="grey"
        placeholder="Search For a User . ."></TextInput>

      <FlatList
        style={styles.flatliststyle}
        data={searched_users}
        horizontal={false}
        inverted={false}
        renderItem={({ item }) => (
          
          <TouchableOpacity onPress={()=>{
            navigation.navigate('InviteInProfile',{owner:user , visited : item , project:project})
          }} style={styles.flatlistusers}>
          <Image style={styles.usericon} source={{uri : item.profile_image}}/>
            <Text style={styles.btntxt}>{item.user_name}</Text>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  btntxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    margin: '2%',
  },
  usericon: {
    height: 50,
    width: 50,
    borderRadius: '100%',
    borderColor: ORANGE,
    marginRight: '10%',
  },

  flatlistusers: {
    backgroundColor: BLUESH,
    flexDirection: 'row',
    width: 333,
    height: 100,
    borderWidth: 1.5,
    borderColor: 'white',
    shadowOpacity: 1,
    shadowColor: SHADOWGREY,
    borderRadius: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },

  flatliststyle: {
    height: '40%',
    backgroundColor: SHADOWGREY,
    width: '90%',
    borderBottomRightRadius: '30%',
    borderBottomLeftRadius: '30%',
    borderWidth: 1.5,
    borderColor: SHADOWGREY,
    shadowColor: SHADOWGREY,
    shadowOpacity: 1,
    alignItems: 'center',
  },
  text_error: {
    color: ORANGE,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  btn: {
    marginTop: '5%',
    width: '50%',
    backgroundColor: BLUESH,
    height: 50,
    borderRadius: 22,

    justifyContent: 'center',
  },
  box: {
    marginTop: 0,
    marginBottom: '5%',
    fontSize: 16,
    alignItems: 'center',
    width: '60%',
    backgroundColor: 'white',
    height: 55,
    borderRadius: 40,
    borderWidth: 1.5,
    color: ALMOSTBLACK,
    shadowColor: SHADOWGREY,
    shadowOpacity: 1,
  },
  txttypesstyle: {
    color: ALMOSTBLACK,
    textAlign: 'center',
    fontSize: 13,
    paddingLeft: '19%',
  },
  createprojecttxt: {
    color: ALMOSTBLACK,

    textAlign: 'center',
    fontSize: 18,
    margin: '2%',
  },
  inputsview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 2.5,
  },
  txtinput: {
    fontSize: 16,
    textAlign: 'center',
    width: '90%',
    backgroundColor: 'white',
    height: 55,
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
    borderWidth: 3,
    color: ALMOSTBLACK,
    borderColor: ORANGE,
    shadowColor: SHADOWGREY,
    shadowOpacity: 1,
  },
  gobackarrow: {
    height: 40,
    width: 40,
    paddingRight: '20%',
  },
  view_goback: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 0.5,
  },
  addproject: {
    width: '100%',
    height: '20%',
    backgroundColor: BACKGROUND,
    borderRadius: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  addprojectbtn: {
    backgroundColor: BACKGROUND,
    width: '55%',
    height: '25%',
    borderRadius: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectsinfo: {
    color: ALMOSTBLACK,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  projectsview: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameview: {
    width: '60%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernametxt: {
    color: ALMOSTBLACK,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconeditview: {
    width: '20%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    marginBottom: '5%',
  },
  screenheader: {
    color: ALMOSTBLACK,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  infoview: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '15%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: '30%',
    borderWidth: 1,
    borderColor: SHADOWGREY,
    shadowColor: SHADOWGREY,
    shadowOpacity: 1,
    marginBottom: 15,
  },
  projectscards: {
    backgroundColor: ORANGE,
    width: 300,
    height: 200,
    borderWidth: 1.5,
    borderColor: SHADOWGREY,
    shadowOpacity: 1,
    shadowColor: SHADOWGREY,
    borderRadius: '30%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_icon: {
    height: 90,
    width: 90,
    borderRadius: '100%',
    borderWidth: 1.5,
    borderColor: ORANGE,
    margin: 10,
  },
  backgroundview: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND,
    paddingBottom: '25%',
  },
  actiontxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
