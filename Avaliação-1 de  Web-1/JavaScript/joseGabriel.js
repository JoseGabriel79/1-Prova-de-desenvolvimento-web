$(document).ready(function(){
    var aux = 1;
    $('#inptEnviar').click(function(event){
        var nom = $('#nome').val();
        var Cpf = $('#cpf').val();
      
        if(nom == "" || nom.length < 10){
            alert("Digite as informações do nome corretamente"); 
            $('#nome').focus();       
        } 
        
        if(Cpf == "" || Cpf == "ddd.ddd.ddd-dd" ||Cpf.length < 14){
            alert("Digite as informações do CPF corretamente"); 
            $('#cpf').focus();    

        }else{
            event.preventDefault();
            if(aux == 1){
                $("#lin1Nome").html(nom);
                $("#lin1Cpf").html(Cpf);
                $("fieldset").hide();
                aux ++;
                
            }else if(aux == 2){
                $("#lin2Nome").html(nom);
                $("#lin2Cpf").html(Cpf);
                $("fieldset").hide(5000);
                aux ++;
            }else if(aux == 3){
                $("#lin3Nome").html(nom);
                $("#lin3Cpf").html(Cpf);
                $("fieldset").hide(5000);
                aux ++;
            }else if(aux == 4){
                $("#lin4Nome").html(nom);
                $("#lin4Cpf").html(Cpf);
                $("fieldset").hide(5000);
                aux ++;
            }else if(aux == 5){
                $("#lin5Nome").html(nom);
                $("#lin5Cpf").html(Cpf);
                $("fieldset").hide(5000);
                aux ++;
            }
        }
    });

    $("#cpf").focus(function(){
        $("#cpf").attr("value", "");
        $("#cpf").mask("000.000.000-00");

        if(this.value == "ddd.ddd.ddd-dd"){
            this.value = "";
        }
        
    });

    $("#cpf").blur(function(){
        $("#cpf").attr("value", "ddd.ddd.ddd-dd");

        if(this.value == ""){
            this.value = "ddd.ddd.ddd-dd";
        }

    });

    $('td').click(function(){
        $("fieldset").show();
    });
});



