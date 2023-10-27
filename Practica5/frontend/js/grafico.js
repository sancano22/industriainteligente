$(document).ready(function(){
      SERVER="http://127.0.0.1:5000";
      cargarPacientes();
      grafico1();
      grafico2();
      grafico3();
})

$("#pacientes").on('change',function(){
   
        grafico1_1($(this).find(":selected").val());
        grafico1_2($(this).find(":selected").val());
        grafico1_3($(this).find(":selected").val());

        $("h1").html(`Paciente:${$(this).find(":selected").text()}`);
        
});   


function cargarPacientes(){
    url="http://127.0.0.1:5000/pacientes";
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
        $("pacientes").append("<option></option>");
        data["results"].forEach(element=>{
            
            $("#pacientes").append(`<option value="${element[0]}">${element[1]}</option>`);
        })
     })
}
   

function grafico1(){
    var datos=[];
    i=1;

    url=`${SERVER}/galvanico`;
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'GSR');
        
             
        data.addRows(
           datos
        );
    
        //console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Galvanica',
            subtitle: 'Monitoreo'
          },
          width:400,
          height:300
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico1'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}

function grafico2(){
    var datos=[];
    i=1;

    url=`${SERVER}/pulsimetro`;
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'HRV');
        
             
        data.addRows(
           datos
        );
    
        //console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Pulsimétro',
            subtitle: 'Monitoreo'
          },
          width: 400,
          height: 300,
          series: {
            0: { color: '#e2431e' },
          }
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico2'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}

function grafico3(){

  var datos=[];
    i=1;
    url=`${SERVER}/promedio`;
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
          datos[0]=["Galvanico",data["results"]["promedioGalvanico"][0][0]]
          datos[1]=["Pulsimetro",data["results"]["promedioPulsimetro"][0][0]]
      });


  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Sensor', 'Promedio'],
          datos[0],
          datos[1]
        ]);

        var options = {
          title: 'Promedio de Sensores',
          pieHole: 0.4,
          width:400,
          height:300
        };

        var chart = new google.visualization.PieChart(document.getElementById('grafico3'));
        chart.draw(data, options);
      }
}


function grafico1_1(idPaciente){
    var datos=[];
    i=1;

    url=`${SERVER}/galvanico`;
    $.ajax({
        contentType: "application/json",
        type: "POST",
        data:JSON.stringify({"idpaciente":idPaciente}),
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'GSR');
        
             
        data.addRows(
           datos
        );
    
        //console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Galvanica',
            subtitle: 'Monitoreo'
          },
          width: 400,
          height: 300
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico1'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}

function grafico1_2(idPaciente){
    var datos=[];
    i=1;

    url=`${SERVER}/pulsimetro`;
    $.ajax({
        contentType: "application/json",
        type: "POST",
        data:JSON.stringify({"idpaciente":idPaciente}),
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'HRV');
        
             
        data.addRows(
           datos
        );
    
        //console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Pulsimétro',
            subtitle: 'Monitoreo',
          },
          width: 400,
          height: 300,
          series: {
            0: { color: '#e2431e' },
          }
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico2'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}


function grafico1_3(idPaciente){

  var datos=[];
    i=1;
    url=`${SERVER}/promedio`;

    $.ajax({
        contentType: "application/json",
        type: "POST",
        data:JSON.stringify({"idpaciente":idPaciente}),
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
          
          datos.push(["Galvanico",data["results"]["promedioGalvanico"][0][0]])
          datos.push(["Pulsimetro",data["results"]["promedioPulsimetro"][0][0]])
          
  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Sensor', 'Promedio'],
          datos[0],
          datos[1]
      
        ]);

        var options = {
          title: 'Promedio de Sensores',
          pieHole: 0.4,
          width:400,
          height:300
        };

        var chart = new google.visualization.PieChart(document.getElementById('grafico3'));
        chart.draw(data, options);
      }

    });
}
