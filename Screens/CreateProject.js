import React, { Component, useState } from 'react';
import * as EmailValidator from 'email-validator';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements'

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Image, ScrollView
} from 'react-native';

const BLUESH = '#3185FC';
const BACKGROUND = '#F5FAFF';
const MILK = '#e7dddcff';
const ORANGE = '#FD6B03';
const SHADOWGREY = '#E8E8E8';
const ALMOSTBLACK = '#020044';

export default function CreateProject({ navigation, route }) {
  const { user } = route.params;
  const [userr, setuser] = useState(user);

  const types = [
    { label: 'Photo', value: 'Photo' },
    { label: 'Video', value: 'Video' },
    { label: 'Text', value: 'Text' },
    { label: 'Audio', value: 'Audio' },
  ];

  const [projectTypes, setProjectType] = useState({ Photo: false, Video: false, Text: false, Audio: false });

  const [project_name, set_project_name] = useState(null);
  const [project_budget, set_project_budget] = useState(null);
  const [project_time, set_project_time] = useState(null);
  const [project_type, set_project_type] = useState(null);

  const [vaild_name, setvaild_name] = useState(false); //for valaditon
  const [vaild_budget, setvaild_budget] = useState(false);
  const [vaild_time, setvaild_time] = useState(false);
  const [valid_type, setvaild_type] = useState(false);
  const [error, set_error] = useState(null);


  

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
          <Text style={styles.screenheader}>Create Project</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '10%',
          width: '100%',
          marginBottom: '5%',
        }}>
        <Text style={styles.text_error}>{error}</Text>
      </View>

      <View style={styles.inputsview}
      
      >
        <TextInput
          onChangeText={(name) => {
            var vildate = new RegExp('^\\w[\\w.]{6,14}\\w$');
            if (name.match(vildate)) {
              setvaild_name(true);
              set_project_name(name);
              set_error(null);
            } else {
              set_error('Project Name must be 8 - 14 length');
            }
          }}
          placeholderTextColor="grey"
          style={styles.txtinput}
          placeholder="Project Name"
          value={project_name}></TextInput>

        <TextInput
          placeholderTextColor="grey"
          style={styles.txtinput}
          placeholder={'Project Budget'}
          onChangeText={(budget) => {
            var vildate = new RegExp('[1-9]d{0,5}');
            if (budget.match(vildate)) {
              setvaild_budget(true);
              set_project_budget(budget);
              set_error(null);
            } else {
              set_error('Project Budget must be a Numeric Value');
            }
          }}
          keyboardType={'number-pad'}></TextInput>

        <TextInput
          placeholderTextColor="grey"
          style={styles.txtinput}
          placeholder={'Project Duration in Days'}
          onChangeText={(time) => {
            var vildate = new RegExp('[1-9]d{0,5}');
            if (time.match(vildate)) {
              setvaild_time(true);
              set_project_time(time);
              set_error(null);
            } else {
              set_error('Project Duration must be a Numeric Value');
            }
          }}
          keyboardType={'number-pad'}></TextInput>

        <View>
          <Text style={styles.createprojecttxt}>Project Type</Text>
        </View>
        

        <View style={styles.CheckboxContainer} >
          



        </View>
        


        <RadioButtonRN
             // animationTypes={['pulse', 'shake']}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60%'
              }}
             
              box={true}
              activeColor={ORANGE}
              deactiveColor={SHADOWGREY}
              boxStyle={styles.box}
              data={types}
              textStyle={styles.txttypesstyle}
              selectedBtn={(type) => {
                set_project_type(type.value);
                setvaild_type(true);
              }}/>




        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20%',
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {


              const url =
                'https://dsms0-7e9f.restdb.io/rest/data-scientist-projects';

              var options = {
                method: 'POST',

                headers: {
                  'cache-control': 'no-cache',
                  'x-apikey': 'ac46ad7c4da469f793cc6cb27c88a941ae25d',
                  'content-type': 'application/json',
                },

                body: JSON.stringify({
                  project_owner: userr.user_name,
                  project_name: project_name,
                  project_info: {
                    project_budget: project_budget,
                    time_limit: project_time,
                    project_type: project_type,
                  },
                  members: [],
                  data: [],
                }),
                json: true,
              };
              if (
                vaild_name === true &&
                vaild_time === true &&
                vaild_budget === true && valid_type
              ) {
                //uploadproject();
                /*
                if(
                  projectTypes.Audio ||  projectTypes.Video || projectTypes.Text ||projectTypes.Photo
                ){

                  const projectTypesLIST = [];

                  Object.keys(projectTypes).forEach(key => {
                      if(projectTypes[key]){
                         // setPtype([...Ptypes,key])
                         projectTypesLIST.push(key+ ", ")
                      
                  }
              
                  })

                  const info = {
                    project_budget: project_budget,
                    time_limit: project_time,
                    project_type:projectTypesLIST
                  }
                  */
                 const info = {
                    project_budget: project_budget,
                    time_limit: project_time,
                    project_type:project_type
                  }

               navigation.navigate('getRoles',{ user: userr,Types:projectTypes,ProjectInfo:info,projectname:project_name})
               
                
              } else if (project_name == null) {
                set_error('Enter Project Name');
              } else if (project_budget == null) {
                set_error('Enter Project Budget');
              } else if (project_time == null) {
                set_error('Enter Project Duration');
              } else if (project_type == null) {
                set_error('Enter Project Type');
              } else {
                set_error('Fill All The Fileds');
              }

              async function uploadproject() {
                try {
                  let res = await fetch(url, options);
                  let jsondata = await res.json();
                  console.log(
                    'The User : ' + userr.user_name + ' Create a New PROJECT'
                  );
                  console.log(Date());
                  navigation.navigate('Home', { user: userr });
                } catch (error) {
                  alert(error);
                }
              }
            }}>
            <Text style={styles.actiontxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}






const styles = StyleSheet.create({
  text_error: {
    color: ORANGE,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  CheckboxContainer: {
    flexDirection: 'row', width: "100%", 
  }, checkbox: {
    width: 200
  }, CheckboxTitle: {
    fontSize: 12
  }, checkboxItemContainer: {
    width: "20%", backgroundColor: BACKGROUND, borderWidth: 0
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
 
  fontSize: 16,
  alignItems: 'center',
  width: '42%',
 backgroundColor:BACKGROUND,
  height: 55,
  borderWidth: 0,
  color: ALMOSTBLACK,
  
  shadowColor: SHADOWGREY,
  shadowOpacity: 1,
  },
  txttypesstyle: {
    color: ALMOSTBLACK,
    alignSelf:'center',
    fontSize: 14,fontWeight:"600",
   // paddingLeft: '19%',
    marginHorizontal:6
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
    flex: 2.5,//borderWidth:3
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
    //borderRadius: '30%',
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
    //borderRadius: '30%',
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
