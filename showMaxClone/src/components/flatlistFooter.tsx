import { useState,  } from "react";
import {View, Text, Image, FlatList, SectionList} from "react-native"
import { MovieDBImageRetrieval } from "../services/retrivaImg";


const FooterComps = ({data}) => {
    const renderSectionItem = ({item, section}) => {
      let imageStyle = {
        width: section.title === 'Popular Brand' ? 100 : 250,
        height: section.title === 'Popular Brand' ? 100 : 120,
        borderRadius: section.title === 'Popular Brand' ? 5 : 10,
      };
  
      return (
        <View style={{ margin: 5 }}>
          <Image  source={{ uri: `${MovieDBImageRetrieval}${item.poster_path}`}} style={imageStyle} />
        </View>
      );
    };
  
    const renderSectionHeader = ({ section: {title, data } }) => (
      <View style = {{gap:15, top:30}}>
        <Text style={{color:'#fff', left:13, top:6}}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => renderSectionItem({item, section:{title}})}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  
    return (
      <View style ={{gap:4}}>
        <SectionList
          sections={data}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={() => null}
        />
      </View>
    );
  };
  
  export default FooterComps;