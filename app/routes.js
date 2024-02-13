const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/cpg/cpg0/classify-answer', function (req, res) {
  var classify = req.session.data.classify
  switch (classify) {
    case 'A problem with a business':
      res.redirect('/cpg/cpg0/businesses')
      break
    case 'Issues in a sector of the UK economy':
      res.redirect('/cpg/cpg0/what-happened')
      break
    case 'Businesses agreeing to not compete with each other':
      res.redirect('/cpg/cpg0/cartels')
      break
    case 'Information or evidence related to an ongoing investigation':
      res.redirect('/cpg/cpg0/investigation')
      break
    case 'Issues with a business I work or worked with (whistleblowing)':
      res.redirect('/cpg/cpg0/whistleblowing')
      break
    case 'Something I\'ve already told you about':
      res.redirect('/cpg/cpg0/reference-number')
      break
    case 'Something else':
      res.redirect('/cpg/cpg0/businesses')
      break
    default:
      res.redirect('/cpg/cpg0/what-happened')
      break
  }
})

router.post('/cpg/cpg0/region-related-answer', function (req, res) {
  var classify = req.session.data['region-related']
  switch (classify) {
    case 'Yes':
      res.redirect('/cpg/cpg0/region')
      break
    case 'No':
      res.redirect('/cpg/cpg0/online-related')
      break
    default:
      res.redirect('/cpg/cpg0/upload-evidence')
      break
  }
})

router.post('/cpg/cpg1/classify-answer', function (req, res) {
  var classify = req.session.data.classify
  switch (classify) {
    case 'A problem with a business':
      res.redirect('/cpg/cpg1/businesses')
      break
    case 'Issues in a sector of the UK economy':
      res.redirect('/cpg/cpg1/what-happened')
      break
    case 'Businesses agreeing to not compete with each other':
      res.redirect('/cpg/cpg1/cartels')
      break
    case 'Information or evidence related to an ongoing investigation':
      res.redirect('/cpg/cpg1/investigation')
      break
    case 'Issues with a business I work or worked with (whistleblowing)':
      res.redirect('/cpg/cpg1/whistleblowing')
      break
    case 'Something I\'ve already told you about':
      res.redirect('/cpg/cpg1/reference-number')
      break
    case 'Something else':
      res.redirect('/cpg/cpg1/businesses')
      break
    default:
      res.redirect('/cpg/cpg1/what-happened')
      break
  }
})

router.post('/cpg/cpg1/region-related-answer', function (req, res) {
  var classify = req.session.data['region-related']
  switch (classify) {
    case 'Yes':
      res.redirect('/cpg/cpg1/region')
      break
    case 'No':
      res.redirect('/cpg/cpg1/online-related')
      break
    default:
      res.redirect('/cpg/cpg1/upload-evidence')
      break
  }
})

router.post('/cpg/cpg2/classify-answer', function (req, res) {
  var classify = req.session.data.classify
  switch (classify) {
    case 'A problem with a business':
      res.redirect('/cpg/cpg2/businesses')
      break
    case 'Issues in a sector of the UK economy':
      res.redirect('/cpg/cpg2/what-happened')
      break
    case 'Businesses agreeing to not compete with each other':
      res.redirect('/cpg/cpg2/cartels')
      break
    case 'Information or evidence related to an ongoing investigation':
      res.redirect('/cpg/cpg2/investigation')
      break
    case 'Issues with a business I work or worked with (whistleblowing)':
      res.redirect('/cpg/cpg2/whistleblowing')
      break
    case 'Something I\'ve already told you about':
      res.redirect('/cpg/cpg2/reference-number')
      break
    case 'Something else':
      res.redirect('/cpg/cpg2/businesses')
      break
    default:
      res.redirect('/cpg/cpg2/what-happened')
      break
  }
})

router.post('/cpg/cpg2/region-related-answer', function (req, res) {
  var classify = req.session.data['region-related']
  switch (classify) {
    case 'Yes':
      res.redirect('/cpg/cpg2/region')
      break
    case 'No':
      res.redirect('/cpg/cpg2/online-related')
      break
    default:
      res.redirect('/cpg/cpg2/upload-evidence')
      break
  }
})

router.post('/cpg/cpg3a/classify-answer', function (req, res) {
  var classify = req.session.data.classify
  switch (classify) {
    case 'A problem with a business':
      res.redirect('/cpg/cpg3a/businesses')
      break
    case 'Issues in a sector of the UK economy':
      res.redirect('/cpg/cpg3a/what-happened')
      break
    case 'Businesses agreeing to not compete with each other':
      res.redirect('/cpg/cpg3a/cartels')
      break
    case 'Information or evidence related to an ongoing investigation':
      res.redirect('/cpg/cpg3a/investigation')
      break
    case 'Issues with a business I work or worked with (whistleblowing)':
      res.redirect('/cpg/cpg3a/whistleblowing')
      break
    case 'Something I\'ve already told you about':
      res.redirect('/cpg/cpg3a/reference-number')
      break
    case 'Something else':
      res.redirect('/cpg/cpg3a/businesses')
      break
    default:
      res.redirect('/cpg/cpg3a/what-happened')
      break
  }
})

router.post('/cpg/cpg3b/classify-answer', function (req, res) {
  var classify = req.session.data.classify
  switch (classify) {
    case 'A problem with a business':
      res.redirect('/cpg/cpg3b/businesses')
      break
    case 'Issues in a sector of the UK economy':
      res.redirect('/cpg/cpg3b/what-happened')
      break
    case 'Businesses agreeing to not compete with each other':
      res.redirect('/cpg/cpg3b/cartels')
      break
    case 'Information or evidence related to an ongoing investigation':
      res.redirect('/cpg/cpg3b/investigation')
      break
    case 'Issues with a business I work or worked with (whistleblowing)':
      res.redirect('/cpg/cpg3b/whistleblowing')
      break
    case 'Something I\'ve already told you about':
      res.redirect('/cpg/cpg3b/reference-number')
      break
    case 'Something else':
      res.redirect('/cpg/cpg3b/businesses')
      break
    default:
      res.redirect('/cpg/cpg3b/what-happened')
      break
  }
})

router.post('/cpg/cpg3c/classify-answer', function (req, res) {
  var classify = req.session.data.classify
  switch (classify) {
    case 'A problem with a business':
      res.redirect('/cpg/cpg3c/businesses')
      break
    case 'Issues in a sector of the UK economy':
      res.redirect('/cpg/cpg3c/what-happened')
      break
    case 'Businesses agreeing to not compete with each other':
      res.redirect('/cpg/cpg3c/cartels')
      break
    case 'Information or evidence related to an ongoing investigation':
      res.redirect('/cpg/cpg3c/investigation')
      break
    case 'Issues with a business I work or worked with (whistleblowing)':
      res.redirect('/cpg/cpg3c/whistleblowing')
      break
    case 'Something I\'ve already told you about':
      res.redirect('/cpg/cpg3c/reference-number')
      break
    case 'Something else':
      res.redirect('/cpg/cpg3c/businesses')
      break
    default:
      res.redirect('/cpg/cpg3c/what-happened')
      break
  }
})

router.post('/mwr/mwr8/provide-contact-answer', function (req, res) {
  var classify = req.session.data['region-related']
  switch (classify) {
    case 'Yes':
      res.redirect('/mwr/mwr8/contact')
      break
    case 'No':
      res.redirect('/mwr/mwr8/review')
      break
    default:
      res.redirect('/mwr/mwr8/provide-contact')
      break
  }
})

module.exports = router
