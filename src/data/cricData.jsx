let  playersIndia, playersAustralia, playersPakistan, playersSrilanka, playersEngland, playersSouthAfrica, playersNewZeland, playersWestIndies = null;

playersIndia = [
    {name:"Virat Kohli", image:"https://www.wisden.com/static-assets/images/players/3993.png?v=23.77", id:1},
    {name:"Rohit Sharma", image:"https://cricketteambuzz.com/wp-content/uploads/2025/06/Rohit-Sharma.jpg", id:2},
    {name:"Abhishek Sharma", image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0Cr5srsXYCYwJw_wPK1WmPOvMwdBLQFyGjYScKxharI9uap5ZpjYoPW3dM0lvvCh27gDkLEY-ChMjJvaynFdRkb-blnq8v_SurQNPYA0", id:3},
    {name:"Shreyas Iyer", image:"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTD5r0F7NbdwU8UglmuHsHoq9YTkBaxeGHVkZIkeGnQjptRFwDKL5-ygMC7f2hCiAU3afBRGnAmWrdu2pE", id:4},
    {name:"Suryakumar Yadav", image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVr_NypCnjaI6U9FPo35fCnIR_ZbJVClZmBDhU7Z8cvLWOOycU3zA-h7_9HOPI286EIDGJxOjPOB6e9HUNBkTgU2gCQAXuLeenm-e7fAU", id:5},
    {name:"Ravindra Jadeja", image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPi8cGGu_sRIj7c7hohjPVxjdVK6X88O_3SWigrO9c9A6FqOSZqD9B9Ga4yzNkG_hUK8W8WIfHmDsf0WzF6rnL67edRmtBR9BjG1wkMBs", id:6},
    {name:"Axar Patel", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRTbh42tv_mo5Mtt3kkY4r2csGfxcC1h8kO5cSAkqN1avYArPawih-aRLUg-5BCoOz9QssXaeg5ugnheX2Oa4wRWeQLMYGPSgHQRWf-U", id:7},
    {name:"Shivam Dube", image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRunLFXop2b5aQIvD08ZJQHoM7y7BgDjs4sbVkkySE10VV-p9d7R9lAQVC7VbmscEnUy3l7tsacJheLqwe2QlNEhiaV8vRv1WoJFx-RkNo", id:8},
    {name:"Hardik Pandya", image:"https://upload.wikimedia.org/wikipedia/commons/f/fc/Hardik_Pandya_in_PMO_New_Delhi.jpg", id:9},
    {name:"Mohammed Siraj", image:"https://upload.wikimedia.org/wikipedia/commons/d/da/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Mohammad_Siraj_%28cropped%29.jpg", id:10},
]

playersAustralia = [
    {name:"Tim David", image:"https://www.wisden.com/static-assets/images/players/67402.png?v=23.77", id:"1aus"},
    {name:"Player 2", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"2aus"},
    {name:"Player 3", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"3aus"},
    {name:"Player 4", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"4aus"},
    {name:"Player 5", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"5aus"},
    {name:"Player 6", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"6aus"},
    {name:"Player 7", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"7aus"},
    {name:"Player 8", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"8aus"},
    {name:"Player 9", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"9aus"},
    {name:"Player 10", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"10aus"},
]

const playersTemp = [
    {name:"Player 1", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"1t"},
    {name:"Player 2", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"2t"},
    {name:"Player 3", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"3t"},
    {name:"Player 4", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"4t"},
    {name:"Player 5", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"5t"},
    {name:"Player 6", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"6t"},
    {name:"Player 7", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"7t"},
    {name:"Player 8", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"8t"},
    {name:"Player 9", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"9t"},
    {name:"Player 10", image:"https://thumbs.dreamstime.com/b/image-not-available-icon-vector-set-white-background-eps-330821927.jpg", id:"10t"},
]


export const dataCountries = [
  { name: "India", flag: "./images/IndiaF.png", players:playersIndia || playersTemp, color:"#bedef9" },
  { name: "Australia", flag: "./images/AusF.png", players:playersAustralia || playersTemp, color:"#f5f0be"},
  { name: "Pakistan", flag: "./images/PakF.png", players:playersPakistan || playersTemp, color:"#bef5db"},
  { name: "Sri Lanka", flag: "./images/SlF.png", players:playersSrilanka || playersTemp, color:"#c3bef5"},
  { name: "England", flag: "./images/EngF.png", players:playersEngland || playersTemp, color:"#bee4f5"},
  { name: "South Africa", flag: "./images/SaF.png", players:playersSouthAfrica || playersTemp, color:"#ccf5be"},
  { name: "New Zealand", flag: "./images/NzF.png", players:playersNewZeland || playersTemp, color:"#b3b3b3"},
  { name: "West Indies", flag: "./images/WiF.png", players:playersWestIndies || playersTemp, color:"#fab8b8"},
];

export const dataStadiums = [
  { name: "Oval Stadium", country: "Australia", image: "./images/oval.jpg" },
  { name: "Eden Gardens", country: "India", image: "./images/eden.jpg" },
  { name: "Trent Bridge", country: "England", image: "./images/trent.jpg" },
  { name: "Wankhede Stadium", country: "India", image: "https://wallpapercave.com/wp/wp2686809.jpg" },
];

