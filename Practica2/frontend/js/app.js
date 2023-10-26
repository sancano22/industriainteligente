$(document).ready(function(){
    var grafica;
    var ctx = document.getElementById('myChart');
    datos=[];
    url="http://127.0.0.1:5000/filtro";
    $.ajax({
        contentType: "application/json",
        type: "GET",
        url:url,
    })
    .done(function( data, textStatus, jqXHR ) {
       console.log(data);
  datos=data;
  
  grafica=new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Web', 'Java', 'Python'],
      datasets: [{
        label: 'Cantidad libros',
        data: [data["web"], data["java"],data["python"]],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: " +  textStatus);
        }
    });

    //evento clic boton
    $(document).on("click",function(){
          grafica.destroy();
          const data = {
            labels: [
              'Web',
              'Java',
              'Python'
            ],
            datasets: [{
              label: 'Cantidad de libros',
              data: [datos["web"], datos["java"],datos["python"]],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)'
              ]
            }]
          };
          const config = {
            type: 'polarArea',
            data: data,
            options: {}
          };
         
          grafica=new Chart(ctx, config);
    });

    

});



