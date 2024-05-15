import { Model, DataTypes } from 'sequelize';
import sequelize from './init';

class UrlModel extends Model { }

UrlModel.init({
    id: DataTypes.STRING,
    originalUrl: DataTypes.STRING,

}, { sequelize, modelName: 'user' });

export = {
    UrlModel
}