import { StyleSheet } from "react-native";

export default StyleSheet.create ({
container: {
    flex:1,
    backgroundColor: '#f5f5f5',
    
    alignItems: 'center'
},

card:{
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width:0, height:1},
    shadowOpacity: 0.8,
    margin:15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3

},

titulo: {
    fontSize: 18,
    padding: 15
},

capa: {
    height: 250,
    zIndex: 2 // botao leia mais ficar em cima da imagem
},
areaBotao:{
   alignItems: 'flex-end', //alinhar no final da View
   marginTop: -40, // botao leia mais ficar em cima da imagem
    zIndex: 9, // botao leia mais ficar em cima da imagem
}, 

botao:{
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding:8 ,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius:5

},

botaoTexto:{
    textAlign: 'center',
    color: '#fff'
}


   
})