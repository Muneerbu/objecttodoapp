var stdFirstName = document.getElementById("stdFirstName");
var stdLastName = document.getElementById("stdLastName");
var stdAge = document.getElementById("stdAge");
var stdEdu = document.getElementById("stdEdu");
var stdId = document.getElementById("stdId");
var studentList=[];
var tBody = document.getElementById('tbody')

function render(){
    tBody.innerHTML="";
    for(var i=0;i<studentList.length;i++){
        tBody.innerHTML+=`<tr>
        <td> ${i+1}</td>
        <td>${studentList[i].firstName}</td>
         <td>${studentList[i].lastName}</td>
          <td>${studentList[i].age}</td>
           <td>${studentList[i].education}</td> 
            <td>${studentList[i].id}</td>
            <td><button class="one tbody-btn" onclick="deleteData(${i})">Delete</button></td>
             <td><button class="one two tbody-btn" onclick="editData(${i})">Edit</button></td>

        </tr>`
    }
}

function addStudent(){
    var a = stdFirstName.value;
    var b = stdLastName.value;
    var c = stdAge.value;
    var d = stdEdu.value;
    var e = stdId.value;

    var obj={
        firstName:a,
        lastName:b,
        age:c,
        education:d,
        id:e,
    }

    studentList.push(obj);
    

stdFirstName.value=""
stdLastName.value=""
stdAge.vaue=""
stdEdu.value=""
stdId.value=""
render();
}
function deleteData(index){
 studentList.splice(index,1)
 render();
}
function deleteAll(){
    studentList=[];
    tBody.innerHTML='';
}
function editData(index){
    var newName = prompt("Enter the new name:");
    var newLastName = prompt("Enter the new last name:");
    var newAge = prompt("enter new age:");
    var newEdu = prompt("Enter the new education");
    var newId = prompt("Enter the new id:");
    
    if(newName!==null && newAge !==null && newLastName!==null && newEdu!==null && newId!==null){
        studentList[index].firstName=newName; 
        studentList[index].lastName=newLastName;
        studentList[index].age=parseInt(newAge);
        studentList[index].education=newEdu;
        studentList[index].id=parseInt(newId);
        render();
    };
};
