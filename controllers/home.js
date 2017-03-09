/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Work Culture Survey'
  });
};

exports.who = (req, res) => {
  res.render('who', {
    title: 'Who are we? | Work Culture Survey'
  });
};

exports.what = (req, res) => {
  res.render('what', {
    title: 'What is this? | Work Culture Survey'
  });
};

exports.why = (req, res) => {
  res.render('why', {
    title: 'Why are we doing it? | Work Culture Survey'
  });
};

exports.list = (req, res) => {
  res.render('list', {
    title: 'So What\'s Next | Work Culture Survey'
  });
};

exports.getContact = (req, res) => {
  res.render('contact', {
    title: 'Contact | Work Culture Survey'
  });
};
