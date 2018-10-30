
var employees = [];

function Employee (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    var status = "full time"
    this.status = status
    
    this.changeStatus = function(newStatus){
        this.status = newStatus;
    }
    this.printEmployeeForm = function(){
        console.log(`Name: ${name}, Job Title: ${jobTitle}, Salary: ${salary}, Status: ${status}`)
    }
    this.pushEmployee = function(){
        for(let i = 0; i < Employee().length; i++){
            employees.push(Employee([i]))
        }
    }
}

var John = new Employee("John Doe", "CEO", "$200k/year")
console.log(John)
var Jane = new Employee("Jane Doe", "President", "250k/year")
console.log(Jane)
var Doug = new Employee("Doug Doe", "Vice President", "185k/year")
console.log(Doug)

//Adjust status
console.log("Adjusting Status...")
John.changeStatus('contract')
Jane.changeStatus('contract')
Doug.changeStatus('part time')
console.log(John)
console.log(Jane)
console.log(Doug)

//call method for employees
console.log('Calling Methods...')
John.printEmployeeForm()
Jane.printEmployeeForm()
Doug.printEmployeeForm()


