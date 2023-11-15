// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
// import CloseOpenButton from './app/welcome/CloseOpenButton';
// import Rating from './app/ratings/Rating';
// import BadgesList from './app/badges/BadgesList';
// import Buttons from './app/badges/Buttons';



// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.AppScrollview}>
//         <CloseOpenButton />
//         <Rating/>
//         <BadgesList/>
//         <Buttons/>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 30,
//   },
//   AppScrollview: {
//       flexDirection: 'column',
//       padding: 0,
//   }
// });

// export default App;





// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <SafeAreaView style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.AppScrollview}>
//         <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
//           <Text style={[styles.toggleText, isDarkMode && styles.darkText]}>
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </Text>
//         </TouchableOpacity>
//         <CloseOpenButton isDarkMode={isDarkMode} />
//         <Rating isDarkMode={isDarkMode} />
//         <BadgesList isDarkMode={isDarkMode} />
//         <Buttons isDarkMode={isDarkMode} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   lightMode: {
//     backgroundColor: '#ffffff',
//   },
//   darkMode: {
//     backgroundColor: '#333333',
//   },
//   AppScrollview: {
//     flexDirection: 'column',
//     padding: 0,
//   },
//   toggleButton: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: '#3498db',
//   },
//   toggleText: {
//     color: '#ffffff',
//   },
//   darkText: {
//     color: '#000000',
//   },
// });

// export default App;


