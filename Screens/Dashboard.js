import * as React from 'react';
import { useEffect, useState } from 'react';
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

export default function DashBoard({ route, navigation }) {
  // const { user, project } = route.params;
  const userr = {
    _id: '62d39746699a691e0000dede',
    user_name: 'MrFares',
    password: '1',
    email: 'Example@gmail.com',
    balance: 0,
    gender: 'male',
    profile_image:
      'file:///var/mobile/Containers/Data/Application/03A4BB4A-5DE3-4DF2-A944-8F389FC9557D/Library/Caches/ExponentExperienceData/%2540erfoewrfjoejlsndswjdiohfedw%252Fdsms/ImagePicker/15CFDD25-2799-4D38-BD0C-9CC525E6C548.jpg',
    _created: '2022-07-17T04:59:50.888Z',
    _changed: '2022-07-17T06:26:27.829Z',
    _createdby: 'api',
    _changedby: 'api',
    _version: 3,
    keep_me_logined: false,
  };
  const project = {
    "_id": "62d39858699a691e0000df23",
    "project_owner": "MrFares",
    "project_name": "Face_recognition",
    "members": [
      {
        "user_name": "MrCont",
        "role": "Photo",
        "unit_cost": "8",
        "join_date": "Sun Jul 17 2022 07:33:35 GMT+0200 (CEST)"
      },
      {
        "user_name": "MrCont",
        "role": "Photo",
        "unit_cost": "5",
        "join_date": "Sun Jul 17 2022 12:51:40 GMT+0300 (+03)"
      }
    ],
    "project_info": {
      "project_budget": "22500",
      "time_limit": "90",
      "project_type": "Photo"
    },
    "data": [],
    "_created": "2022-07-17T05:04:24.242Z",
    "_changed": "2022-07-17T09:51:42.512Z",
    "_createdby": "api",
    "_changedby": "api",
    "_version": 2
  }
  return (
    <View style={styles.backgroundview}>
      <View style={styles.headerview}>

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
            
            <Text style={styles.screenheader}>DashBoard</Text>
          </View>

        </View>


        <TouchableOpacity
          onPress={() => {
            navigation.navigate('InviteScreen', {
              user: userr,
              project: project,
            });
          }}
          style={styles.btn}></TouchableOpacity>
        <FlatList style={styles.pagebody}>
          <View style={{ backgroundColor: 'black', width: "100%", height: "100%" }}></View>
        </FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pagebody: {
    backgroundColor: 'red',
    height: "1000%",
    width: "100%",
    //justifyContent:"center",
    //alignItems:"cetner"
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
    marginTop: 0,
    marginBottom: '5%',
    fontSize: 16,
    textAlign: 'center',
    width: '85%',
    backgroundColor: 'white',
    height: 55,
    borderRadius: 40,
    borderWidth: 1.5,
    color: ALMOSTBLACK,
    borderColor: SHADOWGREY,
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
    // borderRadius: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  addprojectbtn: {
    backgroundColor: BACKGROUND,
    width: '55%',
    height: '25%',
    // borderRadius: '60%',
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
    // borderRadius: '30%',
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
    // borderRadius: '30%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_icon: {
    height: 90,
    width: 90,
    //borderRadius: '100%',
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
  },
  actiontxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
