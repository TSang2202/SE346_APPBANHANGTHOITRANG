import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from "react-native";
import { IC_Back, IC_CheckGreen, IC_CheckGrey, IC_Location, IC_Next, IC_Visa } from "../assets/icons";
import { IM_AnhGiay1 } from "../assets/images";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ProductCheckOut from "../components/ProductCheckOut";
import CUSTOM_COLOR from "../constants/colors";


function CheckoutScreen({ navigation, route }) {

  const { itemsCheckout, totalMoney } = route.params

  const { delivery, choosePayment, promotion } = route.params

  const deliveryCharge = promotion ? promotion.Loai === 'MienPhiVanChuyen' ? 0 : 20000 : 20000

  const discount = promotion ?
    promotion.Loai === 'GiamGia' ?
      promotion.GiamToiDa < totalMoney * promotion.TiLe ? promotion.GiamToiDa : totalMoney * promotion.Tile
      : 5000 : 5000

  const totalOrder = totalMoney + deliveryCharge - discount

  useEffect(() => {

  }, [])


  return (
    <View style={{
      flex: 1
    }}>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: CUSTOM_COLOR.White
      }}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <Image
            source={IC_Back}
            style={{
              width: 10,
              height: 20,
              marginHorizontal: 20,
              marginVertical: 15
            }}
            resizeMode='stretch'
          />
        </TouchableOpacity>


        <Text style={{
          fontSize: 20,
          color: CUSTOM_COLOR.Black,
          fontWeight: 'bold'
        }}>Cart</Text>
      </View>


      <ProductCheckOut
        source={itemsCheckout[0].HinhAnhSP}
        title={itemsCheckout[0].TenSP}
        color={itemsCheckout[0].MauSac}
        size={itemsCheckout[0].Size}
        price={itemsCheckout[0].GiaTien}
        number={itemsCheckout[0].SoLuong}
        style={{
          marginVertical: 10
        }}
      />

      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
      }}
        onPress={() => navigation.navigate('Promotion', { itemsCheckout, totalMoney, delivery, choosePayment })}
      >
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}>Offers Details</Text>
        <Image source={IC_Next} />
      </TouchableOpacity>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
      }}

      >
        {promotion ?
          <Text style={{
            fontSize: 17,

          }}>{promotion.TenKM}</Text>

          :
          <Text style={{
            fontSize: 17,

          }}>Choose promotion</Text>
        }

        <Image source={promotion ? IC_CheckGreen : IC_CheckGrey} />
      </View>

      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
      }}
        onPress={() => navigation.navigate('DeliveryAddress', { itemsCheckout, totalMoney, choosePayment, promotion })}
      >
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}>Delivery Address</Text>
        <Image source={IC_Next} />
      </TouchableOpacity>


      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
      }}

      >

        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={IC_Location}
            style={{
              width: 50,
              height: 50,

            }}
          />

          {delivery ?

            <Text style={{
              width: '65%',
              marginHorizontal: 20,
              fontSize: 17
            }}>{delivery.DiaChi}, {delivery.QuanHuyen} District, {delivery.TinhThanhPho}</Text>


            :
            <Text style={{
              marginHorizontal: 20,
              fontSize: 17
            }}>Add your address</Text>

          }
        </View>
        <Image source={delivery ? IC_CheckGreen : IC_CheckGrey} />
      </View>

      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
      }}
        onPress={() => navigation.navigate('PaymentMethod', { itemsCheckout, totalMoney, delivery, promotion })}
      >
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}>Payment Method</Text>
        <Image source={IC_Next} />
      </TouchableOpacity>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
      }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={IC_Visa}
            style={{
              width: 50,
              height: 50,

            }}
          />
          {
            choosePayment ?
              choosePayment === "MomoWallet" ? <Text style={{ ...styles.textPayment }}>Momo Wallet</Text>
                : choosePayment === "CashPayment" ? <Text style={{ ...styles.textPayment }}>Cash Payment</Text>
                  : choosePayment === "OnlineBanking" ? <Text style={{ ...styles.textPayment }}>Online Banking</Text> : null
              : <Text style={{
                ...styles.textPayment
              }}>Add payment method</Text>
          }


        </View>
        <Image source={choosePayment ? IC_CheckGreen : IC_CheckGrey} />
      </View>

      <View style={{
        marginHorizontal: 20,
        marginVertical: 2
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}>Order </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20

      }}>
        <Text style={{
          fontSize: 16
        }}>Subtotal</Text>
        <Text style={{
          fontSize: 16
        }}>{totalMoney} đ</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20

      }}>
        <Text style={{
          fontSize: 16
        }}>Delivery Charge</Text>
        <Text style={{
          fontSize: 16
        }}>{deliveryCharge} đ</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20

      }}>
        <Text style={{
          fontSize: 16
        }}>Discount</Text>
        <Text style={{
          fontSize: 16
        }}>- {discount} đ</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20

      }}>
        <Text style={{
          fontSize: 16,
          color: CUSTOM_COLOR.SeaBuckthorn
        }}>Total</Text>
        <Text style={{
          fontSize: 16,
          color: CUSTOM_COLOR.SeaBuckthorn
        }}>{totalOrder} đ</Text>
      </View>

      <View style={{
        alignItems: 'center',
        marginVertical: 10
      }}>
        <Button
          color={CUSTOM_COLOR.FlushOrange}
          title='CHECK OUT'
        />
      </View>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPayment: {
    marginHorizontal: 20,
    fontSize: 17
  }

})

export default CheckoutScreen