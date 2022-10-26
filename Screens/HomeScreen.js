import * as React from 'react';
import { useEffect, useState } from 'react';
//import ImagePicker from 'react-native-image-picker';
import ProjectsFlatList from '../components/FlatList';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const BLUESH = '#3185FC';
const BACKGROUND = '#F5FAFF';
const MILK = '#e7dddcff';
const ORANGE = '#FD6B03';
const SHADOWGREY = '#E8E8E8';
const ALMOSTBLACK = '#020044';
const LIGHTBLUE = '#A8CFFF';

export default function HomeScreen({ route, navigation }) {
  /*const projects = [
    {
      _id: '62d39858699a691e0000df23',
      project_owner: 'MrFares',
      project_name: 'Face_recognition',
      members: [
        {
          user_name: 'MrCont',
          role: 'Photo',
          unit_cost: '8',
          join_date: 'Sun Jul 17 2022 07:33:35 GMT+0200 (CEST)',
        },
        {
          user_name: 'MrCont',
          role: 'Photo',
          unit_cost: '5',
          join_date: 'Sun Jul 17 2022 12:51:40 GMT+0300 (+03)',
        },
      ],
      project_info: {
        project_budget: '22500',
        time_limit: '90',
        project_type: 'Photo',
      },
      data: [],
      _created: '2022-07-17T05:04:24.242Z',
      _changed: '2022-07-17T09:51:42.512Z',
      _createdby: 'api',
      _changedby: 'api',
      _version: 2,
    },
    {
      _id: '62d3dbee699a691e0000e114',
      project_owner: 'MrFares',
      project_name: 'Audiiooo',
      members: [],
      project_info: {
        project_budget: '66',
        time_limit: '3',
        project_type: 'Text',
      },
      data: [],
      _created: '2022-07-17T09:52:46.349Z',
      _changed: '2022-07-17T09:52:46.349Z',
      _createdby: 'api',
      _changedby: 'api',
      _version: 0,
      _recent: true,
    },
    {
      _id: '62d3dbe2699a691e0000e113',
      project_owner: 'MrFares',
      project_name: 'Trstiiign',
      members: [],
      project_info: {
        project_budget: '88',
        time_limit: '85',
        project_type: 'Audio',
      },
      data: [],
      _created: '2022-07-17T09:52:34.283Z',
      _changed: '2022-07-17T09:52:34.283Z',
      _createdby: 'api',
      _changedby: 'api',
      _version: 0,
    },
    {
      _id: '62d3dbdf699a691e0000e112',
      project_owner: 'MrFares',
      project_name: 'Trstiiign',
      members: [],
      project_info: {
        project_budget: '88',
        time_limit: '85',
        project_type: 'Audio',
      },
      data: [],
      _created: '2022-07-17T09:52:31.283Z',
      _changed: '2022-07-17T09:52:31.283Z',
      _createdby: 'api',
      _changedby: 'api',
      _version: 0,
    },
  ];
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
  };*/
  const { user } = route.params;
  const [projects, setprojects] = useState(null);
  const [userr, setuser] = useState(user);
  useEffect(() => {
    const urlinfo =
      'https://dsms0-7e9f.restdb.io/rest/data-scientist?q={"user_name":"' +
      userr.user_name +
      '"}';

    const urlprojects =
      'https://dsms0-7e9f.restdb.io/rest/data-scientist-projects?q={"project_owner":"' +
      userr.user_name +
      '"}';
    var options = {
      method: 'GET',
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': 'ac46ad7c4da469f793cc6cb27c88a941ae25d',
      },
    };

    getinfo();
    getprojects();

    async function getinfo() {
      let response = await fetch(urlinfo, options);
      let res = await response.json();
      setuser(res[0]);
    }
    async function getprojects() {
      let response = await fetch(urlprojects, options);
      let res = await response.json();
      setprojects(res);
     // console.log(res);
    }
  }, [userr, setuser]);

  return (
    <View style={styles.backgroundview}>
      <View style={styles.headerview}>
        <Text style={styles.screenheader}>Home Page</Text>
      </View>
      <View style={styles.infoview}>
        <View style={styles.iconeditview}>
          <Image
            style={styles.profile_icon}
            source={{ uri: userr.profile_image }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile', { user: userr });
            }}>
            <Text style={styles.changephoto}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.usernameview}>
          <Text style={styles.usernametxt}>Name : {userr.user_name}</Text>
        </View>
      </View>
      <View style={styles.projectsview}>
        <Text style={styles.screenheader}>Projects</Text>
        
        <FlatList
          contentContainerStyle={{ alignItems: 'center' }}
          data={projects}
          style={styles.flatliststyle}
          horizontal={false}
          inverted={false}

          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatlistusers}
              onPress={() => {
                navigation.navigate('DashBoard', {
                  user: userr,
                  project: item,
                });
              }}>
              <Text style={styles.projectsinfo}>
                Project Name : {item.project_name}
              </Text>
              <Text style={styles.projectsinfo}>
                Project Budget : {item.project_info.project_budget}
              </Text>
              <Text style={styles.projectsinfo}>
                Project Type : {item.project_info.project_type}
              </Text>
            </TouchableOpacity>
          )}></FlatList>
     
        <View style={styles.addproject}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateProject', { user: userr });
            }}
            style={styles.addprojectbtn}>
            <Text style={styles.changephoto}>Create Project</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  addproject: {
    width: '100%',
    height: '20%',
    backgroundColor:BACKGROUND
    , justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  addprojectbtn: {
    backgroundColor: ALMOSTBLACK,
    width: '55%',
    height: '27%',
    borderRadius: 30,
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
    alignItems: 'center', borderWidth: 0,
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: SHADOWGREY,
    shadowColor: SHADOWGREY,
    shadowOpacity: 1,
    marginBottom: 15,
  },
  flatliststyle: {
    height: '60%',
    backgroundColor: BACKGROUND,
    width: '100%', 

    //alignItems: 'center',
  },
  flatlistusers: {
    backgroundColor: LIGHTBLUE,
    borderWidth: 2.5,
    borderColor: SHADOWGREY,

    width: "100%",
    height: 370,
    shadowOpacity: 0.25,
    shadowColor: SHADOWGREY,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
    margin: '10%',
  },
  projectscards: {
    backgroundColor: ORANGE,
    width: '50%',
    height: '80%',
    borderWidth: 1.5,
    borderColor: SHADOWGREY,
    shadowOpacity: 1,
    shadowColor: SHADOWGREY,
    borderRadius: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_icon: {
    height: 90,
    width: 90,
    //borderRadius: '100%', //  ---- invalid 
    borderWidth: 1.5,
    borderColor: ORANGE,
    margin: 10,
  },
  backgroundview: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND,
  },
  changephoto: {
    textDecorationLine: 'underline',
    color: ORANGE,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
