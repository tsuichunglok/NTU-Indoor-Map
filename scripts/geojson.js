var buildings=[
    {
   "type": "Feature",
   "properties": {
       "tooltip": "<i>Click to enter</i><br><b>Main North</b> Lee Wee Nam Library (LWN), Tan Chin Tuan LT (TCT LT), Supermarket, Restaurants...",
      "building": "ms"
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[1053,1139],[1053,620],[1080,620],[1077,493],[993,493],[993,382],[1053,382],[1051,354],[1026,354],[1026,300],[1083,300],[1083,287],[1063,284],[1063,242],[1042,242],[1042,210],[1053,173],[1080,134],[1154,103],[1196,110],[1227,127],[1260,161],[1277,197],[1279,939],[1325,939],[1325,1120],[1209,1120],[1207,1139]]]
   }
},
 {
   "type": "Feature",
   "properties": {
       "tooltip": "<i>Click to enter</i><br><b>N3</b> - School of Mechanical and Aerospace Engineering (MAE)",
      "building": "n3"
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[1277,432],[1277,357],[1991,354],[1991,401],[1944,401],[1944,429]]]
   }
},
 {
   "type": "Feature",
   "properties": {
       "tooltip": "<i>Click to enter</i><br><b>N4</b> - School of Computer Science and Engineering (SCSE)",
      "building": "n4"
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[1280,758],[1280,678],[1998,678],[1998,758]]]
   }
},
 {
   "type": "Feature",
   "properties": {
       "tooltip": "<i>Click to enter</i><br><b>N2</b> - Earth Observatory Singapore (EOS) & Asian School for the Environment (ASE)",
      "building": "n2"
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[390,598],[390,517],[865,517],[866,504],[1080,504],[1080,611],[866,611],[865,598]]]
   }
},
 {
   "type": "Feature",
   "properties": {
       "tooltip": "<i>Click to enter</i><br><b>N1</b> - School of Civil and Environmental Engineering (CEE)",
      "building": "n1"
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[401,924],[401,840],[1052,840],[1052,924]]]
   }
}
];

