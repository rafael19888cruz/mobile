import React from  'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

class LongText extends React.Component{
constructor(props){
    super(props);

    this.state = {
        isExpanded: false
    }
}
changeIsExpanded(){
    const {isExpanded} = this.state;
    this.setState({
        isExpanded: !isExpanded
    })
}


render(){
const {label, content="-"} = this.props;
const {isExpanded} = this.state;

    return(
        <View style={styles.line}>
            <Text style={[styles.cell,
                        styles.label,
                        label.length > 100 ? styles.longLabel: null 
                    ]}>{label}</Text>

  <TouchableWithoutFeedback onPress= {() => this.changeIsExpanded()}>  
      <View>       
            <Text style={[styles.cell, 
            styles.content,
            isExpanded ? styles.expanded : styles.collapsed
            ]}>{content}</Text>
            </View>
            </TouchableWithoutFeedback>
            
        </View>
     );
    }
}

const  styles=StyleSheet.create({
    line:{
        paddingTop:3,
        paddingBottom:3,
    },
    cell: {
        paddingLeft:5,
        fontSize: 16
    },
    label:{
        fontWeight: 'bold',
        flex: 3
    },
    content:{
        flex:3
    },
    longLabel:{
        fontSize: 12
    },
    collapsed:{
        maxHeight: 60
    },
    expanded: {
        flex: 1
    }
});

export default LongText;