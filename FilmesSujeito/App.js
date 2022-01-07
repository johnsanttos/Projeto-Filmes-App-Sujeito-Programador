import React, { Component } from 'react';
import { View, Text , FlatList, ActivityIndicator} from 'react-native';
import api from './src/services/api';
import style from './src/styles/styles';
import Filmes from './src/components/Filmes';

export default class FilmesSujeito extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filmes: [],
      loading: true    
    }
    
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
      loading: false
    })

  }


  render() {

if (this.state.loading){
return (
  <View style= {{alignItems:'center', justifyContent: 'center', flex:1}} >
  <ActivityIndicator color={ '#09a6ff'} size={40} />
  </View>
)
} else {
  return (

    <View style ={style.container}>
  
      <FlatList
      data={this.state.filmes}
      //tem que sempre converter o id se for numerico a string com "toString()"
      keyExtractor={item =>item.id.toString()}
      renderItem={({item}) => <Filmes data = {item}/>}
      />

    </View>
  );

}

    
  }
}