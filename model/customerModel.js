const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, 'A must have a name'],
        maxLength: [90, 'A customer full name must be of length equal to or less than 90 characters'],
        minLength: [0, 'A customer name must be greater than 0 characters'],
        trim: true
    },
    firstName: {
        type: String,
        required: [true, 'A must have a first name'],
        maxLength: [30, 'A customer full name must be of length equal to or less than 30 characters'],
        minLength: [0, 'A customer name must be greater than 0 characters'],
        trim: true
    },
    middleName: {
        type: String,
        maxLength: [30, 'A customer middle name must be of length equal to or less than 30 characters'],
        minLength: [0, 'A customer name must be greater than 0 characters'],
        trim: true
    },
    lastName: {
        type: String,
        maxLength: [30, 'A customer full name must be of length equal to or less than 90 characters'],
        minLength: [0, 'A customer name must be greater than 0 characters'],
        trim: true
    },
    dateOfBirth: {
        type: Date,
        validate: {
            validator: function(value){
                return value <= Date.now();
            }
        }
    },
    gender: {
        type: String,
        required: [true, 'A customer must specify their gender'],
        minLength: [0, "A gender string must be greater than 0"],
        maxLength: [10, "Gender string can be maximum of 10 characters"]
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;