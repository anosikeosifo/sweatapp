const BASE_URL = 'http://192.168.43.129';

export const loadWorkouts = () => {
  return fetch(`${BASE_URL}/workouts`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })
    .then(response => response.json());
}

export const loadExercises = () => {
  return fetch(`${BASE_URL}/exercises`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })
    .then(response => response.json());
}

export const addWorkout = (data) => {
  return fetch(`${BASE_URL}/workouts` , {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: data
  })
  .then(response => response.json());
}

export const addExercise = (data) => {
  return fetch(`${BASE_URL}/exercises`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    data
  })
  .then(response => response.json());
};
