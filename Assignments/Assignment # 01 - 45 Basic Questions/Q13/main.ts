// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

import { log } from "console"

let list: Array<string> = ["1. Car is my favourite moder of transportation.", "2. It provides a comfortable and personalized space.", "3. You control the temperature, the music, and the seat adjustments.", "4. Grocery shopping? No problem. Need to carry bulky items? Just pop them in the trunk. Cars make life easier.", "5. Cars create memories. Family road trips, late-night drives with friends, or romantic getaways—they all happen within those four wheels.", "6. And most importantly it gives the ability to explore new places, take spontaneous road trips, and discover hidden gems is incredibly liberating."]

let statements_series: string = "Series of Statements about my Favourite Mode of Transportation"
list.forEach((statements) => {
    console.log(statements);
    
})