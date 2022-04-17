// react components
import React from 'react';

import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import IconNameCard from '../../components/IconNameCard/IconNameCard';

// components
import MyHeader from '../../components/MyHeader/MyHeader';
import MyText from '../../components/MyText/MyText';
import {Colors, MyIcons} from '../../global';

// styles
import {styles} from './HomeStyle';

const Home = () => {
  //data
  const studentData = {
    student_name: 'Rupak Kumar Jha',
    student_age: '15',
    student_class: 'Third',
    student_image:
      'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg',
    student_id: '2234567345',
    student_section: 'B',
    student_roll: '15',
    student_fees: '4000.00',
    student_fees_pending_amt: '2000.00',
    student_fees_paid_status: 'Pending',
    student_fees_paid_amt: '2000.00',
    student_fees_due_date: '2022-04-13',
    student_fees_paid_date: '2022-04-12',
    student_fees_paid_method: 'Online',
  };
  const sectionData = [
    {
      id: 1,
      name: 'k12-Diary',
    },
    {
      id: 2,
      name: 'Homework',
    },
    {
      id: 3,
      name: 'School Fee',
    },
    {
      id: 4,
      name: 'Live Class Attendance',
    },
    {
      id: 5,
      name: 'Online Exam',
    },
    {
      id: 6,
      name: 'Report Card',
    },
    {
      id: 7,
      name: 'Admit Card',
    },
    {
      id: 8,
      name: 'Shared Lessons',
    },
    {
      id: 9,
      name: 'Assignment',
    },
  ];
  const imageurl = `https://us.123rf.com/450wm/adsniks/adsniks1906/adsniks190600106/124419182-cute-little-indian-indian-asian-school-boy-wearing-uniform.jpg?ver=6`;
  //function : imp function
  const getIcon = item => {
    if (item.name == 'k12-Diary') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="message-reply-text"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Homework') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="home-city"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'School Fee') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="credit-card-outline"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Live Class Attendance') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="calendar-range-outline"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Online Exam') {
      return <MyIcons.Entypo name="chat" color={Colors.VIOLET} size={30} />;
    } else if (item.name == 'Report Card') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="book-open-outline"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Admit Card') {
      return (
        <MyIcons.FontAwesome5
          name="id-card-alt"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Shared Lessons') {
      return (
        <MyIcons.MaterialIcons
          name="screen-share"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else {
      return (
        <MyIcons.FontAwesome name="file-text" color={Colors.VIOLET} size={30} />
      );
    }
  };
  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="Student info" />
      <ScrollView>
        <View>
          <Image
            source={{uri: studentData.student_image}}
            style={{height: 300}}
          />
          <View style={styles.studentDataStyle}>
            <View style={{width: '5%'}} />
            <View>
              <MyText
                text={studentData.student_name}
                fontSize={18}
                textColor="white"
                textAlign="center"
              />
              <MyText
                text={`ID: ${studentData.student_id}`}
                textAlign="center"
                textColor="white"
                style={{marginVertical: 5}}
              />
              <MyText
                textColor="white"
                text={`Class: ${studentData.student_class} - ${studentData.student_section}, Roll No.: ${studentData.student_roll}`}
              />
            </View>

            <TouchableOpacity>
              <MyIcons.MaterialIcons
                name="edit"
                size={30}
                color={Colors.WHITE}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionView}>
          {sectionData.map((item, index) => {
            return (
              <IconNameCard
                key={index.toString()}
                Name={item.name}
                item={item}
                index={index}
                Icon={getIcon(item)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
