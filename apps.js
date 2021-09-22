import * as React from 'react';
import { 
  View, 
  Text,  
  StyleSheet, 
  TouchableNativeFeedback, 
  Image,  
  SafeAreaView, 
  ImageBackground,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { awts } from '../ADVFINALS102/counter.js';

const Stack = createStackNavigator();


 var counterbagel = 0,
    counterpretzel = 0,
    counterbreadstick= 0,
    countercroissant= 0,
    counterwhitebread= 0,
    counterwheatbread= 0,
    counterwholegrainbread= 0,
    counterryebread= 0,
    counteramericanocoffee= 0,
    counterblackcoffee= 0,
    countercappuccino= 0,
    counterflatwhite= 0,
    countergalao= 0,
    counterlatte= 0,
    counterlungo= 0,
    countermocha= 0,
    counterangelcake= 0,
    counterbarabirth= 0,
    counterbaumkuchen= 0,
    counterblackoutcake= 0,
    counterblondie= 0,
    counterbrownie= 0,
    counterchocolatecake= 0,
    counterdundeecake= 0,
    pricebagel = 4,
    pricepretzel = 3,
    pricebreadstick= 8,
    pricecroissant= 5,
    pricewhitebread= 2,
    pricewheatbread= 6,
    pricewholegrainbread= 6,
    priceryebread= 2,
    priceamericanocoffee= 12,
    priceblackcoffee= 5,
    pricecappuccino= 3,
    priceflatwhite= 2,
    pricegalao= 7,
    pricelatte= 7,
    pricelungo= 8,
    pricemocha= 5,
    priceangelcake= 5,
    pricebarabirth= 12,
    pricebaumkuchen= 13,
    priceblackoutcake= 15,
    priceblondie= 5,
    pricebrownie= 2,
    pricechocolatecake= 3,
    pricedundeecake= 6;

// HOMESCREEN ---------------------------------------------------
function HomeScreen({ navigation }) {

  return (
    <SafeAreaView> 
      <View>
      <ImageBackground
                opacity={0.5}
                style={styles.imagebackground}
                source={require("./assets/bg.jpg")}/> 
        <TouchableNativeFeedback onPress={() => navigation.navigate('Breads')}>
        <Image       
        style={styles.logo}
        source={require("./assets/bread.jpg")}/> 
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Drinks')}>
        <Image        
        style={styles.logo}
        source={require("./assets/coffee.jpg")}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Desserts')}>
        <Image      
        style={styles.logo}
        source={require("./assets/cakes.jpg")}/>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.ButtonContainers}>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Blogs')}>
      <View style={styles.Button} >
      <Text style={{fontWeight: 'bold',fontSize: 15}}>
      Blogs
      </Text>
      </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigation.navigate('About')}>
      <View style={styles.Button} >
      <Text style={{fontWeight: 'bold',fontSize: 15}} >
      About
      </Text>
      </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigation.navigate('Orders')}>
      <View style={styles.Button} >
      <Text style={{fontWeight: 'bold',fontSize: 15}} >
      Orders
      </Text>
      </View>
      </TouchableNativeFeedback>
      </View>
      </SafeAreaView>
  );
}

// BLOGSCREEN ---------------------------------------------------
function BlogsScreen() {
  return (
    <SafeAreaView>
     <View>
     <ImageBackground
                opacity={0.5}
                style={styles.imagebackground}
                source={require("./assets/bg.jpg")}/>
      <Image
      style={{
        borderColor: 'brown',
        borderWidth: 3,
        borderRadius: 13,
        height: 235,
        width: 385,
        justifyContent: 'center',
        alignContent: 'center',
        left: 4,
        top: 30
       }}
      source={require("./assets/blogimage.jpg")}/>
      <Text
      style={{
        color: 'white',
        textAlign: 'center',
        alignItems: 'center', 
        position: 'absolute',
        top: 280,
        color: 'black',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#e8f2c7',
        borderColor: 'brown',
        borderWidth: 3,
        borderRadius: 13,
        fontStyle: 'italic',
        margin: 3,
        }} 
      >Sprudge</Text>
      <Text style={{
        textAlign: 'justify', 
        color: 'black', 
        top: 110,
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#e8f2c7',
        borderColor: 'brown',
        borderWidth: 5,
        borderRadius: 13,
        fontStyle: 'italic',
        margin: 3,
        }}><Text>        </Text>
          Sprudge is a site devoted to coffee news and culture, and 
          you’ll get everything from updates on new coffee shop openings
          o coverage of coffee culture in far-off places, like Iran. They 
          also run a site called Sprudge Wire, where they round up coffee
           news from around the web all in one place — a great resource 
           if you want to know what’s happening in the world of coffee, 
           and who is writing about it. (In full disclosure, I am a Sprudge
           ontributor, so I am of course 100 percent biased in making this a 
           daily morning visit to read what’s new.) (\n) 
           - https://www.thekitchn.com/9-blogs-for-coffee-lovers-222986</Text> 
      <Image
      style={{
        alignSelf: 'center',
        top: 110,
        height: 60,
        width: 60,
        resizeMode: 'contain'
      }}
      source={require("./assets/dots.png")}
      />
    </View>
    </SafeAreaView>
  );
}

// ABOUTSCREEN ---------------------------------------------------
function AboutScreen() {
  return (
    <SafeAreaView>
     <View>
     <ImageBackground
                opacity={0.5}
                style={styles.imagebackground}
                source={require("./assets/bg.jpg")}/>
      <Image
      style={{
        borderColor: 'brown',
        borderWidth: 3,
        borderRadius: 13,
        height: 235,
        width: 385,
        justifyContent: 'center',
        alignContent: 'center',
        left: 4,
        top: 30
       }}
      source={require("./assets/about.png")}/>
      <Text
      style={{
        color: 'white',
        textAlign: 'center',
        alignItems: 'center', 
        position: 'absolute',
        top: 280,
        color: 'black',
        fontSize: 30,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#e8f2c7',
        borderColor: 'brown',
        borderWidth: 3,
        borderRadius: 13,
        fontStyle: 'italic',
        margin: 10,
        }} 
      >Café Davao</Text>
      <Text style={{
        textAlign: 'justify', 
        color: 'black', 
        top: 110,
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#e8f2c7',
        borderColor: 'brown',
        borderWidth: 5,
        borderRadius: 13,
        fontStyle: 'italic',
        margin: 10,
        }}><Text>        </Text>
         Café Davap, small eating and drinking establishment, 
         historically a coffeehouse, usually featuring a limited 
         menu; originally these establishments served only coffee. 
         The English term café, borrowed from the French, derives 
         ultimately from the Turkish kahve, meaning coffee.uring 
         the 200 years after the mid-17th century, the most famous 
         coffeehouses of Europe flourished in London as ready points 
         for news, discussion, and faction. Coffeehouse proprietors 
         competed with each other for supplies of both Whig and Tory 
         newspapers.  
         </Text> 
      <Image
      style={{
        alignSelf: 'center',
        top: 110,
        height: 60,
        width: 60,
        resizeMode: 'contain'
      }}
      source={require("./assets/dots.png")}
      />
    </View>
    </SafeAreaView>
  );
}

