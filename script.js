let input = document.querySelector('.search-input');
let btn = document.querySelector('.search-btn');

let temperature = document.querySelector('.temperature');
let cityName = document.querySelector('.city');
let conditionText = document.querySelector('.condition');
let humidityText = document.querySelector('.humidity');
let windText = document.querySelector('.wind');
let weatherIcon = document.querySelector('.weather-icon');
let weatherInfo = document.querySelector('.weather-info');

let forecastContainer =
document.querySelector('.forecast-container');

let themeBtn = document.querySelector('.theme-btn');
let locationBtn = document.querySelector('.location-btn');

let loading = document.querySelector('.loading');

const lu_toama_mi_mamodemanamarbenhinohi_ka_roamzu_ka_kijiso_uemoliojikenkaphiejaelkadereislisanokiratoo_adeyoyoahamalubenmishimihivinluzuhi_kimartaminversamoperbenkarelukuriem_rozumihikamimaasatashielhi_hiah_isliphietonotsuelkoolikenmieloli_hiverlotteatophiehi_mamarirosajashioderokiisma_ra_yokayo_char_sorikiamyukitarama_saphie_kiphiemoroelbenmaka_hiveraverpervavatazeel_miam_mitakomilu_pertaharamamvaverdekoperriminconakoelverliahoulottetotoyozuco_tata_kirayo_tsuammarzuasonacassakokilottekaminsamarvayorekoyojayuna_riahhar_elphietsushiel_marverahshidecasmidekomohibenshineltoshiriphieriraem_upersonayu_yuyojatsumarsayumaahkacosamizu_maco_mi_mitanohikayuemma_rosoameljari_lunozejalubenverkukaa_el_sacaskirota_hi_yuverjiokishikazumishielmanamikatocharkenhitoshiemkoriroja_ahelyohimihiozelottezucharjushikaolikiminzu_amhimiro_vinshinhielju_sophieelkiemcasyuahkakoshikuisolivatabenhi_marshinuyuo_ushiamaperhar_jakiko_sakatoamreco_tsujakaminkocharkiroshinnavernatosahi_mare_samarmaeljitoelhi_yuro_rikuhiahlu
 = "d5e0c6113d4490862292759a8d7e99e0";

