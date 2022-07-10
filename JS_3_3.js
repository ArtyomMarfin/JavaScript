// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//   Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// utils
const employeesCountHelper = function (number) {
    lastNumber = number.toString().split('').pop();
    if(lastNumber && number) {
        if(lastNumber == 1) return `${number} сотрудника`;
        else if (lastNumber > 1 && lastNumber < 5) return `${number} сотрудника`;
        else return `${number} сотрудников`;
    } else return "нет сотрудников";
}


const getNewId = function(company) {
    let maxId = 0;
    company.forEach(comp => {
        if(maxId < comp.id) maxId = comp.id
        if(comp.departments) {
            comp.departments.forEach(dept => {
                if(maxId < dept.id) maxId = dept.id
            })
        }
    })
    return maxId + 1;
}

const getEnterprise = function(val) {
    let enterprise = enterprises.find(el => el.id === val || el.name === val)
    return enterprise ? enterprise : false
}

const getDepartments = function(val) {
    let department;
    enterprises.forEach((company) => {
        const dept = company.departments.find((el) => {
            return el.id == val || el.name == val;
        });
        if (dept) department = dept;
    });
    return department ? department : false
}

// const getDepartments = function(companies) {
//     companies.forEach((company) => {
//         let depts = [];
//         let count = 0;
//         depts.push(company.name);
//         if (company.departments) {
//             company.departments.forEach((dept) => {
//                 count += +dept.employees_count
//                 depts.push(`- ${dept.name} (${employeesCountHelper(dept.employees_count)})`)
//             });
//             dept[0] += ` (${employeesCountHelper(count)})`;
//         }
//         console.log(depts.join(`\n\ `))
//     });
// };
// getDepartments(enterprises);

// actions
const getStructure = function(company) {
    company.forEach(comp => {
        let depts = [];
        let count = 0;
        depts.push(comp.name);
        if(comp.departments) {
            comp.departments.forEach(dept => {
                count += dept.employees_count
                depts.push(` - ${dept.name} ${employeesCountHelper(dept.employees_count)}`)
            });
            depts[0] += ` (${employeesCountHelper(count)})`
        }
        console.log(depts.join(`\n\ `))
    });
}

// getStructure(enterprises)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterprisByDepartment = function(val) {
    let enterprise;
    enterprises.forEach(ent => {
        let department;
        if(ent.departments) {
            department = ent.departments.find(dept => {return dept.id === val || dept.name === val})
        }
        if(department) enterprise = ent;
    })
    return enterprise ? enterprise : `Нет организации с id == ${val} или именем == ${val}`

}
// console.log(getEnterprisByDepartment(2))

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

const addEnterprise = function(name) {
    enterprises.push({
        id: getNewId(enterprises),
        name: name,
        departments: [],
    })    
}
addEnterprise('Testers')

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

const addDepartment = function(entId, name, count = 0) {
    const enterprise = getEnterprise(entId)
    if(enterprise) enterprise.departments.push({
        id: getNewId(enterprises),
        name: name,
        employees_count: count,
    })
}
addDepartment(11, 'QA', 20)
// console.log(enterprises[3])

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = function(val, name) {
    const enterprise = getEnterprise(val)
    if(enterprise) enterprise.name = name;
    else throw new Error(`No such enterprise`)
}

editEnterprise(11, 'Devs')
// console.log(enterprises[3])

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

const editDepartment = function(val, name) {
    const department = getDepartments(val);
    if(department) department.name = name;
    else throw new Error('No such department')
}

editDepartment(12, 'AQA')
// console.log(enterprises[3])

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

const deleteEnterprise = function(val) {
    const index = enterprises.findIndex(el => el.id === val)
    enterprises.splice(index,1)
}
// deleteEnterprise(9)
// console.log(enterprises)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

const deleteDepartment = function(val) {
    enterprises.forEach(e => {
        let index = e.departments.findIndex(d => d.id === val && d.employees_count === 0);
        if (index !==  -1) {
            e.departments.splice(index, 1);
        }
    })
}
deleteDepartment(10)
console.log(enterprises[2])
// Пример:
// deleteDepartment(3)


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

const moveEmployees = function(currentId, newId) {
    const current = getDepartments(currentId);
    const newDept = getDepartments(newId);
    if(current && newDept && getEnterprisByDepartment(currentId) === getEnterprisByDepartment(newId)) {
        newDept.employees_count += current.employees_count;
        current.employees_count = 0;
    } else throw Error ('Something went wrong')
}

moveEmployees(2, 3)
console.log(enterprises[0])