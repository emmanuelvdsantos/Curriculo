import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';

// Home Screen Component
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.freepik.com/fotos-gratis/um-leao-com-uma-juba-de-arco-iris-e-olhos-azuis_1340-39421.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715990400&semt=sph' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        Olá, meu nome é Emmanuel Victor estudante de ADS no senac!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// educação
function EducacaoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static.escolakids.uol.com.br/2020/08/licoes-importantes-escola.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        2015-2019 {'\n'}
        UPE{'\n'}
        Administração de empresas{'\n'}{'\n'}{'\n'}
        2019-2021{'\n'}
        FGV{'\n'}
      MBA auditoria conroladoria e finanças{'\n'}{'\n'}{'\n'}
      2023-2025 {'\n'}
      Senac-PE{'\n'}
      Análise e Desenvolvimento de Sistemas{'\n'}{'\n'}{'\n'}{'\n'}
      Adicionais:{'\n'}
      Fluência em Inglês.{'\n'}
      PYHTON-Avançado.{'\n'}
      PHP- Avançado.{'\n'}
      SQl- Intermediaio.

    
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// educação
function EventosScreen() {
  return (
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://doity.com.br/blog/app/uploads/2022/05/Promocao-de-eventos.png' }} 
        style={styles.image}
      />
      <Text style={styles.text}>
        2023.1{'\n'}
        Projeta AI- SENAC - Vest-Up(Aplicativo Pre vestibular){'\n'}{'\n'}{'\n'}
        
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Tela Inicial') {
              iconName = 'home-outline';
            } else if (route.name === 'Educação') {
              iconName = 'book-outline';
            } else if (route.name === 'Eventos') {
              iconName = 'calendar-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#8a0029',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Tela Inicial" component={HomeScreen} />
        <Tab.Screen name="Educação" component={EducacaoScreen} />
        <Tab.Screen name="Eventos" component={EventosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b8b8b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60
  },
  image: {
    width: 200,  
    height: 200, 
    marginBottom: 20 
  },
  text: {
    textAlign: 'center',  // Centers text within the Text component
    padding: 10  // Adds space inside the Text component
  }
});
