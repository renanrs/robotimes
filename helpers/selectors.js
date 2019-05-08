const login = {
  form: '#frmCadastro',
  emailInput: '#frmCadastro\\:email',
  passwordInput: '#frmCadastro\\:senha',
  loginButton: '#frmCadastro\\:botaoLogin'
};

const loggedArea = {
  menu: 'div#navbar'
};

const timeRecording = {
  recordButton: 'a.btn-primary',
  modalRecordSheetValidation: '[id="myModal"].modal.fade.in',
  passwordInput: '[id="myModal"] #frmEnviaDados\\:campo-senha',
  confirmValidationButton: '[id="myModal"] a.btn.btn-primary'
};

module.exports = {
  login,
  loggedArea,
  timeRecording
};
