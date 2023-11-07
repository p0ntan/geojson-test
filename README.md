# Test med punkter och polygoner

Det här är bara ett litet test att se hur man kan kolla om en punkt är inom en polygon och returenrar true eller false. Testar två olika npm paket där man endast använder koordinaterna.

Testa
```
npm install
node index.js
```

Ger utskrift
```
# geo-point-in-polygon
Innanför true
Knappt utanför false
Utanför false

# point-in-polygon
Innanför true
Knappt utanför false
Utanför false
```

## geo-point-in-polygon
Litet paket med få dependencies (2). [Länk](https://www.npmjs.com/package/geo-point-in-polygon)

## point-in-polygon
Paket med många dependencies (214). [Länk](https://www.npmjs.com/package/point-in-polygon)

## Bild på polygonen och punkterna
![alt text](./img/exempel.png)