var rooms = [
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-03",
            "name": "One-Stop @ SAC (SAO)",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[5148,2253],[5148,1458],[5969,1458],[5969,1740],[6123,1740],[6123,2253]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-05",
            "name": "Student Activities Centre (SAC)",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[4294,3727],[4036,3533],[3839,3274],[3714,2970],[3670,2648],[3711,2323],[3839,2016],[4036,1760],[4291,1560],[4326,1612],[4535,1513],[4658,1482],[4871,1453],[5133,1453],[5138,2256],[5457,2259],[5461,3090],[4999,3089],[4999,3175],[4644,3177]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-06",
            "name": "Global Lounge",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[4936,3965],[4936,3904],[4599,3859],[4299,3732],[4646,3183],[5002,3184],[5002,3296],[5176,3298],[5176,3511],[5276,3513],[5276,3965]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-02",
            "name": "NS Printing Service",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[5287,3505],[5287,3162],[5258,3162],[5258,3099],[5456,3099],[5454,3187],[5669,3187],[5669,3050],[5974,3050],[5974,3550],[5798,3550],[5798,3417],[5430,3417],[5430,3505]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-01",
            "name": "LadyFirst",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10.30am - 5.30pm<br>Sat, Sun & PH: Closed​​​<br><br><img src='https://www.ntu.edu.sg/has/RnS/PublishingImages/LadyFirst_(280x180)(UT).jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[5804,3878],[5804,3685],[5963,3685],[5963,3878]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-10",
            "name": "Frank by OCBC",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 9am - 4.30pm<br>Sat, Sun & PH: Closed​​​<br><br><img src='https://www.ntu.edu.sg/has/Serv/PublishingImages/Pages/Banking/OCBC(UT_280x180).jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6463,4084],[6463,3978],[6075,3978],[6075,3579],[6312,3579],[6312,3683],[6693,3684],[6544,4082]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-09",
            "name": "K Cuts",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Sat: 10am - 8pm<br>Sun & PH: Closed​​​​​​<br><br><img src='https://www.ntu.edu.sg/has/RnS/PublishingImages/K-Cuts.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6325,3681],[6325,3425],[6765,3425],[6765,3498],[6693,3681]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-08",
            "name": "U-Shop",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10am - 9pm<br>Sat: 10am - 6pm<br>Sun & PH: Closed​​<br><br><img src='https://www.ntu.edu.sg/has/RnS/PublishingImages/U-Shop.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6325,3414],[6325,3240],[6765,3250],[6765,3414]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-07",
            "name": "Hola Mobile",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10am - 8pm<br>Sat: 10am - 3pm<br>Sun & PH: Closed​​​​​​<br><br><img src='https://www.ntu.edu.sg/has/RnS/PublishingImages/HollaBellaBeautyParlour%28280x180%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6325,3229],[6325,3050],[6762,3050],[6762,3229]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-12",
            "name": "New China Optics",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10.30am - 7.30pm (5pm for Semester Break)<br>Sat: 10.30am - 3pm<br>Sun & PH: Closed​<br><br><img src='https://www.ntu.edu.sg/has/RnS/PublishingImages/NewChinaOptics(280x180)(UT).png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6317,4948],[6317,4532],[6575,4532],[6575,4948]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-13",
            "name": "STA Travel",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10am - 7pm<br>Sat: 10am to 7pm<br>Sun & PH: Closed​​​<br><br><img src='http://www.ntu.edu.sg/has/RnS/PublishingImages/STA%20Travel.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6835,4514],[6835,4234],[7005,4234],[7005,4514]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-14",
            "name": "The Soup Spoon Union",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 11am to 9pm<br>Sat: 11am to 3pm<br>Sun & PH: Closed​​​<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/The%20Soup%20Spoon%20Union.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7049,4807],[7049,4358],[7013,4355],[7013,4227],[6835,4227],[6835,4025],[7054,3804],[7376,4071],[7220,4369],[7310,4400],[7264,4573],[7245,4806],[7188,4807]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-15",
            "name": "Paik's Bimbim",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10am to 9pm<br>Sat: 10am to 3pm<br>Sun & PH: Closed​​​<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/PaiksBibim_280x180.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7381,4064],[7065,3798],[7220,3637],[7486,3638],[7486,3943]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-16",
            "name": "The Crowded Bowl",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 8am to 8.30pm<br>Sat: 8am ​to 2​pm<br>Sun & PH: Closed​​​​​<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/TheCrowdedBowl%28280x180%29%28UT%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7884,3473],[7884,3194],[8405,3194],[8405,3473]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-19",
            "name": "Umisushi",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 9am to 9pm<br>Sat : 9am to 3​pm<br>Sun & PH: Closed​​​<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/umisushi%28280x180%29%28UT%29.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7355,3181],[7355,2903],[7709,2903],[7709,3181]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-20",
            "name": "Bakery Cuisine",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 7am to 9pm<br>Sat, Sun & PH: 9am to 7pm​​​​<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/BakeryCuisine%28UT_280x180%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7718,3183],[7718,2902],[8056,2902],[8056,3183]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-21",
            "name": "Each-A-Cup",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 9am to 9pm<br>Sat & Sun: 9am to 6​pm​<br>PH: Closed<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/Each-A-Cup%28UT_280x180%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8067,3182],[8067,2902],[8230,2902],[8230,3182]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-22",
            "name": "The Sandwich Guys",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10am to 8pm<br>Sat : 10am to 3​pm<br>Sun & PH: Closed​​​<br><br><img src='https://www.ntu.edu.sg/has/FnB/PublishingImages/The%20Sandwich%20Guys.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8240,3182],[8240,2902],[8405,2902],[8405,3182]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-23",
            "name": "Grande Cibo",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Sun: 11am to 8pm<br>PH: Closed​​​​​​<br><br><img src='https://www.ntu.edu.sg/has/FnB/PublishingImages/GrandeCibo_%28280x180%29%28V2%29%28UT%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8415,3473],[8415,2902],[8754,2902],[8754,3473]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-11",
            "name": "Boost Juice",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 10am to 9pm<br>Sat, Sun & PH: 10am to 6pm<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/BoostJuice_280x180%28UT%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6209,4804],[6209,4537],[6313,4537],[6313,4804]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-04",
            "name": "Fun World Café",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 7am to 8pm<br>Sat: 9am to 3​pm<br>Sun & PH: Closed<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/FunWorld_%28280x180%29%28UT%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6133,2797],[6133,2535],[6742,2535],[6742,2797]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-16",
            "name": "Mr Bean",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 7.30am to 8.30pm<br>Sat: 7.30am to 5pm<br>Sun & PH: Closed​​​<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/MrBean_%28280x180%29%28UT%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7576,3913],[7576,3633],[7770,3633],[7770,3724],[7861,3724],[7835,3777],[7872,3765],[7845,3811],[7656,3935],[7630,3911]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-24",
            "name": "The House Steamboat Restaurant",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 9am to 9pm<br>Sat: 9am ​to 6​pm<br>Sun: Closed<br>PH: 10am - 4pm​<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/TheHouseSteamBoatRestaurant_%28UT_280x180%29.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8765,3473],[8765,2902],[9003,2902],[9003,3473]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-25",
            "name": "Booklink",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Mon to Fri: 9am to 9pm<br>Sat: 9am ​to 6​pm<br>Sun: Closed<br>PH: 10am - 4pm​​​​<br><br><img src='https://maps.ntu.edu.sg/static/photos/62_t.jpg'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7360,2395],[7360,1729],[7523,1729],[7523,1883],[7706,1883],[7706,2395]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-26",
            "name": "Prime Supermarket",
            "roomType": "nonacademic",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Daily: 8​am to 9pm<br><br><img src='https://www.ntu.edu.sg/has/RnS/PublishingImages/Prime%20Supermarket.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7720,2395],[7720,1883],[7900,1883],[7900,1729],[9006,1729],[9006,2395]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "LT1A-01-01",
            "name": "Lecture Theatre 1A (LT1A)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[4749,6451],[4705,6406],[4705,4973],[5019,4973],[5248,5033],[5453,5122],[5669,5266],[5890,5490],[6008,5666],[6029,5705],[6146,5966],[6184,6137],[6184,6451]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "LT19A-01-01",
            "name": "Lecture Theatre 19A (LT19A)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10501,4205],[10501,3715],[12234,3715],[12234,4205]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "LT2A-01-01",
            "name": "Lecture Theatre 2A (LT2A)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9272,1326],[9272,834],[10520,834],[10520,1326]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS4-02-36",
            "name": "Tan Chin Tuan Lecture Theatre (TCT)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[16227,1865],[16227,1706],[15633,1706],[15633,1759],[15612,1759],[15490,1633],[15490,1617],[15542,1617],[15542,628],[15484,628],[15382,529],[15382,11],[16880,1510],[16880,1862]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "N2.1-01-08",
            "name": "Fast Food Restaurants",
            "roomType": "eatery",
            "popupContent": "<b>Address</b><br>50 Nanyang Avenue<br>Singapore 639798<br><br><b>Opening Hours</b><br>Daily: 8​am to 9pm<br><br><img src='http://www.ntu.edu.sg/has/FnB/PublishingImages/McDonalds_280x180.png'/>"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6866,6634],[6866,5409],[8058,5409],[8058,6634]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-09",
            "name": "Lecture Theatre 1 (LT1)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[5629,3981],[5663,3657],[5951,3165],[6398,2925],[6722,2886],[6722,3912],[6656,3985]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-16",
            "name": "Acquisitions & Collection Management Group",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[4079,1537],[4079,1252],[3746,1252],[3746,738],[4741,738],[4741,1338],[4573,1338],[4573,1297],[4410,1297],[4410,1537]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-20",
            "name": "CITS Data Centre (Computer Room)",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6595,1215],[6595,1003],[6380,1003],[6380,648],[7477,648],[7477,1215]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-22",
            "name": "CITS Data Centre 2",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7488,1215],[7488,648],[8685,648],[8685,1215]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-32",
            "name": "Lecture Theatre 3 (LT3)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10498,1220],[10498,642],[11425,642],[11425,1220]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-34",
            "name": "Lecture Theatre 4 (LT4)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11549,1220],[11549,642],[12478,642],[12478,1220]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-07",
            "name": "Lecture Theatre 5 (LT5)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8583,3199],[8583,2624],[9339,2624],[9339,3199]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-05",
            "name": "Lecture Theatre 6 (LT6)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9688,3199],[9688,2624],[10439,2624],[10439,3199]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-03",
            "name": "Lecture Theatre 7 (LT7)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12456,3199],[12456,2624],[13404,2624],[13404,3199]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS3-02-01",
            "name": "Lecture Theatre 8 (LT8)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[13525,3199],[13525,2624],[14452,2624],[14452,3199]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "id": "NS2.1-02-03",
            "name": "North Spine Foodcourt (NS Foodcourt)",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[4897,4631],[4897,4199],[6389,4199],[6389,4631]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l3",
            "id": "NS3-03-02",
            "name": "Athena Reading Room",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[5213,2975],[5213,1696],[7211,1696],[7211,2975]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l3",
            "id": "NS3-03-01",
            "name": "Lee Wee Nam Library (LWN)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[4686,7301],[3690,7301],[2764,7160],[1881,6796],[1337,6222],[553,5478],[199,4590],[74,3652],[199,2724],[568,1851],[1147,1102],[1896,516],[2767,161],[3703,42],[7578,42],[7578,1510],[4650,1510],[4650,2219],[4391,2219],[4319,2358],[4904,2800],[5152,3283],[5152,4035],[4898,4525],[4399,4950],[4399,5114],[4646,5114],[4646,6152],[5113,6148],[5113,5842],[5604,5336],[6116,5842],[6116,7065],[5099,7065],[5099,6547],[4661,6541]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l3",
            "id": "NS3-03-03",
            "name": "Minerva Reading Room",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6820,6943],[6820,6205],[6286,6205],[6286,5341],[6065,5114],[5210,5119],[5210,4444],[5612,4444],[5612,4361],[7583,4373],[7583,6943]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS3-04-17",
            "name": "Librarian General Office",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[3806,561],[3806,12],[4826,12],[4826,561]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS3-04-24A",
            "name": "Centre for IT Services (CITS) Digital Media",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[5010,1035],[5010,777],[5188,777],[5186,729],[5293,668],[5342,559],[5979,559],[6023,668],[6140,740],[6139,777],[6475,777],[6475,1035]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-29",
            "name": "CTIS Training Room",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6747,594],[6747,507],[6842,507],[6842,234],[7181,234],[7181,594]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS3-04-27",
            "name": "High Performance Computer Centre Office",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7280,592],[7280,408],[7186,408],[7186,226],[6843,226],[6843,13],[7975,13],[7975,440],[7855,440],[7855,592]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-25",
            "name": "High Performance Computing Centre (HPC)",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7860,593],[7860,447],[7985,447],[7985,11],[8868,11],[8868,324],[8692,324],[8692,593]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-32",
            "name": "LICS Room",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7186,593],[7186,409],[7276,409],[7276,593]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-33",
            "name": "Bioinformatics Research Centre",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10720,344],[10720,18],[11718,18],[11718,302],[10880,302],[10877,344]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-36",
            "name": "Com Skill Lab 1",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10721,566],[10721,354],[10886,354],[10886,312],[11044,312],[11044,564]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-37",
            "name": "Com Skill Lab 2",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11054,565],[11054,312],[11381,312],[11381,565]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-38",
            "name": "Com Skill Lab 3",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11391,565],[11391,312],[11718,312],[11718,565]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-39",
            "name": "Lecture Theatre 9 (LT9)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11726,568],[11726,17],[12224,17],[12224,568]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l41",
            "id": "NS4-04-41",
            "name": "Lecture Theatre 10 (LT10)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12233,568],[12233,17],[12731,17],[12731,568]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l42",
            "id": "NS2-04-15",
            "name": "Lecture Theatre 11 (LT11)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8699,2613],[8699,2065],[9193,2065],[9193,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l42",
            "id": "NS2-04-13",
            "name": "Lecture Theatre 12 (LT12)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9205,2613],[9205,2065],[9699,2065],[9699,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l42",
            "id": "NS2-04-11",
            "name": "Lecture Theatre 13 (LT13)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9711,2613],[9711,2065],[10205,2065],[10205,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l42",
            "id": "NS2-04-9",
            "name": "Lecture Theatre 14 (LT14)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10217,2613],[10217,2065],[10711,2065],[10711,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l43",
            "id": "NS2-04-7",
            "name": "Lecture Theatre 15 (LT15)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12738,2613],[12738,2065],[13233,2065],[13233,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l43",
            "id": "NS2-04-5",
            "name": "Lecture Theatre 16 (LT16)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[13243,2613],[13243,2065],[13738,2065],[13738,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l43",
            "id": "NS2-04-3",
            "name": "Lecture Theatre 17 (LT17)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[13748,2613],[13748,2065],[14243,2065],[14243,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l43",
            "id": "NS2-04-1",
            "name": "Lecture Theatre 18 (LT18)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[14253,2613],[14253,2065],[14748,2065],[14748,2613]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS3-05-43",
            "name": "Library Staff Office",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[4398,638],[4398,6],[5199,6],[5199,638]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS3-05-78",
            "name": "Metis Reading Room",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[5715,392],[5715,4],[6375,4],[6375,392]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-79",
            "name": "Tutorial Room 1 (TR1)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[6906,618],[6906,353],[7372,353],[7372,618]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-80",
            "name": "Tutorial Room 2 (TR2)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7017,343],[7017,88],[7497,88],[7497,343]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-81",
            "name": "Tutorial Room 3 (TR3)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7382,616],[7382,352],[7844,352],[7844,616]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-82",
            "name": "Tutorial Room 4 (TR4)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7574,343],[7574,88],[8054,88],[8054,343]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-83",
            "name": "Tutorial Room 5 (TR5)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7855,615],[7855,351],[8317,351],[8317,615]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-84",
            "name": "Tutorial Room 6 (TR6)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8131,343],[8131,88],[8611,88],[8611,343]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-85",
            "name": "Tutorial Room 7 (TR7)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8326,615],[8326,352],[8788,352],[8788,615]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-86",
            "name": "Tutorial Room 8 (TR8)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8688,343],[8688,88],[9168,88],[9168,343]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-87",
            "name": "Tutorial Room 9 (TR9)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8800,615],[8800,351],[9262,351],[9262,615]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-93",
            "name": "Tutorial Room 15 (TR15)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10950,623],[10950,369],[11424,369],[11424,623]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-94",
            "name": "Tutorial Room 16 (TR16)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11075,335],[11075,97],[11545,97],[11545,335]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-95",
            "name": "Tutorial Room 17 (TR17)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11438,623],[11438,361],[11899,361],[11899,623]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-96",
            "name": "Tutorial Room 18 (TR18)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11627,335],[11627,97],[12097,97],[12097,335]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-97",
            "name": "Tutorial Room 19 (TR19)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11913,623],[11913,361],[12374,361],[12374,623]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-98",
            "name": "Tutorial Room 20 (TR20)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12179,335],[12179,97],[12649,97],[12649,335]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-99",
            "name": "Tutorial Room 21 (TR21)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12388,623],[12388,361],[12849,361],[12849,623]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-100",
            "name": "Tutorial Room 22 (TR22)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12731,335],[12731,97],[13201,97],[13201,335]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l51",
            "id": "NS4-05-101",
            "name": "Tutorial Room 23 (TR23)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12863,623],[12863,361],[13324,361],[13324,623]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-36",
            "name": "Office of Health & Safety",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[7753,2790],[7753,2411],[7753,2410],[7394,2410],[7394,2144],[7415,2072],[7449,2025],[53736,1977],[7690,2025],[7727,2072],[7748,2144],[7748,2294],[8406,2294],[8406,2598],[8765,2598],[8765,2790]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-22",
            "name": "Tutorial Room 29 (TR29)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10842,2438],[10842,2180],[11302,2180],[11302,2438]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-23",
            "name": "Tutorial Room 30 (TR30)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10721,2702],[10721,2452],[11195,2452],[11195,2702]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-24",
            "name": "Tutorial Room 31 (TR31)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10364,2438],[10364,2180],[10824,2180],[10824,2438]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-25",
            "name": "Tutorial Room 32 (TR32)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[10161,2702],[10161,2452],[10635,2452],[10635,2702]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-26",
            "name": "Tutorial Room 33 (TR33)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9886,2438],[9886,2180],[10346,2180],[10346,2438]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-27",
            "name": "Tutorial Room 34 (TR34)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9601,2702],[9601,2452],[10075,2452],[10075,2702]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-28",
            "name": "Tutorial Room 35 (TR35)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9408,2438],[9408,2180],[9868,2180],[9868,2438]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-29",
            "name": "Tutorial Room 36 (TR36)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[9041,2702],[9041,2452],[9515,2452],[9515,2702]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-30",
            "name": "Tutorial Room 37 (TR37)",
            "roomType": "academic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[8930,2438],[8930,2180],[9390,2180],[9390,2438]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS2-05-01",
            "name": "Fraunhofer Singapore",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[12831,2791],[12831,2411],[12979,2411],[12979,2197],[15367,2197],[15367,2791]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l52",
            "id": "NS1-05-01A",
            "name": "Fraunhofer Singapore Annex",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[11816,2791],[11816,2414],[12469,2414],[12469,2791]]]
        }
    },
        {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01a-01a",
              "name": "Cybercrime Analysis & Research Alliance",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2946,1696],[2946,602],[3429,602],[3429,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01a-01b",
              "name": "SCSE Student Lounge",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3438,1696],[3438,602],[4024,602],[4024,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01a-02",
              "name": "Software Lab 1",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4027,1696],[4027,602],[5315,602],[5315,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01a-03",
              "name": "Hardware Lab 1",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5329,1696],[5329,602],[6598,602],[6598,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01b-04",
              "name": "The Open House",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7289,1696],[7289,602],[8181,602],[8181,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01b-05",
              "name": "Hardware Lab 2",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8188,1696],[8188,602],[10488,602],[10488,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01c-06",
              "name": "Software Lab 2",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11177,1696],[11177,602],[12449,602],[12449,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01c-09",
              "name": "Technical Support Unit - Hardware Labs",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14119,1696],[14119,937],[14830,937],[14830,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01c-09a",
              "name": "Hardware Project Lab",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12458,1696],[12458,594],[14117,602],[14117,1696]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01c-09b",
              "name": "Interdisciplinary Collaboration Space",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14119,933],[14119,602],[14831,602],[14831,933]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l1",
              "id": "N4-01c-10",
              "name": "The Workshop",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[15035,1436],[15035,825],[15493,825],[15493,1436]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1a-01",
              "name": "SIMTech-NTU Joint Lab on Complex Systems",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[1122,529],[1122,301],[1285,301],[1285,529]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1a-02",
              "name": "Computational Intelligence Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[1367,616],[1367,215],[2017,215],[2017,616]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1a-05",
              "name": "Hardware Lab 3",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2025,616],[2025,215],[2710,215],[2710,616]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1b-10",
              "name": "Technical Support Unit (Software Teaching Labs)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2967,618],[2967,387],[3212,387],[3212,618]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1b-11",
              "name": "Software Project Lab",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3218,618],[3218,213],[3673,213],[3673,618]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1b-12",
              "name": "Student Affairs & Alumni Office",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2966,384],[2966,213],[3212,213],[3212,384]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1b-13",
              "name": "Data Science & Artificial Intelligence Research Centre @NTU (DSAIR)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3679,618],[3679,213],[4145,213],[4145,618]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1c-14",
              "name": "Software Lab 3",
              "roomType": "academic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4402,617],[4402,212],[5015,212],[5015,617]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1c-17",
              "name": "Media & Interactive Computing Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5018,617],[5018,212],[5752,212],[5752,617]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b1",
              "id": "N4-B1c-20",
              "name": "Siggraph Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5827,532],[5827,297],[5989,297],[5989,532]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b2",
              "id": "N4-B2a-01",
              "name": "Computer Networks and Communications Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2172,2133],[2172,1980],[2199,1980],[2199,664],[2172,664],[2172,510],[2404,510],[2404,689],[4421,689],[4421,1951],[2405,1951],[2405,2133]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b2",
              "id": "N4-B2a-02",
              "name": "Parallel & Distributed Systems Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4424,1951],[4424,690],[6649,690],[6649,1951]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b2",
              "id": "N4-B2b-03",
              "name": "IT Support & Maintenance Unit",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7448,1960],[7448,690],[8186,690],[8186,1960]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b2",
              "id": "N4-B2b-05",
              "name": "Hardware & Embedded Systems Lab (HESL)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8198,1960],[8198,690],[11143,690],[11143,1960]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b2",
              "id": "N4-B2c-06",
              "name": "Cyber Security Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11947,1960],[11947,690],[15408,690],[15408,1960]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b2",
              "id": "N4-B2c-07",
              "name": "Equipment/Utilities Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[15425,1957],[15425,692],[15684,692],[15684,1957]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b3",
              "id": "N4-B3a-01",
              "name": "AMRC Applied Research Laboratory 2",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2727,2294],[2727,1645],[2398,1645],[2398,741],[6064,741],[6064,2294]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b3",
              "id": "N4-B3b-06",
              "name": "Research Centre of Excellence in Active Living for the Elderly (Lily Centre)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7052,2301],[7052,733],[9781,733],[9781,2301]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b3",
              "id": "N4-B3b-13",
              "name": "Singtel Cognitive and Artificial Intelligence Lab for Enterprises",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9803,2301],[9803,733],[11611,733],[11611,2301]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b3",
              "id": "N4-B3c-14",
              "name": "Data Management and Analytics Lab (DMAL)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12592,2302],[12592,742],[15342,742],[15342,2302]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4a-01",
              "name": "Atomic Layer Deposition Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4553,2075],[4553,1072],[5129,1072],[5129,2075]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4a-02",
              "name": "Maintenace and Repair Office",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5147,3095],[5147,1073],[5750,1073],[5750,3095]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4a-05",
              "name": "Tape Casting Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4556,3081],[4556,2093],[5127,2093],[5127,3081]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4a-06",
              "name": "Services Compartment",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[6556,1833],[6556,1084],[6838,1084],[6838,1833]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4a-07",
              "name": "Service Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[6554,3085],[6554,2336],[6847,2336],[6847,3085]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4a-08",
              "name": "Computer Security Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5756,3083],[5756,1074],[6537,1074],[6537,3083]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4b-09",
              "name": "Multi-Platform Game Innovation Centre (MAGIC)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9170,3371],[9170,1087],[10377,1087],[10377,1815],[10891,1815],[10891,3371]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "b4",
              "id": "N4-B4b-13",
              "name": "MSE Undergraduate Lab",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[10909,3373],[10909,1800],[10389,1800],[10389,1087],[12653,1087],[12653,3373]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-01",
              "name": "SCSE Stationery Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2597,548],[2597,314],[2580,314],[2580,203],[2788,203],[2788,548]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-02",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2797,547],[2797,203],[3007,203],[3007,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-03",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3015,547],[3015,203],[3225,203],[3225,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-04",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3233,547],[3233,203],[3443,203],[3443,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-05",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3451,547],[3451,203],[3661,203],[3661,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-06",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3669,547],[3669,203],[3879,203],[3879,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-07",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3887,547],[3887,203],[4097,203],[4097,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-08",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4105,547],[4105,203],[4315,203],[4315,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-09",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4323,547],[4323,203],[4533,203],[4533,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-10",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4541,547],[4541,203],[4751,203],[4751,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-11",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4759,547],[4759,203],[4969,203],[4969,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-12",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4977,547],[4977,203],[5187,203],[5187,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-13",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5195,547],[5195,203],[5405,203],[5405,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-14",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5413,547],[5413,203],[5623,203],[5623,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-15",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5631,547],[5631,203],[5841,203],[5841,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-15a",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5849,547],[5849,203],[6059,203],[6059,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-16",
              "name": "Associate Chair (Faculty)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[6059,549],[6059,202],[6484,202],[6484,314],[6387,314],[6387,549]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-17",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2581,1553],[2581,1213],[2787,1213],[2787,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-18",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[2799,1553],[2799,1213],[3005,1213],[3005,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-19",
              "name": "SCSE Filing Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3017,1553],[3017,1213],[3223,1213],[3223,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-20",
              "name": "Sec. Room Chair",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3235,1553],[3235,1213],[3441,1213],[3441,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-21",
              "name": "Chair Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3450,1553],[3450,1213],[3876,1213],[3876,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-22",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3889,1553],[3889,1213],[4095,1213],[4095,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-23",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4107,1553],[4107,1213],[4313,1213],[4313,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-24",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4325,1553],[4325,1213],[4531,1213],[4531,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-25",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4543,1553],[4543,1213],[4749,1213],[4749,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-26",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4761,1553],[4761,1213],[4967,1213],[4967,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-27",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4979,1553],[4979,1213],[5185,1213],[5185,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-27a",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5197,1553],[5197,1213],[5403,1213],[5403,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-28",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5415,1553],[5415,1213],[5621,1213],[5621,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-29",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5623,1553],[5623,1213],[5839,1213],[5839,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-30",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5842,1553],[5842,1213],[6057,1213],[6057,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-31",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[6059,1553],[6059,1213],[6275,1213],[6275,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-32",
              "name": "Administration Office",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[3193,1043],[3192,713],[4524,718],[4524,1037]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-33",
              "name": "General Office Stationery & Pantry Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4538,1038],[4538,718],[4744,719],[4744,853],[4677,854],[4677,1039]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-34",
              "name": "Manager's Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[4690,1039],[4690,863],[4756,863],[4756,717],[5181,717],[5181,1039]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-35",
              "name": "Meeting Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5194,1039],[5194,716],[5832,716],[5832,1039]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02a-36",
              "name": "Administration Services Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[5843,1039],[5843,716],[6266,716],[6266,1039]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-38",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7364,547],[7364,202],[7571,202],[7571,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-39",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7582,547],[7582,202],[7789,202],[7789,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-40",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7800,547],[7800,202],[8007,202],[8007,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-41",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8018,547],[8018,202],[8225,202],[8225,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-42",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8236,547],[8236,202],[8443,202],[8443,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-43",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8454,547],[8454,202],[8661,202],[8661,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-44",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8672,547],[8672,202],[8879,202],[8879,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-45",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8890,547],[8890,202],[9097,202],[9097,547]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-46",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9104,545],[9104,202],[9275,202],[9275,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-47",
              "name": "Printing Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9286,545],[9286,202],[9457,202],[9457,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-48",
              "name": "Associate Chair (Student)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9467,545],[9467,202],[9762,202],[9762,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-49",
              "name": "Sec. Room (Academic)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9773,545],[9773,202],[9963,202],[9963,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-50",
              "name": "Associate Chair (Academic)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9974,545],[9974,202],[10397,202],[10397,314],[10299,314],[10299,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-51",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7364,1553],[7364,1212],[7572,1212],[7572,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-52",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7582,1553],[7582,1212],[7790,1212],[7790,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-53",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7800,1553],[7800,1212],[8008,1212],[8008,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-54",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8018,1553],[8018,1212],[8226,1212],[8226,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-55",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8236,1553],[8236,1212],[8444,1212],[8444,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-56",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8454,1553],[8454,1212],[8662,1212],[8662,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-57",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8672,1553],[8672,1212],[8880,1212],[8880,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-58",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8890,1553],[8890,1212],[9098,1212],[9098,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-59",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9108,1553],[9108,1212],[9316,1212],[9316,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-60",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9326,1553],[9326,1212],[9534,1212],[9534,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-61",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9538,1553],[9538,1212],[9752,1212],[9752,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-62",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9745,1553],[9745,1212],[9970,1212],[9970,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-63",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9973,1553],[9973,1212],[10188,1212],[10188,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-64",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7364,1040],[7364,716],[7572,716],[7572,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-65",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7582,1040],[7582,716],[7790,716],[7790,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-66",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[7800,1040],[7800,716],[8008,716],[8008,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-67",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8018,1040],[8018,716],[8226,716],[8226,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-67a",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8236,1040],[8236,716],[8444,716],[8444,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-68",
              "name": "Discussion Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[8454,1040],[8454,716],[9097,716],[9097,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-69",
              "name": "Staff Computer Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9108,1040],[9108,716],[9316,716],[9316,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-69a",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9326,1040],[9326,716],[9534,716],[9534,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-69b",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9544,1040],[9544,716],[9752,716],[9752,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02b-70",
              "name": "Academic Services Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[9762,1040],[9762,716],[10188,716],[10188,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-72",
              "name": "Associate Chair (Research)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11156,545],[11156,313],[11060,313],[11060,202],[11485,202],[11485,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-73",
              "name": "Sec. AC (GS)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11496,545],[11496,202],[11703,202],[11703,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-74",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11715,545],[11715,202],[12005,202],[12005,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-75",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12016,545],[12016,202],[12180,202],[12180,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-76",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12191,545],[12191,202],[12354,202],[12354,545]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-77",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12364,546],[12364,202],[12572,202],[12572,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-78",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12582,546],[12582,202],[12790,202],[12790,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-79",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12800,546],[12800,202],[13008,202],[13008,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-80",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13018,546],[13018,202],[13226,202],[13226,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-81",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13236,546],[13236,202],[13444,202],[13444,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-82",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13454,546],[13454,202],[13662,202],[13662,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-83",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13672,546],[13672,202],[13880,202],[13880,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-84",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13890,546],[13890,202],[14098,202],[14098,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-85",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14108,546],[14108,202],[14316,202],[14316,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-86",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14326,546],[14326,202],[14534,202],[14534,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-87",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14544,546],[14544,202],[14752,202],[14752,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-88",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14762,546],[14762,202],[14970,202],[14970,546]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-89",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11278,1553],[11278,1213],[11486,1213],[11486,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-90",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11496,1553],[11496,1213],[11704,1213],[11704,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-91",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11714,1553],[11714,1213],[11922,1213],[11922,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-92",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11932,1553],[11932,1213],[12140,1213],[12140,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-93",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12150,1553],[12150,1213],[12358,1213],[12358,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-94",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12368,1553],[12368,1213],[12576,1213],[12576,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-95",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12586,1553],[12586,1213],[12794,1213],[12794,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-96",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12804,1553],[12804,1213],[13012,1213],[13012,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-97",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13022,1553],[13022,1213],[13230,1213],[13230,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-98",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13240,1553],[13240,1213],[13448,1213],[13448,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-99",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13458,1553],[13458,1213],[13666,1213],[13666,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-100",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13676,1553],[13676,1213],[13884,1213],[13884,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-101",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13894,1553],[13894,1213],[14102,1213],[14102,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-102",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14112,1553],[14112,1213],[14320,1213],[14320,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-103",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14330,1553],[14330,1213],[14538,1213],[14538,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-104",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14548,1553],[14548,1213],[14756,1213],[14756,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-105",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14766,1553],[14766,1213],[14974,1213],[14974,1553]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-106",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11277,1040],[11277,717],[11486,717],[11486,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-107",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11495,1040],[11495,717],[11704,717],[11704,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-108",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11713,1040],[11713,717],[11922,717],[11922,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-109",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[11931,1040],[11931,717],[12140,717],[12140,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-110",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12149,1040],[12149,717],[12358,717],[12358,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-111",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12367,1040],[12367,717],[12576,717],[12576,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-112",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12585,1040],[12585,717],[12794,717],[12794,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-113",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[12803,1040],[12803,717],[13012,717],[13012,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-114",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13021,1040],[13021,717],[13230,717],[13230,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-115",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13239,1040],[13239,717],[13448,717],[13448,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-116",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13457,1040],[13457,717],[13666,717],[13666,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-117",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13675,1040],[13675,717],[13884,717],[13884,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-117a",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[13893,1040],[13893,717],[14102,717],[14102,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-117b",
              "name": "Staff Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14111,1040],[14111,717],[14320,717],[14320,1040]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-118",
              "name": "Student Care Room",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14323,1038],[14323,718],[14529,718],[14529,1038]]]
           }
        },
         {
           "type": "Feature",
           "properties": {
              "building": "n4",
              "level": "l2",
              "id": "N4-02c-119",
              "name": "General Office (Graduate Program)",
              "roomType": "nonacademic",
              "popupContent": ""
           },
           "geometry": {
              "type": "Polygon",
              "coordinates": [[[14541,1038],[14541,718],[15142,718],[15142,1038]]]
           }
        }, {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01a-01",
      "name": "RRC - Robotics Lab 1",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2876,1650],[2876,545],[6547,545],[6547,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01b-07",
      "name": "Biological & Chemical Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7239,1650],[7239,545],[9167,545],[9167,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01b-09",
      "name": "RRC - Robotics Lab 2",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9182,1650],[9182,545],[10457,545],[10457,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01c-10",
      "name": "Singapore Centre for 3D Printing (Research Room 1)",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11152,1650],[11152,545],[12378,545],[12378,1075],[11785,1075],[11785,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01c-11",
      "name": "CAE Visualisation Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12382,1650],[12382,1081],[12699,1081],[12699,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01c-13",
      "name": "Design & Human Factors Research Room 1",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13361,1650],[13361,545],[14820,545],[14820,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01c-15",
      "name": "Computer Services",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12703,1650],[12703,1078],[12382,1076],[12382,545],[13349,545],[13349,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01c-17",
      "name": "Visualisation Immersion Projection Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11789,1650],[11789,1081],[12377,1081],[12437,1650]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l1",
      "id": "N3-01c-22",
      "name": "MAE/LDP Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[15022,1420],[15022,792],[15494,792],[15494,1420]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b1",
      "id": "N3-B1a-01",
      "name": "CAE Researcher Room 3",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2595,2064],[2595,836],[4087,836],[4087,2064]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b1",
      "id": "N3-B1c-03",
      "name": "Mechanics of Machines Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11916,2071],[11916,830],[14089,830],[14089,2071]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b1",
      "id": "N3-B1c-04",
      "name": "Rolls Royce@NTU MARS Lab 2",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14101,2071],[14101,830],[15325,830],[15325,1442],[14824,1442],[14824,2071]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b1",
      "id": "N3-B1c-05",
      "name": "Shaker Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14837,2071],[14837,1455],[15325,1455],[15325,2071]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b2",
      "id": "N3-B2a-01",
      "name": "Heat Transfer Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3978,2280],[3978,815],[5752,815],[5763,2280]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b2",
      "id": "N3-B2a-02",
      "name": "Fuel Cells Lab 1 (ERI@N)",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2564,2280],[2564,815],[3963,815],[3963,2280]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b2",
      "id": "N3-B2b-03",
      "name": "Fluid Mechanic Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6676,2280],[6676,815],[10051,815],[10051,2280]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b2",
      "id": "N3-B2b-05a",
      "name": "UAV Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10055,2280],[10055,815],[10963,815],[10963,2280]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b2",
      "id": "N3-B2c-06",
      "name": "Thermal & Fluids Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11889,2280],[11889,815],[15046,815],[15046,2280]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b3",
      "id": "N3-B3a-01",
      "name": "CAE Researcher Room 2",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2828,2603],[2828,907],[5486,907],[5486,2603]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b3",
      "id": "N3-B3b-05",
      "name": "Computer Aided Engineering (CAE) Lab 1",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6546,2601],[6546,910],[9831,910],[9831,2601]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b3",
      "id": "N3-B3b-08",
      "name": "Institute of Sports Research ",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9852,2601],[9852,910],[11463,910],[11463,1982],[10955,1982],[10955,2601]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b3",
      "id": "N3-B3c-10",
      "name": "Rolls Royce",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12528,2601],[12528,910],[13556,910],[13556,2601]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b3",
      "id": "N3-B3c-21",
      "name": "Biological Process Researcher Room 3",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13572,2601],[13572,910],[15159,910],[15159,2601]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b4",
      "id": "N3-B4a-01",
      "name": "Innovation @ MAE Lab 1",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5042,3068],[5042,1171],[7281,1171],[7281,3068]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b4",
      "id": "N3-B4b-04",
      "name": "Ocular Therapeutic Engineering Centre",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10685,3068],[10685,1161],[11851,1161],[11851,3068]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "b4",
      "id": "N3-B4c-03",
      "name": "Precision Engineering Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[15520,3047],[15520,1197],[17508,1197],[17508,3047]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-01",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2518,494],[2518,262],[2296,263],[2296,150],[2838,150],[2838,494]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-02",
      "name": "Sec",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2847,494],[2847,150],[3389,150],[3389,494]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-04",
      "name": "Chair",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3398,494],[3398,150],[3830,150],[3830,494]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-05",
      "name": "Meeting Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3938,497],[3938,150],[4171,150],[4171,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-06",
      "name": "Associate Chair (Research)",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4180,497],[4180,150],[4492,150],[4492,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-07",
      "name": "Sec Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4501,498],[4501,150],[4711,150],[4711,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-08",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4721,498],[4721,150],[4932,150],[4932,498]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-09",
      "name": "Sec Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4942,498],[4942,150],[5152,150],[5152,498]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-10",
      "name": "Associate Chair (Academic)",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5160,498],[5160,150],[5492,150],[5492,498]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-11",
      "name": "Meeting Room E",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5507,498],[5507,150],[5808,150],[5808,498]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-12",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5824,498],[5824,150],[6255,150],[6255,498]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-14",
      "name": "Administration Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2527,1521],[2527,1173],[3389,1173],[3389,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-16",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3398,1521],[3398,1173],[3831,1173],[3831,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-19",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3841,1521],[3841,1173],[4270,1173],[4270,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-20",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4279,1521],[4279,1173],[4490,1173],[4490,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-21",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4501,1521],[4501,1173],[5151,1173],[5151,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-24",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5162,1521],[5162,1173],[5262,1173],[5262,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-25",
      "name": "Associate Chair (Graduate Studies)",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5272,1521],[5272,1173],[5593,1173],[5593,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-26",
      "name": "Sec Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5603,1521],[5603,1173],[5813,1173],[5813,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-27",
      "name": "Sec Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5824,1521],[5824,1173],[6033,1173],[6033,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-28",
      "name": "A/C (Admin) Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6043,1521],[6043,1173],[6369,1173],[6369,1408],[6475,1408],[6475,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-29",
      "name": "Administration Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3161,999],[3161,673],[4222,673],[4222,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-29a",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4232,999],[4232,673],[4491,673],[4491,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-30",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4676,999],[4676,844],[4500,844],[4500,672],[5151,673],[5151,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-31",
      "name": "Research Mail Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4500,999],[4500,857],[4666,857],[4666,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-32",
      "name": "Meeting Room A",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5162,999],[5162,673],[5814,673],[5814,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-33",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5824,999],[5824,673],[6034,673],[6034,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02a-34",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6044,999],[6044,673],[6254,673],[6254,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-35",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7239,498],[7239,264],[7145,264],[7145,150],[7576,150],[7576,498]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-36",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7589,497],[7589,151],[7795,151],[7795,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-37",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7811,497],[7811,151],[8017,151],[8017,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-38",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8033,497],[8033,151],[8239,151],[8239,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-39",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8255,497],[8255,151],[8461,151],[8461,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-40",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8467,497],[8467,151],[8683,151],[8683,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-41",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8687,497],[8687,151],[8905,151],[8905,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-42",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8907,497],[8907,151],[9127,151],[9127,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-43",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9130,497],[9130,151],[9349,151],[9349,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-44",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9350,497],[9350,151],[9561,151],[9561,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-45",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9571,497],[9571,151],[9781,151],[9781,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-46",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9791,497],[9791,151],[10002,151],[10002,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-47",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10011,497],[10012,151],[10222,151],[10222,497]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-48",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7366,1521],[7366,1173],[7576,1173],[7576,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-49",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7588,1521],[7588,1173],[7798,1173],[7798,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-50",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7810,1521],[7810,1173],[8020,1173],[8020,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-51",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8032,1521],[8032,1173],[8242,1173],[8242,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-52",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8254,1521],[8254,1173],[8464,1173],[8464,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-53",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8467,1521],[8467,1173],[8686,1173],[8686,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-54",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8689,1521],[8689,1173],[8899,1173],[8899,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-55",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8909,1521],[8909,1173],[9120,1173],[9120,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-56",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9129,1521],[9129,1173],[9339,1173],[9339,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-57",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9350,1521],[9350,1173],[9560,1173],[9560,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-58",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9571,1521],[9571,1173],[9781,1173],[9781,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-59",
      "name": "Sec Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9791,1521],[9791,1173],[10001,1173],[10001,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-60",
      "name": "Head of Department - TFE & EM",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10012,1521],[10012,1173],[10343,1173],[10343,1408],[10443,1408],[10443,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-62",
      "name": "Graduate Studies Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7366,999],[7366,673],[8002,673],[8002,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-63",
      "name": "Research Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8012,999],[8012,673],[8874,673],[8874,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-64",
      "name": "Pantry",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8884,999],[8884,673],[9120,673],[9120,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-65",
      "name": "Meeting Room B",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9130,999],[9130,673],[9781,673],[9781,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-66",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9791,999],[9791,673],[10003,673],[10003,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02b-67",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10011,999],[10011,673],[10222,673],[10222,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-68",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11334,499],[11334,150],[11545,150],[11545,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-69",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11556,499],[11556,150],[11767,150],[11767,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-70",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11778,499],[11778,150],[11989,150],[11989,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-71",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12000,499],[12000,150],[12211,150],[12211,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-72",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12222,499],[12222,150],[12433,150],[12433,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-73",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12444,499],[12444,150],[12655,150],[12655,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-74",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12666,499],[12666,150],[12877,150],[12877,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-75",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12878,499],[12878,150],[13089,150],[13089,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-76",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13098,499],[13098,150],[13309,150],[13309,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-77",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13317,499],[13317,150],[13528,150],[13528,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-78",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13538,499],[13538,150],[13750,150],[13750,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-79",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13758,499],[13758,150],[13969,150],[13969,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-80",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13980,499],[13980,150],[14191,150],[14191,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-81",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14198,499],[14198,150],[14409,150],[14409,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-82",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14420,499],[14420,150],[14631,150],[14631,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-83",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14638,499],[14638,150],[14849,150],[14849,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-84",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14861,499],[14861,150],[15072,150],[15072,499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-85",
      "name": "Division Head Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11114,1521],[11114,1409],[11208,1409],[11210,1174],[11544,1174],[11544,1521]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-86",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11553,1522],[11553,1173],[11767,1173],[11767,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-87",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11775,1522],[11775,1173],[11989,1173],[11989,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-88",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11997,1522],[11997,1173],[12211,1173],[12211,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-89",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12219,1522],[12219,1173],[12433,1173],[12433,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-90",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12441,1522],[12441,1173],[12655,1173],[12655,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-91",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12663,1522],[12663,1173],[12877,1173],[12877,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-92",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12885,1522],[12885,1173],[13099,1173],[13099,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-93",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13107,1522],[13107,1173],[13321,1173],[13321,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-94",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13329,1522],[13329,1173],[13543,1173],[13543,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-95",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13551,1522],[13551,1173],[13765,1173],[13765,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-96",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13773,1522],[13773,1173],[13987,1173],[13987,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-97",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13995,1522],[13995,1173],[14209,1173],[14209,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-98",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14217,1522],[14217,1173],[14431,1173],[14431,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-99",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14439,1522],[14439,1173],[14653,1173],[14653,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-100",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14661,1522],[14661,1173],[14875,1173],[14875,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-101",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14883,1522],[14883,1173],[15097,1173],[15097,1522]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-102",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11335,999],[11335,673],[11544,673],[11544,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-103",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11556,999],[11556,673],[11765,673],[11765,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-104",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11777,999],[11777,673],[11986,673],[11986,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-105",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11998,999],[11998,673],[12207,673],[12207,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-106",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12219,999],[12219,673],[12428,673],[12428,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-107",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12440,999],[12440,673],[12649,673],[12649,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-108",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12661,999],[12661,673],[12870,673],[12870,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-109",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12882,999],[12882,673],[13091,673],[13091,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-110",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13103,999],[13103,673],[13312,673],[13312,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-111",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13324,999],[13324,673],[13533,673],[13533,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-112",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13545,999],[13545,673],[13754,673],[13754,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-113",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13766,999],[13766,673],[13981,673],[13981,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-113a",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13987,999],[13987,673],[14196,673],[14196,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-113b",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14208,999],[14208,673],[14417,673],[14417,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-114",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14420,999],[14420,673],[14629,673],[14629,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-115",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14641,999],[14641,673],[14850,673],[14850,999]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n3",
      "level": "l2",
      "id": "N3-02c-116",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14860,999],[14860,673],[15087,673],[15087,999]]]
   }
}, {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B2a-01",
      "name": "LT19",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13077,1252],[13074,225],[14503,225],[14499,1252]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B2a-02",
      "name": "LT20",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11369,1253],[11369,225],[12799,225],[12799,1253]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-14a",
      "name": "E2S2 Computing Laboratory",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5764,743],[5764,195],[6468,195],[6468,743]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-14b",
      "name": "Scanning Laboratory",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5441,586],[5441,195],[5754,195],[5754,586]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-14c",
      "name": "Imaging Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5124,586],[5124,195],[5431,195],[5431,586]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-14e",
      "name": "E2S2 Chemistry Laboratory",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5118,1292],[5118,715],[5502,715],[5491,784],[5619,757],[5681,878],[5753,878],[5753,1292]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-14f",
      "name": "Petrophysical & Textural Analysis Laboratory",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5765,1286],[5765,878],[6088,878],[6088,1286]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-14g",
      "name": "Sing Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6102,1293],[6102,879],[6429,879],[6429,1293]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15a",
      "name": "ASE Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4866,1284],[4866,720],[5107,720],[5107,1284]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15b",
      "name": "ASE Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4565,1283],[4565,721],[4854,721],[4854,1283]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15c",
      "name": "ASE Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4360,1284],[4360,720],[4555,721],[4555,1284]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15d",
      "name": "ASE Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3988,1285],[3988,720],[4350,720],[4350,1285]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15e",
      "name": "ASE Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3602,1284],[3602,720],[3983,721],[3983,1284]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15f",
      "name": "Genomics & Ecology of Eukaryotes Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3602,574],[3602,196],[3975,196],[3975,574]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15g",
      "name": "ASE Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3988,574],[3988,196],[4505,196],[4505,574]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-15h",
      "name": "ASE Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4517,574],[4517,196],[5106,196],[5106,574]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-16a",
      "name": "Magma Tranposrt Dynamic Laboratory ",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2568,573],[2568,417],[2599,417],[2599,310],[2682,310],[2682,193],[3127,193],[3127,573]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-16b",
      "name": "Ocean Exploration Laboratory",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3123,573],[3123,196],[3583,196],[3583,573]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-16c",
      "name": "ASE Visualisation Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2690,1284],[2690,897],[2570,897],[2570,725],[3344,725],[3344,1284]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b1",
      "id": "N2-B1c-16d",
      "name": "Back Projection Equipment Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3356,1284],[3356,724],[3586,724],[3586,1284]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b2",
      "id": "N2-B2a-05",
      "name": "TR 43",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12018,1554],[12018,972],[12682,972],[12682,1554]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b2",
      "id": "N2-B2a-06",
      "name": "TR 44",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12018,941],[12018,374],[12675,374],[12675,941]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b2",
      "id": "N2-B2b-07",
      "name": "Business Library",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7700,1586],[7700,321],[11234,321],[11234,1586]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b2",
      "id": "N2-B2c-12",
      "name": "Exam Hall C",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2787,1562],[2787,1135],[2608,1135],[2608,785],[2793,785],[2797,355],[6918,355],[6918,1562]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b3",
      "id": "N2-B3a-01",
      "name": "Library Instructional Commons",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12504,1496],[12504,230],[15238,230],[15238,1496]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b3",
      "id": "N2-B3c-06",
      "name": "Asian School of the Environment (Laboratroies) DES Environmental Geochemistry",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4379,1499],[4379,233],[7167,233],[7167,1499]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b4",
      "id": "N2-B4a-01",
      "name": "ALC 1",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14682,1578],[14682,910],[15479,910],[15479,1578]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b4",
      "id": "N2-B4a-01a",
      "name": "Managed Print Services",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14682,903],[14682,239],[15478,239],[15478,903]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b4",
      "id": "N2-B4a-02",
      "name": "Smart Classroom",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13881,1580],[13881,238],[14671,238],[14671,1580]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b4",
      "id": "N2-B4a-03",
      "name": "CELT Learning Studio",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13101,1580],[13101,701],[13869,701],[13869,1580]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b4",
      "id": "N2-B4c-06",
      "name": "Asian School of the Environment Sediment & Ecology Laboratory",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2952,1589],[2952,237],[7457,237],[7457,1589]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b5",
      "id": "N2-B5c-01",
      "name": "EOS Rock Storage",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8807,2233],[8807,924],[8593,926],[8593,765],[8807,765],[8805,754],[9037,754],[9037,2233]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "b5",
      "id": "N2-B5c-02",
      "name": "Sembcorp Marine Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6489,2206],[6489,760],[7241,760],[7241,639],[7943,639],[7943,760],[8177,764],[8177,2206]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-01",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14390,1342],[14390,1007],[14572,1007],[14572,1342]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-02",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14177,1344],[14177,1007],[14381,1007],[14381,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-03",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13965,1344],[13965,1007],[14169,1007],[14169,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-04",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13753,1344],[13753,1007],[13957,1007],[13957,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-05",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13541,1344],[13541,1007],[13745,1007],[13745,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-06",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13329,1344],[13329,1007],[13533,1007],[13533,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-07",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13117,1344],[13117,1007],[13321,1007],[13321,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-08",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12905,1344],[12905,1007],[13109,1007],[13109,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-09",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12693,1344],[12693,1007],[12897,1007],[12897,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-09a",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12481,1344],[12481,1007],[12685,1007],[12685,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-09b",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12269,1344],[12269,1007],[12473,1007],[12473,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-09c",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12057,1344],[12057,1007],[12261,1007],[12261,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-09d",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11845,1344],[11845,1007],[12049,1007],[12049,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-09e",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11633,1344],[11633,1007],[11837,1007],[11837,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-10",
      "name": "Director",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10993,1342],[10993,1194],[10908,1194],[10908,1008],[11625,1008],[11625,1342]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-12",
      "name": "Student and Vistors Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13375,840],[13375,453],[14204,453],[14204,768],[14183,820],[14151,840]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-14",
      "name": "EOS Meeting Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11432,841],[11432,22],[14585,22],[14585,130],[14567,130],[14567,447],[13370,447],[13370,840],[12349,840],[12280,798],[12235,721],[12084,721],[12037,800],[11967,841]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01a-15",
      "name": "Admin Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11077,840],[11006,800],[10835,526],[10796,526],[10796,128],[10575,128],[10575,23],[11390,23],[11390,178],[11405,182],[11405,840]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-16",
      "name": "Data Centre",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9506,358],[9506,23],[9923,23],[9923,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-17",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9294,358],[9294,22],[9497,22],[9497,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-18",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9082,358],[9082,22],[9285,22],[9285,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-19",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8870,358],[8870,22],[9073,22],[9073,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-20",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8658,358],[8658,22],[8861,22],[8861,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-21",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8446,358],[8446,22],[8649,22],[8649,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-22",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8234,358],[8234,22],[8437,22],[8437,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-23",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8022,358],[8022,22],[8225,22],[8225,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-24",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7810,358],[7810,22],[8013,22],[8013,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-25",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7598,358],[7598,22],[7801,22],[7801,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-26",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7386,358],[7386,22],[7589,22],[7589,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-27",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7174,358],[7174,22],[7377,22],[7377,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-28",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6962,358],[6962,22],[7165,22],[7165,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-28a",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9931,1343],[9931,1007],[10119,1007],[10119,1343]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-28b",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9718,1343],[9718,1007],[9922,1007],[9922,1343]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-28c",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9523,1343],[9523,1007],[9711,1007],[9711,1343]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-29a",
      "name": "CGO Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8865,1344],[8865,526],[9406,523],[9471,560],[9514,630],[9514,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01b-30",
      "name": "Student and Vistors Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7171,1343],[7171,605],[7200,558],[7274,525],[8726,525],[8726,564],[8859,564],[8859,1343]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-40",
      "name": "Secretary",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5952,359],[5952,23],[6153,23],[6153,359]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-41",
      "name": "Chair's Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5684,359],[5684,23],[5943,23],[5943,359]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-42",
      "name": "Secretaries' Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5472,358],[5472,22],[5676,22],[5676,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-43",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5260,358],[5260,22],[5464,22],[5464,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-44",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5048,358],[5048,22],[5252,22],[5252,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-45",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4836,358],[4836,22],[5040,22],[5040,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-46",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4624,358],[4624,22],[4828,22],[4828,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-47",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4412,358],[4412,22],[4616,22],[4616,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-48",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4200,358],[4200,22],[4404,22],[4404,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-49",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3988,358],[3988,22],[4192,22],[4192,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-50",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3776,358],[3776,22],[3980,22],[3980,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-51",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3564,358],[3564,22],[3768,22],[3768,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-52",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3352,358],[3352,22],[3556,22],[3556,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-53",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3140,358],[3140,22],[3344,22],[3344,358]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-54",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2924,359],[2924,23],[3129,23],[3129,359]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-55",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2712,359],[2712,23],[2917,23],[2917,359]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-56",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2490,359],[2490,23],[2694,23],[2694,359]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-57",
      "name": "Storage Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2926,826],[2926,525],[3128,525],[3128,826]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-58",
      "name": "Geophysics Computer Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3137,827],[3137,525],[3748,525],[3748,827]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-59",
      "name": "Pre-QE PhD Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3758,827],[3758,525],[4401,525],[4401,827]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-60",
      "name": "ASE Acad Team",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5047,827],[5047,525],[5251,525],[5251,827]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-61",
      "name": "ASE Meeting Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5897,1344],[5897,1008],[6297,1008],[6297,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-63",
      "name": "ASE Admin Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5471,1344],[5471,526],[5889,526],[5889,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-65",
      "name": "Field Coordinators Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5260,1344],[5260,1007],[5464,1007],[5464,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-66",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5048,1344],[5048,1007],[5252,1007],[5252,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-67",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4836,1344],[4836,1007],[5040,1007],[5040,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-68",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4624,1344],[4624,1007],[4828,1007],[4828,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-69",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4412,1344],[4412,1007],[4616,1007],[4616,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-70",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4200,1344],[4200,1007],[4404,1007],[4404,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-71",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3988,1344],[3988,1007],[4192,1007],[4192,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-72",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3776,1344],[3776,1007],[3980,1007],[3980,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-73",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3564,1344],[3564,1007],[3768,1007],[3768,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-74",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3352,1344],[3352,1007],[3556,1007],[3556,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-75",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3140,1344],[3140,1007],[3344,1007],[3344,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-77",
      "name": "ASE Meeting Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2713,1344],[2713,1007],[3114,1007],[3114,1344]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n2",
      "level": "l1",
      "id": "N2-01c-78",
      "name": "Pantry",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2516,1344],[2516,1007],[2703,1007],[2703,1344]]]
   }
}, {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1a-01",
      "name": "Alumni-Students' Corner",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2930,1433],[2930,344],[3424,344],[3424,1433]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1a-01a",
      "name": "CEE Research Staff Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3434,1433],[3434,344],[5350,344],[5350,1433]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1a-03",
      "name": "Maritime Energy & Sustainable Development Centre of Excellence",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5358,1433],[5358,344],[5997,344],[5997,1433]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1a-03a",
      "name": "The Gallery Laboratory",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6005,1433],[6005,547],[6483,547],[6485,344],[6627,344],[6627,1433]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1a-03b",
      "name": "Computational Workstation Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6005,540],[6005,344],[6475,344],[6475,540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-05",
      "name": "Seminar Room C",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7318,751],[7318,340],[7938,340],[7938,751]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-06",
      "name": "Seminar Room A",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7949,904],[7949,340],[8746,340],[8746,904]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-07",
      "name": "Institute of Catastrophe Risk Management (ICRM)",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8758,904],[8758,340],[9181,340],[9181,904]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-08",
      "name": "Research Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9188,904],[9188,340],[9881,340],[9881,904]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-09",
      "name": "Centre For Infrastructure Systems",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9893,904],[9893,340],[10512,340],[10512,796],[10334,796],[10334,904]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-10",
      "name": "Research Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9653,1432],[9653,1071],[10512,1071],[10512,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-11",
      "name": "ICRM Meeting Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9445,1432],[9445,1071],[9641,1071],[9641,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-12",
      "name": "Visiting Professor",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9228,1432],[9228,1071],[9433,1071],[9433,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-13",
      "name": "Visiting Professor",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9019,1432],[9019,1071],[9222,1071],[9222,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-14",
      "name": "NatCatDAX Programme Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8541,1432],[8541,1071],[9007,1071],[9007,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-16",
      "name": "Seminar Room B",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7319,1432],[7319,1071],[7939,1071],[7939,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1b-21",
      "name": "CEE Meeting Room B",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7948,1432],[7948,1071],[8528,1071],[8539,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1c-22",
      "name": "NTU-JTC Industrial Infrastructure Innovation Centre",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11204,1432],[11204,715],[11827,715],[11827,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1c-26",
      "name": "Research Staff Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11836,1432],[11836,340],[12482,340],[12482,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1c-27",
      "name": "Nanyang Centre for Underground Space",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11205,705],[11205,340],[11816,340],[11816,705]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b1",
      "id": "N1-B1c-32",
      "name": "Transportation Lab/Spatial Information Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12483,1432],[12483,340],[14855,340],[14855,1432]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2a-01",
      "name": "Surveying Store",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2203,1537],[2203,1064],[2670,1064],[2670,1537]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2a-02",
      "name": "Central Environmental Science & Engineering Lab (CESEL)",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2894,1957],[2894,824],[5322,824],[5322,1535],[4721,1535],[4721,1957]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2a-09",
      "name": "Environmental Lab 3",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4729,1957],[4729,1546],[5330,1546],[5330,822],[5996,822],[5996,1957]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2a-10",
      "name": "Centre for Usable Space (CUS)",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6005,1957],[6005,824],[6653,824],[6653,1957]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2b-13",
      "name": "Engineering Software Teaching Laboratory (EST Lab) 1 & 2",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7354,1957],[7354,824],[9997,824],[9997,1957]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2b-19",
      "name": "Geotechnics Research Lab",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10010,1957],[10010,824],[10664,824],[10664,1956]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2c-20",
      "name": "LIEN AID",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11359,1957],[11359,1204],[11789,1204],[11789,1011],[11847,1011],[11847,824],[12275,824],[12275,1416],[11838,1416],[11838,1957]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2c-25",
      "name": "Meeting Room D",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11359,1195],[11359,824],[11837,824],[11837,1002],[11779,1002],[11779,1195]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b2",
      "id": "N1-B2c-26",
      "name": "Geotechnic Laboratory",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11852,1957],[11852,1425],[12287,1425],[12287,824],[15115,824],[15115,1957]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3a-01",
      "name": "Store Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2138,1136],[2138,927],[2593,927],[2593,1136]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3a-02",
      "name": "Reactor Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2138,1383],[2138,1161],[2593,1151],[2593,1383]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3a-03",
      "name": "Gas Cylinder Room",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2138,1554],[2138,1398],[2594,1398],[2594,1554]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3a-04",
      "name": "Environment Lab ",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2775,1798],[2775,686],[6506,686],[6506,1798]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3b-18",
      "name": "Library Technology Group",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7205,1798],[7205,686],[8491,686],[8491,1798]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3b-28",
      "name": "Hydraulics Studio",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8501,1798],[8501,686],[9150,686],[9150,1798]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3b-29",
      "name": "Robotics ADVANCe Lab Collaborative",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9158,1798],[9158,686],[10443,686],[10443,1798]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3c-41",
      "name": "Robotics ADVANCe Lab Mobility",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11146,1798],[11146,686],[11776,686],[11776,1798]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3c-47",
      "name": "CEE Smart Classroom",
      "roomType": "academic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11786,1798],[11786,686],[12177,686],[12417,949],[12417,1798]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b3",
      "id": "N1-B3c-50",
      "name": "Store",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[15067,1556],[15067,920],[15540,920],[15540,1556]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-02",
      "name": "Energetic Research Institute (EnRI)",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4686,1879],[4686,544],[6223,544],[6223,1879]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-03",
      "name": "EnRI Labs - Metal Characterisation Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4240,1223],[4240,544],[4677,544],[4677,1223]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-04",
      "name": "EnRI Labs - Binder & Plasticser Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3836,1224],[3836,639],[3975,638],[3975,545],[4227,545],[4227,1224]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-05",
      "name": "EnRI Labs - Organic Synthesis Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3470,1224],[3470,544],[3824,544],[3824,1224]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-06",
      "name": "EnRI Labs - Formulations Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3107,1223],[3107,1041],[2943,1041],[2943,545],[3040,545],[3040,639],[3193,639],[3193,545],[3458,545],[3458,1223]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-07",
      "name": "EnRI Labs - Detection Analysis Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2760,1225],[2760,1053],[3096,1053],[3096,1225]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-08",
      "name": "EnRI Labs - Store",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2314,1224],[2314,1053],[2748,1053],[2748,1224]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-09",
      "name": "EnRI Labs - General Chemical STore",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2314,1487],[2314,1235],[2602,1235],[2602,1487]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-10",
      "name": "EnRI Labs - Solvent STore",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2314,1673],[2314,1499],[2603,1499],[2603,1673]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-11",
      "name": "EnRI Labs - Acid Store",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2314,1879],[2314,1685],[2604,1685],[2559,1787],[2559,1879]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-13",
      "name": "O-N Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2761,1879],[2761,1710],[2953,1710],[2953,1879]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-14",
      "name": "SW",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2965,1879],[2965,1710],[3043,1710],[3043,1879]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-16",
      "name": "Clean Room Class 100",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3193,1871],[3193,1785],[3054,1783],[3054,1414],[3529,1414],[3529,1871]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-17",
      "name": "Clean Room Class 10K",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3541,1872],[3541,1416],[3881,1416],[3881,1872]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-18",
      "name": "EnRI Labs - Metal Particles Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3893,1878],[3893,1415],[4288,1415],[4288,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4a-19",
      "name": "EnRI Labs - Instrumental Analysis Lab",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4302,1879],[4302,1414],[4676,1414],[4676,1879]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4b-03",
      "name": "RS/GS Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7053,1878],[7053,542],[7803,542],[7803,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4b-04",
      "name": "RS/GS Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7814,1878],[7814,542],[8587,542],[8587,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4b-05",
      "name": "RS/GS Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8599,1878],[8599,542],[9373,542],[9373,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4b-06",
      "name": "RS/GS Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9379,1878],[9379,542],[10153,542],[10153,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4b-07",
      "name": "RS/GS Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10163,1878],[10163,542],[10916,542],[10916,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4c-08",
      "name": "Project Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11745,1878],[11745,542],[12498,542],[12498,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4c-09a",
      "name": "Drawing Room 1",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13294,1209],[13294,542],[14131,542],[14131,1209]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4c-09b",
      "name": "CEE Seminar Room D",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13292,1878],[13292,1222],[14132,1222],[14132,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4c-10",
      "name": "RS Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14144,1878],[14144,542],[14826,542],[14826,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b4",
      "id": "N1-B4c-10a",
      "name": "Microstructure Characterisation Laboratory",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14840,1878],[14840,542],[15377,542],[15377,1878]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b5",
      "id": "N1-B5a-01",
      "name": "EnRI",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4551,3015],[4551,1098],[4764,1086],[4800,1072],[5699,1072],[5703,2056],[6265,2056],[6265,2975],[5707,2975],[5705,3015]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b5",
      "id": "N1-B5c-03",
      "name": "Civil Engineering Materials Laboratory",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[16978,3034],[16978,1108],[17563,1108],[17563,3034]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "b5",
      "id": "N1-B5c-05",
      "name": "Construction Annex",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14704,3050],[14700,1085],[16945,1091],[16945,3050]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-01",
      "name": "Filing Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2564,507],[2564,275],[2326,275],[2326,160],[2762,160],[2762,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-02",
      "name": "Associate Chair",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2770,507],[2770,160],[3091,160],[3091,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-03",
      "name": "SECs",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3102,507],[3102,160],[3540,160],[3540,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-04",
      "name": "Associate Chair",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3550,507],[3550,160],[3870,160],[3870,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-05",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3881,507],[3881,160],[4093,160],[4093,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-06",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4104,507],[4104,160],[4317,160],[4317,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-07",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4325,507],[4325,160],[4538,160],[4538,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-08",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4549,507],[4549,160],[4762,160],[4762,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-09",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4771,507],[4771,160],[4984,160],[4984,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-10",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4992,507],[4992,160],[5205,160],[5205,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-11",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5214,507],[5214,160],[5427,160],[5427,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-12",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5436,507],[5436,160],[5649,160],[5649,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-13",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5659,507],[5659,160],[5872,160],[5872,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-14",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5881,507],[5881,160],[6094,160],[6094,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-15",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6103,507],[6103,160],[6316,160],[6316,507]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-16",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2548,1538],[2548,1189],[2762,1189],[2762,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-16a",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[2770,1538],[2770,1189],[3428,1189],[3428,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-17",
      "name": "Chair's Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3437,1538],[3437,1189],[3871,1189],[3871,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-18",
      "name": "CEE Meeting Room @ CEE",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3881,1538],[3881,1189],[4539,1189],[4539,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-21",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4548,1538],[4548,1189],[4760,1189],[4760,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-22",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4770,1538],[4770,1189],[4982,1189],[4982,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-23",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[4992,1538],[4992,1189],[5204,1189],[5204,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-24",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5215,1538],[5215,1189],[5427,1189],[5427,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-25",
      "name": "Associate Chair",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5436,1538],[5436,1189],[5761,1189],[5761,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-26",
      "name": "SEC",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5771,1538],[5771,1189],[6093,1189],[6093,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-27",
      "name": "Associate Chair",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[6103,1538],[6103,1189],[6437,1189],[6437,1283],[6537,1283],[6537,1538]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-29",
      "name": "General Office/Undergraduate Office",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[3199,1013],[3199,683],[5187,683],[5187,1013]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01a-33",
      "name": "Graduate Studies Office @ CEE",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[5199,1013],[5199,683],[6314,683],[6314,1013]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-35",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7435,508],[7435,159],[7648,159],[7648,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-36",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7656,508],[7656,159],[7870,159],[7870,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-37",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7880,508],[7880,159],[8092,159],[8092,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-38",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8103,508],[8103,159],[8315,159],[8315,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-39",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8325,508],[8325,159],[8537,159],[8537,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-40",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8547,508],[8547,159],[8759,159],[8759,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-41",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8769,508],[8769,159],[8981,159],[8981,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-42",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8991,508],[8991,159],[9203,159],[9203,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-43",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9214,508],[9214,159],[9426,159],[9426,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-44",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9436,508],[9436,159],[9648,159],[9648,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-45",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9657,508],[9657,159],[9869,159],[9869,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-46",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9880,508],[9880,159],[10092,159],[10092,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-47",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10102,508],[10102,159],[10314,159],[10314,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-48",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7436,1540],[7436,1190],[7649,1190],[7649,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-49",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7657,1540],[7657,1190],[7869,1190],[7869,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-50",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7880,1540],[7880,1190],[8093,1190],[8093,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-51",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8102,1540],[8102,1190],[8315,1190],[8315,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-52",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8325,1540],[8325,1190],[8538,1190],[8538,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-53",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8546,1540],[8546,1190],[8759,1190],[8759,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-54",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8769,1540],[8769,1190],[8982,1190],[8982,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-55",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8990,1540],[8990,1190],[9203,1190],[9203,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-56",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9214,1540],[9214,1190],[9427,1190],[9427,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-57",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9434,1540],[9434,1190],[9647,1190],[9647,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-58",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9657,1540],[9657,1190],[9870,1190],[9870,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-59",
      "name": "SEC",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9879,1540],[9879,1190],[10092,1190],[10092,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-60",
      "name": "Divisional Head Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10101,1540],[10101,1190],[10437,1048],[10437,1424],[10537,1424],[10537,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-61",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7437,1014],[7437,684],[7648,684],[7648,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-62",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7658,1014],[7658,684],[7869,684],[7869,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-63",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[7882,1014],[7882,684],[8313,684],[8313,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-64",
      "name": "Stationary Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8326,1014],[8326,684],[8535,684],[8535,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-65",
      "name": "Staff Tea Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[8548,1014],[8548,684],[9202,684],[9202,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-66",
      "name": "Teaching Fellows",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9212,1014],[9212,684],[9869,684],[9869,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-67",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[9880,1014],[9880,684],[10091,684],[10091,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01b-68",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[10103,1014],[10103,684],[10314,684],[10314,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-69",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11434,508],[11434,160],[11646,160],[11646,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-70",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11656,508],[11656,160],[11868,160],[11868,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-71",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11878,508],[11878,160],[12090,160],[12090,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-72",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12100,508],[12100,160],[12312,160],[12312,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-73",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12322,508],[12322,160],[12534,160],[12534,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-74",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12544,508],[12544,160],[12756,160],[12756,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-75",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12766,508],[12766,160],[12978,160],[12978,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-76",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12988,508],[12988,160],[13200,160],[13200,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-77",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13210,508],[13210,160],[13422,160],[13422,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-78",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13432,508],[13432,160],[13644,160],[13644,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-79",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13654,508],[13654,160],[13866,160],[13866,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-80",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13876,508],[13876,160],[14088,160],[14088,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-81",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14098,508],[14098,160],[14310,160],[14310,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-82",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14320,508],[14320,160],[14532,160],[14532,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-83",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14542,508],[14542,160],[14754,160],[14754,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-84",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14764,508],[14764,160],[14976,160],[14976,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-85",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14986,508],[14986,160],[15198,160],[15198,508]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-86",
      "name": "Divisional Head Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11211,1540],[11211,1425],[11309,1425],[11309,1188],[11648,1188],[11648,1540]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-87",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11878,1539],[11878,1190],[12092,1190],[12092,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-88",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12100,1539],[12100,1190],[12314,1190],[12314,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-89",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12322,1539],[12322,1190],[12536,1190],[12536,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-90",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12544,1539],[12544,1190],[12758,1190],[12758,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-91",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12766,1539],[12766,1190],[12980,1190],[12980,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-92",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12988,1539],[12988,1190],[13202,1190],[13202,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-93",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13210,1539],[13210,1190],[13424,1190],[13424,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-94",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13432,1539],[13432,1190],[13646,1190],[13646,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-95",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13654,1539],[13654,1190],[13868,1190],[13868,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-96",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13876,1539],[13876,1190],[14090,1190],[14090,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-97",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14098,1539],[14098,1190],[14312,1190],[14312,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-98",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14320,1539],[14320,1190],[14534,1190],[14534,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-99",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14542,1539],[14542,1190],[14756,1190],[14756,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-100",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14764,1539],[14764,1190],[14978,1190],[14978,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-101",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14986,1539],[14986,1190],[15200,1190],[15200,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-102",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[15208,1539],[15208,1190],[15422,1190],[15422,1539]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-103",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11435,1014],[11435,684],[11647,684],[11647,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-104",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11657,1014],[11657,684],[11869,684],[11869,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-105",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[11879,1014],[11879,684],[12091,684],[12091,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-106",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12101,1014],[12101,684],[12313,684],[12313,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-107",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12323,1014],[12323,684],[12535,684],[12535,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-108",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12545,1014],[12545,684],[12757,684],[12757,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-109",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12767,1014],[12767,684],[12979,684],[12979,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-110",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[12989,1014],[12989,684],[13201,684],[13201,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-111",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13211,1014],[13211,684],[13423,684],[13423,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-112",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13433,1014],[13433,684],[13645,684],[13645,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-113",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[13655,1014],[13655,684],[14535,684],[14535,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-115",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14545,1014],[14545,684],[14757,684],[14757,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-116",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14767,1014],[14767,684],[14979,684],[14979,1014]]]
   }
},
 {
   "type": "Feature",
   "properties": {
      "building": "n1",
      "level": "l1",
      "id": "N1-01c-117",
      "name": "Staff Room",
      "roomType": "nonacademic",
      "popupContent": ""
   },
   "geometry": {
      "type": "Polygon",
      "coordinates": [[[14989,1014],[14989,684],[15218,684],[15218,1014]]]
   }
}];

