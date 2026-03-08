import { Exercise } from '@/components/workout/exercises';
import { useState } from 'react';

export const useWorkoutHistory = () => {
  const [openWorkoutIndexes, setOpenWorkoutIndexes] = useState<number[]>([]);
  const [historyWorkouts] = useState<
    {
      date: Date;
      name: string;
      timeOfDay: string;
      time: string;
      exercises: Exercise[];
    }[]
  >([
    {
      date: new Date(),
      name: 'Upper Body Power',
      timeOfDay: 'Morning',
      time: '08:00',
      exercises: [
        {
          id: 1,
          name: 'Bench Press',
          description: 'Just lay down and press the bench',
          exercises: [
            {
              weight: 100,
              weightUnit: 'kg',
              reps: 8,
            },
            {
              weight: 80,
              weightUnit: 'kg',
              reps: 12,
            },
          ],
        },
        {
          id: 2,
          name: 'Dumbbell Curl',
          description: 'lay down on the floor and cry a lil bit, idk',
          exercises: [
            {
              weight: 20,
              weightUnit: 'kg',
              reps: 12,
            },
          ],
        },
      ],
    },
    {
      date: new Date(2026, 0, 3),
      name: 'Lower Body Strength',
      timeOfDay: 'Evening',
      time: '18:30',
      exercises: [
        {
          id: 3,
          name: 'Squat',
          description: 'Deep squats for leg power',
          exercises: [
            {
              weight: 120,
              weightUnit: 'kg',
              reps: 10,
            },
            {
              weight: 100,
              weightUnit: 'kg',
              reps: 15,
            },
          ],
        },
        {
          id: 4,
          name: 'Leg Press',
          description: 'Press those legs',
          exercises: [
            {
              weight: 200,
              weightUnit: 'kg',
              reps: 12,
            },
            {
              weight: 180,
              weightUnit: 'kg',
              reps: 15,
            },
          ],
        },
      ],
    },
  ]); //TODO: fetch data from API later

  const getTotalSets = (exercises: any[]) => {
    return exercises.reduce((total, ex) => total + ex.exercises.length, 0);
  };

  const toggleWorkouts = (index: number) => {
    if (openWorkoutIndexes.includes(index)) {
      setOpenWorkoutIndexes(openWorkoutIndexes.filter((i) => i !== index));
    } else {
      setOpenWorkoutIndexes([...openWorkoutIndexes, index]);
    }

    console.log(openWorkoutIndexes);
  };

  return {
    openWorkoutIndexes,
    setOpenWorkoutIndexes,
    historyWorkouts,
    getTotalSets,
    toggleWorkouts,
  };
};
