const catsArray = [
    {
        catId: 1,
        mainColor: 'brown',
        age: 10,
        weight: 225,
        owners: 1
    },

    {
        catId: 2,
        mainColor: 'brown',
        age: 4,
        weight: 205,
        owners: 3
    },

    {
        catId: 3
        ,mainColor: 'black',
        age: 7,
        weight: 120,
        owners: 2
    },

    {
        catId: 4,
        mainColor: 'grey',
        age: 9,
        weight: 350,
        owners: 2
    },

    {
        catId: 5,
        mainColor: 'grey',
        age: 2,
        weight: 200,
        owners: 3
    },

    {
        catId: 6,
        mainColor: 'grey',
        age: 5,
        weight: 125,
        owners: 1
    },
]

function initialUpdate(){
   displayAllData()
   displayDropdown()
   updateStats()
   
   
}


let displayArray = []

function displayAllData(newData=[]){

    let displayArray = catsArray.concat(newData)

    let allDataDisplay = document.getElementById('allDataDisplay')

    let row = ''

    console.log(displayArray)


    for(let i=0; i<displayArray.length; i++){

        if (i < catsArray.length){
        row +=
            `<tr>
            <td>${catsArray[i].catId}</td>
            <td>${catsArray[i].mainColor}</td>
            <td>${catsArray[i].age}</td>
            <td>${catsArray[i].weight}</td>
            <td>${catsArray[i].owners}</td>
            </tr>
        `       
    }

    else {
        row +=
            `<tr>
            <td>${catsArray.length + 1}</td>
            <td>${displayArray[i].mainColor}</td>
            <td>${displayArray[i].age}</td>
            <td>${displayArray[i].weight}</td>
            <td>${displayArray[i].owners}</td>
            </tr>
        `       
    }
}



    allDataDisplay.innerHTML=row
    
}

// function displayStats(){

//     displayDropdown()
//     updateStats(newData=[])
//     displayAllData()

// }

function updateStats(newData=[]){

    console.log(newData)

    //displayDropdown()

   // event.preventDefault();

   let color = document.getElementById('catColor').value
   let stats = document.getElementById('catStats').value
  newData = [displayArray[displayArray.length-1]]

   console.log(newData, stats, color)

   if(stats == 'total'){
    displayTotal(newData, color)
    }

   else if(stats == 'average'){
       displayAverage(newData, color)
   }

   else if(stats == 'maximum'){
       displayMax(newData, color)
   }

   else if(stats == 'minimum'){
    displayMin(newData, color)
    }

}

function displayDropdown(newData=[]){

    displayArray = catsArray.concat(newData)

    let distinctList = [...new Set(displayArray.map(item => item.mainColor))]
   console.log(distinctList)

    let dropDown = document.getElementById("catColor")

    let colorItem = ''
    
    for(let i=0; i<distinctList.length; i++){
        // colorItem += `<a class="dropdown-item" dataString=${distinctList[i]} onclick="displayStats(this)">${distinctList[i]}</a>`
        colorItem += `<option value="${distinctList[i]}">${distinctList[i]}</option>`
    }

   colorItem += `<option value="all">all</option>`
//   <a class="dropdown-item" dataString = 'All' onclick="displayStats(this)">All</a>`
  
    dropDown.innerHTML =colorItem

}

function displayTotal(newData, color){

    console.log(newData, color)
    displayArray = catsArray.concat(newData)
    console.log(displayArray)

    let tablehead = document.getElementById('tablehead')
    let tablebody = document.getElementById('tablebody')

    //for Age

    ageArray = displayArray.filter(item => item.mainColor==color)
    let totalColorAge = 0
    let totalAllAge = 0

    for(let i=0; i<ageArray.length; i++){
        totalColorAge += ageArray[i].age
    }

    for(let i=0; i<displayArray.length; i++){
        totalAllAge += displayArray[i].age
    }

    //For Weight

    weightArray = displayArray.filter(item => item.mainColor==color)
    let totalColorWeight = 0
    let totalAllWeight = 0

    for(let i=0; i<weightArray.length; i++){
        totalColorWeight += weightArray[i].weight
    }

    for(let i=0; i<displayArray.length; i++){
        totalAllWeight += displayArray[i].weight
    }

    //For Owners
    ownersArray = displayArray.filter(item => item.mainColor==color)
    let totalColorOwners = 0
    let totalAllOwners = 0

    for(let i=0; i<ownersArray.length; i++){
        totalColorOwners += ownersArray[i].owners
    }

    for(let i=0; i<displayArray.length; i++){
        totalAllOwners += displayArray[i].owners
    }

    let totalColorAgeShow = Number.parseFloat(totalColorAge).toFixed(0)
    let totalColorWeightShow = Number.parseFloat(totalColorWeight).toFixed(0)
    let totalColorOwnersShow = Number.parseFloat(totalColorOwners).toFixed(0)

    let totalAllAgeShow = Number.parseFloat(totalAllAge).toFixed(0)
    let totalAllWeightShow = Number.parseFloat(totalAllWeight).toFixed(0)
    let totalAllOwnersShow = Number.parseFloat(totalAllOwners).toFixed(0)

    console.log(totalAllOwners)
    //innerHTMLs

    let header = `<tr><th>Totals for ${color} cats</th><th><button type="button" class="btn btn-outline-danger" onclick="updateStats()">Show Stats</button></th></tr>`
    let colorBody = `<tr><td>Age</td><td>${totalColorAgeShow}</td></tr>
                <tr><td>Weight</td><td>${totalColorWeightShow}</td></tr>
                <tr><td>Owners</td><td>${totalColorOwnersShow}</td></tr>`

    let allBody = `<tr><td>Age</td><td>${totalAllAgeShow}</td></tr>
                <tr><td>Weight</td><td>${totalAllWeightShow}</td></tr>
                <tr><td>Owners</td><td>${totalAllOwnersShow}</td></tr>`

    tablehead.innerHTML = header
    
    if(color == 'all'){
        tablebody.innerHTML = allBody
    }
    
    else{
        tablebody.innerHTML = colorBody
    }    

}