var roomStyle = {
    "fillOpacity": "0.3",
    "weight":"0",
    "fillColor": "transparent"
};

var toilet = [
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "Unknown"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6183, 3192 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "Unknown"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6183, 3468 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "NS3-01-T8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7539, 4223 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "NS3-01-T6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7776, 3982 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "h",
            "tooltipContent": "NS3-01-T7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7591, 4052 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "h",
            "tooltipContent": "N2.1-01-T5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7633, 5219 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N2.1-01-T6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7675, 5089 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "N2.1-01-T7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7829, 5089 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "NS3-01-T9"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6536, 1791 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "NS3-01-T10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6779, 1791 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "NS4-01-T11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10721, 1791 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "NS4-01-T12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10959, 1791 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "LT2A-01-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9189, 1232 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "LT2A-01-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10598, 1232 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "NS1-01-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14112, 3504 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "NS1-01-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13862, 3504 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS1-02-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15039, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS1-02-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14857, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS1-02-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12071, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS1-02-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11883, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS2-02-T5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11095, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS2-02-T6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10892, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS2-02-T7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8132, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS2-02-T8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7928, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS2-02-T9"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7135, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS2-02-T10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6932, 2625 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS3-02-T13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4954, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS3-02-T14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5153, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS4-02-T15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5946, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS4-02-T16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6139, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS4-02-T17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8898, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS4-02-T18"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9107, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS4-02-T19"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9890, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS4-02-T20"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10115, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "NS4-02-T21"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12853, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "NS4-02-T22"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13062, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS1-04-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15353, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS1-04-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15159, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS1-04-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12317, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS1-04-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12110, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS2-04-T5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11319, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS2-04-T6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11116, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS2-04-T7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8280, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS2-04-T8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8080, 2044 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS3-04-T11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5055, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS3-04-T12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5251, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS4-04-T13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6067, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS4-04-T14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6260, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS4-04-T15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9106, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS4-04-T16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9299, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS4-04-T17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10107, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS4-04-T18"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10307, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "f",
            "tooltipContent": "NS4-04-T19"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13136, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "gender": "m",
            "tooltipContent": "NS4-04-T20"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13336, 593 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS1-05-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15801, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS1-05-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15594, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS1-05-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12744, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS1-05-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12537, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS1-05-T5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11741, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS1-05-T6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11508, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS1-05-T7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8680, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS1-05-T8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8482, 2141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS3-05-T13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5437, 649 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS3-05-T14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5637, 649 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS4-05-T15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6437, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS4-05-T16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6660, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS4-05-T17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9502, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS4-05-T18"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9687, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS4-05-T19"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10518, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS4-05-T20"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10712, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "f",
            "tooltipContent": "NS4-05-T21"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13537, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "gender": "m",
            "tooltipContent": "NS4-05-T22"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13764, 639 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "gender": "f",
            "tooltipContent": "N1-B5a-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6972, 1452 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "gender": "m",
            "tooltipContent": "N1-B5a-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13722, 1452 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "gender": "f",
            "tooltipContent": "N1-B4a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6364, 770 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "gender": "m",
            "tooltipContent": "N1-B4b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11076, 692 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "gender": "h",
            "tooltipContent": "N1-B4b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11076, 952 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "gender": "m",
            "tooltipContent": "N1-B3a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2382, 1684 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "gender": "f",
            "tooltipContent": "N1-B3a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6637, 899 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "gender": "m",
            "tooltipContent": "N1-B3b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10570, 899 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "gender": "m",
            "tooltipContent": "N1-B3c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15304, 770 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "gender": "m",
            "tooltipContent": "N1-B2a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2425, 1838 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "gender": "f",
            "tooltipContent": "N1-B2a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6779, 1033 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "gender": "m",
            "tooltipContent": "N1-B2b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10778, 1040 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "gender": "m",
            "tooltipContent": "N1-B2c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15550, 942 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "gender": "m",
            "tooltipContent": "N1-B1a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2553, 1308 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "gender": "f",
            "tooltipContent": "N1-B1a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6733, 551 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "gender": "m",
            "tooltipContent": "N1-B1b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10636, 516 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "gender": "m",
            "tooltipContent": "N1-B1c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15271, 447 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N1-01a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2301, 1298 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "N1-01a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6649, 509 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N1-01b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10621, 509 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N1-01c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15412, 390 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "gender": "f",
            "tooltipContent": "N2-B5a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15712, 1956 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "gender": "f",
            "tooltipContent": "N2-B4c-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2447, 1449 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "gender": "m",
            "tooltipContent": "N2-B4b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8124, 1369 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "gender": "f",
            "tooltipContent": "N2-B4a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12937, 1369 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "gender": "f",
            "tooltipContent": "N2-B3c-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2370, 1400 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "gender": "m",
            "tooltipContent": "N2-B3b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7799, 1275 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "gender": "f",
            "tooltipContent": "N2-B3a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12348, 1275 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "gender": "f",
            "tooltipContent": "N2-B2a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11879, 1375 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "gender": "m",
            "tooltipContent": "N2-B2b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7577, 1295 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "gender": "h",
            "tooltipContent": "N2-B2b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7497, 1503 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "gender": "f",
            "tooltipContent": "N2-B2c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2347, 1439 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "gender": "f",
            "tooltipContent": "N2-B1a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10866, 1042 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "gender": "m",
            "tooltipContent": "N2-B1b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6989, 1042 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "gender": "f",
            "tooltipContent": "N2-B1c-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2356, 1201 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N2-01a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14788, 1069 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "N2-01a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10664, 996 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N2-01b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6854, 1002 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "N2-01c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2267, 1119 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "gender": "f",
            "tooltipContent": "N3-B4a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7488, 1529 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "gender": "m",
            "tooltipContent": "N3-B4b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14284, 1529 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "gender": "f",
            "tooltipContent": "N3-B3a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5637, 1199 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "gender": "m",
            "tooltipContent": "N3-B3b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11654, 1199 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "gender": "f",
            "tooltipContent": "N3-B2a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5881, 1046 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "gender": "m",
            "tooltipContent": "N3-B2b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11136, 1046 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "gender": "f",
            "tooltipContent": "N3-B1a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6873, 1051 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "gender": "m",
            "tooltipContent": "N3-B1b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11270, 1051 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N3-01a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2484, 1534 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "N3-01a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6675, 735 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N3-01b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10594, 735 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N3-01c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15249, 645 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "N3-02a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2264, 1317 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "N3-02a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6526, 476 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "N3-02b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10525, 476 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "N3-02c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15324, 364 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "gender": "f",
            "tooltipContent": "N4-B4a-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7045, 2697 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "gender": "m",
            "tooltipContent": "N4-B4c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13987, 2697 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "gender": "f",
            "tooltipContent": "N4-B3a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6233, 1993 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "gender": "h",
            "tooltipContent": "N4-B3b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11811, 2105 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "gender": "m",
            "tooltipContent": "N4-B3b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11811, 1818 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "gender": "f",
            "tooltipContent": "N4-B2a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6783, 1689 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "gender": "m",
            "tooltipContent": "N4-B2b-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11279, 1689 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "gender": "m",
            "tooltipContent": "N4-B1a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 1200, 578 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "gender": "f",
            "tooltipContent": "N4-B1a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2748, 536 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "gender": "m",
            "tooltipContent": "N4-B1b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4188, 530 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "gender": "f",
            "tooltipContent": "N4-B1c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5898, 566 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N4-01a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2508, 1584 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "N4-01a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6716, 1489 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "gender": "m",
            "tooltipContent": "N4-01b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10612, 1489 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "gender": "f",
            "tooltipContent": "N4-01c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15270, 1584 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "N4-02a-T1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2381, 1341 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "gender": "f",
            "tooltipContent": "N4-02a-T2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6585, 1245 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "N4-02b-T3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10517, 1245 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "gender": "m",
            "tooltipContent": "N4-02c-T4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15200, 1309 ]
        }
    }
];

