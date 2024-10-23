Here is diagnoser object that i use to manage my data object.

The diagnoser.js as well as a sample of my data is added.
The readme.md has a list of all items and all the fields that they must have. 
please read  the documents and write me just 1 method for diagnoser object called "canvasItemsFieldscheck" 

This method will :
    1: use the this.data and look into each presentation.
    2: inside each presentation it will look at each slide (slide.type).
    3: if slide.type == "canvas" then it will look at all the items it has
    it will match fields(fields/properties of each item)  in the data with a list of fields for each item (given in readme.md)
    4: if it is found that there is some field that is present in the readme.md list but not present in the code that item along with the missing field be registerd.
    5: the final out put from this method should be something like

        const missingCanvasItemsFields = {
            presentationId : '345t643322',
            slideId : '46765ffds',
            itemName : ..item name as per readme.md,
            missingFields : [an arrya on names of missing fields as per README.MD]
        }

also note that the item name in readme.md should be same as

slide.extra.command