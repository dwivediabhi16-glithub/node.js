const express= require('express');
const app= express();

app.get('/', (req, res) => {
  res.json(
    [
                 
       
        {
                    id: 1,
                    employeename: "bunti",
                    employeesalary: 20000
                 },
                 {
                    id: 2,
                    employeename: "abhishek",
                    employeesalary: 40000
                 },
                 {
                    id: 3,
                    employeename: "atul",
                    employeesalary: 30000
                 }
            ]
  )

}) 



app.listen(4000, () => {
  console.log('Server is running on port 4000');
});