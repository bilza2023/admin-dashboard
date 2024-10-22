const data = [/* your data here */];

// 1. Get unique slide types
function getUniqueSlideTypes(data) {
    const slideTypes = new Set();
    data.forEach(item => {
        item.slides.forEach(slide => {
            slideTypes.add(slide.type);
        });
    });
    return Array.from(slideTypes);
}

// 2. Get unique tcode
function getUniqueTcode(data) {
    const tcodes = new Set();
    data.forEach(item => {
        tcodes.add(item.tcode);
    });
    return Array.from(tcodes);
}

// 3. Get unique item.extra.command for canvas slides
function getUniqueItemType(data) {
    const commands = new Set();
    data.forEach(item => {
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

module.exports = {
    getUniqueSlideTypes,
    getUniqueTcode,
    getUniqueItemType
}