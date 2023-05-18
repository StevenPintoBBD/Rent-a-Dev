const express = require('express'); 
const app = express(); 
const port = 3000;
    
app.set('view engine', 'ejs');

app.use(express.static('public'));

const requests = [
  { id: 0, name: 'James', teamLead: 'Anne', requestStatus: 'Pending', hours: 5, startDate: '2023/05/01', endDate: '2023/05/03'},
  { id: 1, name: 'James', teamLead: 'Anne', requestStatus: 'Approved', hours: 5, startDate: '2023/05/01', endDate: '2023/05/03'},
  { id: 2, name: 'James', teamLead: 'Anne', requestStatus: 'Rejected', hours: 5, startDate: '2023/05/01', endDate: '2023/05/03'},
];

const developers = [
  { developerId: 1, firstName: 'William', lastName: 'Brooks', available: true, team: { teamName: 'VODO', teamLead: { firstName: 'Benjamin' } } },
  { developerId: 2, firstName: 'Kyle', lastName: 'Jenkins', available: false, team: { teamName: 'ATC', teamLead: { firstName: 'Lucky' } } },
  { developerId: 3, firstName: 'Bob', lastName: 'Stevenson', available: true, team: { teamName: 'ATC', teamLead: { firstName: 'Lucky' } } },
  { developerId: 1, firstName: 'William', lastName: 'Brooks', available: true, team: { teamName: 'VODO', teamLead: { firstName: 'Benjamin' } } },
  { developerId: 2, firstName: 'Kyle', lastName: 'Jenkins', available: false, team: { teamName: 'ATC', teamLead: { firstName: 'Lucky' } } },
  { developerId: 3, firstName: 'Bob', lastName: 'Stevenson', available: true, team: { teamName: 'ATC', teamLead: { firstName: 'Lucky' } } },
];
 
app.get('/viewRequests', function(req, res) {  
  res.render('pages/viewRequests', {data: requests});
});

app.get('/approveRequests', function(req, res) {  
  res.render('pages/approveRequests', {data: requests});
});

app.get('/viewDevs', function(req, res) {
  res.render('pages/viewDevs', {data: developers});
});

app.get('/manageDevs', function(req, res) {
  res.render('pages/manageDevs', {data: developers});
});

app.get('/', function(req, res) {  
  res.render('pages/index');
});


app.listen(port, function(req, res) {
  console.log(`App listening at port ${3000}`);
});