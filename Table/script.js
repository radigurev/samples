const buttons= [...document.querySelectorAll("[buttons-grade]")]
const students_div=[...document.getElementsByName("name")]

var students=new Array

students_div.forEach(s => students.push(s.textContent))

console.log(students)

buttons.forEach((b,index) =>{
    b.addEventListener("click",e => {
        if(b.classList.contains("selected")){
            b.classList.remove("selected")
        }else {
            b.classList.add("selected")
        }
    })
})


function getGrades() {
    let loop=0
    let index=0
    let grade =0
   var finalList=new Array
   console.log(grade)
  buttons.forEach((b) => {
      while(loop!==4){
        
        if(b.classList.contains("selected")){
            finalList[index]=new Student(students[index],b.value)
            grade = 0
            index++
              loop++
          }
      }
       loop=0
  })
  console.log(finalList)
}

class Student {
    constructor(name,grade){
        this.name=name
        this.grade=grade
    }
}