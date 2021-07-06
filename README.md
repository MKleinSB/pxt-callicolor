
> Diese Seite bei [https://mkleinsb.github.io/pxt-callicolor/](https://mkleinsb.github.io/pxt-callicolor/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/mkleinsb/pxt-callicolor** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/mkleinsb/pxt-callicolor/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/mkleinsb/pxt-callicolor** ein und klicke auf Importieren

## CalliColor
Mehr zu CalliColor auf hackster! https://www.hackster.io/MKlein/callicolor-01cc4b

![](https://github.com/mkleinsb/pxt-callicolor/raw/master/Unbenannt.png)

## Blöcke 
Da der Callicolor nichts anderes als 12 Neopixel am Pin P0 ist kann man auch die Befehle der Neopixel-Erweiterung verwenden welche automatisch mit geladen wird.

### zeige Farbe an Pixel

Lässt eine LED (Pixel) des Callicolor in einer bestimmten Farbe leuchten. Optional kann eine von 5 Helligkeitsstufen angegeben werden.
Voreingestellt sind immer 100%. Um einen **Pixel auszuschalten** wählt man die Farbe Schwarz.

```sig
CalliColor.ShowColorOnPixelbright(CalliColor.CalliColorNumberPicker(0x0087ff), 1, cbrightness.hp2)
```

### zeige Farbverlauf

Erstellt einen Farbverlauf von der ersten zur zweiten angegebenen Farbe. Start- und Endpixel können angegeben werden. Liegen die Farben im HSL-Varlauf zu 
weit auseinander erfolgt der Farbverlauf über die Farbe weiß

```sig
CalliColor.setGradient(CalliColor.CalliColorNumberPicker(0xff0000), CalliColor.CalliColorNumberPicker(0x00ff00), 0, 11)
```

### zeige Regenbogenfarbe an Pixel
Zeigt den angegebenen Pixel in der dem Pixel zugehörigen Regenbogenfarbe. Optional mit Helligkeitseinstellung.

```sig
CalliColor.ShowRainbowColorOnPixelbright(0, cbrightness.hp1)
```

### zeige Farben an Ring

Zeigt für jeden der 12 Pixel des Rings eine einstellbare Farbe an. Voreingestellt ist ein Farbverlauf.

```sig
CalliColor.ShowColorPixel(CalliColor.CalliColorNumberPicker(0xff0000), CalliColor.CalliColorNumberPicker(0xFF7F00), CalliColor.CalliColorNumberPicker(0xFFFE00), CalliColor.CalliColorNumberPicker(0x7FFF00), CalliColor.CalliColorNumberPicker(0x00FF00), CalliColor.CalliColorNumberPicker(0x00FF7F), CalliColor.CalliColorNumberPicker(0x00FFFE), CalliColor.CalliColorNumberPicker(0x0040FF), CalliColor.CalliColorNumberPicker(0x0000FF), CalliColor.CalliColorNumberPicker(0x6000FF), CalliColor.CalliColorNumberPicker(0xFE00FF), CalliColor.CalliColorNumberPicker(0xFF0040))
```

### zeige Ringfarbe

Stellt eine einheitliche Farbe für alle LEDs ein. Auch hier schaltet die Farbe Schwarz den ganzenn Ring aus.

```sig
CalliColor.showCalliColor(CalliColor.CalliColorNumberPicker(0x4df243))
```

### Pixel rotieren

Verschiebt die Pixel wahlweise vorwärts oder rückwärts. Damit das nicht zu schnell geht sollte man danach ein 
```sig
basic.pause(100) 
```
aufrufen

```sig
CalliColor.Callirotate(Richtung.forward)
```

## Farben
### Zufallsfarbe
Erzeugt eine Zufallsfarbe für die obigen zeige ... Blöcke die z.B. für ein Farbmemory verwendet werden kann. 

```sig
CalliColor.ShowRandomColor()
```


### RGB

Erzeugt einen RGB-Farbton.

```sig
CalliColor.rgb(0, 0, 0)
```


### HSL

Erzeugt einen HSL-Farbton.

```sig
CalliColor.callihsl(0, 99, 50)
```

## ...mehr
### setze Helligkeit auf
Stellt die Grundhelligkeit der Neopixel ein (0-255). Voreingestellt ist 128. Darauf bezieht sich auch die prozentuale Helligkeit bei den Helligkeitsstufen.

```sig
CalliColor.CalliBrightness(128)
```


### zeige Kreisdiagramm
Zeigt ein Kreis basierend auf `wert` und `max`.
Wenn `max` 0 ist, wird der Ausschlag automatisch angepasst.

```sig
CalliColor.showCalliBarGraph(0, 1023)
```


#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
