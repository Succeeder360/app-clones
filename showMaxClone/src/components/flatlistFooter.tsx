import { useState,  } from "react";
import {View, Text, Image, FlatList, SectionList} from "react-native"





const FooterComps = ({sec}) => {

    const [newi, setNewi] = useState(0);
    
    const renderSectionItem = ({ item, section}) => {
      let imageStyle = {
        width: section.title === 'Browse By Genre' ? 100 : 250,
        height: section.title === 'Browse By Genre' ? 100 : 120,
        borderRadius: section.title === 'Browse By Genre' ? 5 : 10,
      };
  
      return (
        <View style={{ margin: 5 }}>
          <Image source={{ uri: item }} style={imageStyle} />
        </View>
      );
    };
  
    const renderSectionHeader = ({ section: {title, data } }) => (
      <View>
        <Text style={{ color: '#fff' }}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => renderSectionItem({item, section:{title}})}
          horizontal
          showsHorizontalScrollIndicator={false}
         
        />
      </View>
    );
  
    return (
      <View>
        <View style={{ margin: 10 }}>
       
        </View>
        <SectionList
          sections={sec}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={() => null}
        />
      </View>
    );
  };
  
  export default FooterComps;