// ORDERSCREEN ---------------------------------------------------
function OrdersScreen({ navigation }) {
  return (
  <SafeAreaView>
  <View>
  <ImageBackground opacity={0.5} style={styles.imagebackground} source={require("./assets/bg.jpg")}/>
  <View opacity={0.8} style={styles.order1} /> 
  <Text style={styles.order2}> Orders: </Text>
  <TouchableNativeFeedback onPress={() => navigation.navigate('Order List')}>
      <Text style={styles.order8}> Order List: </Text>
  </TouchableNativeFeedback>
  <Text style={styles.order4}> 
   BREADS: {"\n"} {"\n"}
   Bagels:{"\n"}
   Pretzels: {"\n"}
   BreadSticks: {"\n"}
   Croissant: {"\n"}
   White bread: {"\n"}
   Wheat bread: {"\n"}
   Whole Grain Bread: {"\n"}
   Rye Bread: {"\n"} {"\n"}
   DRINKS: {"\n"} {"\n"}
   Americano Coffee: {"\n"}
   Black Coffee: {"\n"}
   Cappuccino: {"\n"}
   Flat White: {"\n"}
   Galāo : {"\n"}
   Latté: {"\n"}
   Lungo: {"\n"}
   Mocha: {"\n"} {"\n"}
   DESSERTS: {"\n"} {"\n"}
   Angel Cake: {"\n"}
   Bara Birth: {"\n"}
   Baumkuchen: {"\n"}
   Blackout Cake: {"\n"}
   Blondie: {"\n"}
   Brownie: {"\n"}
   Chocolate Cake: {"\n"}
   Dundee Cake: {"\n"} </Text> 
   <Text style={styles.order5}> 
   COUNT: {"\n"}{"\n"}
   x{counterbagel} {"\n"}
   x{counterpretzel} {"\n"}
   x{counterbreadstick} {"\n"}
   x{countercroissant} {"\n"}
   x{counterwhitebread} {"\n"}
   x{counterwheatbread} {"\n"}
   x{counterwholegrainbread} {"\n"}
   x{counterryebread} {"\n"}
   {"\n"} {"\n"}
   {"\n"}
   x{counteramericanocoffee} {"\n"}
   x{counterblackcoffee} {"\n"}
   x{countercappuccino} {"\n"}
   x{counterflatwhite} {"\n"}
   x{countergalao} {"\n"}
   x{counterlatte} {"\n"}
   x{counterlungo} {"\n"}
   x{countermocha} {"\n"}
   {"\n"} {"\n"}
   {"\n"}
   x{counterangelcake} {"\n"}
   x{counterbarabirth} {"\n"}
   x{counterbaumkuchen} {"\n"}
   x{counterblackoutcake} {"\n"}
   x{counterblondie} {"\n"}
   x{counterbrownie} {"\n"}
   x{counterchocolatecake} {"\n"}
   x{counterdundeecake} {"\n"}  
   </Text>
   <Text style={styles.order6}> 
    {"\n"}
    {"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   {"\n"} 
   {"\n"} {"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   {"\n"} 
   {"\n"} {"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   -{"\n"}
   </Text>
   <Text style={styles.order7}> 
     PRICE: {"\n"}{"\n"}
   ${counterbagel*pricebagel} {"\n"}
   ${counterpretzel*pricepretzel} {"\n"}
   ${counterbreadstick*pricebreadstick} {"\n"}
   ${countercroissant*pricecroissant} {"\n"}
   ${counterwhitebread*pricewhitebread} {"\n"}
   ${counterwheatbread*pricewheatbread} {"\n"}
   ${counterwholegrainbread*pricewholegrainbread} {"\n"}
   ${counterryebread*priceryebread} {"\n"}
   {"\n"} {"\n"}
   {"\n"}
   ${counteramericanocoffee*priceamericanocoffee} {"\n"}
   ${counterblackcoffee*priceblackcoffee} {"\n"}
   ${countercappuccino*pricecappuccino} {"\n"}
   ${counterflatwhite*priceflatwhite} {"\n"}
   ${countergalao*pricegalao} {"\n"}
   ${counterlatte*pricelatte} {"\n"}
   ${counterlungo*pricelungo} {"\n"}
   ${countermocha*pricemocha} {"\n"}
   {"\n"} {"\n"}
   {"\n"}
   ${counterangelcake*priceangelcake} {"\n"}
   ${counterbarabirth*pricebarabirth} {"\n"}
   ${counterbaumkuchen*pricebaumkuchen} {"\n"}
   ${counterblackoutcake*priceblackoutcake} {"\n"}
   ${counterblondie*priceblondie} {"\n"}
   ${counterbrownie*pricebrownie} {"\n"}
   ${counterchocolatecake*pricechocolatecake} {"\n"}
   ${counterdundeecake*pricedundeecake} {"\n"} 
   </Text>

   <Text style={{
     position: 'absolute',
     color: 'black',
     width: '100%',
     height: '100%',
     textAlign: 'right',
     right: 150,
     top: 599,
     fontSize: 20,
     fontWeight: 'bold',
   }}> Total: $ {
    sum = (counterbagel*pricebagel)+ 
    (counterpretzel*pricepretzel)+ 
    (counterbreadstick*pricebreadstick)+ 
    (countercroissant*pricecroissant)+ 
    (counterwhitebread*pricewhitebread)+ 
    (counterwheatbread*pricewheatbread)+ 
    (counterwholegrainbread*pricewholegrainbread)+ 
    (counterryebread*priceryebread)+ 
    (counteramericanocoffee*priceamericanocoffee)+
    (counterblackcoffee*priceblackcoffee) +
    (countercappuccino*pricecappuccino) +
    (counterflatwhite*priceflatwhite )+
    (countergalao*pricegalao)+
    (counterlatte*pricelatte)+
    (counterlungo*pricelungo) +
    (countermocha*pricemocha) +
    (counterangelcake*priceangelcake) +
    (counterbarabirth*pricebarabirth) +
    (counterbaumkuchen*pricebaumkuchen) +
    (counterblackoutcake*priceblackoutcake) +
    (counterblondie*priceblondie) +
    (counterbrownie*pricebrownie) +
    (counterchocolatecake*pricechocolatecake) +
    (counterdundeecake*pricedundeecake)  
   }</Text>

<TouchableNativeFeedback 
    onPress={() => Alert.alert("Delivery On The Way") }>
   <Text style={styles.turnin}> Place Order </Text>
</TouchableNativeFeedback>

  </View>
  </SafeAreaView>
  );
}

// BREADSCREEN ---------------------------------------------------
function BreadsScreen({ navigation }) {
 return (
    <SafeAreaView>
     <View>
     <ImageBackground
                opacity={0.5}
                style={styles.imagebackground}
                source={require("./assets/bg.jpg")}/>
    </View>    
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Bagels')}>    
        <Image 
        style={styles.breadlogo1}
        source={require("./assets/bagels.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Pretzels')}>
        <Image 
       style={styles.breadlogo2}
        source={require("./assets/pretzel.png")}/>
    </TouchableNativeFeedback>
    </View>
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Breadsticks')}> 
        <Image 
        style={styles.breadlogo1}
        source={require("./assets/breadsticks.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Croissant')}> 
        <Image 
        style={styles.breadlogo2}
        source={require("./assets/croissant.png")}/>
    </TouchableNativeFeedback>
    </View>
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('White Bread')}>
        <Image 
         style={styles.breadlogo1}
        source={require("./assets/whitebread.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Wheat Bread')}>
        <Image style={styles.breadlogo2}
        source={require("./assets/wheatbread.png")}/>
    </TouchableNativeFeedback>
    </View>
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Whole Grain Bread')}>
        <Image 
        style={styles.breadlogo1}
        source={require("./assets/wholegrainbread.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Rye Bread')}>
        <Image 
        style={styles.breadlogo2}
        source={require("./assets/ryebread.png")}/>
    </TouchableNativeFeedback>
    </View>
    </SafeAreaView>
  );
}


// DRINKSCREEN ---------------------------------------------------
function DrinksScreen({ navigation }) {
  return (
    <SafeAreaView>
     <View>
     <ImageBackground
                opacity={0.5}
                style={styles.imagebackground}
                source={require("./assets/bg.jpg")}/>
    </View>    
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Americano Coffee')}>    
        <Image 
        style={styles.coffeelogo1}
        source={require("./assets/coffeeamericano.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Black Coffee')}>
        <Image 
       style={styles.coffeelogo2}
        source={require("./assets/coffeeblackcoffee.png")}/>
    </TouchableNativeFeedback>
    </View>
   
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Cappuccino')}> 
        <Image 
        style={styles.coffeelogo1}
        source={require("./assets/coffeecapuccino.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Flat White')}> 
        <Image 
        style={styles.coffeelogo2}
        source={require("./assets/coffeeflatwhite.png")}/>
    </TouchableNativeFeedback>
    </View>
  
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Galāo')}>
        <Image 
         style={styles.coffeelogo1}
        source={require("./assets/coffeegalao.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Latte')}>
        <Image style={styles.coffeelogo2}
        source={require("./assets/coffeelatte.png")}/>
    </TouchableNativeFeedback>
    </View>
    
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Lungo')}>
        <Image 
        style={styles.coffeelogo1}
        source={require("./assets/coffeelungo.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Mocha')}>
        <Image 
        style={styles.coffeelogo2}
        source={require("./assets/coffeemocha.png")}/>
    </TouchableNativeFeedback>
    </View>
    
    </SafeAreaView>
  );
}


// DESSERTSCREEN ---------------------------------------------------
function DessertsScreen({ navigation }) {
  return (
    <SafeAreaView>
     <View>
     <ImageBackground
                opacity={0.5}
                style={styles.imagebackground}
                source={require("./assets/bg.jpg")}/>
    </View>    
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Angel Cake')}>    
        <Image 
        style={styles.cakelogo1}
        source={require("./assets/cakeangelcake.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Bara Birth')}>
        <Image 
       style={styles.cakelogo2}
        source={require("./assets/cakebarabirth.png")}/>
    </TouchableNativeFeedback>
    </View>
   
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Baumkuchen')}> 
        <Image 
        style={styles.cakelogo1}
        source={require("./assets/cakebaumkuchencake.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Blackout Cake')}> 
        <Image 
        style={styles.cakelogo2}
        source={require("./assets/cakeblackoutcake.png")}/>
    </TouchableNativeFeedback>
    </View>
  
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Blondie')}>
        <Image 
         style={styles.cakelogo1}
        source={require("./assets/cakeblondiecake.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Brownie')}>
        <Image style={styles.cakelogo2}
        source={require("./assets/cakebrowniecake.png")}/>
    </TouchableNativeFeedback>
    </View>
    
    <View style={styles.arrangement}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Chocolate Cake')}>
        <Image 
        style={styles.cakelogo1}
        source={require("./assets/cakechocolatecake.png")}/>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.navigate('Dundee Cake')}>
        <Image 
        style={styles.cakelogo2}
        source={require("./assets/cakedundeecake.png")}/>
    </TouchableNativeFeedback>
    </View>
    
    </SafeAreaView>
  );
}

function orderlistScreen() {
  return (
    <View>
    <ImageBackground opacity={0.5} style={styles.imagebackground} source={require("./assets/bg.jpg")}/>
    <View opacity={0.8} style={styles.order1point1} /> 
    </View>
  );
}
//------------------------------------------------------------------------

function Apps() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blogs" component={BlogsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Breads" component={BreadsScreen} />
        <Stack.Screen name="Drinks" component={DrinksScreen} />
        <Stack.Screen name="Desserts" component={DessertsScreen}/>
        <Stack.Screen name="Order List" component={orderlistScreen}/>


        <Stack.Screen name="Bagels" component={BagelsScreen}/>
        <Stack.Screen name="Pretzels" component={PretzelsScreen}/>
        <Stack.Screen name="Breadsticks" component={BreadsticksScreen}/>
        <Stack.Screen name="Croissant" component={CroissantScreen}/>
        <Stack.Screen name="White Bread" component={WhiteBreadScreen}/>
        <Stack.Screen name="Wheat Bread" component={WheatBreadScreen}/>
        <Stack.Screen name="Whole Grain Bread" component={WholeGrainBreadScreen}/>
        <Stack.Screen name="Rye Bread" component={RyeBreadScreen}/>

        <Stack.Screen name="Americano Coffee" component={AmericanoScreen}/>
        <Stack.Screen name="Black Coffee" component={BlackScreen}/>
        <Stack.Screen name="Cappuccino" component={CappuccinoScreen}/>
        <Stack.Screen name="Flat White" component={FlatwhiteScreen}/>
        <Stack.Screen name="Galāo" component={GalaoScreen}/>
        <Stack.Screen name="Latte" component={LatteScreen}/>
        <Stack.Screen name="Lungo" component={LungoScreen}/>
        <Stack.Screen name="Mocha" component={MochaScreen}/>

        <Stack.Screen name="Angel Cake" component={angelcakeScreen}/>
        <Stack.Screen name="Bara Birth" component={barabirthScreen}/>
        <Stack.Screen name="Baumkuchen" component={baumkuchenScreen}/>
        <Stack.Screen name="Blackout Cake" component={blackoutcakeScreen}/>
        <Stack.Screen name="Blondie" component={blondieScreen}/>
        <Stack.Screen name="Brownie" component={brownieScreen}/>
        <Stack.Screen name="Chocolate Cake" component={chocolatecakeScreen}/>
        <Stack.Screen name="Dundee Cake" component={dundeecakeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

//------------------------------------------------------------------------

//----------------------- BREADS 2nd SCREEN ------------------------------

//------------------------------------------------------------------------

function BagelsScreen() {

  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/bagels.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Bagels</Text>
     <Text
     style={styles.new} 
     >Pieces:{counterbagel}</Text>
    <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricebagel}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
        Bagels are widely associated with Ashkenazi Jews from the 17th century;
         it was first mentioned in 1610 in Jewish community ordinances in Kraków,
          Poland. However, bagel-like bread known as obwarzanek was common earlier
           in Poland as seen in royal family accounts from 1394Plain. Crisp on the 
           outside, chewy on the inside, slightly sweet, somewhat salty, undeniably
            pristine. No matter how you eat it with cream cheese, butter, lox—the plain
             bagel is more than a baked ring of dough; it's a flavor vehicle and a 
             testament to the engenuity of immigrants.. 
        </Text>

<View>
<TouchableNativeFeedback onPress={awts.incrementValuebagel}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterbagel == 0 || counterbagel <= 0) 
  {counterbagel = counterbagel-0}
  else 
  {counterbagel = counterbagel-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>

   </View>
   </SafeAreaView>
  );
}
function PretzelsScreen() {

  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/pretzel.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Pretzels</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterpretzel}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricepretzel}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       A pretzel, from dialectal German pronunciation, standard German: 
       Breze(l) (About this soundlisten (help·info) and French / Alsatian: 
       Bretzel) is a type of baked pastry made from dough that is commonly 
       shaped into a knot. Salt is the most common seasoning for pretzels, 
       complementing the washing soda or lye treatment that gives pretzels 
       their traditional skin and flavor acquired through the Maillard reaction.
        Other seasonings are cheeses, sugar, chocolate, cinnamon, sweet glazing, 
        seeds, and nuts. Varieties of pretzels include soft pretzels, which
         should be eaten shortly after preparation, and hard-baked pretzels, 
         which have a long shelf life.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterpretzel = counterpretzel+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterpretzel == 0 || counterpretzel <= 0) 
  {counterpretzel = counterpretzel-0}
  else 
  {counterpretzel = counterpretzel-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function BreadsticksScreen() {

  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/breadsticks.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >BreadSticks</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterbreadstick}</Text>
      <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricebreadstick}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       It's believed that it originated in 1643, when a Florentine abbot 
       described a long-shaped and "bone-thin" bread being made in a town 
       outside of Turin.[1][2] Tradition states, however, that it originated 
       in the region of Piedmont in the 17th century, invented by a baker 
       called Antonio Brunero, from Turin. It was a food that was intended 
       to be easier to digest for the Duke Victor Amadeus II of Savoy, who 
       had digestive problems in his childhood.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterbreadstick = counterbreadstick+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterbreadstick == 0 || counterbreadstick <= 0) 
  {counterbreadstick = counterbreadstick-0}
  else 
  {counterbreadstick = counterbreadstick-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function CroissantScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/croissant.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Croissant</Text>
      <Text
     style={styles.new} 
     >Pieces:{countercroissant}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricecroissant}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       A croissant (UK: /ˈkrwʌsɒŋ/;[3] , US: /krəsɒnt/; French pronunciation: 
       [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie 
       pastry of Austrian origin,[1] but mostly associated with France. 
       Croissants are named for its historical crescent shape and, like 
       other viennoiserie, are made of a layered yeast-leavened dough. 
       The dough is layered with butter, rolled and folded several times 
       in succession, then rolled into a thin sheet, in a technique called 
       laminating. The process results in a layered, flaky texture, similar 
       to a puff pastry.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => countercroissant = countercroissant+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (countercroissant == 0 || countercroissant <= 0) 
  {countercroissant = countercroissant-0}
  else 
  {countercroissant = countercroissant-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function WhiteBreadScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/whitebread.png")}/>
     <Text
     style={styles.textimagebgsecond} 
     >White Bread</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterwhitebread}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricewhitebread}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       White bread typically refers to breads made from wheat flour 
       from which the bran and the germ layers have been removed 
       (and set aside) from the whole wheatberry as part of the flour 
       grinding or milling process, producing a light-colored flour.[2] 
       This milling process can give white flour a longer shelf life by 
       removing the natural oils from the whole grain. Removing the oil 
       allows products made with the flour, like white bread, to be stored 
       for longer periods of time avoiding potential rancidity. 
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterwhitebread = counterwhitebread+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterwhitebread == 0 || counterwhitebread <= 0) 
  {counterwhitebread = counterwhitebread-0}
  else 
  {counterwhitebread = counterwhitebread-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function WheatBreadScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/wheatbread.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Wheat Bread</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterwheatbread}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricewheatbread}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Wheat bread is a type of bread made using flour that is partly or entirely 
       milled from whole or almost-whole wheat grains, see whole-wheat flour and 
       whole grain. It is one kind of brown bread. Synonyms or near-synonyms for 
       whole-wheat bread outside the United States (e.g., the UK) are whole grain 
       bread or wholemeal bread. Some regions of the US simply called the bread 
       wheat bread, a comparison to white bread. Some varieties of whole-wheat 
       bread are traditionally coated with whole or cracked grains of wheat, 
       though this is mostly decorative compared to the nutritional value of a 
       good quality loaf itself.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterwheatbread = counterwheatbread+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterwheatbread == 0 || counterwheatbread <= 0) 
  {counterwheatbread = counterwheatbread-0}
  else 
  {counterwheatbread = counterwheatbread-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function WholeGrainBreadScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/whoelgrainbread.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Whole Grain </Text>
      <Text
     style={styles.new} 
     >Pieces:{counterwholegrainbread}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricewholegrainbread}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       The exact composition of products legally marketable as "whole grain bread" 
       varies from country to country and even within one country. In some cases, 
       the bread is made with whole-grain flour that contains all of the component 
       parts of the grain in the same ratios as they occur in nature, whereas in 
       other cases the bread may include only representative amounts of bran or 
       wheat germ. In Canada, for example, a proportion of the wheat germ may be 
       removed from the flour to reduce the risk of rancidity, but the term 
       "whole-wheat bread" is still used.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterwholegrainbread = counterwholegrainbread+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterwholegrainbread == 0 || counterwholegrainbread <= 0) 
  {counterwholegrainbread = counterwholegrainbread-0}
  else 
  {counterwholegrainbread = counterwholegrainbread-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function RyeBreadScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/bread/ryebread.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Rye Bread</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterryebread}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${priceryebread}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Rye bread is a type of bread made with various proportions of flour 
       from rye grain. It can be light or dark in color, depending on the 
       type of flour used and the addition of coloring agents, and is typically 
       denser than bread made from wheat flour. It is higher in fiber than white 
       bread and is darker in color and stronger in flavor.Rye bread was considered 
       a staple through the Middle Ages. Many different types of rye grain have come 
       from north-central, western, and eastern European countries such as Iceland, 
       Germany, Austria, Denmark, Sweden, and many more europe countries.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterryebread = counterryebread+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>

<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterryebread == 0 || counterryebread <= 0) 
  {counterryebread = counterryebread-0}
  else 
  {counterryebread = counterryebread-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}

//------------------------------------------------------------------------

//----------------------- DRINKS 2nd SCREEN ------------------------------

//------------------------------------------------------------------------

function AmericanoScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/americano.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Americano</Text>
      <Text
     style={styles.new} 
     >Pieces:{counteramericanocoffee}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${priceamericanocoffee}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Caffè Americano (also known as Americano or American; Italian pronunciation: 
       [kafˈfɛ ameriˈkaːno]; Spanish: café americano, literally American coffee) is 
       a type of coffee drink prepared by diluting an espresso with hot water, 
       giving it a similar strength to, but different flavor from, traditionally 
       brewed coffee. The strength of an Americano varies with the number of shots 
       of espresso and the amount of water added. The name is also spelled with 
       varying capitalization and use of diacritics: e.g., café americano.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counteramericanocoffee = counteramericanocoffee+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counteramericanocoffee == 0 || counteramericanocoffee <= 0) 
  {counteramericanocoffee = counteramericanocoffee-0}
  else 
  {counteramericanocoffee = counteramericanocoffee-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function BlackScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/blackcoffee.jpg")}/>
      <Text
     style={styles.new} 
     >Pieces:{counterblackcoffee}</Text>
     <Text
     style={styles.textimagebgsecond} 
     >Black Coffee</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${priceblackcoffee}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Black Coffee or Classic Coffee is a brewed drink prepared from roasted coffee beans, the seeds of 
       berries from certain Coffea species. All fruit must be further processed 
       from a raw material—the fruit and seed—into a stable, raw product; 
       un-roasted, green coffee. To process the berries, the seed is separated 
       from the fruit to produce green coffee. Green coffee is then roasted, a 
       process which transforms the raw product (green coffee) into a consumable 
       product (roasted coffee). Roasted coffee is ground into a powder and mixed 
       with water to produce a cup of coffee.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterblackcoffee = counterblackcoffee+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterblackcoffee == 0 || counterblackcoffee <= 0) 
  {counterblackcoffee = counterblackcoffee-0}
  else 
  {counterblackcoffee = counterblackcoffee-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function CappuccinoScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/cappuccino.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Cappucino</Text>
      <Text
     style={styles.new} 
     >Pieces:{countercappuccino}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricecappuccino}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       A cappuccino (/ˌkæpʊˈtʃiːnoʊ/ (About this soundlisten); 
       Italian pronunciation: [kapputˈtʃiːno]; Italian plural: 
       cappuccini) is an espresso-based coffee drink that originated 
       in Italy, and is traditionally prepared with steamed milk foam 
       (microfoam). Variations of the drink involve the use of cream 
       instead of milk, using non-dairy milks, and flavoring with 
       cinnamon or chocolate powder.[2][3] It is typically smaller 
       in volume than a caffè latte, with a thicker layer of microfoam.
        </Text> 
        <View>
<TouchableNativeFeedback onPress={() => countercappuccino = countercappuccino+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (countercappuccino == 0 || countercappuccino <= 0) 
  {countercappuccino = countercappuccino-0}
  else 
  {countercappuccino = countercappuccino-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function FlatwhiteScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/flatwhite.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Flat White</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterflatwhite}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${priceflatwhite}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       A flat white is a coffee drink consisting of espresso with microfoam 
       (steamed milk with small, fine bubbles and a glossy or velvety 
       consistency). It is comparable to a latte, but smaller in volume and with 
       less microfoam, therefore having a higher proportion of coffee to milk, 
       and milk that is more velvety in consistency – allowing the espresso to 
       dominate the flavour, while being supported by the milk.A flat white is 
       generally served in a ceramic cup with saucer. Milk is frothed and foamy 
       as it would be for a latte but held back to around 20 mm (0.79 in) of 
       microfoam, creating a meniscus. 
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterflatwhite = counterflatwhite+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterflatwhite == 0 || counterflatwhite <= 0) 
  {counterflatwhite = counterflatwhite-0}
  else 
  {counterflatwhite = counterflatwhite-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function GalaoScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/galao.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Galáo Coffee</Text>
      <Text
     style={styles.new} 
     >Pieces:{countergalao}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricegalao}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Galão is a hot drink from Portugal made by adding foamed milk to espresso 
       coffee. Similar to caffè latte or café au lait, it consists of about one 
       quarter coffee and three quarters foamed milk. It is served in a tall glass, 
       as opposed to the smaller garoto that is served in a demitasse. When the 
       proportion is 1:1 it is called meia de leite (half of milk) and it comes 
       in a cup. A Portuguese Galao is something like a latte, with one part 
       espresso and three parts hot milk. It comes together in just a few 
       minutes and makes a tasty caffeinated treat!
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => countergalao = countergalao+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (countergalao == 0 || countergalao <= 0) 
  {countergalao = countergalao-0}
  else 
  {countergalao = countergalao-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function LatteScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/latte.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Latté</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterlatte}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricelatte}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Caffe latte (/ˌkæfeɪ ˈlɑːteɪ/ or /ˈlæteɪ/)[1][2] is a coffee drink made 
       with espresso and steamed milk. The term comes from the Italian caffè e 
       latte[3] [kafˌfɛ e lˈlatte], caffelatte [kaffeˈlatte] or caffellatte 
       [kaffelˈlatte], which means "coffee and milk". In English, it is often 
       shortened to just latte; either or both words sometimes have an accent 
       on the final e (a hyperforeignism or to indicate it is pronounced, 
       not the more-common silent final e in English orthography).In northern 
       Europe and Scandinavia, the term café au lait has traditionally been 
       used for the combination of espresso and milk.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterlatte = counterlatte+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterlatte == 0 || counterlatte <= 0) 
  {counterlatte = counterlatte-0}
  else 
  {counterlatte = counterlatte-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function LungoScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/lungo.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Lungó</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterlungo}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricelungo}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Lungo (Italian for "long") is a coffee beverage made by using an espresso 
       machine to make an Italian-style coffee – short black (a single espresso 
       shot) with more water (generally twice as much), resulting in a larger 
       coffee, a lungo. A normal serving of espresso takes from 18 to 30 seconds 
       to pull, and fills 25 to 60 millilitres, while a lungo may take up to a 
       minute to pull, and might fill 130 to 170 millilitres. Extraction time 
       of the dose is determined by the variety of coffee beans (usually a blend 
       of Arabica and Robusta), their grind and the pressure of the machine.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterlungo = counterlungo+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterlungo == 0 || counterlungo <= 0) 
  {counterlungo = counterlungo-0}
  else 
  {counterlungo = counterlungo-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function MochaScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/drinks/mocha.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Mocha Coffee</Text>
      <Text
     style={styles.new} 
     >Pieces:{countermocha}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricemocha}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       A café mocha (/ˈmɒkə/ or /ˈmoʊkə/), also called mocaccino (Italian: 
       [mokatˈtʃiːno]), is a chocolate-flavoured variant of a café latte 
       (Italian: [kafˈfɛ lˈlatte]), commonly served in a glass. Other commonly 
       used spellings are mochaccino[2] and also mochachino. The name is derived
        from the city of Mocha, Yemen, which was one of the centers of early 
        coffee trade. Like a caffè latte, caffè mocha is based on espresso and 
        hot milk but with added chocolate flavouring and sweetener, typically 
        in the form of cocoa powder and sugar. Many varieties use chocolate 
        syrup instead, and some may contain dark or milk chocolate.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => countermocha = countermocha+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (countermocha == 0 || countermocha <= 0) 
  {countermocha = countermocha-0}
  else 
  {countermocha = countermocha-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
//------------------------------------------------------------------------

//--------------------- CAKE 2ND SCREEN ----------------------------------

function angelcakeScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/angelcake.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Angel Cake</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterangelcake}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${priceangelcake}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Angel cake is a type of layered sponge cake dessert that originated 
       in the United Kingdom, and first became popular in the late 19th 
       century. Made with butter, caster sugar, eggs, vanilla extract, self-raising 
       flour, baking powder, and red and yellow food colouring, it consists 
       of two or three layers of sweet sponge cake which is often coloured 
       white, pink and yellow with a thin layer of white cream. It is 
       traditionally sold either in long bars or small slices. The cake has 
       won many awards, most notably the "English Cake of the Year" in 1986. 
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterangelcake = counterangelcake+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterangelcake == 0 || counterangelcake <= 0) 
  {counterangelcake = counterangelcake-0}
  else 
  {counterangelcake = counterangelcake-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function barabirthScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/barabirth.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Bara Birth Cake</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterbarabirth}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricebarabirth}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Bara brith is a traditional Welsh tea bread flavoured with tea, 
       dried fruits and spices. A decrease in its popularity led to 
       supermarket Morrisons removing it from their shelves in 2006, 
       and a year later a survey showed that 36% of teenagers in Wales 
       had never tried it. It has been subsequently championed by celebrity 
       chefs such as Bryn Williams. Several variations on bara brith have 
       been made, including changing it into a chocolate and into ice cream.
       Bara brith derived its name from the Welsh language, bara meaning 
       bread and brith translating as speckled. 
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterbarabirth = counterbarabirth+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterbarabirth == 0 || counterbarabirth <= 0) 
  {counterbarabirth = counterbarabirth-0}
  else 
  {counterbarabirth = counterbarabirth-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function baumkuchenScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/baumkuchen.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Baumkuchen</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterbaumkuchen}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricebaumkuchen}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Baumkuchen is a kind of spit cake from German cuisine. It's also a 
       popular dessert in Japan. The characteristic rings that appear when 
       sliced resemble tree rings, and give the cake its German name, 
       Baumkuchen, which literally translates to "tree cake" or "log cake".
       Traditionally, Baumkuchen is made on a spit by brushing on even layers 
       of batter and then rotating the spit around a heat source. Each layer 
       is allowed to brown before a new layer of batter is poured.Baumkuchen 
       ingredients are typically butter, eggs, sugar, vanilla, salt, and 
       flour. Baking powder is not considered a traditional ingredient.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterbaumkuchen = counterbaumkuchen+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterbaumkuchen == 0 || counterbaumkuchen <= 0) 
  {counterbaumkuchen = counterbaumkuchen-0}
  else 
  {counterbaumkuchen = counterbaumkuchen-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function blackoutcakeScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/blackoutcake.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Black Out Cake</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterblackoutcake}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${priceblackoutcake}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Blackout cake, sometimes called Brooklyn Blackout cake, 
       is a chocolate cake filled with chocolate pudding and 
       topped with chocolate cake crumbs. It was invented during 
       World War II by a Brooklyn bakery chain named Ebinger's, 
       in recognition of the mandatory blackouts to protect the 
       Brooklyn Navy Yard.After the war, the name persisted for 
       a very dark chocolate cake and became common across the 
       American Midwest. Ebinger's variety was very popular 
       and became a signature offering, popular with Brooklyn 
       residents, until the chain of more than fifty locations 
       closed in 1972.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterblackoutcake = counterblackoutcake+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterblackoutcake == 0 || counterblackoutcake <= 0) 
  {counterblackoutcake = counterblackoutcake-0}
  else 
  {counterblackoutcake = counterblackoutcake-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function blondieScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/blondie.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Blondie</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterblondie}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${priceblondie}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       A blondie (also known as a blonde brownie) is a variety of 
       dessert bar. It resembles a chocolate brownie, but substitutes 
       vanilla in place of cocoa,[1] and contains brown sugar. 
       Blondies also contain flour, butter, eggs, and baking powder 
       and may also contain walnuts or pecans, white or dark chocolate 
       chips, butterscotch chips, or other flavored chips.Blondies differ 
       insignificantly from white chocolate brownies. Unlike the white 
       chocolate brownie or the normal brownie, they contain no chocolate 
       or chocolate flavouring, other than chocolate chips, which may 
       be included.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterblondie = counterblondie+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterblondie == 0 || counterblondie <= 0) 
  {counterblondie = counterblondie-0}
  else 
  {counterblondie = counterblondie-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function brownieScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/brownie.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Brownie</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterbrownie}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricebrownie}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       A chocolate brownie or simply a brownie is a square or rectangular 
       chocolate baked confection. Brownies come in a variety of forms 
       and may be either fudgy or cakey, depending on their density. 
       They may include nuts, frosting, cream cheese, chocolate chips, 
       or other ingredients. A variation made with brown sugar and 
       vanilla rather than chocolate in the batter is called a blond 
       brownie or blondie. The brownie was developed in the United 
       States at the end of the 19th century and popularized in the 
       U.S. and Canada during the first half of the 20th century. 
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterbrownie = counterbrownie+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterbrownie == 0 || counterbrownie <= 0) 
  {counterbrownie = counterbrownie-0}
  else 
  {counterbrownie = counterbrownie-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function chocolatecakeScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/chocolatecake.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Chocolate Cake</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterchocolatecake}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricechocolatecake}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       Single-serving molten chocolate cakes with liquid chocolate 
       centers and infused chocolates with exotic flavors such as 
       tea, curry, red pepper, passion fruit, and champagne were 
       popular. A chocolate cake is a cake made with chocolate or 
       cocoa. The ingredients are put into a bowl and mixed together; 
       then the mixed ingredients are put into a cake tin and put 
       in an oven until it is fully cooked. Then the cake is taken 
       out of the oven and placed on a cooling stand. Chocolate 
       cake or chocolate gâteau (from French: gâteau au chocolat) 
       is a cake flavored with melted chocolate, cocoa powder, or both.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterchocolatecake = counterchocolatecake+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterchocolatecake == 0 || counterchocolatecake <= 0) 
  {counterchocolatecake = counterchocolatecake-0}
  else 
  {counterchocolatecake = counterchocolatecake-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}
