import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../index';
import Student from './Student';

interface NoteAttributes {
  id: number;
  title: string;
  content: string;
  studentId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// При створенні нотатки id не обовʼязковий
interface NoteCreationAttributes
  extends Optional<NoteAttributes, 'id'> {}

class Note
  extends Model<NoteAttributes, NoteCreationAttributes>
  implements NoteAttributes
{
  public id!: number;
  public title!: string;
  public content!: string;
  public studentId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'students',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'notes',
  }
);

// 🔗 Звʼязки
Student.hasMany(Note, { foreignKey: 'studentId' });
Note.belongsTo(Student, { foreignKey: 'studentId' });

export default Note;