const card = document.querySelector(".weather-card");
const glow = document.querySelector(".mouse-glow");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x - 125}px`;
    glow.style.top = `${y - 125}px`;

});

function updateBackground(condition){

    if(condition.includes("Clear")){

        document.body.style.background =
        "linear-gradient(135deg,#f6d365,#fda085)";

    }

    else if(condition.includes("Rain")){

        document.body.style.background =
        "linear-gradient(135deg,#141e30,#243b55)";

    }

    else if(condition.includes("Cloud")){

        document.body.style.background =
        "linear-gradient(135deg,#757f9a,#d7dde8)";

    }

    else if(condition.includes("Snow")){

        document.body.style.background =
        "linear-gradient(135deg,#e6dada,#274046)";

    }

}

function updateUI(data, cityText){

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let condition = data.weather[0].main;
    let iconCode = data.weather[0].icon;

    temperature.innerText = `${Math.round(temp)}°C`;
    weatherInfo.classList.remove('hidden');
    cityName.innerText = cityText;

    conditionText.innerText = condition;

    humidityText.innerText = `${humidity}%`;

    windText.innerText = `${wind} km/h`;

    weatherIcon.src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    updateBackground(condition);

}

async function renderForecast(forecastUrl){

    let forecastResponse = await fetch(forecastUrl);

    let forecastData = await forecastResponse.json();

    forecastContainer.innerHTML = "";

    for(let i = 0; i < forecastData.list.length && i < 40; i += 8) {

        let item = forecastData.list[i];

        let forecastTemp = Math.round(item.main.temp);

        let forecastCondition = item.weather[0].main;

        let forecastIcon = item.weather[0].icon;

        let date = new Date(item.dt_txt);

        let day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        let fullDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });

        forecastContainer.innerHTML +=
        `
        <div class="forecast-box">

            <h3>${day}</h3>

            <small>${fullDate}</small>

            <img
                src="https://openweathermap.org/img/wn/${forecastIcon}@2x.png"
            >

            <h4>${forecastTemp}°C</h4>

            <p>${forecastCondition}</p>

        </div>
        `;
    }

}

btn.addEventListener('click', async function(){

    const ip = input.value;

    if(ip == ""){
        alert("Please enter a city");
        return;
    }

    loading.classList.remove('hidden');

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${ip}&appid=${lu_toama_mi_mamodemanamarbenhinohi_ka_roamzu_ka_kijiso_uemoliojikenkaphiejaelkadereislisanokiratoo_adeyoyoahamalubenmishimihivinluzuhi_kimartaminversamoperbenkarelukuriem_rozumihikamimaasatashielhi_hiah_isliphietonotsuelkoolikenmieloli_hiverlotteatophiehi_mamarirosajashioderokiisma_ra_yokayo_char_sorikiamyukitarama_saphie_kiphiemoroelbenmaka_hiveraverpervavatazeel_miam_mitakomilu_pertaharamamvaverdekoperriminconakoelverliahoulottetotoyozuco_tata_kirayo_tsuammarzuasonacassakokilottekaminsamarvayorekoyojayuna_riahhar_elphietsushiel_marverahshidecasmidekomohibenshineltoshiriphieriraem_upersonayu_yuyojatsumarsayumaahkacosamizu_maco_mi_mitanohikayuemma_rosoameljari_lunozejalubenverkukaa_el_sacaskirota_hi_yuverjiokishikazumishielmanamikatocharkenhitoshiemkoriroja_ahelyohimihiozelottezucharjushikaolikiminzu_amhimiro_vinshinhielju_sophieelkiemcasyuahkakoshikuisolivatabenhi_marshinuyuo_ushiamaperhar_jakiko_sakatoamreco_tsujakaminkocharkiroshinnavernatosahi_mare_samarmaeljitoelhi_yuro_rikuhiahlu
}&units=metric`;

    let forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${ip}&appid=${lu_toama_mi_mamodemanamarbenhinohi_ka_roamzu_ka_kijiso_uemoliojikenkaphiejaelkadereislisanokiratoo_adeyoyoahamalubenmishimihivinluzuhi_kimartaminversamoperbenkarelukuriem_rozumihikamimaasatashielhi_hiah_isliphietonotsuelkoolikenmieloli_hiverlotteatophiehi_mamarirosajashioderokiisma_ra_yokayo_char_sorikiamyukitarama_saphie_kiphiemoroelbenmaka_hiveraverpervavatazeel_miam_mitakomilu_pertaharamamvaverdekoperriminconakoelverliahoulottetotoyozuco_tata_kirayo_tsuammarzuasonacassakokilottekaminsamarvayorekoyojayuna_riahhar_elphietsushiel_marverahshidecasmidekomohibenshineltoshiriphieriraem_upersonayu_yuyojatsumarsayumaahkacosamizu_maco_mi_mitanohikayuemma_rosoameljari_lunozejalubenverkukaa_el_sacaskirota_hi_yuverjiokishikazumishielmanamikatocharkenhitoshiemkoriroja_ahelyohimihiozelottezucharjushikaolikiminzu_amhimiro_vinshinhielju_sophieelkiemcasyuahkakoshikuisolivatabenhi_marshinuyuo_ushiamaperhar_jakiko_sakatoamreco_tsujakaminkocharkiroshinnavernatosahi_mare_samarmaeljitoelhi_yuro_rikuhiahlu
}&units=metric`;

    try{

        let response = await fetch(url);

        let data = await response.json();

        if(data.cod == "404"){
            alert("City not found");
            loading.classList.add('hidden');
            return;
        }

        updateUI(
            data,
            `${data.name}, ${data.sys.country}`
        );

        await renderForecast(forecastUrl);

        input.value = "";

    }

    catch(error){

        alert("Something went wrong");

    }

    loading.classList.add('hidden');

});

input.addEventListener("keydown", function(e){

    if(e.key == "Enter"){
        btn.click();
    }

});

themeBtn.addEventListener('click', function(){

    document.body.classList.toggle('dark');

});

locationBtn.addEventListener('click', async function(){

    loading.classList.remove('hidden');

    navigator.geolocation.getCurrentPosition(

        async function(position){

            let lat = position.coords.latitude;

            let lon = position.coords.longitude;

            let geoUrl =
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${lu_toama_mi_mamodemanamarbenhinohi_ka_roamzu_ka_kijiso_uemoliojikenkaphiejaelkadereislisanokiratoo_adeyoyoahamalubenmishimihivinluzuhi_kimartaminversamoperbenkarelukuriem_rozumihikamimaasatashielhi_hiah_isliphietonotsuelkoolikenmieloli_hiverlotteatophiehi_mamarirosajashioderokiisma_ra_yokayo_char_sorikiamyukitarama_saphie_kiphiemoroelbenmaka_hiveraverpervavatazeel_miam_mitakomilu_pertaharamamvaverdekoperriminconakoelverliahoulottetotoyozuco_tata_kirayo_tsuammarzuasonacassakokilottekaminsamarvayorekoyojayuna_riahhar_elphietsushiel_marverahshidecasmidekomohibenshineltoshiriphieriraem_upersonayu_yuyojatsumarsayumaahkacosamizu_maco_mi_mitanohikayuemma_rosoameljari_lunozejalubenverkukaa_el_sacaskirota_hi_yuverjiokishikazumishielmanamikatocharkenhitoshiemkoriroja_ahelyohimihiozelottezucharjushikaolikiminzu_amhimiro_vinshinhielju_sophieelkiemcasyuahkakoshikuisolivatabenhi_marshinuyuo_ushiamaperhar_jakiko_sakatoamreco_tsujakaminkocharkiroshinnavernatosahi_mare_samarmaeljitoelhi_yuro_rikuhiahlu
}`;

            let geoResponse = await fetch(geoUrl);

            let locationData = await geoResponse.json();

            let exactCity = locationData[0].name;

            let exactCountry = locationData[0].country;

            let weatherUrl =
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${lu_toama_mi_mamodemanamarbenhinohi_ka_roamzu_ka_kijiso_uemoliojikenkaphiejaelkadereislisanokiratoo_adeyoyoahamalubenmishimihivinluzuhi_kimartaminversamoperbenkarelukuriem_rozumihikamimaasatashielhi_hiah_isliphietonotsuelkoolikenmieloli_hiverlotteatophiehi_mamarirosajashioderokiisma_ra_yokayo_char_sorikiamyukitarama_saphie_kiphiemoroelbenmaka_hiveraverpervavatazeel_miam_mitakomilu_pertaharamamvaverdekoperriminconakoelverliahoulottetotoyozuco_tata_kirayo_tsuammarzuasonacassakokilottekaminsamarvayorekoyojayuna_riahhar_elphietsushiel_marverahshidecasmidekomohibenshineltoshiriphieriraem_upersonayu_yuyojatsumarsayumaahkacosamizu_maco_mi_mitanohikayuemma_rosoameljari_lunozejalubenverkukaa_el_sacaskirota_hi_yuverjiokishikazumishielmanamikatocharkenhitoshiemkoriroja_ahelyohimihiozelottezucharjushikaolikiminzu_amhimiro_vinshinhielju_sophieelkiemcasyuahkakoshikuisolivatabenhi_marshinuyuo_ushiamaperhar_jakiko_sakatoamreco_tsujakaminkocharkiroshinnavernatosahi_mare_samarmaeljitoelhi_yuro_rikuhiahlu
}&units=metric`;

            let forecastUrl =
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${lu_toama_mi_mamodemanamarbenhinohi_ka_roamzu_ka_kijiso_uemoliojikenkaphiejaelkadereislisanokiratoo_adeyoyoahamalubenmishimihivinluzuhi_kimartaminversamoperbenkarelukuriem_rozumihikamimaasatashielhi_hiah_isliphietonotsuelkoolikenmieloli_hiverlotteatophiehi_mamarirosajashioderokiisma_ra_yokayo_char_sorikiamyukitarama_saphie_kiphiemoroelbenmaka_hiveraverpervavatazeel_miam_mitakomilu_pertaharamamvaverdekoperriminconakoelverliahoulottetotoyozuco_tata_kirayo_tsuammarzuasonacassakokilottekaminsamarvayorekoyojayuna_riahhar_elphietsushiel_marverahshidecasmidekomohibenshineltoshiriphieriraem_upersonayu_yuyojatsumarsayumaahkacosamizu_maco_mi_mitanohikayuemma_rosoameljari_lunozejalubenverkukaa_el_sacaskirota_hi_yuverjiokishikazumishielmanamikatocharkenhitoshiemkoriroja_ahelyohimihiozelottezucharjushikaolikiminzu_amhimiro_vinshinhielju_sophieelkiemcasyuahkakoshikuisolivatabenhi_marshinuyuo_ushiamaperhar_jakiko_sakatoamreco_tsujakaminkocharkiroshinnavernatosahi_mare_samarmaeljitoelhi_yuro_rikuhiahlu
}&units=metric`;

            let weatherResponse = await fetch(weatherUrl);

            let data = await weatherResponse.json();

            updateUI(
                data,
                `${exactCity}, ${exactCountry}`
            );

            await renderForecast(forecastUrl);

            loading.classList.add('hidden');

        },

        function(){

            alert("Location access denied");

            loading.classList.add('hidden');

        }

    );

});