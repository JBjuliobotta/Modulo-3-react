import Button from 'react-bootstrap/Button';


const ListaTareas = ({tareas, SetTareas}) => {

    const EliminarTarea = (index) => {
        let nuevasTareas=tareas;
        nuevasTareas.splice(index,1);
        SetTareas([...nuevasTareas]);
    };

    return (
        <div>
             <div className='container'>
                <div className='d-flex justify-content-between my-3 py-3'>
                    <h3>Lista de tareas a realizar</h3>
                    <Button type='button' variant='danger' onClick={()=>{
                        console.log('Desde el boton elimnar todo');
                        SetTareas([])
                    }}>Eliminar Tareas</Button>
                </div>

                <ol>
                    {tareas.map((elemento, index)=>{
                        return (
                        <div key={index} className='my-2'>
                            <li className=''>
                                <div className='d-flex justify-content-between'>
                                <p>Tarea: {elemento}</p>
                                <Button type='button' variant='secondary' onClick={(e)=>{
                                    console.log('Desde el boton realizado correspondiente a la tarea ', index);
                                    EliminarTarea(index);
                                }}>Realizada</Button>
                                </div>
                            </li>
                        </div>
                        )
                    })}
                    
                </ol>
            </div>
        
        </div>
    );
};

export default ListaTareas;