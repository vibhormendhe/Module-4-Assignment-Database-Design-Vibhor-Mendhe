const LoanLedger = require('./../model/loanLedgerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

// Add a new Loan Ledger
exports.createLoanLedger = async  (req, res) => {
    try {
  
      const newLoanLedger = await LoanLedger.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          course: newLoanLedger
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };

// Get all loan Ledger
exports.getAllLoanLedger =  async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(LoanLedger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loansLedger = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loansLedger.length,
      data: {
        loansLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Get a specific loan Ledger by ID
exports.getLoanLedger = async (req, res) => {
  try {
    const loanLedger = await LoanLedger.findById(req.params.id);
    // Course.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loanLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Change an existing loan Ledger
exports.updateLoanLedger = async (req, res) => {
  try {
    const loanLedger = await LoanLedger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loanLedger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
    
// Delete a loan Ledger
exports.deleteLoanLedger = async (req, res) => {
  try {
    await LoanLedger.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};