import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeTabNav from './src/navigators/HomeTabNav';
import NoteScreenStack from './src/navigators/NoteScreenStack';

function App() {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                theme={eva.dark}
            >
                <NoteScreenStack />
            </ApplicationProvider>
        </>
    )
}

export default App;

// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
//       <TouchableOpacity
//         onPress={() => setCount(count + 1)}
//         style={styles.button}>
//         <Text>Click me!</Text>
//       </TouchableOpacity>

//       <Text>You clicked {count} times!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C3E8BD',
//     paddingTop: 40,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#ADBDFF',
//     padding: 5,
//     marginVertical: 20,
//     alignSelf: 'flex-start',
//   },
//   title: {
//     fontSize: 40,
//   },
// });

// export default App;