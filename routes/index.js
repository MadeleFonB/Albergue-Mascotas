const express= require('express');
const router = express.Router();

const colombia = require('./../resources/files/colombia');
const Albergue = require('./../resources/files/albergue'); 

let students = []

let personas=[]

router.get('/Adopciones',(req,res)=>{
    res.render("Adopciones",{personas:personas,title:"Página de Adopcion"});
});

router.get('/arregloEstu',(req,res)=>{
    res.render("arregloEstu",{personas:personas,title:"Página de Adopcion"});
});




router.get('/',(req,res)=>{
    res.render("index",{personas:personas,title:"Página de Inicio"});
});


/*router.get('/Adopciones',(req,res)=>{
    res.render("Adopciones",{students:students,title:"Página de Adopcion"});
});

router.get('/',(req,res)=>{
    res.render("index",{students:students,title:"Página de Inicio"});
});*/


router.get('/formularioAdop',(req, res)=>{
    res.render('formularioAdop',{title:"Insertar Estudiante",
        mascotas:Albergue.mascotas,
        towns:Albergue.towns});
});

/*router.get('/formularioAdop',(req, res)=>{
    res.render('insert',{title:"Insertar Estudiante",
        departments:colombia.departments,
        towns:colombia.towns});
});*/

/*router.get('/insert',(req, res)=>{
    res.render('insert',{title:"Insertar Estudiante",
        departments:colombia.departments,
        towns:colombia.towns});
});*/





router.post('/formularioAdop',(req,res)=>{
    const{code, name, lastName, gender, mascot, town, email, phone } = req.body;
    const dptoAux = Albergue.mascotas.find( record => record.code == mascot ).name;
    const townAux = Albergue.towns.find( record => record.code == town ).name;
    const city = townAux.concat( '-', dptoAux );
    const genAux = gender == 'F' ? "Femenino" : "Masculino";
    let newReg = {code, lastName, name, genAux, city, email, phone  };
    personas.push(newReg);
    res.redirect('/Adopciones');
});


/*router.post('/insert',(req,res)=>{
    const{code, name, lastName, gender, dpto, town, email, phone } = req.body;
    const dptoAux = colombia.departments.find( record => record.code == dpto ).name;
    const townAux = colombia.towns.find( record => record.code == town ).name;
    const city = townAux.concat( '-', dptoAux );
    const genAux = gender == 'F' ? "Femenino" : "Masculino";
    let newReg = {code, lastName, name, genAux, city, email, phone  };
    students.push(newReg);
    res.redirect('/Adopciones');
});*/






router.get('/about',(req,res)=>{
   res.render('about',{title:"Sobre Nosotros"});
});

module.exports = router;
