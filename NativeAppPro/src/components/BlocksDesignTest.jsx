import React, { useContext, useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity  } from 'react-native';
import { Text } from 'react-native-elements';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

import globalStyle from './style/global-style'; 
import Context from '../utils/context';


const BlocksDesign = ({ route, navigation }) => {
    const context = useContext(Context);
    
    const excersizeData = [
        {
            date: new Date('July 1, 2020'),
            exercize: 'Gym'
        }, {
            date: new Date('June 20, 2020'),
            exercize: 'Run'
        }, {
            date: new Date('April 8, 2020'),
            exercize: 'Swim'
        }, {
            date: new Date('August 3, 2020'),
            exercize: 'Shoot'
        }, {
            date: new Date(),
            exercize: 'Codding'
        }
        
    ] ;

    return(
        <View style={{flex: 1}}>
            <ScrollView>
                <Text style={{textAlign: 'center'}}>blocks design</Text>
                <WorkoutCard excersize='squat' repsAndWeight='5x5' sets={[3, 4, 1, 5, 6]}/>
                <TableCard excersizeData={excersizeData} />
                <NewsBlock />
                <View style={{
        
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 100, backgroundColor: 'steelblue'}} />

                    <View style={{width: "100%", height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 100, backgroundColor: 'steelblue'}} />
                </View>
                
            </ScrollView><View style={{padding: 10, backgroundColor: "green", color: '#fff'}}>
                    <Text style={{color: '#fff'}}>Hold bar</Text>
                </View>
        </View>
    )
}


const WorkoutCard = ({repsAndWeight, excersize, sets}) => {
    return(
        <View style={style.card}>
            <View style={style.topRow}>
                <Text style={style.topRowText}>{ excersize }</Text>
                <Text style={style.topRowText}>{ repsAndWeight }</Text>
            </View>
            <View style={style.bottomRow}>
                {
                    sets.map((item, index) => <View key={index} style={ style.cyrcle}>
                        <Text style={{color: '#fff'}}>{item}</Text>
                    </View>)
                }
            </View>
        </View>
    )
}

const TableCard = ({excersizeData}) => {
    return(
        <View style={{...style.card, ...style.cardRow}}>
            { excersizeData.map((item, i) => {
                let { date, exercize } = item;
                let {year, month, monthDay, hour, minutes} = {year: date.getFullYear(), 
                    month: date.getMonth() + 1, monthDay: date.getUTCDate(), hour: date.getHours(), 
                    minutes: date.getMinutes()} 
                return(
                   <View key={i} style={style.templateCard}>
                        <Text>{exercize} </Text>  
                        <Text>{year}/{month}/{monthDay} {hour}:{minutes}</Text> 
                   </View> 
                )
            })}            
        </View> 
    )
}
// thumb-up-alt   "thumb-up-off-alt"
const NewsBlock = () => {
    const [ postState, setPostState ] = useState({
        numberOfLIkes: 10,
        yoursLike: false   
    })
    const changeLikes = () => {
        if(postState.yoursLike) {
            setPostState({
                numberOfLIkes: postState.numberOfLIkes - 1,
                yoursLike: false
            })
        } else setPostState({
            numberOfLIkes: postState.numberOfLIkes + 1,
            yoursLike: true
        })
    }
    return(
        <View style={{...style.newsTemplate, ...style.boxShadow}}>
            <Image source={require('../../assets/backgrounds/city.jpg')}
            style={{ width: "100%", height: 300 }} />
            
            <Text h3 style={{padding:10}}>A geologic game of connect the dots</Text>
            <Text style={{padding: 10}}>The multiple volcanoes in the Islands of the Four Mountains (shown), part of the chain that make 
                up the Aleutian Islands in southwestern Alaska, appear to be connected by one large caldera created when a 
                supervolcano erupted, a new study suggests.</Text>
                <View style={{flexDirection: 'row',justifyContent: "flex-end"}} >
                    <TouchableOpacity style={{width: "30%"}} onPress={() => {
                        alert("Read more")
                    }}>
                        <Text style={{fontSize: 18, textAlign: "right", padding: 5 }}>Read More</Text>
                    </TouchableOpacity>
                </View>
                
            <View style={{flexDirection: 'row', alignContent: 'center', padding: 10, borderTopColor: "#bebebe",
        borderTopWidth: 1,}}>
                <TouchableOpacity onPress={() => {
                    changeLikes()
                }}>
       
                    <MaterialIcons name="thumb-up" color={postState.yoursLike ? "#000" : "#bbb"} size={27} />
                </TouchableOpacity>
                <Text style={{padding: 5}}>{postState.numberOfLIkes}</Text>
               
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    card: {
        borderRadius: 3,
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
        padding: 10,
        flexDirection: 'column'
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        borderTopColor: "#bebebe",
        borderTopWidth: 1,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10
    },
    cyrcle: {
        width: 50,
        height: 50,
        backgroundColor: "#D40000",
        color: "#ffffff",
 
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 50
    },
    cardRow: {
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-around"
    },
    templateCard: {
        width: 95/3 + "%",
        backgroundColor: "#bbb",
        padding: 10,
        marginBottom: 10
    },
    newsTemplate: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#fff",
        minHeight: 100

    }
    
})
export default BlocksDesign