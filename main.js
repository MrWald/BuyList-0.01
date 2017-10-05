$(document).ready(function () {
    var ITEM = $(".bl-item");
    var ITEM_TEMPLATE = ITEM.html();
    var LIST = $(".bl-list");

    var LIST_LEFT = $(".bl-left");
    var ITEM_LEFT = $(".bl-itemBought");
    var ITEM_LEFT_TEMPLATE = ITEM_LEFT.html();

    var LIST_BOUGHT = $(".bl-finished");


    $(ITEM).each(function (i, item) {

        item = $(item);
        var tile = $($(ITEM_LEFT).get(i));
        var quantity;

        item.find(".bl-delete").click(function () {
            item.remove();
            tile.remove();
        });

        item.find(".bl-plus").click(function () {
            quantity = item.find(".bl-label").text();
            quantity++;
            item.find(".bl-label").text(quantity);
            tile.find(".bl-number").text(quantity);
            if (quantity > 1) item.find(".bl-minus").prop("disabled", false);
            else item.find(".bl-minus").prop("disabled", true);
        });

        item.find(".bl-minus").click(function () {
            quantity = item.find(".bl-label").text();
            if (quantity > 1) {
                quantity--;
                item.find(".bl-label").text(quantity);
                tile.find(".bl-number").text(quantity);
                if (quantity > 1) item.find(".bl-minus").prop("disabled", false);
                else item.find(".bl-minus").prop("disabled", true);
            }
            else item.find(".bl-minus").prop("disabled", true);
        });

        item.find(".bl-buy").click(function () {
            tile.remove();
            LIST_BOUGHT.append(tile);
            tile.find(".bl-name").css("text-decoration", "line-through");
            tile.find(".bl-number").css("text-decoration", "line-through");
            item.find("button").hide();
            item.find(".bl-unbuy").show();
            item.find(".bl-product").css("text-decoration", "line-through");
            item.find(".bl-label").css("margin-left", "40.5%");
            item.find(".bl-product").css("margin-top", "0.8%");
            item.find(".bl-count").css("margin-top", "0.8%");
            item.find(".bl-product").prop("contenteditable", false);
        });

        item.find(".bl-unbuy").click(function () {
            tile.remove();
            LIST_LEFT.append(tile);
            tile.find(".bl-name").css("text-decoration", "none");
            tile.find(".bl-number").css("text-decoration", "none");
            item.find("button").show();
            item.find(".bl-unbuy").hide();
            item.find(".bl-product").css("text-decoration", "none");
            item.find(".bl-label").css("margin-left", "auto");
            item.find(".bl-product").css("margin-top", "auto");
            item.find(".bl-count").css("margin-top", "auto");
            item.find(".bl-product").prop("contenteditable", true);
        });

        item.find(".bl-product").focusout(function () {
            tile.find(".bl-name").text($(this).text());
        });

    });

    function addItem(title) {
        var row = $(ITEM_TEMPLATE);
        var tile = $(ITEM_LEFT_TEMPLATE);
        var quantity;

        row.find(".bl-product").text(title);

        row.find(".bl-delete").click(function () {
            row.remove();
            tile.remove();
        });

        row.find(".bl-plus").click(function () {
            quantity = row.find(".bl-label").text();
            quantity++;
            row.find(".bl-label").text(quantity);
            tile.find(".bl-number").text(quantity);
            if (quantity > 1) row.find(".bl-minus").prop("disabled", false);
            else row.find(".bl-minus").prop("disabled", true);
        });

        row.find(".bl-minus").click(function () {
            quantity = row.find(".bl-label").text();
            if (quantity > 1) {
                quantity--;
                row.find(".bl-label").text(quantity);
                tile.find(".bl-number").text(quantity);
                if (quantity > 1) row.find(".bl-minus").prop("disabled", false);
                else row.find(".bl-minus").prop("disabled", true);
            }
            else row.find(".bl-minus").prop("disabled", true);
        });

        row.find(".bl-buy").click(function () {
            tile.remove();
            LIST_BOUGHT.append(tile);
            tile.find(".bl-name").css("text-decoration", "line-through");
            tile.find(".bl-number").css("text-decoration", "line-through");
            row.find("button").hide();
            row.find(".bl-unbuy").show();
            row.find(".bl-product").css("text-decoration", "line-through");
            row.find(".bl-label").css("margin-left", "40.5%");
            row.find(".bl-product").css("margin-top", "0.8%");
            row.find(".bl-count").css("margin-top", "0.8%");
            row.find(".bl-product").prop("contenteditable", false);
        });

        row.find(".bl-unbuy").click(function () {
            tile.remove();
            LIST_LEFT.append(tile);
            tile.find(".bl-name").css("text-decoration", "none");
            tile.find(".bl-number").css("text-decoration", "none");
            row.find("button").show();
            row.find(".bl-unbuy").hide();
            row.find(".bl-product").css("text-decoration", "none");
            row.find(".bl-label").css("margin-left", "auto");
            row.find(".bl-product").css("margin-top", "auto");
            row.find(".bl-count").css("margin-top", "auto");
            row.find(".bl-product").prop("contenteditable", true);
        });

        LIST.append(row);

        tile.find(".bl-name").text(title);

        tile.find(".bl-number").text(1);

        LIST_LEFT.append(tile);

        row.find(".bl-product").focusout(function () {
            tile.find(".bl-name").text($(this).text());
        });
    }


    var name = $(".bl-new");
    var create = $(".bl-create");

    create.click(function () {
        var title = name.val().trim();
        if (title !== "") addItem(name.val());
        name.val("");
        name.focus();
    });

    name.keydown(function (e) {
        if (e.keyCode === 13) {
            create.click();
            e.preventDefault();
        }
    });
});


