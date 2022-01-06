import React, { Component } from 'react';
import { View, Text , FlatList} from 'react-native';
import api from './src/services/api';
import style from './src/styles/styles';
import Filmes from './src/components/Filmes';

export default class FilmesSujeito extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filmes: []

      
    }
    
  }


  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data

    })

  }

  

  render() {
    return (

      <View style ={style.container}>
        <Text> ola pessoar</Text>

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