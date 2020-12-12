
// gerade https://github.com/BrightWearables/pxt-microbit-brightboard
// gefunden. Sieht so ähnlich aus wie mein CalliColorboard.
// Von dort konnte ich den Code für den Colornumberpicker entleihen. THX!

let Callistrip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)

//% color=#5882FA icon="\uf005"
namespace CalliColor {
   
    //% block="zeige Farbe $color an Pixel $pixel"
    //% color.shadow="CalliColorNumberPicker"  color.defl=0xff0000
    //% pixel.min=0 pixel.max=11
    export function ShowColorOnPixel(color: number, pixel:number) {
        Callistrip.setPixelColor(pixel, color)
        Callistrip.show()
    }
    //% block="zeige Farbe an Pixel $color1 $color2 $color3 $color4 $color5 $color6 $color7 $color8 $color9 $color10 $color11 $color12"
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
    //% block="zeige Ringfarbe $color"
    //% color.shadow=CalliColorNumberPicker
    //% color.defl='#4df243'
    export function showCalliColor(color: number) {
        Callistrip.showColor(color)
    }
    
    /**
    * Legt die Helligkeit für den gesamten Neopixelring fest
    */
    //% blockId=CalliBrightness block="setze Helligkeit auf %c"
    //% c.defl=128
    //% c.min=0 c.max=256
    //% group="... mehr"
    export function CalliBrightness(c: number){
    Callistrip.setBrightness(c)
    Callistrip.show()
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
    //% blockId=calliHSL block="HSL: Farbton %h|Sättigung %s|Helligkeit %l"
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
    * Lässt die LEDs in Regenbogenfarben leuchten
    */
    //% blockId=Callirainbow block="zeige Regenbogen"
    export function Regenbogen() {
        Callistrip.showRainbow(1, 300);
        Callistrip.show()
    }

    /**
      * Lässt die LEDs nach eine Stelle nach rechts rotieren
      */
    //% blockId=Callirotate block="Farben rotieren"
    //% group="... mehr"
    export function Callirotate() {
        Callistrip.rotate()
        Callistrip.show()
    }

    /**
     * Zeigt ein Balkendiagramm basierend auf `wert` und `max`.
     * Wenn `max` 0 ist, wird der Balken automatisch angepasst.
     * @param wert aktueller zu zeichnender Wert
     * @param max Maximalwert, z.B.: 255
     */
    //% blockId=calli_show_bar_graph block="zeige Balkendiagramm von %wert|bis %max"
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