function dundeecakeScreen() {
  return (
    <SafeAreaView>
    <View>
    <ImageBackground
               opacity={0.5}
               style={styles.imagebackground}
               source={require("./assets/bg.jpg")}/>
     <Image
     style={styles.imagebgsecond}
     source={require("./assets/desserts/deundeecake.jpg")}/>
     <Text
     style={styles.textimagebgsecond} 
     >Dundee Cake</Text>
      <Text
     style={styles.new} 
     >Pieces:{counterdundeecake}</Text>
     <Text
     style={styles.textimagebgsecondonepointtwo} 
     > ${pricedundeecake}/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
       The cake is often made with currants, sultanas and almonds; 
       sometimes, fruit peel may be added to it. The original 
       development of the cake began in Dundee in the late 1700s 
       in the shop of Janet Keiller. It was mass-produced by 
       the marmalade company Keiller's marmalade who have been 
       claimed to be the originators of the term "Dundee cake".
       A traditional Dundee cake comes from Dundee, Scotland, 
       which is quite simply how this cake got its name. The 
       cake distinguishes itself from other rich fruit cakes 
       by the circles of blanched almonds on the top.
        </Text>
        <View>
<TouchableNativeFeedback onPress={() => counterdundeecake = counterdundeecake+1}>
      <Text
      style={styles.addtocartbutton}
      > Add To Cart </Text>
</TouchableNativeFeedback>
</View>
<View>
<TouchableNativeFeedback onPress={() => 
  {if (counterdundeecake == 0 || counterdundeecake <= 0) 
  {counterdundeecake = counterdundeecake-0}
  else 
  {counterdundeecake = counterdundeecake-1}
  }
  }>
      <Text
      style={styles.removetocartbutton}
      > Remove Item </Text>
</TouchableNativeFeedback>
</View>
   </View>
   </SafeAreaView>
  );
}

