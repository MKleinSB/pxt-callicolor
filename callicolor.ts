let Callistrip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)

const enum Richtung {
    //% block="forward"
    //% block.loc.de="Vorwärts"
    forward = 1,
    //% block="backward"
    //% block.loc.de="Rückwärts"
    backward = -1
}

const enum cbrightness {
    //% block="100"
    hp1 = 1,
    //% block="80"
    hp2 = 2,
    //% block="60"
    hp6 = 6,
    //% block="40"
    hp25 = 25,
    //% block="20"
    hp85 = 85
}
// gerade https://github.com/BrightWearables/pxt-microbit-brightboard
// gefunden. Sieht so ähnlich aus wie mein CalliColorboard.
// Von dort konnte ich den Code für den Colornumberpicker entleihen. THX!

//% color=#5882FA icon="\uf005" block="CalliColor"
namespace CalliColor {
   
let ccolors = [0xff0000, 0xFF7F00,0xFFFE00,0x7FFF00,0x00FF00,0x00FF7F,
               0x00FFFE, 0x007FFF,0x0000FF,0x7F00FF,0xFE00FF,0xFF007F]

    //% block="show color %color at pixel %pixel || brightness %brightnes |\\%"
    //% block.loc.de="zeige Farbe %color an Pixel %pixel || Helligkeit %brightnes |\\%"
    //% color.shadow="CalliColorNumberPicker"  color.defl=0xff0000
    //% pixel.min=0 pixel.max=11 brightnes.defl=cbrightness.hp1
    //% expandableArgumentMode="toggle"
    export function ShowColorOnPixelbright(color: number, pixel:number, brightnes:cbrightness=cbrightness.hp1) {
        let r,g,b:number
        r = (color & 0xff0000) >> 16
        g = (color & 0xff00) >> 8
        b = (color & 0xff) // rgb Einzelfarbwerte extrahieren
        r = Math.idiv(r, brightnes)
        g = Math.idiv(g, brightnes)
        b = Math.idiv(b, brightnes) // Helligkeit vermindern
        color = (r << 16) + (g << 8) + b // Farbe zusammenbauen
        control.waitMicros(150) //fix for ws2812E LEDs
        Callistrip.setPixelColor(pixel, color)
        Callistrip.show()
    }

/**
         * Sets a gradient between two colors
         * @param startColor the start color
         * @param endColor the end color
         */
        //% blockId=lightsetgradient block="zeige Farbverlauf von %startColor=CalliColorNumberPicker nach %endColor=CalliColorNumberPicker"
        //%  startColor.defl=0xff0000
        //%   endColor.defl=0x0000ff
        export function setGradient(startColor: number, endColor: number) {
            const sr = (startColor & 0xff0000) >> 16;
            const sg = (startColor & 0xff00) >> 8;
            const sb = (startColor & 0xff);
            const er = (endColor & 0xff0000) >> 16;
            const eg = (endColor & 0xff00) >> 8;
            const eb = (endColor & 0xff);;

            const end = 12; //12;
            const start = 0; //0
            const n1 = 11//end-start-1; 
            for (let i = start; i < end; ++i) {
                let x = (i-start) / n1; 
                const ox = 1 - x;
                const r = (sr * ox + er * x) | 0;
                const g = (sg * ox + eg * x) | 0;
                const b = (sb * ox + eb * x) | 0;

                Callistrip.setPixelColor(i, ((r << 16) + (g << 8) + b)) 
                
                
            }
            Callistrip.show();
        }


    //% block="show rainbowcolor at pixel %pixel || brightness %brightnes |\\%"
    //% block.loc.de="zeige Regenbogenfarbe an Pixel %pixel || Helligkeit %brightnes |\\%"
    //% pixel.min=0 pixel.max=11 brightnes.defl=cbrightness.hp1
    //% expandableArgumentMode="toggle"
    export function ShowRainbowColorOnPixelbright(pixel:number, brightnes:cbrightness=cbrightness.hp1) {
        let r,g,b,color:number
        r = (ccolors[pixel] & 0xff0000) >> 16
        g = (ccolors[pixel] & 0xff00) >> 8
        b = (ccolors[pixel] & 0xff) // rgb Einzelfarbwerte extrahieren
        r = Math.idiv(r, brightnes)
        g = Math.idiv(g, brightnes)
        b = Math.idiv(b, brightnes) // Helligkeit vermindern
        color = (r << 16) + (g << 8) + b // Farbe zusammenbauen
        control.waitMicros(150) //fix for ws2812E LEDs
        Callistrip.setPixelColor(pixel, color)    
        Callistrip.show()
    }

    //% block="show colors on ring $color1 $color2 $color3 $color4 $color5 $color6 $color7 $color8 $color9 $color10 $color11 $color12"
    //% block.loc.de="zeige Farben an Ring $color1 $color2 $color3 $color4 $color5 $color6 $color7 $color8 $color9 $color10 $color11 $color12"       
    //% color1.shadow="CalliColorNumberPicker"  color1.defl=0xff0000
    //% color2.shadow="CalliColorNumberPicker"  color2.defl=0xFF7F00
    //% color3.shadow="CalliColorNumberPicker"  color3.defl=0xFFFE00
    //% color4.shadow="CalliColorNumberPicker"  color4.defl=0x7FFF00
    //% color5.shadow="CalliColorNumberPicker"  color5.defl=0x00FF00
    //% color6.shadow="CalliColorNumberPicker"  color6.defl=0x00FF7F
    //% color7.shadow="CalliColorNumberPicker"  color7.defl=0x00FFFE
    //% color8.shadow="CalliColorNumberPicker"  color8.defl=0x007FFF
    //% color9.shadow="CalliColorNumberPicker"  color9.defl=0x0000FF
    //% color10.shadow="CalliColorNumberPicker"  color10.defl=0x7F00FF
    //% color11.shadow="CalliColorNumberPicker"  color11.defl=0xFE00FF
    //% color12.shadow="CalliColorNumberPicker"  color12.defl=0xFF007F
    //% inlineInputMode=inline

