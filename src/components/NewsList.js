import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';

class NewsList extends Component {

  state = { articles: [] };
  componentWillMount() {
  axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b775205b36194a74909ddd71321aec6c')
  .then(response => this.setState({ articles: response.data.articles }));
  }

  renderNews() {
    return this.state.articles.map(article => <NewsDetail key={article.title} article={article} />);
  }
  render() {
  return (
    <ScrollView>
    {this.renderNews()}
    </ScrollView>
  );
}
}

export default NewsList;
