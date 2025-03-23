import { createAsyncThunk } from "@reduxjs/toolkit";
import api from './../../utils/api';


// tr üzerindeki uçuşları alamamızı sağlayan fonksiyon:
export const getFlight=createAsyncThunk("flight/getFlights",async()=>{
    // Parametreleri belirle:
   const params= {
        bl_lat: '33.910458',
        bl_lng: '23.618401',
        tr_lat: '42.540054',
        tr_lng: '45.019767',
        speed: '2,99999',
      };

    //   Api isteğini at:
  const res=await api.get("flights/list-in-boundary",{params});

  // Api'dan gelen verileride dizi içerisinde dizi olduğundan projede kullanım daha kolay olsun diye dizinin içerisindeki dizileri nesnelere çevir:
  // [[],[],[]] bu halden {{},{},{}} bu hale çevirmiş olucaz..

  const formatted=res.data.aircraft.map((i)=>({
    id:i[0],
    code:i[1],
    lat:i[2],
    lng:i[3],
    deg:i[4],
  }));

// console.log(formatted);

  //   Slice'a aktarılacak payload'ı belirle:
    //  console.log(res.data.aircraft);
    return formatted;
     
});
// getState ile yapsaydık:
// export const getDetails=createAsyncThunk("detail/getDetails", async(id,{getState})=>{
  // id üzereinden uçuşun detaylarını alamamızı sağlayan fonksiyon:
export const getDetails=createAsyncThunk("detail/getDetails", async(id)=>{
  // Parametreleri Belirle:
  const params={
    flight:id
  }
  // Api'dan Detayları Al: Api isteği At
  const res =await api.get("/flights/detail",{params});
  // console.log(res);
  // Aksiyonun payloadını belirlemek adına return et:
  return res.data;
});

