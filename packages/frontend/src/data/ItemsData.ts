export interface Item {
  description: string;
  labels: string[];
  parent:
    | 'NextActions'
    | 'Capture'
    | 'Waiting For'
    | 'Projects'
    | 'Reference'
    | 'One Day';
}

// Mock data
const items: Item[] = [
  { description: 'Clean house', labels: ['At home'], parent: 'Capture' },
  {
    description: 'Install Arch Linux',
    labels: ['At computer'],
    parent: 'Capture',
  },
  {
    description: 'Tickets for holiday',
    labels: ['At computer'],
    parent: 'Capture',
  },
  { description: 'Buy supplement', labels: ['At computer'], parent: 'Capture' },
  { description: 'Buy gift', labels: ['At mall'], parent: 'Capture' },
  { description: 'Presentation', labels: ['At home'], parent: 'Capture' },
];

const wait = (miliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
};

export const getAllItems = async (): Promise<Item[]> => {
  await wait(500);
  return { ...items };
};
