import Sequelize, { Model} from "sequelize";

class Customer extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      status: Sequelize.ENUM('active', 'ARCHIVED'),
    }, {
      sequelize,

    })
  }
}


export default Customer;
