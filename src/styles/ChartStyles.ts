import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chartWrapper: {
        height: 350,
        padding: 20,
    },
    chartContainer: {
        height: 300,
        marginLeft: 20,
    },
    xAxisLabel: {
        textAlign: 'center',
        marginTop: 10,
    },
    yAxisLabel: {
        position: 'absolute',
        left: -20,
        top: '20%',
        transform: [{ rotate: '-90deg' }],
    },
    dataViewContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    xValue: {
        fontSize: 16,
        color: '#666666',
    },
    yValue: {
        fontSize: 32,
        color: '#0066cc',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});