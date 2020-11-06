const suspectsArray = [

    {
        firstName :'Jacob',
        lastName : 'Green ',
        occupation : 'Entrepreneur',
        age : 45,
        descripotion: 'He has alot of connection',
        image : `<img src="https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg">`,
        color: ' green'

    },
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: `<img src="http://www.radiotimes.com/uploads/images/Original/111967.jpg">`,
        color: "white"
    },
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designe",
        image: `<img src="https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg">`,
        color: "purple"
    },
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: " Actress",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: `<img src="https://www.radiotimes.com/uploads/images/Original/111967.jpg">`,
        color: "red"
    },
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: `<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified.jpg">`,
        color: "blue"
    },
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: `<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg">`,
        color: "yellow"
    }

]

const weaponsArray = [
    {
        name: "rope",
        weight: 10,
    },
    {
        name: "knife",
        weight: 8,
    },
    {
        name: "candlestick",
        weight: 2,
    },
    {
        name: "dumbbell",
        weight: 30,
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13,
    },
    {
        name: "trophy",
        weight: 25,
    },
    {
        name: "pistol",
        weight: 20,
    }
]

const roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" },
]


let x;
let a=suspectsArray.length
let b = weaponsArray.length
let c= roomsArray.length

function Rundom(arrayName)
{
    if (arrayName == suspectsArray)
    {

        x = Math.floor(Math.random() * a)
       // console.log(x)
        document.getElementById("demo").innerHTML = `${suspectsArray[x].image}`
        return `${suspectsArray[x].firstName} ${suspectsArray[x].lastName}`

    }
    if ( arrayName ==weaponsArray)
    {
        x= Math.floor(Math.random()*b)
        return `${arrayName[x].name}`

    }
    if (arrayName == roomsArray) {
        x = Math.floor(Math.random() * c);
        // console.log(x)
        return `${arrayName[x].name}`
    }
}



function play()
{
    mysteryArray = [`${Rundom(suspectsArray)}`, `${Rundom(weaponsArray)}`, `${Rundom(roomsArray)}`]
    

document.getElementById("demo1").innerHTML =  mysteryArray[0] + " killed Mr. Boddy using the " +mysteryArray[1]+ " "+"in the" +"  "+mysteryArray[2]

}