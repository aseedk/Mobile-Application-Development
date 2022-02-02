import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{flexDirection:'column', backgroundColor:'grey', height:'100%'}}>
      <View style={styles.CalenderRow, {flex:0.5, justifyContent:'center'}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:32}}>October Calender</Text>
      </View>
      <View style={styles.CalenderRow}>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>T</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>W</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>T</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>S</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CalenderRow}>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>28</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>29</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>30</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CalenderRow}>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>10</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CalenderRow}>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>11</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>13</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>14</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>16</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>17</Text>
        </TouchableOpacity>
      </View><View style={styles.CalenderRow}>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>19</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>22</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>23</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>24</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CalenderRow}>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>25</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>26</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>28</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>29</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>30</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalenderDay}>
          <Text style={styles.CalenderDayText}>31</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CalenderRow: {flex:1, flexDirection:'row'},
  CalenderDay:{flex:1, justifyContent:'center', backgroundColor:"grey", borderWidth:1},
  CalenderDayText:{textAlign:'center', fontWeight:'bold', fontSize:22}
});