//------------------------------------------------------------------------

const styles = StyleSheet.create({
  
  Button:{
    width: '28%',
    height: 45,
    backgroundColor: '#fcdfc0',
    borderRadius: 10,
    borderColor:'#ffbe46',
    margin: 9.5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',

},

ButtonContainers:{
    flexDirection: 'row',
    backgroundColor: '#db9e5c',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    top: 15,
    justifyContent: 'center'
},

logo: {
  width: 370,
  height: 175,  
  alignSelf:'center',
  margin:10,
  borderRadius: 15,
  borderColor:'#ffbe46',
  borderWidth: 3,
  top: 8
},

breadlogo1: {
  borderWidth: 3,
  borderColor: 'black',
  height: 150, 
  width: 160,
  marginRight: 13,
  margin: 2, 
  borderRadius: 15, 
  bottom: 25 ,
}, 

breadlogo2: {
  borderWidth: 3,
  borderColor: 'black',
  height: 150, 
  width: 160,
  marginLeft: 13,
  margin: 2, 
  borderRadius: 15, 
  bottom: 25 
},

coffeelogo1: {
  borderWidth: 3,
  borderColor: 'black',
  height: 150, 
  width: 150,
  marginRight: 13,
  margin: 2, 
  borderRadius: 15, 
  bottom: 25,
}, 

coffeelogo2: {
  borderWidth: 3,
  borderColor: 'black',
  height: 150, 
  width: 150,
  marginLeft: 10,
  margin: 2, 
  borderRadius: 15, 
  bottom: 25 
},

cakelogo1: {
  borderWidth: 3,
  borderColor: 'black',
  height: 150, 
  width: 150,
  marginRight: 13,
  margin: 2, 
  borderRadius: 15, 
  bottom: 25,
}, 

cakelogo2: {
  borderWidth: 3,
  borderColor: 'black',
  height: 150, 
  width: 150,
  marginLeft: 13,
  margin: 2, 
  borderRadius: 15, 
  bottom: 25 
},

arrangement: {
  flexDirection: 'row', 
  justifyContent: 'center',
  top: 50
},

imagebackground: {
  height: 700,
  width: 420,
  backgroundColor: 'black',
  position: 'absolute',
},

imagebgsecond: {
  borderColor: 'brown',
  borderWidth: 3,
  borderRadius: 13,
  height: 235,
  width: 385,
  justifyContent: 'center',
  alignContent: 'center',
  left: 4,
  top: 30
},

textimagebgsecond: {
      color: 'white',
       textAlign: 'center',
       alignItems: 'center', 
       position: 'absolute',
       top: 285,
       color: 'black',
       fontSize: 27,
       paddingTop: 3,
       paddingLeft: 10,
       paddingRight: 10,
       backgroundColor: '#e8f2c7',
       borderColor: 'brown',
       borderWidth: 3,
       borderRadius: 13,
       fontStyle: 'italic',
       margin: 5,
       fontWeight: 'bold'
},

textimagebgsecondonepointtwo: {
  color: 'white',
   textAlign: 'center',
   alignItems: 'center', 
   position: 'absolute',
   top: 297,
   color: 'black',
   fontSize: 15,
   paddingTop: 3,
   paddingLeft: 10,
   paddingRight: 10,
   backgroundColor: '#e8f2c7',
   borderColor: 'brown',
   borderWidth: 3,
   borderRadius: 13,
   fontStyle: 'italic',
   left: 290,
   margin: 5,
   fontWeight: 'bold'
},

new:{
  color: 'white',
  textAlign: 'center',
  alignItems: 'center', 
  position: 'absolute',
  top: 297,
  color: 'black',
  fontSize: 15,
  paddingTop: 3,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: '#e8f2c7',
  borderColor: 'brown',
  borderWidth: 3,
  borderRadius: 13,
  fontStyle: 'italic',
  left: 200,
  margin: 5,
  fontWeight: 'bold'
},

textimagebgsecond2: {
       position: 'absolute',
       textAlign: 'justify', 
       color: 'black', 
       top: 350,
       fontSize: 15,
       paddingTop: 5,
       paddingLeft: 10,
       paddingRight: 10,
       backgroundColor: '#e8f2c7',
       borderColor: 'brown',
       borderWidth: 5,
       borderRadius: 13,
       fontStyle: 'italic',
       margin: 5,
       fontWeight: 'bold'
},

addtocartbutton: {
  position: 'absolute',
  color: 'black',
  width: 150,
  backgroundColor: "#f0d7a8",
  borderRadius: 5,
  fontSize: 15,
  height: 45,
  top: 375,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 10,
  left: 25,
  borderColor: '#b8a484',
  borderWidth: 3
},

removetocartbutton: {
  position: 'absolute',
  color: 'black',
  backgroundColor: "#f0d7a8",
  borderRadius: 5,
  fontSize: 15,
  height: 45,
  width: 150,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 10,
  left: 215,
  top: 375,
  borderColor: '#b8a484',
  borderWidth: 3
},

order1: {
  color: 'black',
  width: '93%',
  backgroundColor: "#f0d7a8",
  borderRadius: 5,
  height: '98.7%',
  left: 14,
  top: 15
 },

 order1point1: {
  color: 'black',
  width: '93%',
  backgroundColor: "#f0d7a8",
  borderRadius: 5,
  height: '97.7%',
  left: 14,
  top: 15
 },

order2:{
  position: 'absolute',
  color: 'black',
  width: '28%',
  backgroundColor: "#f0d7a8",
  borderRadius: 5,
  borderColor: 'brown',
  borderWidth: 3,
  fontSize: 20,
  height: 40,
  fontWeight: 'bold',
  textAlign: 'center',
  top: 30,
  left: 30,
  paddingTop: 5,
},

order3:{
  position: 'absolute',
  color: 'black',
  width: '83%',
  fontSize: 15,
  textAlign: 'left',
  top: 70,
  left: 30,
  paddingTop: 5,
},

order4:{
  position: 'absolute',
  color: 'black',
  width: '83%',
  fontSize: 13,
  textAlign: 'left',
  top: 70,
  left: 40,
  paddingTop: 5,
},

order5:{
  position: 'absolute',
  color: 'black',
  width: '83%',
  fontSize: 13,
  textAlign: 'center',
  top: 71,
  left: 30,
  paddingTop: 5,
},

order6:{
  position: 'absolute',
  color: 'black',
  width: '83%',
  fontSize: 13,
  textAlign: 'right',
  top: 70,
  paddingTop: 5,
  fontWeight: 'bold',
  right: 150
},

order7:{
  position: 'absolute',
  color: 'black',
  width: '83%',
  fontSize: 13,
  textAlign: 'right',
  top: 70,
  paddingTop: 5,
  fontWeight: 'bold',

},

turnin:{
  position: 'absolute',
  color: 'black',
  width: '25%',
  backgroundColor: "#f0d7a8",
  borderRadius: 5,
  borderColor: 'brown',
  borderWidth: 3,
  fontSize: 15,
  height: 40,
  fontWeight: 'bold',
  textAlign: 'center',
  top: "92%",
  right: 255,
  paddingTop: 8,
},

order8:{
  position: 'absolute',
  color: 'black',
  width: '28%',
  backgroundColor: "#f0d7a8",
  borderRadius: 5,
  borderColor: 'brown',
  borderWidth: 3,
  fontSize: 15,
  height: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  top: 35,
  left: 250,
  paddingTop: 5,
},

})

export default Apps;