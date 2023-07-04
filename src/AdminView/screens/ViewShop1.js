import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Product from '../../StaffView/components/Product';
import CUSTOM_COLOR from '../../StaffView/constants/colors.js';
import { backto } from '../assets/icons/index.js';
import { IM_Giay1, IM_Giay2, IM_Giay3, IM_Giay4 } from '../assets/images/index.js';
import ItemList from '../components/ItemList';
import Search from '../components/Search';

import SortDropdown from '../components/SortDropDown';
import scale from '../constants/responsive.js';
const datasdetail = [
  {
    id: '1',
    source: IM_Giay1,
    title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
    price: 399999
  },
  {
    id: '2',
    source: IM_Giay2,
    title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
    price: 399999
  },
  {
    id: '3',
    source: IM_Giay3,
    title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
    price: 399999
  },
  {
    id: '4',
    source: IM_Giay4,
    title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
    price: 399999
  },
]
const datas = [
  {
      id: '1',
      source: IM_Giay1,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 699999
  },
  {
      id: '2',
      source: IM_Giay2,
      title: 'T-Shirt Black Blank - VSD343545D - New Elevent',
      price: 599999
  },
  {
      id: '3',
      source: IM_Giay3,
      title: 'T-Shirt Blue2 Blank - VSD343545D - New Elevent',
      price: 499999
  },
  {
      id: '4',
      source: IM_Giay4,
      title: 'T-Shirt Blue1 Blank - VSD343545D - New Elevent',
      price: 399999
  },
  {
      id: '5',
      source: IM_Giay3,
      title: 'T-Shirt White Blank-VSD343545D - New Elevent',
      price: 199999
  },
  {
      id: '6',
      source: IM_Giay1,
      title: 'T-Shirt White Blank-VSD343545D - New Elevent',
      price: 299999
  }
]
export const ListItem = [
  {
    id: '1',
    namelist: 'Limited Edition 2023',
    numberitem: '4',
    avartar: IM_Giay2
  },
  {
    id: '2',
    namelist: 'Limited Edition 2022',
    numberitem: '4',
    avartar: IM_Giay2
  },
  {
    id: '3',
    namelist: 'Limited Edition 2021',
    numberitem: '4',
    avartar: IM_Giay2
  },
  {
    id: '4',
    namelist: 'Limited Edition 2020',
    numberitem: '4',
    avartar: IM_Giay2
  },
  {
    id: '5',
    namelist: 'Limited Edition 2019',
    numberitem: '4',
    avartar: IM_Giay2
  }
]
function ViewShop1({navigation}){
  const [detail ,setdetail] = useState(false)
  const [product, setproduct] = useState(true)
  //SEARCH
  const [searchKeyword, setSearchKeyword] = useState('');
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };
  //SORT
  const [dataSets, setDataSets] = useState([
    { name: 'datas', data: datas },
    { name: 'datasdetail', data: datasdetail },
    { name: 'ListItem', data: ListItem },
  ]);
  const [selectedDataSet, setSelectedDataSet] = useState(dataSets[0]);
  const [sortedData, setSortedData] = useState(selectedDataSet.data);

  const handleSort = (sortType) => {
    let sortedArray = [...selectedDataSet.data];

    if (sortType === "a-z") {
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "z-a") {
      sortedArray.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortType === "low-to-high") {
      sortedArray.sort((a, b) => a.price - b.price);
  } else if (sortType === "high-to-low") {
      sortedArray.sort((a, b) => b.price - a.price);
  }

    setSortedData([...sortedArray]);
  };
  const filteredData = sortedData.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  if(product == true && detail == false)
  {
    return (
      <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White, width: '100%', height: '100%'}}>
        <View style = {{width: '100%',height:180,flexDirection: 'column', alignItems: 'center',backgroundColor: CUSTOM_COLOR.LavenderBlush}}>
          <View style={{width: '100%', height: 10}}/>
            <View style={{width: '90%', height: 50, marginHorizontal: '5%'}}>
              <Search onSearch={handleSearch} />
            </View>
            <Image
              style = {{width: scale(72), height:scale(72),aspectRatio: 1, borderRadius: 55, marginTop: 5}}
              source={require('../assets/icons/Logo.png')}
              resizeMode='contain'
            ></Image>
            <Text style={{color: CUSTOM_COLOR.Black, fontSize: 20, fontWeight: 'bold', marginTop: 2}}
              >FAUGET</Text>
          </View>
        <View style = {{width: '100%', height:40, flexDirection: 'row'}}>
          <TouchableOpacity style = {{width: '50%',height:'100%',borderBottomWidth: 2, borderColor: CUSTOM_COLOR.Red,alignItems: 'center'}}>
            <Text style = {{marginTop: 5, color: CUSTOM_COLOR.DarkOrange, fontSize: 20 }}>Product</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=> setproduct(false)}
          style = {{width: '50%', height: '100%', alignItems: 'center', color: CUSTOM_COLOR.Black}}>
          <Text style = {{marginTop: 5, fontSize: 20}}>List Item</Text>
          </TouchableOpacity>
        </View>
  <SortDropdown
    onSelectSort = {handleSort }/>
    <View style = {{
                flexDirection: 'row',
                marginBottom: 10,
                justifyContent: 'space-between', 
                marginHorizontal: 10,
                marginTop: 14,
          }}>
          
    </View>
    <View style = {{width: '100%', height: 300}}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={filteredData}
                    renderItem = {({item}) => {
                        return(
                            //<TouchableOpacity
                              //  onPress={() => navigation.navigate('ViewShop2')}
                                //style = {{
                                //flexDirection: 'row',
                                //justifyContent: 'space-around'
                           // }}>
                                <Product
                                    onPress={() => navigation.navigate('ViewShop2')}
                                    source = {item.source}
                                    title = {item.title}
                                    price = {item.price}
                                />
                           //</View> </TouchableOpacity>
                        )
                    }}
                    numColumns = {2}
                />
    </View>
    </SafeAreaView>
    )
  }        
    else
    {
    if(product == false && detail == false)
      {
      return(
        <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White,width: '100%', height: '100%'}}>
        <View style = {{width: '100%',height:180,flexDirection: 'column', alignItems: 'center',backgroundColor: CUSTOM_COLOR.LavenderBlush}}>
        <View style={{width: '100%', height: 10}}/>
        <View style={{width: '90%', height: 50, marginHorizontal: '5%'}}>
        <Search onSearch={handleSearch}/>
        </View>
        <Image
          style = {{width: scale(72), height:scale(72),aspectRatio: 1, borderRadius: 55, marginTop: 5}}
          source={require('../assets/icons/Logo.png')}
          resizeMode='contain'
        ></Image>
        <Text style={{color: CUSTOM_COLOR.Black, fontSize: 20, fontWeight: 'bold', marginTop: 2}}
        >FAUGET</Text>
      </View>
        <View style = {{width: '100%', height:40, flexDirection: 'row'}}>
            <TouchableOpacity 
            onPress={()=> setproduct(true)}
            style = {{width: '50%',height:'100%',alignItems: 'center'}}>
            <Text style = {{marginTop: 5,  fontSize: 20, color: CUSTOM_COLOR.Black }}>Product</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {{width: '50%', height: '100%',borderBottomWidth: 2, borderColor: CUSTOM_COLOR.Red, alignItems: 'center'}}>
            <Text style = {{marginTop: 5,color: CUSTOM_COLOR.DarkOrange, fontSize: 20}}>List Item</Text>
            </TouchableOpacity>
      </View>
      <View style={{width: '100%', height: '65%'}}>
                <FlatList
                    data={ListItem.filter(item => item.namelist.toLowerCase().includes(searchKeyword))}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity
                                onPress={() => setdetail(true) }
                                style = {{
                                flexDirection: 'row',
                                //justifyContent: 'space-around'
                            }}>
                                <ItemList
                                source = {item.avartar}
                                namelist = {item.namelist}
                                numberitem = {item.numberitem}
                                ></ItemList>
                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
        </SafeAreaView>
      )
      }
      else{
          return(
            <SafeAreaView style = {{backgroundColor: CUSTOM_COLOR.White, width: '100%', height: '100%'}}>
            <View style = {{width: '100%',height:180,flexDirection: 'column', alignItems: 'center',backgroundColor: CUSTOM_COLOR.LavenderBlush}}>
            <Search onSearch={handleSearch}/>
            <Image
              style = {{width: scale(72), height:scale(72),aspectRatio: 1, borderRadius: 55, marginTop: 5}}
              source={require('../assets/icons/Logo.png')}
              resizeMode='contain'
            ></Image>
            <Text style={{color: CUSTOM_COLOR.Black, fontSize: 20, fontWeight: 'bold', marginTop: 2}}
            >FAUGET</Text>
            </View>
            <View style = {{width: '100%', height: 30, flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity 
            onPress={()=> setdetail(false)}
            style = {{width: 17, height: 17, marginLeft: 18, marginTop: 5}}>
              <Image
                  resizeMode='contain'
                  source={backto}
                  style={{width:'100%',height:'100%'}}
              ></Image>
            </TouchableOpacity>
            <Text style = {{color: CUSTOM_COLOR.Black, fontSize: 18, marginLeft: 10}}>List Item/ {ListItem[0].namelist}</Text>
            </View>
            <SortDropdown onSelectSort={handleSort}/>
            <View>
              <FlatList
                    horizontal={false} 
                    data={filteredData}
                    key = {2}
                    numColumns={2}
                    renderItem = {({item}) => {
                        return(
                                <Product
                                    onPress={() => navigation.navigate('ViewShop2')}
                                    source = {item.source}
                                    title = {item.title}
                                    price = {item.price}
                                />
                           //</View> </TouchableOpacity>
                        )
                    }}
                />
            </View>
            </SafeAreaView>
            )
      }
    }
  }
export default ViewShop1