function displayAverage(newData, color){

    displayArray = catsArray.concat(newData)

    let tablehead = document.getElementById('tablehead')
    let tablebody = document.getElementById('tablebody')

    //for Age

    ageArray = displayArray.filter(item => item.mainColor==color)
    let totalColorAge = 0
    let totalAllAge = 0

    for(let i=0; i<ageArray.length; i++){
        totalColorAge += ageArray[i].age
    }

    for(let i=0; i<displayArray.length; i++){
        totalAllAge += displayArray[i].age
    }

    let averageColorAge = Number.parseFloat(totalColorAge/ageArray.length).toFixed(1)
    let averageAllAge = Number.parseFloat(totalAllAge/displayArray.length).toFixed(1)

    //For Weight

    weightArray = displayArray.filter(item => item.mainColor==color)
    let totalColorWeight = 0
    let totalAllWeight = 0

    for(let i=0; i<weightArray.length; i++){
        totalColorWeight += weightArray[i].weight
    }

    for(let i=0; i<displayArray.length; i++){
        totalAllWeight += displayArray[i].weight
    }

    let averageColorWeight = Number.parseFloat(totalColorWeight/weightArray.length).toFixed(1)
    let averageAllWeight = Number.parseFloat(totalAllWeight/displayArray.length).toFixed(1)

    //For Owners
    ownersArray = displayArray.filter(item => item.mainColor==color)
    let totalColorOwners = 0
    let totalAllOwners = 0

    for(let i=0; i<ownersArray.length; i++){
        totalColorOwners += ownersArray[i].owners
    }

    for(let i=0; i<displayArray.length; i++){
        totalAllOwners += displayArray[i].owners
    }

    let averageColorOwners = Number.parseFloat(totalColorOwners/ownersArray.length).toFixed(1)
    let averageAllOwners = Number.parseFloat(totalAllOwners/displayArray.length).toFixed(1)

    //innerHTMLs

    let header = `<tr><th>Average for ${color} cats</th><th><button type="button" class="btn btn-outline-danger" onclick="updateStats()">Show Stats</button></th></tr>`
    let colorBody = `<tr><td>Age</td><td>${averageColorAge}</td></tr>
                <tr><td>Weight</td><td>${averageColorWeight}</td></tr>
                <tr><td>Owners</td><td>${averageColorOwners}</td></tr>`

    let allBody = `<tr><td>Age</td><td>${averageAllAge}</td></tr>
                <tr><td>Weight</td><td>${averageAllWeight}</td></tr>
                <tr><td>Owners</td><td>${averageAllOwners}</td></tr>`

    tablehead.innerHTML = header
    
    if(color == 'all'){
        tablebody.innerHTML = allBody
    }
    
    else{
        tablebody.innerHTML = colorBody
    }    

}

