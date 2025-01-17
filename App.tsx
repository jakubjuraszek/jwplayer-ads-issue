/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import JWPlayer from '@jwplayer/jwplayer-react-native';
import React, {useRef} from 'react';
import {View} from 'react-native';

function App(): React.JSX.Element {
  const jwplayer = useRef<JWPlayer | null>(null);
  const jwConfig = {
    license: '',
    preload: 'auto',
    autostart: true,
    title: 'Single Inline Linear Preroll',
    playlist: [
      {
        title: 'Single Inline Linear Preroll',
        file: 'https://content.bitsontherun.com/videos/q1fx20VZ-52qL9xLP.mp4',
        adschedule: {
          adBreak1: {
            offset: 'pre',
            ad: {
              source: 'googima',
              tag: 'https://video.doubleverify.com/tester/fixtures/vast/vast3.xml',
            },
          },
        },
      },
    ],
    advertising: {
      client: 'googima',
    },
  };

  return (
    <View
      style={{
        flex: 1,
        height: 428,
      }}>
      <JWPlayer
        style={{
          flex: 1,
          height: 428,
        }}
        ref={jwplayer}
        config={jwConfig}
        onPlayerAdError={e => {
          console.log('[DEBUG] onPlayerAdError:', e.nativeEvent);
        }}
      />
    </View>
  );
}

export default App;
