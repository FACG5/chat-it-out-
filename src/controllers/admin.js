const { insertArticle } = require('../model/queries/addData');

exports.get = (req, res) => {
  res.render('admin', {
    title: 'Admin Panel', headerFound: true, footerFound: true, style: ['admin', 'header', 'footer'], javascript: ['hamburger', 'addArticle'],
  });
};

exports.addArticle = (req, res) => {
  insertArticle(req.body).then((result) => { res.send(JSON.stringify(result.rows[0])); });
};
