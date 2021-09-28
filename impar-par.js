// var NumeroDeAlunos = 0

var NumeroDeAlunos = window.prompt ( "Quantidade de alunos presentes" )
for ( let i=0; i <= NumeroDeAlunos; i++ ) {
    if (i==0) {
        console.log ( "Este número é ZERO")
    } else if ( i%2 ==0 ){
         console.log ("Este Numero é PAR " +i )  
    } else { 
        console.log ("Este numero é IMPAR" + i)
    }
} 