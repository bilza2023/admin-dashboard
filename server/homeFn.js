
async function homeFn(diagnoser){
const data = [];
  // Basic Overview
  data.push({ name: "Total Questions in DB", value: diagnoser.length() });
  data.push({ name: "Total Slides", value: diagnoser.countTotalSlides() });

  // Unique tcodes
  const uniqueTcodes = diagnoser.getUniqueTcode();
  data.push({ name: "Unique Tcodes", value: uniqueTcodes.length, uniqueValues: uniqueTcodes });

  // Slide type distribution and unique slide types
  const slideTypes = diagnoser.getSlideTypeDistribution();
  Object.entries(slideTypes).forEach(([type, count]) => {
    data.push({ name: `Number of ${type} Slides`, value: count });
  });
  
  const uniqueSlideTypes = diagnoser.getUniqueSlideType();
  data.push({ name: "Unique Slide Types", value: uniqueSlideTypes.length, uniqueValues: uniqueSlideTypes });

  // Count specific slide types
  data.push({ name: "Equation Slides", value: diagnoser.countSlideType('Eqs') });
  data.push({ name: "Heading List Slides", value: diagnoser.countSlideType('HdgList') });
  data.push({ name: "Code Slides", value: diagnoser.countSlideType('Code') });

  // Slides with extra data
  const slidesWithExtra = diagnoser.slidesWithSlideExtra();
  data.push({ name: "Slides with Extra Data", value: slidesWithExtra.length, uniqueValues: slidesWithExtra }); // Add the unique values here

  // Canvas unique commands
  const uniqueCanvasCommands = diagnoser.getCanvasSlidesUniqueCommands();
  data.push({ name: "Unique Canvas Commands", value: uniqueCanvasCommands.length, uniqueValues: uniqueCanvasCommands }); // Add the unique values here

  // Content Items Analysis
  const codeItems = diagnoser.getItemsByType('code');
  data.push({ name: "Total Code Snippets", value: codeItems.length });
  const imageItems = diagnoser.getItemsByType('image');
  data.push({ name: "Total Image Items", value: imageItems.length });
  const textItems = diagnoser.getItemsByType('text');
  data.push({ name: "Total Text Items", value: textItems.length });

  // Question Status Distribution
  data.push({ name: "Empty Questions", value: diagnoser.getQuestionsByStatus('empty').length });
  data.push({ name: "Completed Questions", value: diagnoser.getQuestionsByStatus('completed').length });
  data.push({ name: "In-Progress Questions", value: diagnoser.getQuestionsByStatus('in-progress').length });

  // Question Types
  data.push({ name: "Paid Questions", value: diagnoser.getQuestionsByType('paid').length });
  data.push({ name: "Free Questions", value: diagnoser.getQuestionsByType('free').length });


  data.push({ name: "getUniqueSlideTypes", value: diagnoser.getUniqueSlideTypes().join(" ")  });
  data.push({ name: "getUniqueTcode", value: diagnoser.getUniqueTcode().join(" ")  });
  data.push({ name: "getUniqueItemType", value: diagnoser.getUniqueItemType().join(" ")  });
 return data;
 }



 module.exports = homeFn;