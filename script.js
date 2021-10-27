let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $("input").val();
    console.log(filter);

    if (filter === "Harlem") {
        $("img").css("filter", "contrast(115%) brightness(120%)");
        console.log("Filter is Harlem");
    } else if (filter === "Bushwick") {
        $("img").css("filter", "contrast(50%) brightness(180%)");
        console.log("Filter is Bushwick");
    } else if (filter === "SOMA") {
        $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
        console.log("Filter is SOMA");
    } else if (filter === "Sunset") {
        $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
        console.log("Filter is Sunset");
    } else if (filter === "Caden's Filter") {
        $("img").css("filter", "contrast(150%) hue-rotate(-10deg) saturate(250%)");
        console.log("Filter is Sunset");
    }

});

$(".reset").click(function() {
    $("img").css("filter", "");
});