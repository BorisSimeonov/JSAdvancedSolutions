function domSearch(selector, sensitive) {
    selector = $(selector);
    selector.addClass('items-control');
    sensitive = sensitive || false;
    (function () {
            function addControlsBuilder() {
                let addControls = ($('<div>'))
                    .addClass('add-controls');
                let addLabel = ($('<label>'))
                    .text('Enter text: ')
                    .append($('<input>'));
                let addButton = ($('<a>'))
                    .css('display', 'inline-block;')
                    .addClass('button')
                    .text('Add');
                addButton.on('click', addItem);
                addControls.append(addLabel);
                addControls.append(addButton);
                selector.append(addControls);
            }

            function searchControlsBuilder() {
                let searchControls = ($('<div>'))
                    .addClass('search-controls');
                let input = $('<input>');
                input.on('input', searchFilter);
                let searchLabel = ($('<label>'))
                    .text('Search:')
                    .append(input);
                searchControls.append(searchLabel);
                selector.append(searchControls);
            }

            function resultControlsBuilder() {
                let resultControls = ($('<div>'))
                    .addClass('result-controls');
                let ul = ($('<ul>'))
                    .addClass('items-list');
                resultControls.append(ul);
                selector.append(resultControls);
            }

            function addItem() {
                let text = $('.add-controls input').val();
                let deleteAnchor = $('<a>');
                deleteAnchor.addClass('button');
                deleteAnchor.text('X');
                deleteAnchor.on('click', function () {
                    $(this).parent().remove();
                });
                let li = $('<li>');
                li.addClass('list-item');
                li.append(deleteAnchor);
                li.append(($('<strong>'))
                    .text(text));

                $('.result-controls ul')
                    .append(li);
            }

            function searchFilter() {
                let listItems = $('.list-item strong');
                let liText, searchText = $('.search-controls input').val();
                let regexModifier = (sensitive) ? "" : "i";
                let regex = new RegExp(searchText, regexModifier);
                let match;
                listItems.each((index, li) => {
                    liText = $(li).text();
                    match = liText.match(regex);
                    if (match) {
                        $(li).parent().show();
                    } else {
                        $(li).parent().hide();
                    }
                });
            }

            addControlsBuilder();
            searchControlsBuilder();
            resultControlsBuilder();

        })();

}
