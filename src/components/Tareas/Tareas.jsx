import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ListaTareas from './ListaTareas';

const Tareas = () => {
    const [tarea, SetTarea]=useState("");
    const [tareas, SetTareas]=useState([]);
    console.log(tareas);

    return (
        <div>
            <div className='container my-5 py-5 d-flex justify-content-center'>
                <Form>
                    <Form.Group>
                        <Form.Label>Ingrese la tarea a agendar</Form.Label>
                        <Form.Control type='text' onChange={(e)=>
                        {console.log(e.currentTarget.value);
                        SetTarea(e.currentTarget.value);
                        }}
                        value={tarea}
                        />
                    </Form.Group>

                    <Button type='button' variant='success' className='my-4' onClick={()=>{
                        SetTareas([...tareas, tarea]);
                        SetTarea('');
                        localStorage.setItem("task", JSON.stringify(tareas));
                    }}>Guardar Tarea</Button>
                </Form>
            </div>

            <ListaTareas tareas={tareas} SetTareas={SetTareas}/>
        </div>    
    );
};

export default Tareas;