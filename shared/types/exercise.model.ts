export type Exercise = {
  id: number;
  name: string;
  exercises: {
    weight: number;
    weightUnit: string;
    reps: number;
    isPR?: boolean;
  }[];
};
