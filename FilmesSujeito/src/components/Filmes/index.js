import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

class Filmes extends Component {
    render() {
        const {nome, foto} = this.props.data; // desconstruir função javascript
        return (
            <View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{nome} </Text>

                    <Image
                        source={{ uri: foto }}
                        style={styles.capa}
                    />
                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} 
                        onPress={() => alert(this.props.data.sinopse)}
                        >
                            <Text style={styles.botaoTexto}>LEIA MAIS</Text>

                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        )
    }
}


export default Filmes;