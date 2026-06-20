const API = "/students";

let editingId = null;

async function loadStudents() {

    const response = await fetch(API);
    const students = await response.json();

    document.getElementById("studentCount")
        .innerText = students.length;

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(student => {

        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.age}</td>

            <td>

                <button class="btn btn-warning btn-sm"
                onclick='editStudent(${JSON.stringify(student)})'>
                Edit
                </button>

                <button class="btn btn-danger btn-sm"
                onclick='deleteStudent(${student.id})'>
                Delete
                </button>

            </td>
        </tr>
        `;
    });
}

document.getElementById("studentForm")
.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const student = {

        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        course:document.getElementById("course").value,
        age:Number(document.getElementById("age").value)

    };

    if(editingId){

        await fetch(`${API}/${editingId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(student)
        });

        editingId = null;

    }else{

        await fetch(API,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(student)
        });
    }

    document.getElementById("studentForm").reset();

    Swal.fire(
        "Success",
        "Student saved successfully",
        "success"
    );

    loadStudents();
});

function editStudent(student){

    editingId = student.id;

    document.getElementById("name").value =
        student.name;

    document.getElementById("email").value =
        student.email;

    document.getElementById("course").value =
        student.course;

    document.getElementById("age").value =
        student.age;

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

async function deleteStudent(id){

    const result = await Swal.fire({
        title:"Delete Student?",
        icon:"warning",
        showCancelButton:true
    });

    if(result.isConfirmed){

        await fetch(`${API}/${id}`,{
            method:"DELETE"
        });

        Swal.fire(
            "Deleted!",
            "Student removed",
            "success"
        );

        loadStudents();
    }
}

document.getElementById("searchInput")
.addEventListener("keyup",function(){

    const value =
        this.value.toLowerCase();

    document.querySelectorAll("#studentTable tr")
    .forEach(row=>{

        row.style.display =
            row.innerText.toLowerCase()
            .includes(value)
            ? ""
            : "none";
    });
});

loadStudents();