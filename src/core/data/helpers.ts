function* generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const idGenerator = generateId();

export const getId = () => {
  return idGenerator.next().value as number;
};
