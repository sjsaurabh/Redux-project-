import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Product from './Product'

export default function App1() {
  const products=[
    {
      name:'samsung Mobile',
      color:'white',
      price:30000,
      image:'https://cdn1.smartprix.com/rx-ii3Pn8ry8-w1200-h1200/i3Pn8ry8.jpg'
    },{
      name:'Apple',
      color:'black',
      price:830000,
      image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505836714'
    },{
      name:'Nokia',
      color:'red',
      price:54000,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9gkq-CnyGldvS1R1OtO4VcRcCNLB_NjP6aDwHbf-9w&usqp=CAU&ec=48665699'
    },{
      name:'One plus',
      color:'white',
      price:60000,
      image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71AvQd3VzqL._SX569_.jpg'
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,}}>Ui for add To Cart with Redux</Text>
      <Header/>
      <ScrollView>
      
      {
        products.map((item)=>
          
            <Product key={item.name} item={item}/>
          
      
        )
      }
      </ScrollView>
      <Text>SDFG</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20
}
})