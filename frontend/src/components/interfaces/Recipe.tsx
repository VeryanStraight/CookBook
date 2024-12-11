export default interface Recipe {
  _id: string | undefined;
  name: string;
  serves: number;
  ingredients: { amount: string; ingredient: string }[];
  instructions: string;
  tags: string[];
}
