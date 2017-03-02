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
    title: 'Who are we?'
  });
};

exports.what = (req, res) => {
  res.render('what', {
    title: 'What is this?'
  });
};

exports.why = (req, res) => {
  res.render('why', {
    title: 'Why are we doing it?'
  });
};
