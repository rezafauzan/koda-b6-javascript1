# Algorithma Javascript1

## Task 1
```mermaid
flowchart TD

start@{"shape": circle, "label": "Mulai"}
jarijari@{"shape": lean-l, "label":"Input: jariJari = 14"}
declarePi@{"shape": rectangle, "label": "pi = 3.14"}
isjariJariMultipleSeven@{"shape": diamond, "label": "jariJari % 7 === 0"}
pi227@{"shape": rectangle, "label": pi = 22/7}
circumference@{"shape": rectangle, "label": keliling = 2 * pi * jariJari}
pi314@{"shape": rectangle, "label": pi = 3.14}
circumference@{"shape": rectangle, "label": keliling = 2 * pi * jariJari}
area@{"shape": rectangle, "label": luas = pi * jariJari * jariJari}
circumferenceOutput@{"shape": lean-l, "label": "Output: `Keliling dari lingkaran dengan jari-jari = ${jariJari} adalah ${keliling}`"}
areaOutput@{"shape": lean-l, "label": "Output: `Luas dari lingkaran dengan jari-jari = ${jariJari} adalah ${luas}`"}
stop@{"shape": dbl-circ, "label": "Selesai"}

start-->jarijari-->declarePi-->isjariJariMultipleSeven--True-->pi227-->circumference-->area-->circumferenceOutput-->areaOutput-->stop

isjariJariMultipleSeven--False-->pi314-->circumference
```