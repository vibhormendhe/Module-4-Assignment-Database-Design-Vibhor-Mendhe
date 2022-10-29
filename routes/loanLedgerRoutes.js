const express = require('express');
const loanController = require('../controllers/loanLedgerController');
const router = express.Router();

router
  .route('/')
  .get(loanController.getAllLoanLedger)
  .post(loanController.createLoanLedger);

router
  .route('/:id')
  .get(loanController.getLoanLedger)
  .put(loanController.updateLoanLedger)
  .delete(loanController.deleteLoanLedger);

module.exports = router;