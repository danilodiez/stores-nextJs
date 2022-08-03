
const MOCK = [
  {
    id: "felipa",
    title: "La felipa",
    description: "Las mejores meriendas de Corrientes capital",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "https://www.instagram.com › lafelipa.meriendas",
    location: {
      map: "https://goo.gl/maps/qoEtKu8dFHM8bGfW8",
      address: "Salta 498",
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
  {
    id: "felipa2",
    title: "La felipa",
    description: "Las mejores meriendas de Corrientes capital",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "https://www.instagram.com › lafelipa.meriendas",
    location: {
      map: "https://goo.gl/maps/qoEtKu8dFHM8bGfW8",
      address: "Salta 498",
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
  {
    id: "felipa3",
    title: "La felipa",
    description: "Las mejores meriendas de Corrientes capital",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "https://www.instagram.com › lafelipa.meriendas",
    location: {
      map: "https://goo.gl/maps/qoEtKu8dFHM8bGfW8",
      address: "Salta 498",
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
    {
    id: "felipa4",
    title: "La felipa",
    description: "Las mejores meriendas de Corrientes capital",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "https://www.instagram.com › lafelipa.meriendas",
    location: {
      map: "https://goo.gl/maps/qoEtKu8dFHM8bGfW8",
      address: "Salta 498",
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
    {
    id: "felipa5",
    title: "La felipa",
    description: "Las mejores meriendas de Corrientes capital",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "https://www.instagram.com › lafelipa.meriendas",
    location: {
      map: "https://goo.gl/maps/qoEtKu8dFHM8bGfW8",
      address: "Salta 498",
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
    {
    id: "felipa6",
    title: "La felipa",
    description: "Las mejores meriendas de Corrientes capital",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "https://www.instagram.com › lafelipa.meriendas",
    location: {
      map: "https://goo.gl/maps/qoEtKu8dFHM8bGfW8",
      address: "Salta 498",
      lat: -38.001392,
      lng: -57.5473714,
    },
  },
];

const api = {
  list: async () => MOCK,
  fetch: async (id) => {
    const store = MOCK.find((store) => store.id === id);

    if (!store) {
      throw new Error("Store not found");
    }

    return store;
  },
  hot: async () => {
    const index = Math.floor(Math.random() * MOCK.length);

    return MOCK[index];
  },
};

export default api;
