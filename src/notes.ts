export interface Note {
  id: number;
  title: string;
  text: string;
}
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Shakespeare',
    text: 'To be, or not to be: that is the question.',
  },
  {
    id: 3,
    title: 'Jason Statham',
    text: 'Your body is like a piece of dynamite. You can tap it with a pencil all day, but you`ll never make it explode. You hit it once with a hammer: Bang! Get serious. Do 40 hard minutes, not an hour and half of nonsense. It`s so much more rewarding.',
  },
];
