
async function healthFn(diagnoser,availableSlideTypes,availableCanvasItems){
const data = [];

const uniqueSlideTypes = diagnoser.getUniqueSlideTypes();
const missingSlideTypes = uniqueSlideTypes.filter(item => !availableSlideTypes.includes(item));

const uniqueCanvasItems = diagnoser.getUniqueCanvasItems();
const missingCanvasItems = uniqueCanvasItems.filter(item => !availableCanvasItems.includes(item));

data.push({ name: "uniqueCanvasItems", value: uniqueCanvasItems.join(" ")  });

data.push({ name: "availableCanvasItems", value: availableCanvasItems.join(" ")  });
data.push({ name: "missingCanvasItems", value: missingCanvasItems.join(" ")  });



data.push({ name: "getUniqueSlideTypes", value: uniqueSlideTypes.join(" ")  });
data.push({ name: "missingSlideTypes", value: missingSlideTypes  });
if (missingSlideTypes.length > 0){
data.push({ name: "missingSlideTypes Error", value: "Error==="  });

}



data.push({ name: "getUniqueTcode", value: diagnoser.getUniqueTcode().join(" ")  });
data.push({ name: "getUniqueItemType", value: diagnoser.getUniqueItemType().join(" ")  });


return data;

 }



 module.exports = healthFn;