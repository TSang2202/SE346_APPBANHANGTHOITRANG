import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import { IMG_backgroundCard } from '../assets/images';

const PromotionCard = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <ImageBackground
          source={IMG_backgroundCard}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.avataContainer}>
            <Image
              source={props.source}
              style={{
                width: '80%',
                height: '80%',
                aspectRatio: 1,
                borderRadius: 50,
                resizeMode: 'center',
              }}
            />
          </View>

          <View style={{ width: '5%', height: '100%' }} />

          <View style={styles.textViewContainer}>
            <Text style={styles.titleStyles}>{props.name}</Text>
            <View style={{ width: '100%' }} />
            <Text style={styles.contentStyles}>Giảm giá {props.discount}</Text>
            <Text style={styles.minimumStyles}>Đơn tối thiểu {props.minimum}</Text>
            <Text style={styles.timeStyle}>{props.start} - {props.end}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountContainer: {
    //width: '90%',
    height: '80%',
    alignItems: 'center',
    marginHorizontal: 20
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  avataContainer: {
    width: '40%',
    //height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: CUSTOM_COLOR.Alto
    //left: -15,
  },
  textViewContainer: {
    width: '60%',
    height: '100%',
    left: -25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleStyles: {
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: 25,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
  },
  contentStyles: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 20,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.White,
  },
  minimumStyles: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: CUSTOM_COLOR.LightGray,
  },
});

export default PromotionCard;
