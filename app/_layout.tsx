import { Stack } from "expo-router"

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="screens/singUp/index" options={{headerShown: false}} />
            <Stack.Screen name="screens/desk/index" options={{headerShown: false}} />
            <Stack.Screen name="screens/register/index" options={{headerShown: false}} />
        </Stack>
    )
}