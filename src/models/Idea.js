class Idea {
  constructor(name, body, quality) {
    this.id = Date.now();
    this.name = name;
    this.body = body;
    this.quality = quality || 'Swill';
  }
}

export default Idea;
