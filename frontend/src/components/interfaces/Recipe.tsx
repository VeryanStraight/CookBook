export default interface Recipe {
  _id: string | undefined;
  name: String;
  serves: number;
  ingredients: { amount: String; ingredient: String }[];
  instructions: String;
  tags: String[];
}
