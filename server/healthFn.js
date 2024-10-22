
async function healthFn(diagnoser,availableSlideTypes){
const data = [];

const uniqueSlideTypes = diagnoser.getUniqueSlideTypes();
const missingSlideTypes = uniqueSlideTypes.filter(item => !availableSlideTypes.includes(item));



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