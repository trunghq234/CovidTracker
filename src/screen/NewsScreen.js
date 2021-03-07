import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import News from '../component/News'
import colors from '../Colors';
import axios from 'axios';
import SkeletonNews from '../component/SkeletonNews';

export default class NewsScreen extends Component {
  state = {
    newsArr: [],
    isLoading: true
  }
  fetchNews = () => {
    const options = {
      method: 'GET',
      url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/${Math.floor(Math.random()*5)}`,
      headers: {
        'x-rapidapi-key': '6b90b67309msh0bec3915bee832fp1bc7c5jsn453ebc92c115',
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    };
    axios.request(options)
      .then(response => {
        this.setState({
          newsArr: response.data.news.slice(0, 10),
          isLoading: false
        })
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Text style={styles.title}>Lastest News</Text>
          { this.state.isLoading ? <View><SkeletonNews /><SkeletonNews /><SkeletonNews /><SkeletonNews /><SkeletonNews /></View> : null }
          <View style={styles.content}>
            { this.state.newsArr.map(news => <News news={news} key={news.news_id} />)  }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 26, 
    fontWeight: '700',
    color: colors.primary,
    marginVertical: 20,
    marginHorizontal: 20
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
  }
})
