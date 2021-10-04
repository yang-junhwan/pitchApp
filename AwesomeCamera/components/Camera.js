import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity, Alert, StyleSheet,Text,View} from 'react-native';
import VideoRecorder from 'react-native-beautiful-video-recorder';

export default class Camera extends PureComponent 
{  
  constructor(props) 
  {
    super(props);
    /*this.state = {
      takingPic: false,
    };*/
  }
  start = async () => {
    // 30 seconds
    this.videoRecorder.open((data) => {
      console.log('captured data', data);
    });
  }
  render() 
  {
    return (
      <RNCamera

        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>

        <TouchableOpacity 
          style={styles.btnAlignment}
          onPress={this.start}>
          <Icon name="camera" size={50} color="#fff"></Icon>
	      </TouchableOpacity>
		    <VideoRecorder ref={(ref) => { 
          this.videoRecorder = ref; }} />
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  btnAlignment: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 580,
    marginLeft: 175,
    marginRight: 175,
  },
});
