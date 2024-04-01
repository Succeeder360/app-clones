import { View, Text, Image, SectionList, StyleSheet}  from "react-native"



 const img = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const img2 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const img3 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const img4 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const img5 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



 const DATA = [
  {
    title: 'Main dishes',
    data: [img, img2, img4, img5, img3],
  },
 
];


      const Section = () => {
        return(
         <View  style = {styles.container}>
            <SectionList sections={DATA} renderItem={ ({item}) => (
              <View>
                <Image source={{uri:item}} height={100} width={200}/>
              </View>
            )} horizontal 
            renderSectionHeader={ ({section:{title}}) => (
              <View>
                <Text style = {{color:"#fff"}}>{title}</Text>
              </View>
            ) }
            />
         </View>
        )
      }

      export  default Section;





      const styles = StyleSheet.create({

        container:{
  
          
         
         
          
        },
        innerContainer:{
        
          gap:5
        },
        item:{
          position:"relative",
          top:5,
          marginTop:20,
          padding:5
        },
        title:{
          color:"#fff",
          fontSize:10,
          position:"absolute",
          marginTop:3,
       
        }
      })
  
/* 
<SectionList sections={dummy} renderItem={ ({item}) => 
<View>
<Image  source={{uri:item}} height={100} width={100} style = {{position:"relative", top:20, }}/>
</View> 
} 

renderSectionHeader={ ({section}) => (
<View>
  <Text style = {{color:"#fff", position:"absolute"}}>{section.title}</Text>
</View>
)}
horizontal

/>
*/

