import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
    const { dispatch  } = useWorkoutContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
        });
        const json = await response.json();

        if (!response.ok) { setError(json.error); }
        if (response.ok) { 
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            dispatch({type: 'CREATE_WORKOUT', payload: json });
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new Workout</h3>

            <label>Exercise Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Load (kg): </label>
            <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} />

            <label>Reps: </label>
            <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;