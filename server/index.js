const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Employee = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Controlla se esiste già un utente con lo stesso nome o email
    const existingEmployee = await Employee.findOne({ $or: [{ name }, { email }] });
    if (existingEmployee) {
      return res.status(400).json({ message: "Nome o email già in uso." });
    }

    // Hash della password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuovo utente se non esiste già
    const newEmployee = new Employee({ name, email, password: hashedPassword });
    await newEmployee.save();

    // Invia la risposta di successo
    res.status(201).json({ message: "Registrazione avvenuta con successo!", employee: newEmployee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Il server è avviato correttamente e in ascolto sulla porta 3001.");
});