    export function ShowColorPixel(color1: number, color2: number, color3: number, color4: number, color5: number, color6: number, color7: number, color8: number, color9: number, color10: number, color11: number, color12: number) {
        Callistrip.setPixelColor(0, color1)
        Callistrip.setPixelColor(1, color2)
        Callistrip.setPixelColor(2, color3)
        Callistrip.setPixelColor(3, color4)
        Callistrip.setPixelColor(4, color5)
        Callistrip.setPixelColor(5, color6)
        Callistrip.setPixelColor(6, color7)
        Callistrip.setPixelColor(7, color8)
        Callistrip.setPixelColor(8, color9)
        Callistrip.setPixelColor(9, color10)
        Callistrip.setPixelColor(10, color11)
        Callistrip.setPixelColor(11, color12)
        Callistrip.show()
    }
    
    /**
    * Färbt alle LEDs in einer Farbe. 
    * Schwarz schaltet alle LEDs aus
    */
    //% block="show ringcolor %color"
    //% block.loc.de="zeige Ringfarbe %color"
    //% color.shadow=CalliColorNumberPicker
    //% color.defl='#4df243'
    export function showCalliColor(color: number) {
        Callistrip.showColor(color)
    }
    
    //% block="random color"
    //% block.loc.de="Zufallsfarbe"
    //% group=Farben
    export function ShowRandomColor(): number {
        return ccolors[randint(0, 11)]
        
    }
      /**
    * Konvertiert Rot-, Grün- und Blauanteil in eine RGB Farbe
    */
    //% blockId="Callineopixel_rgb" block="RGB: Rot %red|Grün %green|Blau %blue"
    //% group=Farben
    export function rgb(red: number, green: number, blue: number): number {
        return ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF);
    }

   /**
     * Converts a hue saturation luminosity value into a RGB color
     * @param h Farbton from 0 to 360
     * @param s Sättigung from 0 to 99
     * @param l Helligkeit from 0 to 99
     */
    //% blockId=calliHSL block="HSL: Hue %h|Saturation %s|brightness %l"
    //% block.loc.de="HSL: Farbton %h|Sättigung %s|Helligkeit %l"
    //% s.defl=99 l.defl=50
    //% group=Farben
    export function callihsl(h: number, s: number, l: number): number {
        return neopixel.hsl(h,s,l);
    } 

    /**
    * Konvertiert den Farbnamen in eine Zahl
    */
    //% blockId=CalliColor block="%c"
    //% group=Farben
    export function CalliColor(c: NeoPixelColors): number {
        return c;
    }

    /**
    * Legt die Helligkeit für den gesamten Neopixelring fest
    */
    //% blockId=CalliBrightness block="set brightness to %c"
    //% block.loc.de="setze Helligkeit auf %c"
    //% c.defl=128
    //% c.min=0 c.max=255
    //% group="... mehr"
    export function CalliBrightness(c: number){
    Callistrip.setBrightness(c)
    Callistrip.show()
    } 

    /**
      * Lässt die LEDs eine Stelle nach rechts oder links rotieren
      */
    //% blockId=Callirotate 
    //% block="rotate pixel %r"
    //% block.loc.de="Pixel rotieren %r"
    export function Callirotate(r: Richtung) {
        Callistrip.rotate(r)
        Callistrip.show()
    }

    /**
     * Zeigt ein Balkendiagramm basierend auf `wert` und `max`.
     * Wenn `max` 0 ist, wird der Balken automatisch angepasst.
     * @param wert aktueller zu zeichnender Wert
     * @param max Maximalwert, z.B.: 255
     */
    //% blockId=calli_show_bar_graph block="show bargraph from %wert|to %max"
    //% block.loc.de="zeige Balkendiagramm von %wert|bis %max"
    //% max.defl=1023
    //% group="... mehr"
    export function showCalliBarGraph(wert: number, max: number) {
        Callistrip.showBarGraph(wert, max)
    }

    /**
	* Custom color picker
    */
    //% blockId=CalliColorNumberPicker block="%value"
    //% blockHidden=true
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% weight=150
    //% value.fieldOptions.colours='["#ffffff","#ff0000","#ffaa00","#ffdc00","#ffff00","#eaff00","#8eff00","#4df243","#42b87f","#00ffdc","#00dcff","#00a3ff","#0087ff","#acb3f3","#e0acfe","#a300ff","#ea00ff","#ff00e3","#fdd3f8","#f1d07e","#a8b5f5","#C3C6D8", "#f3f2da","#727474", "#000000"]'
    //% value.fieldOptions.columns=5 value.fieldOptions.className='rgbColorPicker'  
    export function CalliColorNumberPicker(value: number) {
        return value;
    }
}