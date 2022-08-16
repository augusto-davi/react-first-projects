export type Level = {
  title: string;
  color: string;
  icon: 'down' | 'up';
  bmi: number[];
  yourBMI?: number;
};

export const levels: Level[] = [
  { title: 'Magreza', color: '#96a3ab', icon: 'down', bmi: [0, 18.5] },
  { title: 'Normal', color: '#0ead69', icon: 'up', bmi: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#e2b036', icon: 'down', bmi: [25, 30] },
  { title: 'Obesidade', color: '#c3423f', icon: 'down', bmi: [30.1, 99] },
];

export const calculateBMI = (height: number, weight: number) => {
  const bmi = weight / height ** 2;

  for (let i in levels) {
    if (bmi >= levels[i].bmi[0] && bmi) {
      levels[i].yourBMI = bmi;
      return levels[i];
    }
  }

  return null;
};
