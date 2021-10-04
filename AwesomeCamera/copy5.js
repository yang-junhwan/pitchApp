import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity, Alert, StyleSheet,Text,View} from 'react-native';
import VideoRecorder from 'react-native-beautiful-video-recorder';
import RecordingButton from './RecordingButton';

export default class Camera extends PureComponent 
{  
  constructor(props) 
  {
    super(props);

    this.state = {
      isRecording: false,
    };
  }
  start = () => {
    // 30 seconds
    this.camera.recordAsync(this.props.recordOptions).then((data) => {
      console.log('video capture', data);
    });
    this.setState
  }
  
  stop = () => {
      this.camera.stopRecording();
  };


  render() 
  {
    return (
      <RNCamera 
        style={{flex:1}}
        ref={ref => {
          this.camera = ref;
        }}
      >
        <RecordingButton style={styles.recodingButton} isRecording={isRecording} onStartPress={this.startCapture}
            onStopPress={this.stopCapture} />
        
		    <VideoRecorder ref={(ref) => { this.videoRecorder = ref; }} />
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
