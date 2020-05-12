class Recipe {
  constructor(
    title,
    imageUrl,
    ingredients,
    description,
    instructions,
    summary,
    tags,
    isNew,
    isFav
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.description = description;
    this.instructions = instructions;
    this.summary = summary;
    this.tags = tags;
    this.isNew = isNew;
    this.isFav = isFav;
  }
}

export default Recipe;
