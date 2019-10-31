module.exports.index = function(application, req, res) {
  res.render('index', {validacao: {}, usu_invalido: {}, usu_nome: {}, usu_senha: {}});
}

module.exports.cadastro = function(application, req, res) {
  res.render('cadastro');
}

module.exports.autenticar = function(application, req, res) {
  var dadosForm = req.body;

  req.assert('usuario', 'Usuario não deve ser vazio').notEmpty();
  req.assert('senha', 'Senha não deve ser vazio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render("index", {validacao: erros})
    return;
  }

  var connection = application.config.dbConnection;
  var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
  
  UsuariosDAO.autenticar(dadosForm, req, res);

  //res.send('tudo ok pra iniciar a sessao');

}