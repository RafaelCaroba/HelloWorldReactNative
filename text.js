import React, {Component} from "react";
import { View, Text, TextInput } from "react-native";


class Textt extends Component{

    // criando uma propriedade
    static prop = {
        limite: 20
    }

    // criando um estado 
    state = {

        // estado inicial da string textt é vazio
        textt: ''
    }

    // definindo uma função(function)
    alteracao = (textt) => {

        textt.length <= this.props.limite ? this.setState({textt}) : textt 

        // this.state.textt.length = this.props.limite ?  
    }

    render(){

        const {state, props} = this
        return(

            <View>

                <TextInput
                multiline={true}
                numberOfLines={3} 
                value={state.textt}
                onChangeText={this.alteracao}
                style={
                    {borderColor:'gray',
                     borderWidth: 2,
                     borderRadius:15, 
                     paddingLeft:6,
                    width: 350
                    } 
                } placeholder="digite uma mensagem"/>
                <Text>Total: {state.textt.length}/{props.limite}</Text>
            </View>
        ) 

        
    }

}

export default Textt;