// IMp
// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import CloseOpenButton from './app/welcome/CloseOpenButton';
// import Rating from './app/ratings/Rating';
// import BadgesList from './app/badges/BadgesList';
// import Buttons from './app/badges/Buttons';

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const dynamicStyles = {
//     container: [styles.container, isDarkMode ? styles.darkMode : styles.lightMode],
//   };

//   return (
//     <SafeAreaView style={dynamicStyles.container}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.AppScrollview}>
//         <CloseOpenButton isDarkMode={isDarkMode} />
//         <Rating isDarkMode={isDarkMode} />
//         <BadgesList isDarkMode={isDarkMode} />
//         <Buttons isDarkMode={isDarkMode} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   lightMode: {
//     backgroundColor: '#ffffff',
//   },
//   darkMode: {
//     backgroundColor: '#333333',
//   },
//   AppScrollview: {
//     flexDirection: 'column',
//     padding: 0,
//   },
// });

// export default App;




// Using flask

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import CloseOpenButton from './app/welcome/CloseOpenButton';
import Rating from './app/ratings/Rating';
import BadgesList from './app/badges/BadgesList';
import Buttons from './app/badges/Buttons';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDataSubmit = (data) => {
    // Call the respective API endpoints to submit data to Flask
    submitData('/api/ratings', data.ratings);
    submitData('/api/badges', data.badges);
    submitData('/api/comments', { comments: data.comments });
    // Submit all data
    submitData('/api/submit', data);
  };

  const submitData = async (url, data) => {
    try {
      const response = await fetch(`http://your-flask-server-ip:5000${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const dynamicStyles = {
    container: [styles.container, isDarkMode ? styles.darkMode : styles.lightMode],
  };

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.AppScrollview}>
        <CloseOpenButton isDarkMode={isDarkMode} />
        <Rating isDarkMode={isDarkMode} />
        <BadgesList isDarkMode={isDarkMode} />
        <Buttons onSubmit={handleDataSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... (unchanged styles)
    container: {
    flex: 1,
    paddingTop: 30,
  },
  lightMode: {
    backgroundColor: '#ffffff',
  },
  darkMode: {
    backgroundColor: '#333333',
  },
  AppScrollview: {
    flexDirection: 'column',
    padding: 0,
  },
});

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   lightMode: {
//     backgroundColor: '#ffffff',
//   },
//   darkMode: {
//     backgroundColor: '#333333',
//   },
//   AppScrollview: {
//     flexDirection: 'column',
//     padding: 0,
//   },
// });

// export default App;







// import React, { useState, useEffect } from 'react';
// import 'react-native-gesture-handler';
// import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
// import { Appearance, useColorScheme } from 'react-native-appearance'; // Import Appearance and useColorScheme
// import CloseOpenButton from './app/welcome/CloseOpenButton';
// import Rating from './app/ratings/Rating';
// import BadgesList from './app/badges/BadgesList';
// import Buttons from './app/badges/Buttons';

// const App = () => {
//   const colorScheme = useColorScheme(); // Use useColorScheme to get the current theme

//   return (
//     <SafeAreaView style={[styles.container, colorScheme === 'dark' ? styles.darkMode : styles.lightMode]}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.AppScrollview}>
//         <CloseOpenButton isDarkMode={colorScheme === 'dark'} />
//         <Rating isDarkMode={colorScheme === 'dark'} />
//         <BadgesList isDarkMode={colorScheme === 'dark'} />
//         <Buttons isDarkMode={colorScheme === 'dark'} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   lightMode: {
//     backgroundColor: '#ffffff',
//   },
//   darkMode: {
//     backgroundColor: '#333333',
//   },
//   AppScrollview: {
//     flexDirection: 'column',
//     padding: 0,
//   },
// });

// export default App;

// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useColorScheme } from 'react-native';

// import CloseOpenButton from './app/welcome/CloseOpenButton';
// import Rating from './app/ratings/Rating';
// import BadgesList from './app/badges/BadgesList';
// import Buttons from './app/badges/Buttons';

// const lightModeColors = {
//   backgroundColor: '#ffffff',
// };

// const darkModeColors = {
//   backgroundColor: '#333333',
// };

// export default function App() {
//   const [isLoadingComplete, setIsLoadingComplete] = useState(false);
//   const deviceColorScheme = useColorScheme(); // Get the device's color scheme (light/dark)
//   let colorScheme = deviceColorScheme; // Set to the device's color scheme as the default

//   useEffect(() => {
//     // Simulate loading or fetching necessary resources
//     // You can replace this with your own loading logic
//     setTimeout(() => {
//       setIsLoadingComplete(true);
//     }, 2000);

//     // Determine the color scheme based on the device's theme
//     if (deviceColorScheme === 'dark') {
//       colorScheme = 'dark'; // Set to dark mode if the Expo app theme is dark
//     } else {
//       colorScheme = 'light'; // Set to light mode if the Expo app theme is light
//     }
//   }, []);

//   if (!isLoadingComplete) {
//     // You can render a loading screen here if needed
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
//         <SafeAreaView style={[styles.container, colorScheme === 'dark' ? styles.darkMode : styles.lightMode]}>
//           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.AppScrollView}>
//             <CloseOpenButton isDarkMode={colorScheme === 'dark'} />
//             <Rating isDarkMode={colorScheme === 'dark'} />
//             <BadgesList isDarkMode={colorScheme === 'dark'} />
//             <Buttons isDarkMode={colorScheme === 'dark'} />
//           </ScrollView>
//         </SafeAreaView>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// const lightTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     ...lightModeColors,
//   },
// };

// const darkTheme = {
//   ...DarkTheme,
//   colors: {
//     ...DarkTheme.colors,
//     ...darkModeColors,
//   },
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   lightMode: {
//     backgroundColor: '#ffffff',
//   },
//   darkMode: {
//     backgroundColor: '#333333',
//   },
//   AppScrollView: {
//     flexDirection: 'column',
//     padding: 0,
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
// import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useColorScheme } from 'react-native';

// import CloseOpenButton from './app/welcome/CloseOpenButton';
// import Rating from './app/ratings/Rating';
// import BadgesList from './app/badges/BadgesList';
// import Buttons from './app/badges/Buttons';

// export default function App() {
//   const [isLoadingComplete, setIsLoadingComplete] = useState(false);
//   const deviceColorScheme = useColorScheme(); // Get the device's color scheme (light/dark)

//   const theme = useTheme(); // Get the current theme from React Navigation

//   useEffect(() => {
//     // Simulate loading or fetching necessary resources
//     // You can replace this with your own loading logic
//     setTimeout(() => {
//       setIsLoadingComplete(true);
//     }, 2000);
//   }, []);

//   if (!isLoadingComplete) {
//     // You can render a loading screen here if needed
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer theme={theme}>
//         <SafeAreaView style={styles.container}>
//           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.AppScrollView}>
//             <CloseOpenButton />
//             <Rating />
//             <BadgesList />
//             <Buttons />
//           </ScrollView>
//         </SafeAreaView>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//   },
//   AppScrollView: {
//     flexDirection: 'column',
//     padding: 0,
//   },
// });
