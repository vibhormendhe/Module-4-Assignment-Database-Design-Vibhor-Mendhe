const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    loanType: {
        type: String,
        required: [true, 'A loan must have a type'],
        enum: ['home', 'auto', 'boat', 'life'],
    },
    loanNumber: {
        type: Number,
        required: [true, 'A loan must have a number'],
        unique: true
    },
    amount: {
        type: Number,
        required: [true, 'Loan must have amount']
    },
    interestRate: {
        type: Number,
        required: [true, 'A loan must have an interest rate']
    },
    loanTerm: {
        type: Number,
        required: [true, 'A loan must have a loan term']
    },
    startDate: {
        type: Date
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

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;