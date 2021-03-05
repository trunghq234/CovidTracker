import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import News from '../component/News'
import colors from '../Colors';
import axios from 'axios';

export default function NewsScreen() {
  const [newsArr, setNewsArr] = useState([]);

  async function fetchNews() {
    const options = {
      method: 'GET',
      url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/${Math.floor(Math.random()*5)}`,
      headers: {
        'x-rapidapi-key': '6b90b67309msh0bec3915bee832fp1bc7c5jsn453ebc92c115',
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setNewsArr(response.data.news);
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Lastest News</Text>
        <View style={styles.content}>
          { newsArr.map(news => <News news={news} key={news.news_id} />)  }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 26, 
    fontWeight: '700',
    color: colors.text,
    marginVertical: 20,
    marginHorizontal: 30
  },
  content: {
    flex: 1,
    marginHorizontal: 30,
  }
})
