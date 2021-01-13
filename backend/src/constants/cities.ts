function createCity(id: number, name: string) {
  return { id: id, name: name };
}

const cities = [
  createCity(2267056, "Lisboa"),
  createCity(2267094, "Leira"),
  createCity(2740636, "Coimbra"),
  createCity(2735941, "Porto"),
  createCity(2268337, "Faro"),
];

export default cities;
