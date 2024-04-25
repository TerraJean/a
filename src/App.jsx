import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import {FiSend} from 'react-icons/fi'
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Tanks from "./components/Tanks";
import Steps from "./components/Steps";


//hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

import './App.css'

function App() {
  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  }
  const [data,setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) =>{
    setData((prev) =>{
      return{...prev, [key]: value};
    })
  }

const  formComponents =[
<UserForm data={data} updateFieldHandler={updateFieldHandler}/>, <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, <Tanks data={data}/>];

const {currentStep, currentComponent, changeStep,isLastStep, isFirstStep} = useForm(formComponents);



  return (
    <>
      <div className='app'>  
            <div className="header">
              <h2>Deixe sua avaliação</h2>
              <p>
                Ficamos felizes com sua compra, utilize o formulario abaixo para avaliar o produto
              </p>
            </div>
            <div className="form-container">
              <Steps currentStep={currentStep}/>
              <form onSubmit={(e) => changeStep(currentStep +1, e)}>
                <div className="inputs-container" >
                  <p>{currentComponent}</p>
                </div>
                <div className="actions">
                  {currentStep > 0 && 
                  (<button type='button' onClick={()=> changeStep(currentStep -1)}>
                  <GrPrevious />
                    <span>Voltar</span>
                  </button>)}
                  {!isLastStep ? (
                       <button type="submit" >
                       <span>Avançar</span>
                       <GrNext/>                      
                       </button>
                       
                  ) :(  
                       <button type="button" onClick={() => {alert("Avaliação Enviada",)}}>
                       <span >Enviar</span>
                       <FiSend/>
                       </button>)}               
                </div>
              </form>
            </div>
      </div>     
    </>
  )
}

export default App
