import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import colors from '../Colors'

export default SkeletonNews = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item padding={10} flexDirection="row">
          <SkeletonPlaceholder.Item 
            width={80}
            height={80} 
            borderRadius={6}
          />
          <SkeletonPlaceholder.Item
            flex={1}
            justifyContent={'flex-start'}
            marginLeft={12}>
            <SkeletonPlaceholder.Item
              width="100%"
              height={20}
              borderRadius={6}
            />
            <SkeletonPlaceholder.Item
              width="90%"
              height={40}
              borderRadius={6}
              marginTop={10}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    height: 100,
    marginBottom: 15,
    borderColor: colors.text2,
    borderRadius: 8,
    borderWidth: 1,

  },
})