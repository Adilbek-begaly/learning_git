import { useReducer, useState } from "react";

const initialState = {
    jobs: [],
};

function reducer(state, action){
    switch (action.type){
        case  "ADD_NEW_JOB":
          return {...action, jobs:[...state.jobs , action.paylod]};
        // case  "REMOVE_JOB":
        //   return {...action, jobs: action.paylod};
        default:
          return state;
    }
}

function Comp1 (){
    const [state , dispatch] = useReducer(reducer, initialState);
    const [title , setTitle] = useState('')
    const addNewJob = () => {
        let jobObj = {
            id: Date.now(),
            title,
        }
        dispatch({type:"ADD_NEW_JOB", paylod: jobObj});
        setTitle("")
    };

    const removejob = (id) =>{
        const newArray = state.jobs.filter((el) => el.id!==id);
        // dispatch({type:"REMOVE_JOB" , paylod: newArray});
        console.log(newArray)
    }
    return (
        <div>
            
            <input 
              type="text"  
              placeholder="add new one" 
              onChange={(e)=>setTitle(e.target.value)} 
              value = {title}
            />
            <button onClick={()=>addNewJob()}>Add</button>
            {state.jobs.map((e) => {
                return ( 
                <div key={e.id}>
                    {e.title} <button onClick={removejob(e.id)}>remove</button>
                </div>)
            })}
        </div>
    );
}
export default Comp1;
