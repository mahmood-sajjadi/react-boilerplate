class Config {
  static get env(): typeof process.env.NODE_ENV {
    return process.env.NODE_ENV;
  }
}

export default Config;
