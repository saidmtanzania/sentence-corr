const txt = '{"Firstname":"said","Lastname":"mtanzania","Age":25}'
        const obj = JSON.parse(txt);
        document.getElementById("demo").innerHTML = obj.Firstname+obj.Lastname+", " + obj.Age;
const CarsData =[
    {
        name:"Harrier",
        brand:"Toyota",
        drive:"4 wheel",
        engine:"2450 cc",
        mileage:"1200 KM",
        fuel:"Petrol",
        year:2006,
        door: 5,
        photo:"https://"
    },
    {
        name:"Crown Athlete",
        brand:"Toyota",
        drive:"4 wheel",
        engine:"2450 cc",
        mileage:"1000 KM",
        fuel:"Petrol",
        year:2008,
        door: 5,
        photo:"https://"
    },
    {
        name:"X6",
        brand:"BMW",
        drive:"4 wheel",
        engine:"4000 cc",
        mileage:"800 KM",
        fuel:"Diesel",
        year:2017,
        door: 5,
        photo:"https://"
    },
    {
        name:"Altezza",
        brand:"Toyota",
        drive:"2 wheel",
        engine:"1800 cc",
        mileage:"1200 KM",
        fuel:"Petrol",
        year:2000,
        door: 5,
        photo:"../img/avatar.png"
    },
]
function age(year){
    return new Date().getFullYear() - year; 
}

function carTemplate(car){
    return`
    <div class="container">
    <img class="car-photo" src="${car.photo}">
    <p>${car.name} <span class="brand">${car.brand}</span></p>
    <p>${car.drive}</p>
    <p>${car.engine}</p>
    <p>${car.mileage}</p>
    <p>${car.fuel}</p>
    <p>${car.year}</p>
    <p>${car.door}</p>
    </div>
    `
}
document.getElementsById("app").innerHTML=`
${CarsData.map(carTemplate).join("")}
`