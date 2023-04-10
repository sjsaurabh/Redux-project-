import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
  const cartData=useSelector((state)=>state.reducer)
  // console.log(cartData);
  const [cartItems,setCartItems]=useState(0)
  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])
  return (
    <View>
      <Text style={{fontSize:25,textAlign:"right",backgroundColor:"red"}}>
      <View style={{
        backgroundColor:"yellow",
        borderRadius:20,
        height:40,
        width:40,
        alignItems:"center",
        justifyContent:'center'

      }}>
      <Text style={{fontSize:30,}}>{cartItems}</Text>
      </View>
      </Text>
    </View>
  )
}

