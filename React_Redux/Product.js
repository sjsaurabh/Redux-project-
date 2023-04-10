import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addToCart,removeFromCart } from './Redux/action'
import { useDispatch ,useSelector} from 'react-redux'
 

export default function Product(props) {
    const item=props.item
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.reducer)
    const [isAdded,setIsAdded]=useState(false)
    const handleAddToCart=(item)=>{
        // console.warn("called",item)
        dispatch(addToCart(item))
    }
    const handleRemoveFromToCart=(item)=>{
        dispatch(removeFromCart(item.name)) 
    }
    useEffect(()=>{
      // if(cartItems && cartItems.length){
      //   cartItems.forEach((element)=>{
      //     if(element.name===item.name){
      //       setIsAdded(true)
      //     }
      //   })
      // }
      let result = cartItems.filter((element)=>{
      return element.name=== item.name
      });
      if(result.length){
        setIsAdded(true)
      } else {
        setIsAdded(false)
      }
    },[cartItems])
  return (
    <View style={styles.container}>
     
      <View  style={{margin:10,padding:10,justifyContent:'center',alignItems:'center',borderBottomWidth:1,
    borderBottomColor:"orange"
    }}>
            <Text>{item.name}</Text>
            <Text>{item.color}</Text>
            <Text>₹ {item.price}</Text>
            <Image
            style={{height:150,width:200}}
            source={{uri:item.image}}
            />
            {
              isAdded?
              <TouchableOpacity style={{backgroundColor:"blue",width:"50%",height:40,marginTop:10}}
            onPress={()=>handleRemoveFromToCart(item)}
            >
            <Text style={{fontSize:22,textAlign:"center",marginTop:5,color:"white"}}>Remove To Cart</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{backgroundColor:"blue",width:"50%",height:40,marginTop:10}}
            onPress={()=>handleAddToCart(item)}
            >
            <Text style={{fontSize:22,textAlign:"center",marginTop:5,color:"white"}}>Add To Cart</Text>
            </TouchableOpacity>
            }
            
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})