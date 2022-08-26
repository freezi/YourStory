const moment = require('moment');

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format);
    },
    truncate: function (str, len) {
        if (str.length > len && str.length > 0) {
            let new_str = str + ' ';
            new_str = str.substr(0, len);
            new_str = str.substr(0, new_str.lastIndexOf(' '));
            new_str = new_str.length > 0 ? new_str : str.substr(0, len);
            return new_str + '...';
        }
        return str;
    },
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '');
    },
    editIcon: function (storyUser, loggedUser, storyId, floating = true) {
        if (storyUser._id.toString() == loggedUser._id.toString()) {
            if (floating) {
                return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
            } else {
                return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
            }
        } else {
            return '';
        }
    },
    select: function (str) {
        let newStr = str[0].toUpperCase() + str.slice(1);

        if (newStr === 'Public') {
            return `<option value="public" selected>Public</option>
					<option value="private">Private</option>`;
        } else {
            return `<option value="public">Public</option>
					<option value="private" selected>Private</option>`;
        }
    },
};
