//question 1 - 3 
const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ];
// 1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
function question1(){
    var ans=[];
    factories.forEach(function(value){
    var ele ={name:getname(value),count:getemployee(value).length};
    ans.push(ele);
});
    return ans;
}
// 2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
function question2(){
    var all=[];
    factories.forEach(function(value){
        all=all.concat(getemployee(value));
    });
    let unique = [...new Set(all)];
    var ans=[];
    unique.forEach(function(value){
        var num=0;
        factories.forEach(function(val){
            var arr=getemployee(val);
            var inc=arr.includes(value);
            if (inc){
                num += 1;
            }
        });
        var ele ={employee:value,count:num};
        ans.push(ele);
    });
    return ans;
}
// 3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
function question3(){
    var ans=[];
    factories.forEach(function(value){
    var ele ={name:getname(value),employee:getemployee(value).sort()};
    ans.push(ele);
});
    return ans;
}
// question 1 - 3 shared function
function getname(value){
    var name = value.name;
    return name;
}
function getemployee(value){
    var employee= value.employees;
    return employee;
}
//question 4 - 6
const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
      {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];

const tasks = [
      {id: 1, title: "task01", duration: 60 },
      {id: 2, title: "task02", duration: 120},
      {id: 3, title: "task03", duration: 180},
      {id: 4, title: "task04", duration: 360},
      {id: 5, title: "task05", duration: 30},
      {id: 6, title: "task06", duration: 220},
      {id: 7, title: "task07", duration: 640},
      {id: 8, title: "task08", duration: 250},
      {id: 9, title: "task09", duration: 119},
      {id: 10, title: "task10", duration: 560},
      {id: 11, title: "task11", duration: 340},
      {id: 12, title: "task12", duration: 45},
      {id: 13, title: "task13", duration: 86},
      {id: 14, title: "task14", duration: 480},
      {id: 15, title: "task15", duration: 900}
];
// 4. Count total hours worked in 1 day ? // => 39
//could not understand question, yet I wonder if it required sum of all employees working hours
function question4(){
    var typeDuration=[]
    employeeType.forEach(function(value){
        bgn=hmstosec(value.work_begin);
        end=hmstosec(value.work_end);
        if (bgn > end){
            end += 60*60*24;
        }
        var secondDuration = end-bgn;
        typeDuration.push(secondDuration);
    });
    totalworksec=0;
    employees.forEach(function(value){
        var worktype=value.type;
        var perduration=typeDuration[worktype-1];
        totalworksec += perduration;
    });
    var totalworkhour=totalworksec/3600;
    return totalworkhour;
}
//5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
function question5(time){
    var input=hmstosec(time);
    var correspondid=[]
    employeeType.forEach(function(value){
        bgn=hmstosec(value.work_begin);
        end=hmstosec(value.work_end);
        if (bgn > end){
            end += 60*60*24;
        }
        if (input>=bgn && input<=end){
            correspondid.push(value.id);
        }
    });
    var count=0;
    employees.forEach(function(value){
        if(correspondid.includes(value.type)){
            count += 1;
        }
    });
    return count;
}
//6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
function question6(){
    bgn=hmstosec('09:00:00');
    end=hmstosec('00:00:00');
    end += 60*60*24;
    onedayduration = end - bgn;
    totalDuration=0;
    tasks.forEach(function(value){
        totalDuration += value.duration;
    });
    days=totalDuration*60/onedayduration;
    return days;
}
//question 4 - 6 shared function
function hmstosec(time) {
    var hms = time.split(':');
    var seconds = (+hms[0]) * 60 * 60 + (+hms[1]) * 60 + (+hms[2]); 
    return seconds;
}


