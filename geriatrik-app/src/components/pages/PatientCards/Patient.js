import React from 'react'
import {useState} from 'react'
import OldMan from '../../layout/images/OldManPic.jpg'
import './Patient.css' 
import  TestButton  from '../../TestButton'
import TestGraph from '../../graph/TestGraph'
import { Bar } from "react-chartjs-2";
import ListCardTest from './ListCardTest'
import BackButton from '../../BackButton'


const HomeLink = "/";
const examenes = ([
    {
      ExamenId: 1,
      examen: "Moca",
      resultados: "90/100",
      fecha: "22-08-2021",
      notas: "Sin notas",
    },
    {
        ExamenId: 2,
        examen: "Act. Basicas",
        resultados: "90/100",
        fecha: "22-08-2021",
        notas: "Sin notas",
      },
      {
        ExamenId: 3,
        examen: "Act. Instrumentales",
        resultados: "90/100",
        fecha: "22-08-2021",
        notas: "Sin notas",
      },
  ]);

const Patient =() =>{
    
      
    return(
        <div className='Card'>
            <PatientInfo 
                image = {OldMan}
                name = "Adrian Becerra"
                age = "89"
                sex = "Masculino"/> 
            <PatientRegistry
                emergencyC = "333-222-2200"
                school = "Secundaria"
                memory = "Si"
                difficulties = "No"
                hipoacusia = "No"/>
            <Details
                /*fecha1 = "22-09-2020"
                fecha2 = "22-03-2021"
                fecha3 = "22-09-2021"
                fecha4 = "22-03-2022"
                data1 = "28"
                data2 = "27"
                data3 = "27"
                data4 = "25"*/
                />
        </div>
        
    )
}



  const PatientInfo =(props) =>{
    return(
    <div className='CardInfo'>
        <div className='CardBody'>
            <img className='PatientImg' src={props.image} alt='PatientPP'/>
            <br></br><br></br>
            <h1 className='PatientName'>{props.name}</h1>
            <br></br>
            <h2 className='PatientAge'>Edad: {props.age}</h2>
            <br></br>
            <h2 className='PatientSex'>Sexo: {props.sex}</h2>
            <br></br><br></br>
        </div>
    </div>
    )
}

const PatientRegistry =(props) =>{
    return(
        <div className='CardRegistry'>
            <div className='CardBody'>
                <br></br>
                <h2 className='PatientRegistryT'>Contacto de emergencia:</h2>
                <p className='PatientRegistryA'>{props.emergencyC}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Escolaridad:</h2>
                <p className='PatientRegistryA'>{props.school}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Queja de memoria:</h2>
                <p className='PatientRegistryA'>{props.memory}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Discapacidades:</h2>
                <p className='PatientRegistryA'>{props.difficulties}</p>
                <br></br>
                <h2 className='PatientRegistryT'>Hipoacusia severa:</h2>
                <p className='PatientRegistryA'>{props.hipoacusia}</p>
                <br></br>
                
            </div>
        </div>
    )
}

const Details =(props) =>{
    return(
        <div className='CardDetails'>
            <div className='TestGraph'>
                <TestGraph/>
            </div>
            <div className = 'Botones'>
                <TestButton
                    type = "button"
                    buttonStyle = "btn--secondary--solid"
                    buttonSize = "btn--large"
                    link={HomeLink}>
                    MOCA
                </TestButton>
                <br></br>
                <br></br>
                <TestButton
                    type = "button"
                    buttonStyle = "btn--primary--solid"
                    buttonSize = "btn--large"
                    link={HomeLink}>
                    Act. Basicas
                </TestButton>
                <br></br>
                <br></br>
                <TestButton
                    type = "button"
                    buttonStyle = "btn--primary--solid"
                    buttonSize = "btn--large"
                    link={HomeLink}>
                    Act.Instrumentales
                </TestButton>
                
            </div>
            <hr className='Line1'></hr>
            <div className='central-table-view-patient'>
            {
            
            <table className="styled-table-patient">
            <thead>
                <tr>
                    <th></th>
                    <th>Examen</th>
                    <th>Resultados</th>
                    <th>Fecha</th>
                    <th>Notas</th>
                </tr>
            </thead>
            <tbody>
                {
                examenes.map((currentTest) => {
                return(
                    <ListCardTest
                    testObj={currentTest}
                    key={currentTest.ExamenId}
                    examen={currentTest.examen}
                    resultados={currentTest.resultados}
                    fecha={currentTest.resultados}
                    notas={currentTest.notas}
                    />
                );
                })} 
            </tbody>
            </table>
            }
            
            </div>                
            <hr className='Line2'></hr>
            <div className='BackButton'>
                <BackButton 
                link = '/Home'></BackButton>
            </div>
    </div>
    )
}


export default Patient