var stairs = [
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>LT1A-SC1</b>: B1 thru L1, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4856, 4901 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>ST-01</b>: L1 & L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6038, 4762 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>ST-02</b>: L1 & L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6277, 4027 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>ST-03</b>: L1 & L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6857, 2500 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS1-SC1</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 17125, 3798 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS1-SC2</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13977, 3798 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS1-SC3</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12935, 3798 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-SC4</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9808, 3798 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-SC5</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8762, 3798 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-SC9</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6662, 1509 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-SC10</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7715, 1509 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-SC11</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10843, 1509 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-SC12</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11904, 1509 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-SC13</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15013, 1509 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>ST-01</b>: L1 & L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4469, 3912 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>ST-02</b>: L1 & L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4696, 3220 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>ST-03</b>: L1 & L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5349, 1817 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS1-SC1</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14951, 2981 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS1-SC2</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11981, 2981 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS1-SC3</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10985, 2981 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-SC4</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8021, 2981 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-SC5</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7038, 2981 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-SC9</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5058, 834 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-SC10</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6061, 834 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-SC11</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9018, 834 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-SC12</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10014, 834 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-SC13</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12965, 834 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>ST-Minerva</b>: L2 & L3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4600, 3092 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>ST-LWN</b>: L2 & L3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4348, 1909 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>ST-N3</b>: L2 & L4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5554, 1019 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>ST-N4</b>: L2 & L4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9507, 1019 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l3",
            "tooltipContent": "<b>ST-LWN</b>: L2 & L3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6108, 3648 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l3",
            "tooltipContent": "<b>ST-Minerva</b>: L2 & L3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7115, 7112 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l3",
            "tooltipContent": "<b>ST-Athena</b>: L3 & L4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7438, 2294 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS1-SC1</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15268, 2403 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS1-SC2</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12221, 2403 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS1-SC3</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11202, 2403 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS3-SC4</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8186, 2403 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS3-SC9</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5148, 197 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS3-SC10</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6171, 197 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS3-SC11</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9196, 197 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS3-SC12</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10201, 197 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS3-SC13</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13244, 197 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>ST-Athena</b>: L3 & L4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4784, 851 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>ST-N3</b>: L2 & L4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5659, 354 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>ST-N4</b>: L2 & L4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9703, 354 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS1-SC1</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15708, 2490 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS1-SC2</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12635, 2490 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS1-SC3</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11638, 2490 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-SC4</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8577, 2490 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-SC5</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7561, 2490 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-SC9</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5541, 290 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-SC10</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6551, 290 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-SC11</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9599, 290 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-SC12</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10622, 290 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-SC13</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13663, 290 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>NS1-SC2</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [2041,147]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>NS1-SC3</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [1814,1433]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>N1-SC1</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6654, 1205 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>N1-SC2</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11089, 1205 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>N1-SC3</b>: B3 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15435, 1294 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>NS1-SC2</b>: B1 thru L6, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2343, 200 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>NS1-SC3</b>: B1 thru L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2126, 1506 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>N1-SC1</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6758, 1230 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>N1-SC2</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11085, 1230 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>N1-SC3</b>: B3 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15281, 1316 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-SC1</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6782, 1754 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-SC2</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11225, 1754 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-SC3</b>: B3 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15565, 1846 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-SS1</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2410, 286 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-SS2</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2410, 2506 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-SS3</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15571, 292 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-SS4</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15571, 2501 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-SC1</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6629, 1603 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-SC2</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11007, 1603 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-SC3</b>: B3 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15290, 1676 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-SS1</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2586, 145 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-SS2</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2586, 2290 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-SS3</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15007, 156 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-SS4</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15007, 2279 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-SC1</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6375, 1640 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-SC2</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11591, 1640 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-SS1</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2614, 63 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-SS2</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2614, 2376 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-SS3</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15152, 63 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-SS4</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15152, 2355 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-SC1</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6986, 2664 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-SC2</b>: B5 thru L2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14455, 2664 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-SS1</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4522, 414 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-SS2</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4522, 3685 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-SS3</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 16935, 414 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-SS4</b>: B5 thru B2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 16935, 3685 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-MS1</b>: B1 & L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15169, 280 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-MS2</b>: B1 & L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15169, 1092 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-SC3</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2277, 245 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-SC2</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6430, 336 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-SC1</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10664, 336 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-SC3</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2332, 284 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-SC2</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6559, 381 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-SC1</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10858, 389 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-MS2</b>: B1 & L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15378, 1136 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-MS1</b>: B1 & L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15378, 332 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-SS4</b>: B5 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14629, 1769 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "tooltipContent": "<b>N2-SC3</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2338, 450 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "tooltipContent": "<b>N2-SC2</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7065, 547 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "tooltipContent": "<b>N2-SC1</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11854, 547 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "tooltipContent": "<b>N2-SS4</b>: B5 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15413, 2067 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "tooltipContent": "<b>N2-SC3</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2391, 343 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "tooltipContent": "<b>N2-SC2</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7320, 447 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "tooltipContent": "<b>N2-SC1</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12354, 447 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "tooltipContent": "<b>N2-SS4</b>: B5 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15306, 2029 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "tooltipContent": "<b>N2-SC3</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2410, 346 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "tooltipContent": "<b>N2-SC2</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7628, 467 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "tooltipContent": "<b>N2-SC1</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12939, 467 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "tooltipContent": "<b>N2-SS4</b>: B5 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15404, 2113 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "tooltipContent": "<b>N2-SC3</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4490, 900 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "tooltipContent": "<b>N2-SC2</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9987, 999 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "tooltipContent": "<b>N2-SC1</b>: B5 thru 2, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15700, 999 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "tooltipContent": "<b>N2-SS4</b>: B5 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 17070, 2790 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6594, 1199 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10999, 1199 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-SC3</b>: L1 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15299, 1287 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-SS3</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15398, 38 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-SS4</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15398, 1621 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6684, 1468 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11003, 1468 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-SC3</b>: L1 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15296, 1529 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-SS1</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2487, 217 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2487, 1981 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-SS3</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14914, 217 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-SS4</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14914, 2024 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6869, 1848 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11746, 1848 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-SS1</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 3118, 262 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 3118, 2637 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-SS3</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15431, 180 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-SS4</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15431, 2555 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5887, 2027 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11676, 2027 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-SS1</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2384, 127 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2384, 2985 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-SS3</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15275, 223 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-SS4</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15275, 2825 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5670, 2328 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12321, 2328 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-SS1</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2584, 127 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2584, 3365 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-SS3</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15305, 189 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-SS4</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15305, 3281 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7484, 2776 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14999, 2776 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-SS1</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5438, 271 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5438, 3941 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-SS3</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 17254, 271 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-SS4</b>: B4 thru L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 17254, 3941 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "tooltipContent": "<b>N4-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6596, 520 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "tooltipContent": "<b>N4-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10922, 520 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "tooltipContent": "<b>N4-SC3</b>: B1 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15206, 435 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6735, 780 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11055, 780 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-SC3</b>: B1 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15279, 709 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2470, 2128 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-SS3</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15334, 73 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-SS4</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15334, 2220 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2759, 286 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4352, 286 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-SC3</b>: B1 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5908, 245 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-SS1</b>: B4 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 1170, 25 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 1170, 803 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-SS3</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5801, 36 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-SS4</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5801, 784 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6806, 908 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11787, 908 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-SS1</b>: B4 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2811, 115 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2811, 2503 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-SS3</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14901, 114 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-SS4</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14901, 2503 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6261, 1029 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12373, 1029 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-SS1</b>: B4 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2582, 201 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2582, 2834 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-SS3</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15286, 201 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-SS4</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15286, 2834 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-SC1</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7061, 1484 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-SC2</b>: B4 thru L3, Roof Access"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14787, 1484 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-SS1</b>: B4 thru B1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4886, 239 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-SS2</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4886, 3894 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-SS3</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 16962, 239 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-SS4</b>: B4 thru L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 16962, 3894 ]
        }
    }
];

