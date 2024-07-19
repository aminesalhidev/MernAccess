<<<<<<< HEAD
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);
=======
// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
>>>>>>> 5ce07a0 (Aggiornamento e sistemazione del progetto)

module.exports = Employee;
