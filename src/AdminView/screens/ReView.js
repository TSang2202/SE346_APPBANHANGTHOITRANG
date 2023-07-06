import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IC_Add, IC_Cancle, IC_Review} from '../assets/icons';
import {IM_AnhGiay1, IM_AnhGiay2} from '../assets/images';
import Button from '../components/Button';
import Review from '../components/Review';
import StarRating from '../components/StarRating';
import { IC_Back } from '../../CustomerView/assets/icons';
import CUSTOM_COLOR from '../constants/colors';
import { collection, addDoc, doc, updateDoc, getDoc, onSnapshot, getDocs, where, query } from "firebase/firestore";
import { async } from "@firebase/util";
import { Firestore, firebase, Storage } from "../../../Firebase/firebase";

function ReviewScreen({navigation, route}) {
  const [addReview, setAddReview] = useState(false);
  const {item} = route.params
  const [image, setImage] = useState('')
  const [data, setdata] = useState([])
  const [tong, settong] = useState()
  const [tb, settb] = useState()

  const getdataReview = () =>{
    try{
        const q = query(collection(Firestore, "DANHGIA"), where("MaSP", "==", item.MaSP));
        const querySnapshot = onSnapshot(q, async (snapshot) => {
        const items = [];
    
        snapshot.forEach(documentSnapshot => {
        items.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
        });
        });
        let sum = 0;
        if(items.length != 0){
            for(let i = 0; i < items.length; i++){
                const docRef = doc(Firestore, "NGUOIDUNG", items[i].MaND);
                const docSnap = await getDoc(docRef);
                const NguoiDung = {
                    ...docSnap.data()
                }
                items[i].TenND = NguoiDung.TenND
                items[i].Avatar = NguoiDung.Avatar
                console.log(NguoiDung.Avatar)
                
                sum += items[i].Rating;
            }
            setdata(items);
            console.log(items);
            settong(items.length);
            console.log(tong);
            settb((Math.round(sum/items.length * 100) / 100).toFixed(2));
            console.log(tb);
        }
        })
    }catch(error){
        console.log(error);
    }
    
}
  useEffect(() =>{
    getdataReview()
  }, [])
  return (
    <View style = {{
      flex: 1,
      backgroundColor: CUSTOM_COLOR.White
  }}>
      <View style ={{
          flexDirection: 'row', 
          alignItems: 'center',
      
      }}>
          <TouchableOpacity onPress={() => {
              navigation.goBack();
          }}>
              <Image
                  source={IC_Back}
                  style = {{
                      width: 10, 
                      height: 20,
                      marginHorizontal: 20,
                      marginVertical: 15
                  }}
                  resizeMode = 'cover'
              />  
          </TouchableOpacity>
              
        
          <Text style ={{
              fontSize: 20,
              color: CUSTOM_COLOR.Black, 
              fontWeight: 'bold'
          }}>Review</Text>
      </View>

      <View style = {{
          flexDirection: 'row',
          marginHorizontal: '5%',
          justifyContent: 'space-between'
      }}>
          <View>
              <Text style ={{
                  fontSize: 17,
                  color: CUSTOM_COLOR.Black
              }}>{tong} Reviews</Text>
              <View style = {{
                  flexDirection: 'row'
              }}>
                  <Text style = {{
                      fontSize: 17,
                      color: CUSTOM_COLOR.Black,
                      marginRight: '5%'
                  }}>{tb}</Text>
                  <StarRating
                      nums = {5}
                      fill = {tb}
                  />
              </View>
          </View>

          
          <View>
              <TouchableOpacity style ={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: CUSTOM_COLOR.FlushOrange,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 8
              }}
                  onPress = {() => setAddReview(true)}
              >
                  <Image source={IC_Review}/>
                  <Text style ={{
                      fontSize: 15,
                      marginLeft: 10,
                      fontWeight: 'bold',
                      color: CUSTOM_COLOR.White
                  }}>Add Review</Text>
              </TouchableOpacity>

          </View>

      </View>

      <ScrollView>
          {data.map((review, index) =>(
              
              <View style = {{
                  marginVertical: '3%',
                  borderBottomWidth: 1,
                  borderBottomColor: CUSTOM_COLOR.Alto,
                  paddingBottom: '2%'
              }}>
                  <Review
                      key = {review.id}
                      avatar = {review.Avatar}
                      name = {review.TenND}
                      time = {review.NgayDG}
                      rating = {review.Rating}
                      content = {review.NDDG}
                      image = {review.AnhDG}
                  />

              </View>
          ))}
      </ScrollView>

      {addReview ? (
        <View
          style={{
            position: 'absolute',
            width: '80%',
            height: 350,
            backgroundColor: CUSTOM_COLOR.White,
            borderWidth: 1,
            borderRadius: 20,
            alignSelf: 'center',
            top: '25%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginHorizontal: '3%',
              marginTop: '2%',
            }}>
            <TouchableOpacity onPress={() => setAddReview(false)}>
              <Image
                source={IC_Cancle}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '5%',
            }}>
            <Image
              source={IM_AnhGiay1}
              style={{
                width: 45,
                height: 45,
                borderRadius: 30,
              }}
            />
            <Text
              style={{
                fontSize: 17,
                marginHorizontal: '3%',
                fontWeight: 'bold',
                color: CUSTOM_COLOR.Black,
              }}>
              Sang Thach
            </Text>
          </View>

          <View
            style={{
              ...styles.flexRow,
              marginHorizontal: '5%',
              marginVertical: '3%',
            }}>
            <Text
              style={{
                fontSize: 17,
                marginRight: '5%',
              }}>
              Rating
            </Text>
            <StarRating nums={5} fill={4} />
          </View>

          <View
            style={{
              width: '90%',
              height: '30%',
              backgroundColor: CUSTOM_COLOR.Gallery,
              alignSelf: 'center',
              borderRadius: 20,
            }}>
            <TextInput
              placeholder="Write something..."
              multiline
              numberOfLines={1}
              style={{
                paddingHorizontal: 10,
              }}
            />
          </View>

          <View
            style={{
              ...styles.flexRow,
              marginVertical: 10,
              marginHorizontal: 10,
            }}>
            <TouchableOpacity>
              <Image
                source={IC_Add}
                style={{
                  width: 45,
                  height: 45,
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>

            <Text>Upload your image or video</Text>
          </View>

          <View
            style={{
              ...styles.flexRow,
              justifyContent: 'center',
            }}>
            <Button
              title="Add Review"
              color={CUSTOM_COLOR.FlushOrange}
              style={{
                width: '40%',
              }}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ReviewScreen;
