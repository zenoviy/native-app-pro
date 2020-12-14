import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    heading_1: {
        fontSize: 20
    },
    heading_2: {
        fontSize: 18
    },
    heading_3: {
        fontSize: 16
    },
    heading_4: {
        fontSize: 14
    },
    heading_5: {
        fontSize: 12
    },
    heading_5: {
        fontSize: 10
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%"
    },
    topBlock: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    appBoard: {
        flex: 3,
        backgroundColor: "#EDEDED",
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    card: {
        paddingTop: 20,
        paddingBottom: 20,
        marginVertical: 8,
        marginTop: 10,

        width: "100%",
        minHeight: 300,
        flex: 1,
        marginVertical: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff",
    },
    cardTextArea: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    singlePageHeader: {
        height: 200
    }
});