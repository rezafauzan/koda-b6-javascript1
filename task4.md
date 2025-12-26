# Flowchart Konversi Suhu 3 Input

```mermaid
flowchart TD

start@{"shape": circle, "label": "Mulai"}
iTemp@{"shape": lean-l, "label": "Input: temp,tempSource,tempDestination"}
stop@{"shape": dbl-circ, "label": "Selesai"}
isNumberTemp@{"shape": diamond, "label": typeof temp === 'number'}
isNumberTempFalse@{"shape": rectangle, "label": "Output: #quot;Angka suhu tidak valid coba lagi!#quot;"}
isCelciusToReamur@{"shape": diamond, "label": "tempSource === #quot;celcius#quot; && tempDestination === #quot;reamur#quot;"}
outputCelciusToReamur@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Celcius ke Reamur adalah #quot; + temp *= 4/5"}

isCelciusToFahrenheit@{"shape": diamond, "label": "tempSource === #quot;celcius#quot; && tempDestination === #quot;fahrenheit#quot;"}
outputCelciusToFahrenheit@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Celcius ke Fahrenheit adalah #quot; + temp = temp * 9/5 + 32"}

isCelciusToKelvin@{"shape": diamond, "label": "tempSource === #quot;celcius#quot; && tempDestination === #quot;kelvin#quot;"}
outputCelciusToKelvin@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Celcius ke Fahrenheit adalah #quot; + temp = temp + 273.15"}

%% from celcius to other

isCelciusToReamur@{"shape": diamond, "label": "tempSource === #quot;celcius#quot; && tempDestination === #quot;reamur#quot;"}
outputCelciusToReamur@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Celcius ke Reamur adalah #quot; + temp *= 4/5"}

isCelciusToFahrenheit@{"shape": diamond, "label": "tempSource === #quot;celcius#quot; && tempDestination === #quot;fahrenheit#quot;"}
outputCelciusToFahrenheit@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Celcius ke Fahrenheit adalah #quot; + temp = temp * 9/5 + 32"}

isCelciusToKelvin@{"shape": diamond, "label": "tempSource === #quot;celcius#quot; && tempDestination === #quot;kelvin#quot;"}
outputCelciusToKelvin@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Celcius ke Fahrenheit adalah #quot; + temp = temp + 273.15"}

%% from Reamur to other

isReamurToCelcius@{"shape": diamond, "label": "tempSource === #quot;reamur#quot; && tempDestination === #quot;celcius#quot;"}
outputCelciusToReamur@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Reamur ke Celcius adalah #quot; + temp *= 5/4"}

isReamurToFahrenheit@{"shape": diamond, "label": "tempSource === #quot;reamur#quot; && tempDestination === #quot;fahrenheit#quot;"}
outputReamurToFahrenheit@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Reamur ke Fahrenheit adalah #quot; + temp = temp * 9/4 + 32"}

isReamurToKelvin@{"shape": diamond, "label": "tempSource === #quot;reamur#quot; && tempDestination === #quot;kelvin#quot;"}
outputReamurToKelvin@{"shape": rectangle, "label":"Output: #quot;Konversi suhu bernilai #quot; + temp + #quot;dari Reamur ke Kelvin adalah #quot; + temp = temp * 5/4 + 273.15"}

outputOtherToOther@{"shape": lean-l, "label": "Output: #quot;Pilihan sumber atau tujuan tidak valid#quot;"}


%% ===================================================
start-->iTemp-->isNumberTemp--True-->isCelciusToReamur

%%Celcius
%% Celcius To Reamur
isCelciusToReamur--True-->outputCelciusToReamur-->stop

%% Celcius to Fahrenheit
isCelciusToReamur--False-->isCelciusToFahrenheit--True-->outputCelciusToFahrenheit-->stop

%% Celcius to Kelvin
isCelciusToFahrenheit--False-->isCelciusToKelvin--True-->outputCelciusToKelvin-->stop

%% Reamur

%% Reamur To Celcius
isReamurToCelcius--True-->outputReamurToCelcisReamurToCelcius-->stop

%% Reamur to Fahrenheit
isReamurToReamur--False-->isReamurToFahrenheit--True-->outputReamurToFahrenheit-->stop

%% Reamur to Kelvin
isReamurToFahrenheit--False-->isReamurToKelvin--True-->outputReamurToKelvin-->stop

%% Not a choice nice try
isCelciusToKelvin--False-->outputOtherToOther-->stop

isNumberTemp--False-->isNumberTempFalse-->stop
```