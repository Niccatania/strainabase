const express = require('express');
require('dotenv').config();
const cors = require("cors");


const PORT = process.env.PORT || 3001
const app = express();
const mongoose = require('mongoose');


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());



const strainSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  StrainName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: false
  }
});



mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });


mongoose.connection.once('open', function () {
  console.log("Connection established");


const Strain = mongoose.model('strains', strainSchema);



app.get('/data', (req, res) => {
  const query = req.query.q;
  Strain.find({ $or: [ { StrainName: query }, { type: query } ] }, function(err, data) {
  if (err) return console.log(err), console.error(err);
  res.json(data)
  });
  });
  
})  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})