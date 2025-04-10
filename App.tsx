import JWPlayer from '@jwplayer/jwplayer-react-native';
import React, {useRef} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  const jwplayer = useRef<JWPlayer | null>(null);

  const jwConfig = {
    license: 'S30KUeK7C5449W+CavMsmJDQYnKr09Wjkaybfg==',
    preload: 'auto',
    pipEnabled: true,
    backgroundAudioEnabled: true,
    autostart: true,
    title: 'Single Inline Linear Preroll',
    fullScreenOnLandscape: true,
    exitFullScreenOnPortrait: true,
    landscapeOnFullScreen: true,
    portraitOnExitFullScreen: true,
    playerInModal: true,
    playlist: [
      {
        title: 'Single Inline Linear Preroll',
        file: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8',
      },
    ],
    advertising: {
      client: 'googima',
      tag: 'https://video.doubleverify.com/tester/fixtures/vast/vast3.xml',
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🔹 TEST</Text>
      <View style={styles.playerWrapper}>
        <JWPlayer
          style={styles.player}
          ref={jwplayer}
          config={jwConfig}
          onAdEvent={event =>
            console.log('[DEBUG] Ad event:', event.nativeEvent)
          }
          onPlayerAdError={error => console.log('Ad error:', error)}
        />
      </View>
      <Text style={styles.footer}>🔻 TEST</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  playerWrapper: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginBottom: 20,
  },
  player: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;