function displayMax(newData, color){

    displayArray = catsArray.concat(newData)

    let tablehead = document.getElementById('tablehead')
    let tablebody = document.getElementById('tablebody')
    let colorArray = displayArray.filter(item => item.mainColor==color)

    console.log(newData)

     //for Age
    
    let ageColorArray=[]
    let ageAllArray=[]

    for(let i=0; i<colorArray.length; i++){
        ageColorArray.push(colorArray[i].age)
    }

    for(let i=0; i<displayArray.length; i++){
        ageAllArray.push(displayArray[i].age)
    }

    let maximumColorAge = 0
    let maximumAllAge = 0

   
    maximumColorAge = Math.max(...ageColorArray) 
    maximumAllAge = Math.max(...ageAllArray)
   
    console.log(ageColorArray)
    console.log(ageAllArray)
    console.log(maximumColorAge)
    console.log(maximumAllAge)
    //For Weight

    let weightColorArray=[]
    let weightAllArray=[]

    for(let i=0; i<colorArray.length; i++){
        weightColorArray.push(colorArray[i].weight)
    }

    for(let i=0; i<displayArray.length; i++){
        weightAllArray.push(displayArray[i].weight)
    }

    let maximumColorWeight = 0 
    let maximumAllWeight = 0

   
    maximumColorWeight = Math.max(...weightColorArray) 
    maximumAllWeight = Math.max(...weightAllArray)
   
    //For Owners
    let ownersColorArray=[]
    let ownersAllArray=[]

    for(let i=0; i<colorArray.length; i++){
        ownersColorArray.push(colorArray[i].owners)
    }

    for(let i=0; i<displayArray.length; i++){
        ownersAllArray.push(displayArray[i].owners)
    }

    let maximumColorOwners = 0
    let maximumAllOwners = 0

   
    maximumColorOwners = Math.max(...ownersColorArray) 
    maximumAllOwners = Math.max(...ownersAllArray)
   
    //innerHTMLs

    
    let header = `<tr><th>Maximum for ${color} cats</th><th><button type="button" class="btn btn-outline-danger" onclick="updateStats()">Show Stats</button></th></tr>`
    let colorBody = `<tr><td>Age</td><td>${maximumColorAge}</td></tr>
                <tr><td>Weight</td><td>${maximumColorWeight}</td></tr>
                <tr><td>Owners</td><td>${maximumColorOwners}</td></tr>`

    let allBody = `<tr><td>Age</td><td>${maximumAllAge}</td></tr>
                <tr><td>Weight</td><td>${maximumAllWeight}</td></tr>
                <tr><td>Owners</td><td>${maximumAllOwners}</td></tr>`

    tablehead.innerHTML = header
    
    if(color == 'all'){
        tablebody.innerHTML = allBody
    }
    
    else{
        tablebody.innerHTML = colorBody
    }    




}

function displayMin(newData, color){

    displayArray = catsArray.concat(newData)
    console.log(newData)

    let tablehead = document.getElementById('tablehead')
    let tablebody = document.getElementById('tablebody')
    let colorArray = displayArray.filter(item => item.mainColor==color)

     //for Age
    
    let ageColorArray=[]
    let ageAllArray=[]

    for(let i=0; i<colorArray.length; i++){
        ageColorArray.push(colorArray[i].age)
    }

    for(let i=0; i<displayArray.length; i++){
        ageAllArray.push(displayArray[i].age)
    }

    let maximumColorAge = 0
    let maximumAllAge = 0

   
    maximumColorAge = Math.min(...ageColorArray) 
    maximumAllAge = Math.min(...ageAllArray)
   
    console.log(ageColorArray)
    console.log(ageAllArray)
    console.log(maximumColorAge)
    console.log(maximumAllAge)
    //For Weight

    let weightColorArray=[]
    let weightAllArray=[]

    for(let i=0; i<colorArray.length; i++){
        weightColorArray.push(colorArray[i].weight)
    }

    for(let i=0; i<displayArray.length; i++){
        weightAllArray.push(displayArray[i].weight)
    }

    let maximumColorWeight = 0 
    let maximumAllWeight = 0

   
    maximumColorWeight = Math.min(...weightColorArray) 
    maximumAllWeight = Math.min(...weightAllArray)
   
    //For Owners
    let ownersColorArray=[]
    let ownersAllArray=[]

    for(let i=0; i<colorArray.length; i++){
        ownersColorArray.push(colorArray[i].owners)
    }

    for(let i=0; i<displayArray.length; i++){
        ownersAllArray.push(displayArray[i].owners)
    }

    let maximumColorOwners = 0
    let maximumAllOwners = 0

   
    maximumColorOwners = Math.min(...ownersColorArray) 
    maximumAllOwners = Math.min(...ownersAllArray)

    console.log(maximumColorAge)
    console.log(maximumAllAge)
   
    //innerHTMLs

   
    let header = `<tr><th>Minimum for ${color} cats</th><th><button type="button" class="btn btn-outline-danger" onclick="updateStats()">Show Stats</button></th></tr>`
    let colorBody = `<tr><td>Age</td><td>${maximumColorAge}</td></tr>
                <tr><td>Weight</td><td>${maximumColorWeight}</td></tr>
                <tr><td>Owners</td><td>${maximumColorOwners}</td></tr>`

    let allBody = `<tr><td>Age</td><td>${maximumAllAge}</td></tr>
                <tr><td>Weight</td><td>${maximumAllWeight}</td></tr>
                <tr><td>Owners</td><td>${maximumAllOwners}</td></tr>`

    tablehead.innerHTML = header
    
    if(color == 'all'){
        tablebody.innerHTML = allBody
    }
    
    else{
        tablebody.innerHTML = colorBody
    }    

}

async function updateData(){

  
    
    let newCat = [{
            catId: catsArray.length + 1,
            mainColor: document.getElementById('main-color').value,
            age: Number(document.getElementById('age').value),
            weight: Number(document.getElementById('weight').value),
            owners: Number(document.getElementById('owners').value)

    }]

   await displayAllData(newCat)
   displayDropdown(newCat)
   await updateStats(newCat)
   

    
}

 

   





