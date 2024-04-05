import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { colors, fonts } from '../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput } from '../../components'

import DateTimePicker from '@react-native-community/datetimepicker';

export default function HoursMeters({navigation}) {
const backPage = () => {
    navigation.goBack();
}


    const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);


  
  const handleStartTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || startTime;
    setShowStartTimePicker(Platform.OS === 'ios');
    setStartTime(currentDate);
  };


  const handleEndTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || endTime;
    setShowEndTimePicker(Platform.OS === 'ios');
    setEndTime(currentDate);
  };


  const showStartTimePickerModal = () => {
    setShowStartTimePicker(true);
  };

  const showEndTimePickerModal = () => {
    setShowEndTimePicker(true);
  };


  return (
    <View style={{flex:1, backgroundColor:colors.white}}>

    {/* HEADERS */}
    <MyHeader judul="Input Hours Meter" onPress={backPage}/>

    <ScrollView>

    <View style={{padding:10, }}>
        <MyInput label="Nama Operator"/>
        <MyGap jarak={20}/>
        <MyInput label="Proyek Yang di Kerjakan"/>
        <MyGap jarak={20}/>
        <TouchableOpacity onPress={showStartTimePickerModal}>
        <Text style={{fontSize: 16, color: colors.black, fontFamily:fonts.primary[400], left:10}}>Mulai Kerja</Text>
        <View style={{ height: 50, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: colors.gray }}>
              <Text style={{fontSize: 16, color: colors.black, left:20}}>{startTime.toLocaleTimeString()}</Text>
            </View>
        </TouchableOpacity>
        {showStartTimePicker && (
            <DateTimePicker
              testID="startTimePicker"
              value={startTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleStartTimeChange}
            />
          )}
        <MyGap jarak={20}/>
        <TouchableOpacity onPress={showEndTimePickerModal}>
        <Text style={{fontSize: 16, color: colors.black, fontFamily:fonts.primary[400], left:10}}>Terakhir Kerja</Text>
            <View style={{ height: 50, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: colors.gray }}>
              <Text style={{fontSize: 16, color: colors.black, left:20}}>{endTime.toLocaleTimeString()}</Text>
            </View>
          </TouchableOpacity>
          {showEndTimePicker && (
            <DateTimePicker
              testID="endTimePicker"
              value={endTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleEndTimeChange}
            />
          )}
        <MyGap jarak={20}/>
        <MyCalendar label="Tanggal"/>
        <MyGap jarak={20}/>
        <MyInput label="Kode Unit"/>
        <MyGap jarak={20}/>
        <MyInput label="HM Terakhir (Jika Proyek Per HM)"/>
        <MyGap jarak={20}/>
        <MyInput label="Terakhir Kerja (Jika Proyek Per Meter)"/>
        <MyGap jarak={50}/>

        {/* DATA INI AKAN MASUK KE DATABASE DAN AKAN KE WHATSAAP SEPERTI DI DOKUMEN DAN DESAINNYA SEPERTI DI FIGMA */}
        <MyButton title="Kirim" />
    </View>
     
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})