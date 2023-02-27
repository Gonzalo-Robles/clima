//boton enviar
let btnSend = document.querySelector ('button')

//Nombre de la ciudad que aparece al buscar
let nameCity =  document.querySelector("#ciudad")

//temperatura del lugar
let temp =  document.querySelector("#temperatura")

//humedad del lugar
let humidity=document.querySelector("#humedad")

//presion del lugar
let pressure=document.querySelector("#presion")

//Icono del clima
let icon =  document.querySelector("#wicon")

//descripcion del clima
let descripcion =  document.querySelector("#descripcion")

// input donde se escribe lo que se quiere buscar
let input = document.querySelector ('input')

let container=document.querySelector(".container")

btnSend.addEventListener ('click', () =>{
        //el valor de la ciudad es el valor de lo que escribo dentro del input
        let city= input.value


        if(city.length == 0){
            return alert("No ingresaste ciudad")
        }

        //SE HACE EL PEDIDO AJAX
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95176c8edea30e33338e0eaddd53a916`, (data)=>{

        /*Este es el json que envia para Moreno */
        /*{"coord":{"lon":-35.0922,"lat":-8.1186},
        "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
        "base":"stations",
        "main":{"temp":301.68,"feels_like":304.88,
        "temp_min":301.68,"temp_max":301.68,
        "pressure":1013,"humidity":70},"visibility":10000,"wind":{"speed":4.12,"deg":150},
        "clouds":{"all":40},"dt":1677249104,"sys":{"type":1,"id":8426,"country":"BR","sunrise":1677227095,"sunset":1677271362},
        "timezone":-10800,"id":3394453,"name":"Moreno","cod":200} */
        
             //línea de código dentro de la Función para hacerlo visible, una vez que el usuario aprete el botón:
            container = document.querySelector(".container").style.visibility = "visible"
            
            //nombre de la ciudad que busque
            nameCity.textContent = data.name;
                
                
            //temperatura en ºC del lugar
            temp.textContent ="Temp: "+ Math.floor(data.main.temp - 273.15) + 'ºC';
            
            //Humedad en %
            humidity.textContent ="Hum: "+ Math.floor(data.main.humidity ) + ' %';

            //presion en hPa (Hecto Pascales)
            pressure.textContent="Pres: "+ Math.floor(data.main.pressure) +" hPa";
            
            // descripcion del dia
            descripcion.textContent = data.weather[0].description 

            //icono para el clima
            icon.setAttribute ('src', 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'.png')

            
  
            }// fin de la funcion del json
        )
     
        let request = $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95176c8edea30e33338e0eaddd53a916`)
        request.fail(function(){
            alert(city+" no existe, ingresa nuevamente!")
            container.style.visibility = "hidden"
        })
     
})