var lifts = [
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS1-1</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13984, 3493 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS2-2</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9800, 3482 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS3-3</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6668, 1811 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "tooltipContent": "<b>NS4-4</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10847, 1811 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS1-1</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11982, 2705 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS2-2</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8029, 2705 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS3-3</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5065, 1108 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l2",
            "tooltipContent": "<b>NS4-4</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9018, 1108 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS1-1</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12229, 2103 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS2-2</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8191, 2115 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS3-3</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5145, 495 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l4",
            "tooltipContent": "<b>NS4-4</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9194, 519 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS1-1</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12648, 2202 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS2-2</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8593, 2202 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS3-3</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 5529, 577 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l5",
            "tooltipContent": "<b>NS4-4</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 9594, 567 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>NS1-1</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [1814,147]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>N1-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7067, 1076 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>N1-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7067, 1200 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "l1",
            "tooltipContent": "<b>N1-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10670, 1141 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>NS1-1</b>: Serves L1, L2, L4, L5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2116, 200 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>N1-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7165, 1113 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>N1-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7165, 1230 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b1",
            "tooltipContent": "<b>N1-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10645, 1139 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7191, 1600 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7191, 1734 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b2",
            "tooltipContent": "<b>N1-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10781, 1667 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7046, 1456 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7046, 1586 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b3",
            "tooltipContent": "<b>N1-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10603, 1521 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6869, 1475 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6869, 1619 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b4",
            "tooltipContent": "<b>N1-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11091, 1547 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7673, 2424 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7673, 2648 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n1",
            "level": "b5",
            "tooltipContent": "<b>N1-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 13768, 2552 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6838, 411 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10242, 341 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "l1",
            "tooltipContent": "<b>N2-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10242, 461 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6990, 470 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10427, 373 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b1",
            "tooltipContent": "<b>N2-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10427, 527 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "tooltipContent": "<b>N2-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7522, 656 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "tooltipContent": "<b>N2-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11392, 532 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b2",
            "tooltipContent": "<b>N2-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11392, 718 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "tooltipContent": "<b>N2-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7788, 543 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "tooltipContent": "<b>N2-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11838, 428 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b3",
            "tooltipContent": "<b>N2-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11838, 590 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "tooltipContent": "<b>N2-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8134, 579 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "tooltipContent": "<b>N2-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12406, 458 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b4",
            "tooltipContent": "<b>N2-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 12406, 626 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "tooltipContent": "<b>N2-3</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10565, 1114 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "tooltipContent": "<b>N2-2</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15132, 1029 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n2",
            "level": "b5",
            "tooltipContent": "<b>N2-1</b>: Serves B5 to L1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 15132, 1191 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6994, 1057 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6994, 1194 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l2",
            "tooltipContent": "<b>N3-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10577, 1128 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7076, 1320 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7076, 1442 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "l1",
            "tooltipContent": "<b>N3-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10612, 1381 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7334, 1714 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7334, 1849 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b1",
            "tooltipContent": "<b>N3-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11306, 1759 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6478, 1841 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6478, 2009 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b2",
            "tooltipContent": "<b>N3-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11172, 1925 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6294, 2080 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6294, 2280 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b3",
            "tooltipContent": "<b>N3-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11689, 2169 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8204, 2505 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 8204, 2744 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n3",
            "level": "b4",
            "tooltipContent": "<b>N3-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14328, 2617 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "tooltipContent": "<b>N4-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7001, 531 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "tooltipContent": "<b>N4-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7001, 648 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l2",
            "tooltipContent": "<b>N4-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10571, 584 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7134, 786 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7134, 924 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "l1",
            "tooltipContent": "<b>N4-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 10636, 863 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2906, 286 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 2906, 333 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b1",
            "tooltipContent": "<b>N4-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 4201, 304 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7270, 918 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7270, 1063 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b2",
            "tooltipContent": "<b>N4-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11303, 1005 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6842, 1028 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 6842, 1203 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b3",
            "tooltipContent": "<b>N4-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 11786, 1103 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-1</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7781, 1484 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-2</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 7781, 1691 ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "n4",
            "level": "b4",
            "tooltipContent": "<b>N4-3</b>: Serves B4 to L2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ 14051, 1596 ]
        }
    }
];
