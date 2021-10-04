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
  start = () => {
    // 30 seconds
    this.videoRecorder.open((data) => {
      console.log('captured data', data);
    });
  }

/*  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {

      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };
      this.setState({takingPic: true});
      try {
        const data = await this.camera.takePictureAsync(options);
        Alert.alert('Success', JSON.stringify(data));
     } catch (err) {
       Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
       return;
     } finally {
       this.setState({takingPic: false});
     }
   }
 };*/
  render() 
  {
    return (
      /*<RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>*/
      <RNCamera style={{flex:1}}>
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
