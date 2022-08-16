const employee={
    name: "Sam",
    streetAddress:"11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    return updateEmployeeWithKeyAndValue={...employee, [key]:value}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee.streetAddress="12 Broadway"
   return employee
}
function deleteFromEmployeeByKey(employee,key){
    delete destructivelyUpdateEmployeeWithKeyAndValue.key
   return deleteFromEmployeeByKey={...destructivelyUpdateEmployeeWithKeyAndValue}
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}