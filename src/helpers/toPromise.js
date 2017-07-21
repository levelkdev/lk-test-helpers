export const toPromise = func =>
  (...args) =>
    new Promise((accept, reject) =>
      func(...args, (error, data) => error ? reject(error) : accept(data)));
