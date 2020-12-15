$(function(){
	$('.btn-nav').click(function(e){
		 e.stopPropagation();
		$('.menu-lateral').toggleClass('menu-lateral-ativo');
	});
	$('.menu-lateral').click(function(e){
		 e.stopPropagation();
	});
	$('body, html').click(function(e){
		$('.menu-lateral').removeClass('menu-lateral-ativo');
	});

	$('.bloco-lista-cupom').click(function(){
		location.href = 'cliente_detalhe_cupom.html';
	});
});

//mascara cep 
$('.mask_cep').mask('00000-000');

//mascara dinheiro
$('.mask_valor').mask('000.000.000.000.000,00', {reverse: true});

// mascara telefone
var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$('.mask_telefone').mask(SPMaskBehavior, spOptions);

// mascara cpf e cnpj
 var options = {
	onKeyPress : function(cpfcnpj, e, field, options) {
		var masks = ['000.000.000-000', '00.000.000/0000-00'];
		var mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
		$('.cpfcnpj').mask(mask, options);
	}
};

$('.cpfcnpj').mask('000.000.000-000', options);

