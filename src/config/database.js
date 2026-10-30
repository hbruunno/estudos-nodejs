module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "160296",
  database: "estudoNode",
  define: {
    timestamps: true, //cria duas colunas createdAt e updatedAt
    underscored: true,
    underscoredAll: true
  }
}
