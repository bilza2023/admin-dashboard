const EXPECTED_FIELDS = {
    line: ['x1', 'y1', 'x2', 'y2', 'lineWidth'],
    lines: ['x', 'y', 'drawBorder', 'fill', 'color', 'fillBg', 'bgColor', 'width', 'height', 'lines'],
    rectangle: ['x', 'y', 'width', 'height', 'filled', 'lineWidth'],
    text: ['text', 'x', 'y', 'fontSize', 'font'],
    ellipse: ['x', 'y', 'radiusX', 'radiusY', 'rotation', 'startAngle', 'endAngle', 'lineWidth', 'fill'],
    'pie chart': ['x', 'y', 'radius', 'data'],
    circle: ['x', 'y', 'radius', 'startAngle', 'endAngle', 'fill', 'lineWidth'],
    bezier: ['x', 'y', 'x1', 'y1', 'x2', 'y2', 'lineWidth', 'showHandle'],
    'angle symbol': ['x', 'y', 'radius', 'ticks', 'startAngle', 'endAngle', 'lineWidth', 'showOrigin'],
    dot: ['x', 'y', 'label', 'dot_width', 'text_color', 'text_size', 'fill'],
    icon: ['text', 'x', 'y', 'fontSize', 'iconSize', 'fontFamily', 'icon', 'showBg', 'iconOnTop', 'iconErrorX', 'iconErrorY', 'bgColor'],
    grid: ['cellWidth', 'cellHeight', 'lineWidth', 'lineColor'],
    polygon: ['points', 'filled', 'lineWidth'],
    triangle: ['x1', 'y1', 'x2', 'y2', 'x3', 'y3', 'lineWidth', 'filled'],
    ray: ['x0', 'y0', 'x1', 'y1', 'lineWidth', 'arrowWidth', 'arrowHeight', 'startArrow', 'endArrow'],
    'repeat dot': ['numberOfDots', 'initialX', 'initialY', 'xFactor', 'yFactor', 'width'],
    'repeat text': ['textArray', 'initialX', 'initialY', 'xFactor', 'yFactor', 'font'],
    paragraph: ['text', 'x', 'y', 'font', 'fontSize', 'lineHeightOffset', 'xOffset'],
    'system image': ['src', 'x', 'y', 'width', 'height'],
    image: ['src', 'image', 'x', 'y', 'ext', 'width', 'height'],
    image2: ['src', 'image', 'sx', 'sy', 'sw', 'sh', 'dx', 'dy', 'width', 'height', 'ext'],
    sprite: ['spriteId', 'sheet', 'sheetItem', 'dx', 'dy', 'wFactor', 'hFactor']
};
class Diagnoser {
    constructor(data) {
        this.data = Array.isArray(data) ? data : [data];
    }

    length() {
        return this.data.length;
    }

    countSlideType(slideType) {
        let count = 0;
        for (const question of this.data) {
            for (const slide of question.slides) {
                if (slide.type === slideType) {
                    count += 1;
                }
            }
        }
        return count;
    }

    countTotalSlides() {
        let count = 0;
        for (const question of this.data) {
            count += question.slides.length;
        }
        return count;
    }

    getSlideTypeDistribution() {
        const distribution = {};
        for (const question of this.data) {
            for (const slide of question.slides) {
                distribution[slide.type] = (distribution[slide.type] || 0) + 1;
            }
        }
        return distribution;
    }

    getItemsByType(type = "code") {
        const items = [];
        for (const question of this.data) {
            for (const slide of question.slides) {
                for (const item of slide.items) {
                    if (item.extra && item.extra.type === type) {
                        items.push({
                            questionId: question._id,
                            slideId: slide._id,
                            itemId: item._id,
                            content: item.extra.code,
                            step: item.extra.step
                        });
                    }
                }
            }
        }
        return items;
    }

    getQuestionsByStatus(status = "empty") {
        return this.data.filter(q => q.status === status);
    }

    getQuestionsByType(type = "paid") {
        return this.data.filter(q => q.questionType === type);
    }

    getQuestionSteps(questionId) {
        const question = this.data.find(q => q._id === questionId);
        if (!question) return [];

        const steps = [];
        for (const slide of question.slides) {
            if (slide.items) {
                for (const item of slide.items) {
                    if (item.extra) {
                        steps.push({
                            step: item.extra.step,
                            code: item.extra.code,
                            type: item.extra.type,
                            solutions: item.extra.sp || [],
                            flags: {
                                fsVisibility: item.extra.fsVisibility,
                                spVisibility: item.extra.spVisibility
                            }
                        });
                    }
                }
            }
        }
        return steps.sort((a, b) => a.step - b.step);
    }

    // getQuestionStats() {
    //     const stats = {
    //         totalQuestions: this.length(),
    //         totalSlides: 0,
    //         avgSlidesPerQuestion: 0,
    //         avgItemsPerSlide: 0,
    //         slideTypes: {},
    //         questionTypes: {},
    //         statusDistribution: {}
    //     };

    //     let totalItems = 0;

    //     for (const question of this.data) {
    //         stats.totalSlides += question.slides.length;
    //         stats.questionTypes[question.questionType] =
    //             (stats.questionTypes[question.questionType] || 0) + 1;
    //         stats.statusDistribution[question.status] =
    //             (stats.statusDistribution[question.status] || 0) + 1;

    //         for (const slide of question.slides) {
    //             stats.slideTypes[slide.type] =
    //                 (stats.slideTypes[slide.type] || 0) + 1;
    //             totalItems += slide.items.length;
    //         }
    //     }

