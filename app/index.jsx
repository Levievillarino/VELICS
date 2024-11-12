import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView} from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className = "bg-blue-950 h-full">
      <ScrollView contentContainerStyle = {{height:'100%'}}>
        <View className = "w-full justify-center items-center min-h-[85vh] px-4">
         <Text className = "text-3xl font-pextrabold text-green-500">VELIC'S</Text>

          <View className = "relative mt-4 ">
            <Text className = "text-4xl text-white font-bold text-justify">
            Discover. Watch. Love. Anime, Reimagined
            </Text>

          </View>
          
          
          <Image 
            source={images.VelicsPhoto}
            className = "max-2-[380px] w-full h-[200px] mt-7"
            resizeMode="contain"
          />

          <View className = "relative mb-7 mt-7">
            <Text className = "text-sm text-gray-400 font-bold text-justify">
            Your Portal to Endless Anime Adventures!
            </Text>

          </View>

          <CustomButton 
            title= "Get Started"
            handlePress={() => {router.push('/sign-in')}}
            containerStyle= "w-full mt-1"
          />
        </View>

      </ScrollView>
      <StatusBar  backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

