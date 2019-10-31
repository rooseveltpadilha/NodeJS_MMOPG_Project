module.exports.cadastro = function(application, req, res) {
  res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.voltar = function(application, req, res) {
  res.render('index', {validacao: {}, usu_invalido: {}, usu_nome: {}, usu_senha: {}});
}

module.exports.sucesso = function(application, req, res) {
  res.render('cadastro_sucesso', {cadastro_sucesso: {}});
}

module.exports.cadastrar = function(application, req, res){
  var dadosForm = req.body;

  req.assert('nome', 'nome não pode ser vazio').notEmpty();
  req.assert('usuario', 'usuário não pode ser vazio').notEmpty();
  req.assert('senha', 'senha não pode ser vazio').notEmpty();
  req.assert('casa', 'casa não pode ser vazio').notEmpty();

  var erros = req.validationErrors();

  if(erros) {
    res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
    return;
  }

  var connection = application.config.dbConnection;

  var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
  var JogoDAO = new application.app.models.JogoDAO(connection);

  UsuariosDAO.inserirUsuario(dadosForm);
  JogoDAO.gerarParametros(dadosForm.usuario);
  // Geração dos parametros
  res.render('cadastro_sucesso', {cadastro_sucesso: "Parabéns, sua conta foi criada com sucesso!"});
}