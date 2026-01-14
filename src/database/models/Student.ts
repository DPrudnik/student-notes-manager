import { DataTypes, Model } from 'sequelize';
import sequelize from '../index';

class Student extends Model {
  public id!: number;
  public name!: string;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // ← ОЦЕ КРИТИЧНО
    tableName: 'students',
  }
);

export default Student;