    //     stats.avgSlidesPerQuestion = stats.totalSlides / stats.totalQuestions;
    //     stats.avgItemsPerSlide = totalSlides > 0 ? totalItems / stats.totalSlides : 0;

    //     return stats;
    // }

    findContentInQuestions(searchTerm) {
        const results = [];
        for (const question of this.data) {
            for (const slide of question.slides) {
                for (const item of slide.items) {
                    if (item.extra && item.extra.code &&
                        item.extra.code.toLowerCase().includes(searchTerm.toLowerCase())) {
                        results.push({
                            questionId: question._id,
                            chapter: question.chapter,
                            exercise: question.exercise,
                            matchedContent: item.extra.code,
                            step: item.extra.step
                        });
                    }
                }
            }
        }
        return results;
    }

    countUniqueTcode() {
        const tcodes = this.data.map(q => q.tcode);
        return [...new Set(tcodes)].length; // Return count of unique tcodes
    }

    getUniqueTcode() {
        const tcodes = [];
        this.data.forEach(q => {
            if (!tcodes.includes(q.tcode)) {
                tcodes.push(q.tcode);
            }
        });
        return tcodes; // Return the unique tcodes directly
    }

    countUniqueSlideType() {
        const slideTypes = [];
        this.data.forEach(q => {
            q.slides.forEach(slide => {
                if (!slideTypes.includes(slide.type)) {
                    slideTypes.push(slide.type);
                }
            });
        });
        return slideTypes.length; // Return count of unique slide types
    }

    getUniqueSlideType() {
        const slideTypes = [];
        this.data.forEach(q => {
            q.slides.forEach(slide => {
                if (!slideTypes.includes(slide.type)) {
                    slideTypes.push(slide.type);
                }
            });
        });
        return slideTypes; // Return the unique slide types directly
    }

    countSlidesWithSlideExtra() {
        let count = 0;
        this.data.forEach(q => {
            q.slides.forEach(slide => {
                if (slide.slideExtra && slide.slideExtra.length > 0) {
                    count++;
                }
            });
        });
        return count;
    }

    getUniqueCanvasItems() {
        const commands = [];
        this.data.forEach(q => {
            q.slides.forEach(slide => {
                if (slide.type === "canvas") {
                    slide.items.forEach(item => {
                        if (item.extra && item.extra.command) {
                            commands.push(item.extra.command);
                        }
                    });
                }
            });
        });
        return [...new Set(commands)]; // Return unique commands
    }

    slidesWithSlideExtra() {
        if (!Array.isArray(this.data)) {
            console.error("Data is not an array.");
            return []; // Return an empty array if data is not valid
        }

        const slidesWithExtra = [];
        this.data.forEach(question => {
            if (Array.isArray(question.slides)) {
                question.slides.forEach(slide => {
                    if (slide.slideExtra && slide.slideExtra.length > 0) {
                        slidesWithExtra.push(slide);
                    }
                });
            }
        });
        return slidesWithExtra; // Return the array of slides with extra data
    }

    countSlidesWithExtra() {
        return this.slidesWithSlideExtra().length; // Return the count of slides with extra data
    }
    getUniqueSlideTypes() {
        const slideTypes = new Set();
        this.data.forEach(item => {
            item.slides.forEach(slide => {
                slideTypes.add(slide.type);
            });
        });
        return Array.from(slideTypes);
    }
    
    // 2. Get unique tcode
    getUniqueTcode() {
        const tcodes = new Set();
        this.data.forEach(item => {
            tcodes.add(item.tcode);
        });
        return Array.from(tcodes);
    }
    
    // 3. Get unique item.extra.command for canvas slides
    getUniqueItemType( ) {
        const commands = new Set();
        this.data.forEach(item => {
            item.slides.forEach(slide => {
                if (slide.type === "canvas") {
                    slide.items.forEach(item => {
                        if (item.extra && item.extra.command) {
                            commands.add(item.extra.command);
                        }
                    });
                }
            });
        });
        return Array.from(commands);
    }
// Add the canvasItemsFieldscheck method to the Diagnoser class
canvasItemsFieldscheck() {
    const missingFieldsResults = [];

    // Iterate through each presentation in data
    this.data.forEach(presentation => {
        // Iterate through each slide in the presentation
        presentation.slides.forEach(slide => {
            // Check only canvas type slides
            if (slide.type === "canvas") {
                // Check each item in the slide
                slide.items.forEach(item => {
                    if (item.extra && item.extra.command) {
                        const itemCommand = item.extra.command.toLowerCase();
                        
                        // Get expected fields for this item type
                        const expectedFields = EXPECTED_FIELDS[itemCommand];
                        
                        if (expectedFields) {
                            // Check for missing fields
                            const missingFields = [];
                            
                            expectedFields.forEach(field => {
                                // Check if the field exists in item.extra
                                // For animated properties, check if they exist as objects with initialValue
                                const hasField = item.extra[field] !== undefined || 
                                               (item.extra[field] && item.extra[field].initialValue !== undefined);
                                
                                if (!hasField) {
                                    missingFields.push(field);
                                }
                            });

                            // If there are missing fields, add to results
                            if (missingFields.length > 0) {
                                missingFieldsResults.push({
                                    presentationId: presentation._id.$oid,
                                    slideId:  slide._id.$oid,
                                    itemName: itemCommand,
                                    missingFields: missingFields
                                });
                            }
                        }
                    }
                });
            }
        });
    });

    return missingFieldsResults;
}    
///////////////////////////////////////////////////////////    
}

module.exports = Diagnoser;
